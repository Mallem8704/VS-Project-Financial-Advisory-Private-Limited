import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { findUserByEmail, createUser, createEmailVerificationToken } from '@/lib/auth/auth-store';
import { hashPassword } from '@/lib/auth/crypto';
import { checkRateLimit } from '@/lib/auth/rate-limit';
import { signSession, SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from '@/lib/auth/session';
import { logAuditEvent, AUDIT_ACTIONS } from '@/lib/auth/audit';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Valid official email address is required'),
  companyName: z.string().min(2, 'Company or entity name is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  phone: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message || 'Invalid registration form' },
        { status: 400 }
      );
    }

    const { fullName, email, companyName, password, phone } = parsed.data;

    // Rate limit registration by IP
    const rate = checkRateLimit('register-ip:' + ip, { windowMs: 15 * 60 * 1000, maxRequests: 5 });
    if (!rate.allowed) {
      return NextResponse.json(
        { success: false, error: 'Registration limit reached. Please retry in a few minutes.' },
        { status: 429 }
      );
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'An enterprise account is already registered with this email.' },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);
    const user = await createUser({
      fullName,
      email,
      passwordHash,
      role: 'CLIENT',
      companyName,
      phone,
    });

    const verificationToken = await createEmailVerificationToken(user.id);

    // Create session for immediate onboarding
    const sessionToken = await signSession({
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.fullName,
      sessionId: 'sess-' + Date.now(),
      companyName: user.companyName,
    });

    await logAuditEvent({
      actorId: user.id,
      actorEmail: user.email,
      actorRole: user.role,
      action: AUDIT_ACTIONS.LOGIN_SUCCESS,
      resource: 'User',
      resourceId: user.id,
      ipAddress: ip,
      userAgent,
      metadata: { event: 'REGISTRATION', companyName },
    });

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        companyName: user.companyName,
      },
      verificationToken, // Exposed in dev/preview for automated testing
      message: 'Enterprise workspace registered successfully.',
    });

    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_MAX_AGE_SECONDS,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message || 'Registration failed' },
      { status: 500 }
    );
  }
}
