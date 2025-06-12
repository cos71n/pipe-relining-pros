import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optimized font loading for mobile services
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Performance optimization - prevents invisible text during font swap
  preload: true, // Preload for critical text
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true, // Reduce layout shift
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Performance optimization
  preload: false, // Don't preload mono font (used less frequently)
  fallback: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
  adjustFontFallback: true, // Reduce layout shift
});

// Environment-based configuration
const siteUrl = process.env.SITE_URL || 'https://yourbusiness.com'
const businessName = process.env.BUSINESS_NAME || 'Your Mobile Service Business'
const businessPhone = process.env.BUSINESS_PHONE || '0468 358 074'
const businessEmail = process.env.BUSINESS_EMAIL || 'contact@yourbusiness.com'
const serviceArea = process.env.SERVICE_AREA || 'Your City and surrounding areas'
const siteName = process.env.SITE_NAME || businessName
const siteDescription = process.env.SITE_DESCRIPTION || `Professional mobile services in ${serviceArea}. Convenient, reliable, and expert service that comes to you.`

// Comprehensive SEO Metadata for Mobile Services
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Pipe Relining Sydney | Pipe Relining Pros`,
    template: `%s | Pipe Relining Pros`
  },
  description: 'Pipe relining Sydney wide with free quotes and extended warranty on work.',
  keywords: [
    'mobile services',
    'mobile mechanic',
    'mobile grooming', 
    'mobile cleaning',
    'on-site service',
    'convenient service',
    'professional mobile services',
    serviceArea.toLowerCase(),
    'emergency service',
    'local business'
  ],
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  
  // Robots and indexing
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

  // Open Graph for social media
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: `${businessName} - Professional Mobile Services`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${businessName} - Mobile Services`,
        type: 'image/jpeg',
      },
      {
        url: `${siteUrl}/og-image-square.jpg`,
        width: 1080,
        height: 1080,
        alt: `${businessName} - Mobile Services`,
        type: 'image/jpeg',
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@yourbusiness', // Update with actual Twitter handle
    creator: '@yourbusiness',
    title: `${businessName} - Professional Mobile Services`,
    description: siteDescription,
    images: [`${siteUrl}/twitter-image.jpg`],
  },

  // Additional metadata
  category: 'Business Services',
  classification: 'Mobile Services',
  
  // Verification tags (add your actual verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
    },
  },

  // Manifest for PWA
  manifest: '/manifest.json',

  // Structured Data for Local Business (JSON-LD)
  other: {
    'application-name': businessName,
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': businessName,
    'format-detection': 'telephone=yes',
    'theme-color': '#3b82f6',
    'color-scheme': 'light',
  },
}

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
}

// Local Business Structured Data
function LocalBusinessStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": siteDescription,
    "url": siteUrl,
    "telephone": businessPhone,
    "email": businessEmail,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": serviceArea,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "name": serviceArea,
      "description": `Mobile services available throughout ${serviceArea}`
    },
    "serviceType": [
      "Mobile Services",
      "Mobile Mechanic",
      "Mobile Pet Grooming", 
      "Mobile Cleaning",
      "On-Site Services"
    ],
    "openingHours": [
      "Mo-Fr 07:00-19:00",
      "Sa 08:00-17:00",
      "Su 09:00-16:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Mechanic Services",
            "description": "Professional automotive repair and maintenance at your location"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Pet Grooming",
            "description": "Professional pet grooming services in the comfort of your home"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Mobile Cleaning Services",
            "description": "Professional cleaning services for homes and businesses"
          }
        }
      ]
    },
    "sameAs": [
      // Add your social media URLs
      "https://www.facebook.com/yourbusiness",
      "https://www.instagram.com/yourbusiness",
      "https://www.linkedin.com/company/yourbusiness"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <LocalBusinessStructuredData />
        
        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//cdn.21st.dev" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/pipe-relining-avatar.jpg" type="image/jpeg" />
        <link rel="icon" href="/pipe-relining-avatar.jpg" type="image/jpeg" sizes="32x32" />
        <link rel="icon" href="/pipe-relining-avatar.jpg" type="image/jpeg" sizes="16x16" />
        <link rel="apple-touch-icon" href="/pipe-relining-avatar.jpg" />
        
        {/* Mobile PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={businessName} />
        
        {/* Performance optimizations */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans text-foreground`}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 transition-all duration-200"
        >
          Skip to main content
        </a>
        
        {/* Main content wrapper with performance optimizations */}
        <div className="relative flex min-h-screen flex-col">
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>
        
        {/* Performance monitoring script for production */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Web Vitals monitoring for mobile services
                if (typeof window !== 'undefined') {
                  // Monitor Core Web Vitals
                  function sendToAnalytics(metric) {
                    console.log('Core Web Vital:', metric);
                    // Send to your analytics service
                  }
                  
                  // Import web-vitals dynamically
                  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                    getCLS(sendToAnalytics);
                    getFID(sendToAnalytics);
                    getFCP(sendToAnalytics);
                    getLCP(sendToAnalytics);
                    getTTFB(sendToAnalytics);
                  }).catch(() => {
                    // Graceful fallback if web-vitals fails to load
                    console.log('Web Vitals monitoring not available');
                  });
                }
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
