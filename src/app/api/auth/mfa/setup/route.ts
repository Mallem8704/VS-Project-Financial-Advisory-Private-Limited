import { NextRequest, NextResponse } from 'next/server';
import { requireAuth, handleAuthError } from '@/lib/auth/server-guard';
import { initializeMfaSetup } from '@/lib/auth/mfa';
import { STAFF_ROLES } from '@/features/auth';

export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth(req);

    if (!STAFF_ROLES.includes(user.role)) {
      return NextResponse.json(
        { success: false, error: 'MFA configuration is restricted to institutional staff & admin roles.' },
        { status: 403 }
      );
    }

    const setupData = initializeMfaSetup(user.email);

    return NextResponse.json({
      success: true,
      secret: setupData.secret,
      otpauthUrl: setupData.otpauthUrl,
      backupCodes: setupData.backupCodes,
    });
  } catch (error) {
    return handleAuthError(error);
  }
}
