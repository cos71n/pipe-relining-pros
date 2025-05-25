import type { Metadata } from "next"

// Location configuration interface
export interface LocationConfig {
  name: string
  slug: string
  region: string
  state: string
  country: string
  businessName?: string
  businessPhone?: string
  siteUrl?: string
}

// Default business configuration from environment variables
const getBusinessConfig = () => ({
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Border Mobile Mechanic',
  businessPhone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '0468 358 074',
  siteUrl: process.env.SITE_URL || 'https://yourbusiness.com'
})

// Generate location-specific metadata
export function generateLocationMetadata(location: LocationConfig): Metadata {
  const { businessName, businessPhone, siteUrl } = getBusinessConfig()
  
  return {
    title: `Mobile Mechanic ${location.name} - ${businessName}`,
    description: `Professional mobile mechanic services in ${location.name}. We come to you in ${location.name} - home, work or roadside. Fully equipped mobile mechanic in ${location.name}, reliable and ready to help you now.`,
    keywords: [
      `mobile mechanic ${location.name.toLowerCase()}`,
      `car service ${location.name.toLowerCase()}`,
      `auto repair ${location.name.toLowerCase()}`,
      `mobile mechanic near me`,
      `${location.name.toLowerCase()} mobile mechanic`,
      'roadside assistance',
      'car breakdown service',
      'mobile car service',
      'Gold Coast mobile mechanic',
      'Northern NSW mobile mechanic'
    ],
    
    // Open Graph for social media
    openGraph: {
      title: `Mobile Mechanic ${location.name} - ${businessName}`,
      description: `Professional mobile mechanic services in ${location.name}. We come to you in ${location.name} - home, work or roadside. Fully equipped and reliable.`,
      url: `${siteUrl}/locations/${location.slug}`,
      type: 'website',
      locale: 'en_US',
      siteName: businessName,
      images: [
        {
          url: `${siteUrl}/og-image-${location.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${businessName} - Mobile Mechanic Services in ${location.name}`,
          type: 'image/jpeg',
        }
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: `Mobile Mechanic ${location.name} - ${businessName}`,
      description: `Professional mobile mechanic services in ${location.name}. We come to you - home, work or roadside.`,
      images: [`${siteUrl}/twitter-image-${location.slug}.jpg`],
    },

    // Additional location-specific metadata
    alternates: {
      canonical: `${siteUrl}/locations/${location.slug}`,
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Generate location-specific structured data
export function generateLocationStructuredData(location: LocationConfig) {
  const { businessName, businessPhone, siteUrl } = getBusinessConfig()
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${businessName} - ${location.name}`,
    "description": `Professional mobile mechanic services in ${location.name}. We come to you in ${location.name} - home, work or roadside breakdown.`,
    "url": `${siteUrl}/locations/${location.slug}`,
    "telephone": businessPhone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": location.state,
      "addressCountry": location.country
    },
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "addressRegion": location.state,
      "addressCountry": location.country
    },
    "serviceType": [
      "Mobile Mechanic",
      "Car Service",
      "Auto Repair",
      "Roadside Assistance",
      "Car Breakdown Service"
    ],
    "priceRange": "$$",
    "openingHours": [
      "Mo-Fr 07:00-19:00",
      "Sa 08:00-17:00",
      "Su 09:00-16:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Mobile Mechanic Services in ${location.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Car Service",
            "description": `Professional car servicing at your location in ${location.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Roadside Assistance",
            "description": `Emergency roadside assistance and breakdown service in ${location.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Auto Repair",
            "description": `Mobile automotive repair services in ${location.name}`
          }
        }
      ]
    }
  }
}

// Predefined location configurations for easy setup
export const LOCATION_CONFIGS: Record<string, LocationConfig> = {
  burleigh: {
    name: "Burleigh",
    slug: "burleigh",
    region: "Gold Coast",
    state: "Queensland",
    country: "AU"
  },
  "palm-beach": {
    name: "Palm Beach",
    slug: "palm-beach", 
    region: "Gold Coast",
    state: "Queensland",
    country: "AU"
  },
  "tweed-heads": {
    name: "Tweed Heads",
    slug: "tweed-heads",
    region: "Northern NSW",
    state: "New South Wales", 
    country: "AU"
  },
  helensvale: {
    name: "Helensvale",
    slug: "helensvale",
    region: "Gold Coast",
    state: "Queensland",
    country: "AU"
  },
  coolangatta: {
    name: "Coolangatta",
    slug: "coolangatta",
    region: "Gold Coast",
    state: "Queensland",
    country: "AU"
  }
}

// Helper function to get location config by slug
export function getLocationConfig(slug: string): LocationConfig | null {
  return LOCATION_CONFIGS[slug] || null
} 