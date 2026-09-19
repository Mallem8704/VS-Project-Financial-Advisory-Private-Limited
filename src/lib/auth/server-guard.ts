import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { UserRole } from '@/types';
import { hasPermission, Permission } from '@/server/permissions/rbac';
import { verifySession, extractSessionToken, SESSION_COOKIE_NAME, SessionPayload } from './session';

export class AuthError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 401) {
    super(message);
    this.name = 'AuthError';
    this.statusCode = statusCode;
  }
}

/**
 * Retrieves current authenticated session from NextRequest or Next.js cookies()
 */
export async function getSessionUser(req?: NextRequest): Promise<SessionPayload | null> {
  let token: string | null = null;

  if (req) {
    token = req.cookies.get(SESSION_COOKIE_NAME)?.value || null;
    if (!token) {
      token = extractSessionToken(req.headers.get('cookie'));
    }
    // Also support Bearer token in Authorization header for API clients
    if (!token) {
      const authHeader = req.headers.get('authorization');
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7);
      }
    }
  } else {
    try {
      const cookieStore = await cookies();
      token = cookieStore.get(SESSION_COOKIE_NAME)?.value || null;
    } catch {
      token = null;
    }
  }

  if (!token) return null;
  return verifySession(token);
}

/**
 * Enforces authenticated session. Throws 401 AuthError if unauthenticated.
 */
export async function requireAuth(req?: NextRequest): Promise<SessionPayload> {
  const user = await getSessionUser(req);
  if (!user) {
    throw new AuthError('Authentication required to access this resource', 401);
  }
  return user;
}

/**
 * Enforces role membership. Throws 403 AuthError if user role is not permitted.
 */
export async function requireRole(allowedRoles: UserRole[], req?: NextRequest): Promise<SessionPayload> {
  const user = await requireAuth(req);
  if (!allowedRoles.includes(user.role) && user.role !== 'SUPER_ADMIN') {
    throw new AuthError(
      'Forbidden: Role ' + user.role + ' is not authorized for this operation',
      403
    );
  }
  return user;
}

/**
 * Enforces specific fine-grained permission. Throws 403 AuthError if permission missing.
 */
export async function requirePermission(permission: Permission, req?: NextRequest): Promise<SessionPayload> {
  const user = await requireAuth(req);
  if (!hasPermission(user.role, permission)) {
    throw new AuthError(
      'Forbidden: Required permission [' + permission + '] not granted for role [' + user.role + ']',
      403
    );
  }
  return user;
}

/**
 * Checks whether user can view or download sensitive client documents.
 */
export function canAccessDocument(
  user: SessionPayload,
  doc: { uploadedByUserId?: string | null; projectId?: string | null; clientId?: string | null }
): boolean {
  if (user.role === 'SUPER_ADMIN' || user.role === 'DIRECTOR' || user.role === 'ADMIN') {
    return true;
  }
  if (user.role === 'ADVISOR' || user.role === 'FINANCIAL_ANALYST' || user.role === 'DOCUMENT_EXECUTIVE') {
    return true;
  }
  if (user.role === 'CLIENT') {
    return doc.uploadedByUserId === user.sub || doc.clientId === user.sub;
  }
  return false;
}

/**
 * Standardized error response handler for API routes
 */
export function handleAuthError(err: unknown) {
  if (err instanceof AuthError) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: err.statusCode }
    );
  }
  return NextResponse.json(
    { success: false, error: (err as Error).message || 'Internal authorization error' },
    { status: 500 }
  );
}
