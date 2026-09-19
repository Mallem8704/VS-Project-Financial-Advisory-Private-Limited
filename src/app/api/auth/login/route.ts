import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { findUserByEmail, recordLoginAttempt } from '@/lib/auth/auth-store';
import { verifyPassword } from '@/lib/auth/crypto';
import { isAccountLocked, getRemainingLockoutSeconds } from '@/lib/auth/lockout';
import { checkRateLimit } from '@/lib/auth/rate-limit';
import { signSession, SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from '@/lib/auth/session';
import { logAuditEvent, AUDIT_ACTIONS } from '@/lib/auth/audit';

const loginSchema = z.object({
  email: z.string().email('Valid institutional email is required'),
  password: z.string().min(1, 'Password is required'),
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message || 'Invalid credentials format' },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;

    // Rate limit login attempts per IP
    const rateCheck = checkRateLimit('login-ip:' + ip, { windowMs: 60 * 1000, maxRequests: 10 });
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many sign-in attempts. Please wait ' + rateCheck.retryAfterSeconds + ' seconds before retrying.',
        },
        { status: 429, headers: { 'Retry-After': String(rateCheck.retryAfterSeconds) } }
      );
    }

    const user = await findUserByEmail(email);

    // Timing-attack prevention: if user doesn't exist, still run a dummy verify
    if (!user) {
      await verifyPassword('dummy_password', 'scrypt:0000000000000000:0000000000000000');
      await logAuditEvent({
        actorId: 'anonymous',
        actorEmail: email,
        actorRole: 'ANONYMOUS',
        action: AUDIT_ACTIONS.LOGIN_FAILED,
        resource: 'Auth',
        ipAddress: ip,
        userAgent,
        metadata: { reason: 'User not found' },
      });

      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Check account lockout status
    if (isAccountLocked(user)) {
      const remainingSecs = getRemainingLockoutSeconds(user.lockedUntil);
      const minutes = Math.ceil(remainingSecs / 60);

      await logAuditEvent({
        actorId: user.id,
        actorEmail: user.email,
        actorRole: user.role,
        action: AUDIT_ACTIONS.LOGIN_FAILED,
        resource: 'Auth',
        ipAddress: ip,
        userAgent,
        metadata: { reason: 'Account locked', remainingSecs },
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Account is temporarily locked due to excessive failed attempts. Please retry in ' + minutes + ' minutes.',
          isLocked: true,
          remainingSeconds: remainingSecs,
        },
        { status: 423 }
      );
    }

    const isPasswordValid = await verifyPassword(password, user.passwordHash);

    if (!isPasswordValid) {
      const lockResult = await recordLoginAttempt(user, false, ip);

      if (lockResult.isLocked) {
        await logAuditEvent({
          actorId: user.id,
          actorEmail: user.email,
          actorRole: user.role,
          action: AUDIT_ACTIONS.ACCOUNT_LOCKED,
          resource: 'User',
          resourceId: user.id,
          ipAddress: ip,
          userAgent,
          metadata: { failedAttempts: 5, lockedMinutes: 15 },
        });

        return NextResponse.json(
          {
            success: false,
            error: 'Account locked for 15 minutes due to 5 consecutive failed login attempts.',
            isLocked: true,
            remainingSeconds: 15 * 60,
          },
          { status: 423 }
        );
      }

      await logAuditEvent({
        actorId: user.id,
        actorEmail: user.email,
        actorRole: user.role,
        action: AUDIT_ACTIONS.LOGIN_FAILED,
        resource: 'Auth',
        ipAddress: ip,
        userAgent,
        metadata: { remainingAttempts: lockResult.remainingAttempts },
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email or password. ' + lockResult.remainingAttempts + ' attempts remaining before account lock.',
          remainingAttempts: lockResult.remainingAttempts,
        },
        { status: 401 }
      );
    }

    // Password is valid! Check if MFA is required
    if (user.isMfaEnabled && user.mfaSecret) {
      // Create temporary MFA ticket (valid for 5 minutes)
      const mfaTicket = await signSession(
        {
          sub: user.id,
          email: user.email,
          role: user.role,
          name: user.fullName,
          sessionId: 'mfa-challenge-' + Date.now(),
          isMfaVerified: false,
          companyName: user.companyName,
        },
        300 // 5 minutes
      );

      return NextResponse.json({
        success: true,
        mfaRequired: true,
        mfaTicket,
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          role: user.role,
        },
      });
    }

    // Successful login: reset failed attempts & record login
    await recordLoginAttempt(user, true, ip);

    const sessionToken = await signSession({
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.fullName,
      sessionId: 'sess-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      isMfaVerified: true,
      companyName: user.companyName,
    });

    await logAuditEvent({
      actorId: user.id,
      actorEmail: user.email,
      actorRole: user.role,
      action: AUDIT_ACTIONS.LOGIN_SUCCESS,
      resource: 'Auth',
      ipAddress: ip,
      userAgent,
      metadata: { role: user.role },
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
    });

    // Set secure HttpOnly cookie
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
      { success: false, error: (error as Error).message || 'Authentication failed' },
      { status: 500 }
    );
  }
}
