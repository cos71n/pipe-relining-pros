import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

export function ServiceArea() {
  const locations = [
    "North Shore",
    "Eastern Suburbs",
    "Inner West",
    "Sutherland & St George",
    "Hills District",
    "Northern Districts",
    "Western Sydney",
    "Macarthur",
    "Northern Beaches",
    "Liverpool & South West"
  ]
  
  return (
    <section id="service-area" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">Service Area</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <MapPin className="w-8 h-8 text-primary inline mr-2" />
            Servicing the Greater Sydney Area
          </h2>
          <p className="text-lg text-muted-foreground mb-8 md:mb-12">
            We provide pipe relining Sydney wide and can help you wherever you are.
          </p>
          
          {/* Location Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {locations.map((location, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto py-3 px-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <a href={`/locations/${location.toLowerCase().replace(/\s+/g, '-')}`}>
                  {location}
                </a>
              </Button>
            ))}
          </div>
          
          {/* See All Locations Link */}
          <Button variant="ghost" className="text-primary hover:text-primary/80" asChild>
            <a href="/locations">
              See all locations we service
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
} 