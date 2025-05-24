import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export function ServiceArea() {
  const serviceArea = process.env.NEXT_PUBLIC_SERVICE_AREA || 'Your City'
  
  return (
    <section id="service-area" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4">Service Area</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <MapPin className="w-8 h-8 text-primary inline mr-2" />
            Serving {serviceArea}
          </h2>
          <p className="text-lg text-muted-foreground">
            We proudly serve {serviceArea} and surrounding areas with professional mobile services.
          </p>
        </div>
      </div>
    </section>
  )
} 