import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { findUserByEmail, createPasswordResetToken } from '@/lib/auth/auth-store';
import { checkRateLimit } from '@/lib/auth/rate-limit';
import { logAuditEvent, AUDIT_ACTIONS } from '@/lib/auth/audit';

const schema = z.object({
  email: z.string().email('Valid official email address is required'),
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message || 'Invalid email format' },
        { status: 400 }
      );
    }

    const { email } = parsed.data;

    // Strict rate limiting: 3 password reset requests per 15 minutes
    const rate = checkRateLimit('pwd-reset:' + email.toLowerCase(), {
      windowMs: 15 * 60 * 1000,
      maxRequests: 3,
    });

    if (!rate.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many password reset requests for this email. Please wait ' + rate.retryAfterSeconds + ' seconds.',
        },
        { status: 429 }
      );
    }

    const user = await findUserByEmail(email);
    let resetToken: string | null = null;

    if (user) {
      resetToken = await createPasswordResetToken(user.id);
      await logAuditEvent({
        actorId: user.id,
        actorEmail: user.email,
        actorRole: user.role,
        action: AUDIT_ACTIONS.PASSWORD_RESET_REQUESTED,
        resource: 'User',
        resourceId: user.id,
        ipAddress: ip,
        userAgent,
      });
    }

    // Always return generic success to prevent account enumeration
    return NextResponse.json({
      success: true,
      message: 'If this official email is registered, recovery instructions have been dispatched.',
      // In dev or testing, expose reset token for seamless automated testing
      ...(process.env.NODE_ENV !== 'production' && resetToken ? { debugResetToken: resetToken } : {}),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message || 'Failed to process password recovery' },
      { status: 500 }
    );
  }
}
