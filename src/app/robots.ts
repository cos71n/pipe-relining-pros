import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'

// Mobile Services Robots.txt Generation
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || 'https://yourbusiness.com'
  const isProduction = process.env.NODE_ENV === 'production'
  
  // Development environment - more restrictive
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }

  // Production environment - SEO friendly for mobile services
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/dashboard/',
          '/api/',
          '/_next/',
          '/private/',
          '/temp/',
          '*.json',
          '/booking/success/',
          '/payment/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/services/',
          '/contact/',
          '/about/',
          '/testimonials/',
          '/pricing/',
          '/areas/',
          '/emergency-service/',
          '/booking/',
        ],
        disallow: [
          '/admin/',
          '/dashboard/',
          '/api/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/services/',
          '/contact/',
          '/about/',
          '/testimonials/',
          '/pricing/',
          '/areas/',
          '/emergency-service/',
          '/booking/',
        ],
        disallow: [
          '/admin/',
          '/dashboard/',
          '/api/',
          '/private/',
        ],
      },
      // Block aggressive crawlers and bots
      {
        userAgent: [
          'SemrushBot',
          'AhrefsBot',
          'MJ12bot',
          'DotBot',
        ],
        disallow: '/',
      },
      // Allow social media crawlers for rich previews
      {
        userAgent: [
          'facebookexternalhit',
          'Twitterbot',
          'LinkedInBot',
          'WhatsApp',
        ],
        allow: [
          '/',
          '/services/',
          '/contact/',
          '/about/',
          '/testimonials/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

// Utility for custom robots rules
export function generateCustomRobotRules(customRules: {
  allow?: string[];
  disallow?: string[];
  userAgent?: string | string[];
}) {
  return {
    userAgent: customRules.userAgent || '*',
    allow: customRules.allow || ['/'],
    disallow: customRules.disallow || [],
  }
} 