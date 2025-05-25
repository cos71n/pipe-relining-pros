"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import { useQuoteChat } from "@/contexts/quote-chat-context"

export function Contact() {
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '0468 358 074'
  const { openChat } = useQuoteChat()
  
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Ready to Get Started?
          </h2>
          
          {/* CTA Buttons - matching hero style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-hero hover:bg-hero/90 text-hero-foreground"
              onClick={openChat}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Quick Quote
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-hero text-hero hover:bg-hero-muted">
              <a href={`tel:${businessPhone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {businessPhone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 