import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Award, Wrench } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Quick response time with same-day availability"
    },
    {
      icon: Award,
      title: "5-Star Rating",
      description: "200+ satisfied customers and excellent reviews"
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Experienced professionals with specialized equipment"
    }
  ]

  return (
    <section id="about" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted Mobile Service Experts
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re committed to providing exceptional service that exceeds your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 