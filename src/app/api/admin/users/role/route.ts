import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { requirePermission, handleAuthError } from '@/lib/auth/server-guard';
import { findUserById, updateUserRole } from '@/lib/auth/auth-store';
import { logAuditEvent, AUDIT_ACTIONS } from '@/lib/auth/audit';
import { UserRole } from '@/types';
import { AUTH_ROLES } from '@/features/auth';

const roleSchema = z.object({
  targetUserId: z.string().min(1, 'Target user ID is required'),
  newRole: z.string().refine((val) => AUTH_ROLES.includes(val as UserRole), {
    message: 'Invalid role assignment',
  }),
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  try {
    // Requires users.roles permission (enforced strictly on server)
    const currentUser = await requirePermission('users.roles', req);

    const body = await req.json();
    const parsed = roleSchema.parse(body);
    const { targetUserId, newRole } = parsed;

    const targetUser = await findUserById(targetUserId);
    if (!targetUser) {
      return NextResponse.json(
        { success: false, error: 'Target user not found' },
        { status: 404 }
      );
    }

    const previousRole = targetUser.role;
    await updateUserRole(targetUserId, newRole as UserRole);

    await logAuditEvent({
      actorId: currentUser.sub,
      actorEmail: currentUser.email,
      actorRole: currentUser.role,
      action: AUDIT_ACTIONS.USER_ROLE_CHANGED,
      resource: 'User',
      resourceId: targetUserId,
      ipAddress: ip,
      userAgent,
      metadata: {
        targetUserId,
        targetEmail: targetUser.email,
        previousRole,
        newRole,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Role changed from ' + previousRole + ' to ' + newRole,
      user: {
        id: targetUser.id,
        email: targetUser.email,
        role: newRole,
      },
    });
  } catch (error) {
    return handleAuthError(error);
  }
}
