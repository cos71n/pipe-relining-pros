import { NextRequest, NextResponse } from 'next/server';
import { SecurityMiddleware } from '@/lib/security';

// Mobile Services Security Middleware
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Get client information for security checks
  const userAgent = request.headers.get('user-agent') || '';
  const clientIP = SecurityMiddleware.getClientIP(request.headers);
  
  // Security headers (additional to Next.js config)
  response.headers.set('X-Request-ID', crypto.randomUUID());
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, nosnippet, noarchive');
  
  // Rate limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Stricter rate limiting for API endpoints
    if (request.nextUrl.pathname.includes('/contact') || 
        request.nextUrl.pathname.includes('/booking') ||
        request.nextUrl.pathname.includes('/quote')) {
      
      // Block obvious bots and suspicious requests
      if (userAgent.length < 10 || 
          userAgent.includes('bot') || 
          userAgent.includes('crawler') ||
          userAgent.includes('spider')) {
        return new NextResponse('Access Denied', { status: 403 });
      }
      
      // Add CSRF protection header
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set('X-Frame-Options', 'DENY');
    }
  }
  
  // Protect sensitive routes
  if (request.nextUrl.pathname.startsWith('/admin') || 
      request.nextUrl.pathname.startsWith('/dashboard')) {
    // Add extra security for admin routes (for future use)
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
  }
  
  // Mobile-specific security
  if (request.nextUrl.pathname === '/') {
    // Homepage optimizations
    response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  }
  
  // Logging for security monitoring (in production, this would go to a logging service)
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Security] ${request.method} ${request.nextUrl.pathname} - IP: ${clientIP} - UA: ${userAgent.slice(0, 50)}`);
  }
  
  return response;
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    // Match all request paths except for:
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - public files (icon files, etc.)
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}; 