import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useQuoteChat } from "@/contexts/quote-chat-context"

// Using the same services data as the homepage Gallery4 component
const servicesData = [
  {
    id: "oil-change",
    title: "Oil Change & Maintenance",
    description:
      "Quick and convenient oil changes with premium oil and filters. We also perform multi-point inspections to catch potential issues early.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/oil-change.webp",
  },
  {
    id: "logbook-service",
    title: "Logbook Service",
    description:
      "Complete manufacturer-specified logbook servicing to maintain your warranty. We follow all service schedules and use genuine parts.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/logbook.avif",
  },
  {
    id: "purchase-inspection",
    title: "Purchase Inspections",
    description:
      "Comprehensive pre-purchase vehicle inspections to help you make informed buying decisions. We check all major systems.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/purchase-inspection.avif",
  },
  {
    id: "breakdown-service",
    title: "Breakdown Service",
    description:
      "Emergency roadside assistance when you need it most. We provide fast response times for breakdowns and jump starts.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/breakdown.avif",
  },
  {
    id: "brake-services",
    title: "Brake Services",
    description:
      "Professional brake service at your location. We handle brake pad replacement, rotor resurfacing, and brake system diagnostics.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/brake.avif",
  },
  {
    id: "battery-services",
    title: "Battery Services",
    description:
      "Complete battery service including testing, cleaning terminals, and replacement with high-quality batteries.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/battery.avif",
  },
]

export function MobileServicesGrid() {
  const { openChat } = useQuoteChat()

  return (
    <div className="w-full py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge variant="secondary" className="bg-hero/10 text-hero border-hero/20">
                Our Services
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl font-extrabold lg:text-5xl tracking-tight max-w-4xl text-left">
                Professional Mobile Mechanic Services in Burleigh
              </h2>
              <p className="text-balance text-muted-foreground lg:text-lg max-w-3xl leading-relaxed text-left">
                From routine maintenance to emergency repairs, our fully equipped mobile workshop brings professional automotive service directly to your location in Burleigh.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="flex flex-col gap-4 group">
                <div className="rounded-lg aspect-video mb-2 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={320}
                    height={180}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 280px"
                    quality={75}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-2 self-start border-hero text-hero hover:bg-hero hover:text-hero-foreground"
                  onClick={openChat}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 