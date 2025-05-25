"use client"

import { Hero } from "@/components/mobile-services/hero"
import { CarLogos } from "@/components/mobile-services/car-logos"
import { Services } from "@/components/mobile-services/services"
import { WhyChooseUs } from "@/components/mobile-services/why-choose-us"
import { ServiceArea } from "@/components/mobile-services/service-area"
import { Testimonials } from "@/components/mobile-services/testimonials"
import { Contact } from "@/components/mobile-services/contact"
import { Header } from "@/components/mobile-services/header"
import { Footer } from "@/components/mobile-services/footer"
import { QuoteChat } from "@/components/mobile-services/quote-chat"
import { QuoteChatProvider, useQuoteChat } from "@/contexts/quote-chat-context"

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
        
        {/* Car Logos Section */}
        <CarLogos />
        
        {/* Services Overview */}
        <Services />
        
        {/* Testimonials */}
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
      
      {/* Quote Chat Widget */}
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
