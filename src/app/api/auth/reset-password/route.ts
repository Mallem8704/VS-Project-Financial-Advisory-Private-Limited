import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAndConsumeResetToken } from '@/lib/auth/auth-store';
import { hashPassword } from '@/lib/auth/crypto';
import { checkRateLimit } from '@/lib/auth/rate-limit';
import { logAuditEvent, AUDIT_ACTIONS } from '@/lib/auth/audit';

const resetSchema = z.object({
  token: z.string().min(10, 'Valid reset token is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  try {
    const body = await req.json();
    const parsed = resetSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message || 'Invalid password parameters' },
        { status: 400 }
      );
    }

    const { token, password } = parsed.data;

    // Rate limit attempts
    const rate = checkRateLimit('reset-attempt:' + ip, { windowMs: 15 * 60 * 1000, maxRequests: 5 });
    if (!rate.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many reset attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const newHash = await hashPassword(password);
    const success = await verifyAndConsumeResetToken(token, newHash);

    if (!success) {
      return NextResponse.json(
        { success: false, error: 'Password reset link is invalid, already utilized, or expired.' },
        { status: 400 }
      );
    }

    await logAuditEvent({
      actorId: 'system',
      actorEmail: 'token-authenticated',
      actorRole: 'USER',
      action: AUDIT_ACTIONS.PASSWORD_RESET_COMPLETED,
      resource: 'User',
      ipAddress: ip,
      userAgent,
      metadata: { event: 'PASSWORD_RESET' },
    });

    return NextResponse.json({
      success: true,
      message: 'Password has been updated securely. All prior active sessions have been invalidated.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message || 'Password reset failed' },
      { status: 500 }
    );
  }
}
