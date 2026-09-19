import { NextRequest, NextResponse } from 'next/server';
import { getSessionUser } from '@/lib/auth/server-guard';
import { getRolePermissions } from '@/server/permissions/rbac';

export async function GET(req: NextRequest) {
  const user = await getSessionUser(req);

  if (!user) {
    return NextResponse.json(
      { success: false, authenticated: false, user: null },
      { status: 401 }
    );
  }

  const permissions = getRolePermissions(user.role);

  return NextResponse.json({
    success: true,
    authenticated: true,
    user: {
      id: user.sub,
      email: user.email,
      fullName: user.name,
      role: user.role,
      companyName: user.companyName,
    },
    permissions,
  });
}
