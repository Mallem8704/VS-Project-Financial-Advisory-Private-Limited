import { NextRequest, NextResponse } from 'next/server';
import { getSessionUser } from '@/lib/auth/server-guard';
import { SESSION_COOKIE_NAME } from '@/lib/auth/session';
import { logAuditEvent, AUDIT_ACTIONS } from '@/lib/auth/audit';

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  const user = await getSessionUser(req);
  if (user) {
    await logAuditEvent({
      actorId: user.sub,
      actorEmail: user.email,
      actorRole: user.role,
      action: AUDIT_ACTIONS.LOGOUT,
      resource: 'Auth',
      ipAddress: ip,
      userAgent,
    });
  }

  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });

  // Clear cookie
  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
