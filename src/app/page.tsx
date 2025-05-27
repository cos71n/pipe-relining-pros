"use client"

import Hero from "@/components/mobile-services/hero"
import { WhyChooseUs } from "@/components/mobile-services/why-choose-us"
import { ServiceArea } from "@/components/mobile-services/service-area"
import { Contact } from "@/components/mobile-services/contact"
import Header from "@/components/mobile-services/header"
import { Footer } from "@/components/mobile-services/footer"
import { QuoteChatProvider, useQuoteChat } from "@/contexts/quote-chat-context"
import dynamic from "next/dynamic"

// Dynamic imports for heavy components with carousel dependencies
const CarLogos = dynamic(() => import("@/components/mobile-services/car-logos").then(mod => ({ default: mod.CarLogos })), {
  loading: () => <div className="py-16 md:py-20"><div className="container mx-auto px-4"><div className="h-16 bg-muted/50 rounded animate-pulse"></div></div></div>,
  ssr: false
})

const Services = dynamic(() => import("@/components/mobile-services/services").then(mod => ({ default: mod.Services })), {
  loading: () => <div className="py-16 md:py-20"><div className="container mx-auto px-4"><div className="h-96 bg-muted/50 rounded animate-pulse"></div></div></div>,
  ssr: false
})

// Dynamic import for testimonials (below the fold, not critical for first paint)
const Testimonials = dynamic(() => import("@/components/mobile-services/testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="py-12 md:py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="h-64 bg-muted/50 rounded animate-pulse"></div></div></div>,
  ssr: false
})

const QuoteChat = dynamic(() => import("@/components/mobile-services/quote-chat").then(mod => ({ default: mod.QuoteChat })), {
  loading: () => null,
  ssr: false
})

function PageContent() {
  const { isOpen } = useQuoteChat()
  
  return (
    <div className={`min-h-screen bg-background ${!isOpen ? 'pb-14 md:pb-0' : 'pb-0'}`}>
      {/* Header with Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* Car Logos Section - Dynamically loaded */}
        <CarLogos />
        
        {/* Services Overview - Dynamically loaded */}
        <Services />
        
        {/* Testimonials - Dynamically loaded */}
        <Testimonials />
        
        {/* Why Choose Us */}
        <WhyChooseUs />
        
        {/* Service Area */}
        <ServiceArea />
        
        {/* Contact/Booking */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Quote Chat Widget - Dynamically loaded */}
      <QuoteChat />
    </div>
  )
}

export default function HomePage() {
  return (
    <QuoteChatProvider>
      <PageContent />
    </QuoteChatProvider>
  )
}
