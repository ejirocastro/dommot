import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/bookings',
  '/favorites',
  '/profile',
  '/account',
  '/host',
  '/book'
];

// Define public routes that redirect authenticated users
const publicRoutes = [
  '/login',
  '/signup'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if user is authenticated by looking for valid auth token
  const authToken = request.cookies.get('auth-token')?.value;
  const isAuthenticated = authToken && authToken !== '' && authToken !== 'undefined';

  console.log('Middleware check:', { pathname, authToken, isAuthenticated });

  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  // Check if the current path is a public auth route
  const isPublicRoute = publicRoutes.some(route => 
    pathname.startsWith(route)
  );

  // Redirect unauthenticated users from protected routes to login
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    console.log('Redirecting unauthenticated user to login');
    return NextResponse.redirect(loginUrl);
  }

  // Redirect authenticated users from public auth routes to home
  if (isPublicRoute && isAuthenticated) {
    console.log('Redirecting authenticated user from public route to home');
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Add user authentication status to headers for client-side access
  const response = NextResponse.next();
  response.headers.set('x-user-authenticated', isAuthenticated ? 'true' : 'false');

  return response;
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
