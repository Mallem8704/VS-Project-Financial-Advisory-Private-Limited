import { NextRequest, NextResponse } from 'next/server';
import { extractSessionToken, verifySession } from '@/lib/auth/session';
import { STAFF_ROLES } from '@/features/auth';

const ADMIN_RESTRICTED_SUBROUTES: Record<string, string[]> = {
  '/admin/audit': ['SUPER_ADMIN', 'DIRECTOR', 'ADMIN'],
  '/admin/users': ['SUPER_ADMIN', 'DIRECTOR', 'ADMIN'],
  '/admin/settings': ['SUPER_ADMIN', 'DIRECTOR', 'ADMIN'],
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookieHeader = req.headers.get('cookie');
  const token = extractSessionToken(cookieHeader);
  const session = await verifySession(token);

  const isAuthenticated = !!session;

  // 1. Auth Page Redirects for Authenticated Users
  if (isAuthenticated && (pathname === '/login' || pathname === '/register')) {
    if (STAFF_ROLES.includes(session.role)) {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }
    return NextResponse.redirect(new URL('/portal/dashboard', req.url));
  }

  // 2. Client Portal & Onboarding Protection
  if (pathname.startsWith('/portal') || pathname === '/onboarding') {
    if (!isAuthenticated) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 3. Admin Control Center Protection (/admin/*)
  if (pathname.startsWith('/admin')) {
    if (!isAuthenticated) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Clients cannot access /admin
    if (session.role === 'CLIENT') {
      return NextResponse.redirect(new URL('/portal/dashboard', req.url));
    }

    // Check high-privilege subroutes
    for (const [restrictedPath, allowedRoles] of Object.entries(ADMIN_RESTRICTED_SUBROUTES)) {
      if (pathname.startsWith(restrictedPath)) {
        if (!allowedRoles.includes(session.role)) {
          return NextResponse.redirect(new URL('/admin/dashboard?error=unauthorized_section', req.url));
        }
      }
    }
  }

  // 4. Staff Workbench Protection (/staff/*)
  if (pathname.startsWith('/staff')) {
    if (!isAuthenticated) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (session.role === 'CLIENT') {
      return NextResponse.redirect(new URL('/portal/dashboard', req.url));
    }
  }

  // 5. Downstream Identity Propagation
  const requestHeaders = new Headers(req.headers);
  if (session) {
    requestHeaders.set('x-user-id', session.sub);
    requestHeaders.set('x-user-role', session.role);
    requestHeaders.set('x-user-email', session.email);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    '/portal/:path*',
    '/admin/:path*',
    '/staff/:path*',
    '/onboarding',
    '/login',
    '/register',
  ],
};
