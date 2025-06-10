import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useQuoteChat } from "@/contexts/quote-chat-context"

// Pipe relining services data for Sydney
const servicesData = [
  {
    id: "pipe-relining",
    title: "Pipe Relining",
    description:
      "Advanced trenchless pipe relining technology that repairs damaged pipes without excavation. Long-lasting solution with 50+ year lifespan.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/services/pipe-relining.jpg",
  },
  {
    id: "blocked-drains",
    title: "Blocked Drains",
    description:
      "Fast and effective blocked drain clearing using high-pressure water jetting and specialist equipment. Same-day service available.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/services/blocked-drains.jpg",
  },
  {
    id: "drain-inspections",
    title: "Drain Inspections",
    description:
      "Comprehensive CCTV drain inspections to identify blockages, cracks, and structural issues. Detailed reports with repair recommendations.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/services/drain-inspections.jpg",
  },
  {
    id: "robotic-cutting",
    title: "Robotic Cutting",
    description:
      "Precision robotic cutting services to remove tree roots, debris, and obstructions from your pipes. Minimal disruption to your property.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/services/robotic-cutting.jpg",
  },
  {
    id: "no-dig-repair",
    title: "No Dig Pipe Repair",
    description:
      "Revolutionary no-dig pipe repair solutions that fix damaged pipes without destroying your landscaping, driveways, or flooring.",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/services/no-dig-repair.jpg",
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
                Pipe Repair Services in Sydney
              </h2>
              <p className="text-balance text-muted-foreground lg:text-lg max-w-3xl leading-relaxed text-left">
                Blocked drains? Cracked pipes? We'll refresh your old pipes with a range of pipe relining and repair services in Sydney.
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