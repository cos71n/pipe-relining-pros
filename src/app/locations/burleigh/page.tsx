import { LocationPage } from "@/components/mobile-services/location-page"
import { LOCATION_CONFIGS, generateLocationMetadata, generateLocationStructuredData } from "@/lib/location-template"

// Get the location configuration
const locationConfig = LOCATION_CONFIGS.burleigh

// Generate location-specific SEO metadata
export const metadata = generateLocationMetadata(locationConfig)

export default function BurleighLocationPage() {
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