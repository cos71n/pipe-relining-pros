"use client"

import React from 'react';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Star, Clock, MessageCircle } from "lucide-react"
import { useQuoteChat } from "@/contexts/quote-chat-context"

interface LocationHeroProps {
  location: string
}

export default function LocationHero({ location }: LocationHeroProps) {
  const { openChat } = useQuoteChat()
  
  // Environment-based business info
  // const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Border Mobile Mechanic'
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '0468 358 074'

  // Customer avatars for social proof (same as homepage)
  const customerAvatars = [
    {
      src: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/reviews/ken.png",
      alt: "Ken Salale",
    },
    {
      src: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/reviews/liah.png",
      alt: "Liah Williams",
    },
    {
      src: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/reviews/salome.png",
      alt: "Salome Chemouilli",
    },
    {
      src: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/reviews/grant.png",
      alt: "Grant",
    },
    {
      src: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/reviews/christopher.png",
      alt: "Christopher Parker",
    },
  ]

  return (
    <section className="py-12 md:py-32">
      <div className="container text-center mx-auto">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-4 md:gap-6 items-center">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-2 mb-2 md:mb-4">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
              <Clock className="w-3 h-3 mr-1" />
              Same Day Service
            </Badge>
          </div>

          {/* Location-Specific Hero Heading */}
          <h1 className="text-3xl font-extrabold lg:text-6xl text-center">
            <span className="text-foreground">Mobile Mechanic</span>{" "}
            That Comes To You{" "}
            <span className="text-hero">in {location}</span>
          </h1>
          
          <p className="text-balance text-muted-foreground lg:text-lg text-center max-w-4xl">
            We will come to you in {location} and work on your car where you need us to - home, work or even if you&apos;ve broken down. We&apos;re a fully equipped mobile mechanic in {location}, reliable and ready to help you now.
          </p>
        </div>

        {/* CTA Buttons - Same as homepage */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 md:mt-10">
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

        {/* Social Proof with Customer Avatars and Reviews - Same as homepage */}
        <div className="mx-auto mt-6 md:mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row justify-center">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {customerAvatars.map((avatar, index) => (
              <div key={index} className="size-14 rounded-full overflow-hidden border">
                <img 
                  src={avatar.src} 
                  alt={avatar.alt}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    console.log('Location hero image failed to load:', avatar.src);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log('Location hero image loaded successfully:', avatar.src);
                  }}
                />
              </div>
            ))}
          </span>
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-center sm:text-left font-medium text-muted-foreground">
              rated on <span className="font-bold">
                <span className="text-blue-600">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-600">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </span> reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 