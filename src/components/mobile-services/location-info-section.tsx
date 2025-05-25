import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import { useQuoteChat } from "@/contexts/quote-chat-context"

interface LocationInfoSectionProps {
  location: string
}

export function LocationInfoSection({ location }: LocationInfoSectionProps) {
  const { openChat } = useQuoteChat()
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '0468 358 074'

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - SEO Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-hero/10 text-hero border-hero/20">
                <MapPin className="w-3 h-3 mr-1" />
                Local Service Area
              </Badge>
              
              <h2 className="text-3xl font-extrabold lg:text-4xl tracking-tight text-foreground">
                Mobile Mechanic Services in {location}
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Looking for a reliable <strong>mobile mechanic in {location}</strong>? Border Mobile Mechanical 
                provides professional automotive services directly to your location throughout {location} and 
                surrounding Gold Coast areas. Our <strong>mobile mechanic near me</strong> service eliminates 
                the hassle of visiting traditional workshops or arranging expensive towing.
              </p>
              
              <p>
                Our fully equipped mobile workshop serves {location} residents and businesses with comprehensive 
                <strong>car service {location}</strong> solutions. From routine <strong>oil changes in {location}</strong> 
                to emergency <strong>breakdown service {location}</strong>, we bring professional automotive expertise 
                directly to your home, workplace, or roadside location. Our <strong>{location} mobile mechanic</strong> 
                team is equipped with advanced diagnostic tools and quality parts to handle most automotive repairs 
                and maintenance on-site.
              </p>

              <p>
                Whether you need <strong>brake service {location}</strong>, <strong>battery replacement {location}</strong>, 
                logbook servicing, or pre-purchase inspections, our <strong>mobile car service {location}</strong> 
                covers all major automotive needs. We're proud to serve the {location} community with same-day service, 
                competitive pricing, and the convenience of professional <strong>auto repair {location}</strong> 
                that comes to you.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-hero hover:bg-hero/90 text-hero-foreground"
                onClick={openChat}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Quote for {location}
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-hero text-hero hover:bg-hero-muted"
              >
                <a href={`tel:${businessPhone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: {businessPhone}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Mobile Mechanic Van Image */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Professional Mobile Service
            </h3>
            
            <div className="rounded-lg overflow-hidden shadow-lg border bg-background">
              <Image
                src="https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/border-van.jpg"
                alt="Border Mobile Mechanical van - Professional mobile mechanic service in {location}"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
                priority={false}
                quality={85}
              />
            </div>
            
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-hero" />
                Servicing {location} and surrounding Gold Coast areas
              </p>
              <p>
                Our fully equipped mobile workshop comes to you - no need to visit a workshop. 
                Available for home visits, workplace service calls, and emergency roadside assistance throughout {location}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 