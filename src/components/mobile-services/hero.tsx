"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Phone, Star, CheckCircle, Clock, MessageCircle } from "lucide-react"
import { useQuoteChat } from "@/contexts/quote-chat-context"

export function Hero() {
  const { openChat } = useQuoteChat()
  
  // Environment-based business info
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Border Mobile Mechanic'
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '0468 358 074'
  const serviceArea = process.env.NEXT_PUBLIC_SERVICE_AREA || 'Your City'

  // Customer avatars for social proof
  const customerAvatars = [
    {
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      alt: "Happy Customer 1",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      alt: "Happy Customer 2",
    },
    {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      alt: "Happy Customer 3",
    },
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      alt: "Happy Customer 4",
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      alt: "Happy Customer 5",
    },
  ]

  return (
    <section className="py-16 md:py-32">
      <div className="container text-center mx-auto">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6 items-center">
          {/* Trust Indicators - Preserved from original */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
              <Clock className="w-3 h-3 mr-1" />
              Same Day Service
            </Badge>
          </div>

          {/* Modern Hero Heading */}
          <h1 className="text-3xl font-extrabold lg:text-6xl text-center">
            <span className="text-foreground">Mobile Mechanic</span>{" "}
            That Comes To You{" "}
            <span className="text-foreground">On The Gold Coast & Northern NSW</span>
          </h1>
          
          <p className="text-balance text-muted-foreground lg:text-lg text-center max-w-4xl">
            Skip the hassle of visiting a workshop, or paying to get your car towed somewhere. Get expert service 
            wherever your car is with our fully equipped mobile mechanic service. 
            Convenient and reliable service in the Gold Coast & Northern NSW regions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
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

        {/* Social Proof with Customer Avatars and Reviews */}
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row justify-center">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {customerAvatars.map((avatar, index) => (
              <Avatar key={index} className="size-14 border">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
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