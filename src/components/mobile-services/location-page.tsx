"use client"

import Header from "@/components/mobile-services/header"
import { Footer } from "@/components/mobile-services/footer"
import LocationHero from "@/components/mobile-services/location-hero"
import { MobileServicesGrid } from "@/components/mobile-services/mobile-services-grid"
import { LocationInfoSection } from "@/components/mobile-services/location-info-section"
import { MobileMechanicFaq } from "@/components/mobile-services/mobile-mechanic-faq"
import { Testimonials } from "@/components/mobile-services/testimonials"
import { Contact } from "@/components/mobile-services/contact"
import { QuoteChat } from "@/components/mobile-services/quote-chat"
import { QuoteChatProvider, useQuoteChat } from "@/contexts/quote-chat-context"
import type { LocationConfig } from "@/lib/location-template"

interface LocationPageProps {
  location: LocationConfig
}

function LocationPageContent({ location }: LocationPageProps) {
  const { isOpen } = useQuoteChat()
  
  return (
    <div className={`min-h-screen bg-background ${!isOpen ? 'pb-14 md:pb-0' : 'pb-0'}`}>
      {/* Header with Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Location-Specific Hero Section */}
        <LocationHero location={location.name} />
        
        {/* Services Grid Section */}
        <MobileServicesGrid />
        
        {/* Real Customer Comments Section */}
        <Testimonials />
        
        {/* Location Info Section with Car Image */}
        <LocationInfoSection location={location.name} />
        
        {/* FAQ Section */}
        <MobileMechanicFaq />
        
        {/* Ready to Get Started Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Quote Chat Widget */}
      <QuoteChat />
    </div>
  )
}

export function LocationPage({ location }: LocationPageProps) {
  return (
    <QuoteChatProvider>
      <LocationPageContent location={location} />
    </QuoteChatProvider>
  )
} 