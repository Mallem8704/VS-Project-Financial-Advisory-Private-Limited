import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifySession, signSession, SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from '@/lib/auth/session';
import { findUserById, recordLoginAttempt } from '@/lib/auth/auth-store';
import { validateMfaToken, validateBackupCode } from '@/lib/auth/mfa';
import { logAuditEvent, AUDIT_ACTIONS } from '@/lib/auth/audit';

const verifySchema = z.object({
  mfaTicket: z.string().optional(),
  code: z.string().min(6, 'Valid 6-digit MFA code or backup code is required'),
  setupSecret: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  try {
    const body = await req.json();
    const parsed = verifySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message || 'Invalid MFA parameters' },
        { status: 400 }
      );
    }

    const { mfaTicket, code, setupSecret } = parsed.data;

    // Login Challenge Verification Flow
    if (mfaTicket) {
      const ticketPayload = await verifySession(mfaTicket);
      if (!ticketPayload) {
        return NextResponse.json(
          { success: false, error: 'MFA challenge has expired. Please sign in again.' },
          { status: 401 }
        );
      }

      const user = await findUserById(ticketPayload.sub);
      if (!user || !user.mfaSecret) {
        return NextResponse.json(
          { success: false, error: 'User MFA record not configured.' },
          { status: 400 }
        );
      }

      const isTotpValid = validateMfaToken(user.mfaSecret, code);
      let isBackupValid = false;

      if (!isTotpValid && user.backupCodes && user.backupCodes.length > 0) {
        const backupResult = validateBackupCode(code, user.backupCodes);
        if (backupResult.valid) {
          isBackupValid = true;
          user.backupCodes = backupResult.remainingCodes;
        }
      }

      if (!isTotpValid && !isBackupValid) {
        await logAuditEvent({
          actorId: user.id,
          actorEmail: user.email,
          actorRole: user.role,
          action: AUDIT_ACTIONS.MFA_CHALLENGE_FAILED,
          resource: 'Auth',
          ipAddress: ip,
          userAgent,
        });

        return NextResponse.json(
          { success: false, error: 'Invalid 6-digit authentication or backup code.' },
          { status: 401 }
        );
      }

      // MFA Success: Issue full session
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
        metadata: { mfaType: isBackupValid ? 'BACKUP_CODE' : 'TOTP' },
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
    }

    return NextResponse.json(
      { success: false, error: 'Missing mfaTicket parameter.' },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message || 'MFA validation failed' },
      { status: 500 }
    );
  }
}
