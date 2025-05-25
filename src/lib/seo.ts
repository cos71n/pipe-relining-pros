import { Metadata } from 'next'
import React from 'react'

// Mobile Services SEO Utilities

interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  ogImage?: string
  twitterImage?: string
  jsonLd?: object
}

interface LocalBusinessInfo {
  name: string
  description: string
  phone: string
  email: string
  address: {
    street?: string
    city: string
    state: string
    zipCode?: string
    country: string
  }
  serviceArea: string[]
  services: string[]
  businessHours?: {
    [key: string]: string
  }
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
  }
  rating?: {
    value: number
    reviewCount: number
  }
}

// Environment configuration
const getBaseConfig = () => ({
  siteUrl: process.env.SITE_URL || 'https://yourbusiness.com',
  businessName: process.env.BUSINESS_NAME || 'Your Mobile Service Business',
  businessPhone: process.env.BUSINESS_PHONE || '0468 358 074',
  businessEmail: process.env.BUSINESS_EMAIL || 'contact@yourbusiness.com',
  serviceArea: process.env.SERVICE_AREA || 'Your City and surrounding areas',
})

/**
 * Generate page-specific metadata for mobile services
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const { siteUrl, businessName } = getBaseConfig()
  
  const title = config.title 
    ? `${config.title} | ${businessName}`
    : `${businessName} - Professional Mobile Services`
  
  const description = config.description || 
    'Professional mobile services that come to you. Convenient, reliable, and expert service.'

  return {
    title,
    description,
    keywords: config.keywords,
    robots: {
      index: !config.noindex,
      follow: !config.nofollow,
    },
    openGraph: {
      title,
      description,
      url: config.canonical ? `${siteUrl}${config.canonical}` : siteUrl,
      siteName: businessName,
      images: config.ogImage ? [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : undefined,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: config.twitterImage ? [config.twitterImage] : undefined,
    },
  }
}

/**
 * Generate Local Business structured data
 */
export function generateLocalBusinessLD(business: LocalBusinessInfo) {
  const { siteUrl } = getBaseConfig()
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "description": business.description,
    "url": siteUrl,
    "telephone": business.phone,
    "email": business.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.street,
      "addressLocality": business.address.city,
      "addressRegion": business.address.state,
      "postalCode": business.address.zipCode,
      "addressCountry": business.address.country,
    },
    "areaServed": business.serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceType": business.services,
    "openingHours": business.businessHours ? Object.entries(business.businessHours).map(
      ([day, hours]) => `${day} ${hours}`
    ) : undefined,
    "sameAs": business.socialMedia ? Object.values(business.socialMedia).filter(Boolean) : undefined,
    "aggregateRating": business.rating ? {
      "@type": "AggregateRating",
      "ratingValue": business.rating.value,
      "reviewCount": business.rating.reviewCount,
    } : undefined,
  }
}

/**
 * Generate Service structured data
 */
export function generateServiceLD(service: {
  name: string
  description: string
  provider: string
  areaServed: string[]
  serviceType: string
  price?: {
    minPrice?: number
    maxPrice?: number
    currency?: string
  }
}) {
  const { siteUrl } = getBaseConfig()
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": service.provider,
      "url": siteUrl,
    },
    "areaServed": service.areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceType": service.serviceType,
    "offers": service.price ? {
      "@type": "Offer",
      "priceRange": service.price.minPrice && service.price.maxPrice 
        ? `${service.price.currency || '$'}${service.price.minPrice}-${service.price.maxPrice}`
        : undefined,
      "priceCurrency": service.price.currency || "USD",
    } : undefined,
  }
}

/**
 * Generate FAQ structured data
 */
export function generateFAQLD(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }
}

/**
 * Generate Review structured data
 */
export function generateReviewLD(reviews: Array<{
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}>, businessName: string) {
  return reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": businessName,
    },
    "author": {
      "@type": "Person",
      "name": review.author,
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished,
  }))
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbLD(breadcrumbs: Array<{ name: string; url: string }>) {
  const { siteUrl } = getBaseConfig()
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteUrl}${item.url}`,
    })),
  }
}

/**
 * Generate mobile service specific keywords
 */
export function generateServiceKeywords(serviceType: 'mechanic' | 'grooming' | 'cleaning' | 'general', location?: string) {
  const baseKeywords = [
    'mobile services',
    'on-site service',
    'convenient service',
    'professional service',
    'local business',
    'emergency service',
  ]
  
  const locationKeywords = location ? [
    `${serviceType} in ${location}`,
    `${location} mobile ${serviceType}`,
    `local ${serviceType} ${location}`,
    `${location} area ${serviceType}`,
  ] : []

  const serviceSpecificKeywords = {
    mechanic: [
      'mobile mechanic',
      'mobile auto repair',
      'on-site car repair',
      'mobile oil change',
      'mobile brake repair',
      'mobile battery replacement',
      'automotive service',
      'car maintenance',
    ],
    grooming: [
      'mobile pet grooming',
      'mobile dog grooming',
      'mobile cat grooming',
      'in-home pet grooming',
      'mobile pet spa',
      'pet grooming service',
      'mobile animal grooming',
    ],
    cleaning: [
      'mobile cleaning',
      'mobile house cleaning',
      'mobile car wash',
      'mobile detailing',
      'cleaning service',
      'mobile janitorial',
    ],
    general: [
      'mobile services',
      'on-demand service',
      'home service',
    ],
  }

  return [
    ...baseKeywords,
    ...locationKeywords,
    ...serviceSpecificKeywords[serviceType],
  ]
}

/**
 * SEO helper for contact/booking pages
 */
export function generateContactPageSEO(serviceType?: string) {
  const { businessName, serviceArea } = getBaseConfig()
  
  const title = serviceType 
    ? `Contact Us - ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Services`
    : 'Contact Us - Book Your Service'
  
  const description = `Contact ${businessName} for professional ${serviceType || 'mobile'} services in ${serviceArea}. Quick response, convenient scheduling, and expert service.`
  
  const validServiceType = serviceType && ['mechanic', 'grooming', 'cleaning'].includes(serviceType) 
    ? serviceType as 'mechanic' | 'grooming' | 'cleaning' 
    : 'general'
  
  const keywords = generateServiceKeywords(validServiceType, serviceArea)
  keywords.push('contact', 'booking', 'schedule service', 'get quote', 'request service')
  
  return generateMetadata({
    title,
    description,
    keywords,
  })
}

/**
 * SEO helper for service pages
 */
export function generateServicePageSEO(service: {
  name: string
  description: string
  type: 'mechanic' | 'grooming' | 'cleaning' | 'general'
  slug: string
}) {
  const { businessName, serviceArea } = getBaseConfig()
  
  const title = `${service.name} - ${businessName}`
  const description = `${service.description} Professional ${service.name.toLowerCase()} services in ${serviceArea}. ${businessName} provides convenient, reliable service that comes to you.`
  
  const keywords = generateServiceKeywords(service.type, serviceArea)
  keywords.push(service.name.toLowerCase(), `${service.name.toLowerCase()} service`)
  
  return generateMetadata({
    title,
    description,
    keywords,
  })
}

/**
 * Helper to inject structured data into page
 */
export function StructuredData({ data }: { data: object }): React.ReactElement {
  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
  })
} 