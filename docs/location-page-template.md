# Location Page Template System

This document explains how to create new location pages using the template system.

## Overview

The location page template system provides a standardized way to create location-specific landing pages for mobile mechanic services. Each location page includes:

- Location-specific hero section with suburb name
- Same CTA buttons and functionality as homepage
- Google reviews section
- Location-specific SEO metadata and structured data
- Mobile-first responsive design

## Quick Start

To create a new location page (e.g., for Palm Beach):

### 1. Create the page directory and file

```bash
mkdir -p src/app/locations/palm-beach
```

### 2. Create the page.tsx file

```typescript
// src/app/locations/palm-beach/page.tsx
import { LocationPage } from "@/components/mobile-services/location-page"
import { LOCATION_CONFIGS, generateLocationMetadata, generateLocationStructuredData } from "@/lib/location-template"

// Get the location configuration
const locationConfig = LOCATION_CONFIGS["palm-beach"]

// Generate location-specific SEO metadata
export const metadata = generateLocationMetadata(locationConfig)

export default function PalmBeachLocationPage() {
  const structuredData = generateLocationStructuredData(locationConfig)
  
  return (
    <>
      <LocationPage location={locationConfig} />
      
      {/* Location-Specific Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  )
}
```

### 3. Add location configuration (if not already present)

If the location is not in `LOCATION_CONFIGS`, add it to `src/lib/location-template.ts`:

```typescript
export const LOCATION_CONFIGS: Record<string, LocationConfig> = {
  // ... existing locations
  "new-location": {
    name: "New Location",
    slug: "new-location",
    region: "Gold Coast", // or "Northern NSW"
    state: "Queensland", // or "New South Wales"
    country: "AU"
  }
}
```

## Template Components

### LocationPage Component
- **File**: `src/components/mobile-services/location-page.tsx`
- **Purpose**: Generic page layout that works for any location
- **Props**: `{ location: LocationConfig }`

### LocationHero Component
- **File**: `src/components/mobile-services/location-hero.tsx`
- **Purpose**: Location-specific hero section
- **Props**: `{ location: string }`
- **Features**: 
  - Dynamic suburb name in heading
  - Location-specific description
  - Same CTA buttons as homepage
  - Customer avatars and reviews

### Location Template Utilities
- **File**: `src/lib/location-template.ts`
- **Functions**:
  - `generateLocationMetadata(location)` - Creates SEO metadata
  - `generateLocationStructuredData(location)` - Creates JSON-LD structured data
  - `getLocationConfig(slug)` - Gets location config by slug

## SEO Features

Each location page automatically includes:

### Metadata
- Location-specific title: "Mobile Mechanic [Location] - [Business Name]"
- Location-specific description with suburb name
- Location-specific keywords
- Canonical URL
- Open Graph tags for social media
- Twitter Card tags

### Structured Data
- LocalBusiness schema with location details
- Service offerings specific to the location
- Business hours and contact information
- Geographic area served

## Predefined Locations

The following locations are already configured:

- **Burleigh** (`/locations/burleigh`)
- **Palm Beach** (`/locations/palm-beach`)
- **Tweed Heads** (`/locations/tweed-heads`)
- **Helensvale** (`/locations/helensvale`)
- **Coolangatta** (`/locations/coolangatta`)

## Customization

### Adding New Locations

1. Add the location to `LOCATION_CONFIGS` in `src/lib/location-template.ts`
2. Create the page directory and file as shown above
3. The page will automatically inherit all SEO and functionality

### Modifying Location Content

To add location-specific content beyond the hero section:

1. Create a custom location component
2. Import and use it in the LocationPage component
3. Or extend the LocationPage component with additional sections

### SEO Customization

To customize SEO for specific locations:

1. Override the metadata in the page.tsx file
2. Or modify the `generateLocationMetadata` function for global changes

## File Structure

```
src/
├── app/
│   └── locations/
│       ├── burleigh/
│       │   └── page.tsx
│       ├── palm-beach/
│       │   └── page.tsx
│       └── [location]/
│           └── page.tsx
├── components/
│   └── mobile-services/
│       ├── location-page.tsx
│       └── location-hero.tsx
├── lib/
│   └── location-template.ts
└── docs/
    └── location-page-template.md
```

## Best Practices

1. **Consistent Naming**: Use kebab-case for slugs (e.g., "palm-beach")
2. **SEO Optimization**: Each location should target local keywords
3. **Content Quality**: Ensure location-specific content is valuable and unique
4. **Performance**: Template system ensures consistent performance across all locations
5. **Maintenance**: Updates to the template automatically apply to all location pages

## Testing

After creating a new location page:

1. Verify the page loads at `/locations/[slug]`
2. Check SEO metadata in browser dev tools
3. Validate structured data with Google's Rich Results Test
4. Test mobile responsiveness
5. Verify CTA buttons work (quote chat, phone calls)
6. Check that the page appears in sitemap.xml

## Future Enhancements

Potential improvements to the template system:

- Dynamic location parameter routing (`/locations/[slug]`)
- Location-specific service offerings
- Local business hours per location
- Location-specific testimonials
- Integration with Google My Business API
- Location-specific pricing or promotions 