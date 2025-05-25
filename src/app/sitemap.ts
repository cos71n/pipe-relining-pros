import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'

// Mobile Services Sitemap Generation
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://yourbusiness.com'
  const currentDate = new Date()

  // Core business pages with high priority
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ]

  // Service-specific pages for mobile businesses
  const servicePages = [
    // Mobile Mechanic Services
    {
      url: `${baseUrl}/services/mobile-mechanic`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/oil-change`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/brake-repair`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/battery-replacement`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    
    // Mobile Pet Grooming Services
    {
      url: `${baseUrl}/services/mobile-grooming`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/dog-grooming`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/cat-grooming`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    
    // Mobile Cleaning Services
    {
      url: `${baseUrl}/services/mobile-cleaning`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/house-cleaning`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/car-detailing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ]

  // Local SEO pages - customize based on service area
  const locationPages = [
    {
      url: `${baseUrl}/areas`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/emergency-service`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  ]

  // Business information pages
  const businessPages = [
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ]

  // Combine all sitemap entries
  return [
    ...mainPages,
    ...servicePages,
    ...locationPages,
    ...businessPages,
  ]
}

// Additional utility for dynamic sitemap generation
export function generateDynamicSitemap(customPages: Array<{
  slug: string;
  lastModified?: Date;
  priority?: number;
}> = []) {
  const baseUrl = process.env.SITE_URL || 'https://yourbusiness.com'
  
  return customPages.map(page => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: page.lastModified || new Date(),
    changeFrequency: 'monthly' as const,
    priority: page.priority || 0.5,
  }))
} 