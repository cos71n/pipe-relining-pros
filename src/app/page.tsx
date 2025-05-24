import { Hero } from "@/components/mobile-services/hero"
import { Services } from "@/components/mobile-services/services"
import { WhyChooseUs } from "@/components/mobile-services/why-choose-us"
import { ServiceArea } from "@/components/mobile-services/service-area"
import { Testimonials } from "@/components/mobile-services/testimonials"
import { Contact } from "@/components/mobile-services/contact"
import { Header } from "@/components/mobile-services/header"
import { Footer } from "@/components/mobile-services/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* Services Overview */}
        <Services />
        
        {/* Why Choose Us */}
        <WhyChooseUs />
        
        {/* Service Area */}
        <ServiceArea />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Contact/Booking */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
