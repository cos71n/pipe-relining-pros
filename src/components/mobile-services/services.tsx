"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Scissors, 
  Sparkles, 
  Car, 
  Phone, 
  Clock, 
  CheckCircle,
  ArrowRight 
} from "lucide-react"

export function Services() {
  const services = [
    {
      id: "mobile-mechanic",
      icon: Car,
      title: "Mobile Mechanic",
      description: "Complete automotive repair and maintenance at your location",
      features: [
        "Oil changes & tune-ups",
        "Brake repair & replacement",
        "Battery testing & replacement", 
        "Diagnostic services",
        "Engine repairs",
        "AC/Heating service"
      ],
      pricing: "Starting at $89",
      popular: true,
      badgeText: "Most Popular"
    },
    {
      id: "mobile-grooming",
      icon: Scissors,
      title: "Mobile Pet Grooming",
      description: "Professional pet grooming in the comfort of your home",
      features: [
        "Full-service grooming",
        "Nail trimming & filing",
        "Ear cleaning",
        "Teeth brushing",
        "Flea & tick treatment",
        "Mobile grooming van"
      ],
      pricing: "Starting at $65",
      popular: false,
      badgeText: "Same Day"
    },
    {
      id: "mobile-cleaning",
      icon: Sparkles,
      title: "Mobile Cleaning",
      description: "Professional cleaning services for homes and businesses",
      features: [
        "Deep house cleaning",
        "Office cleaning",
        "Window cleaning",
        "Carpet cleaning",
        "Move-in/out cleaning",
        "Eco-friendly products"
      ],
      pricing: "Starting at $120",
      popular: false,
      badgeText: "Eco-Friendly"
    }
  ]

  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+1-555-123-4567'

  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Mobile Services
            <span className="text-primary"> That Come to You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Save time and hassle with our convenient mobile services. 
            We bring the expertise directly to your location with fully equipped vehicles and professional teams.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={service.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  service.popular ? 'border-primary shadow-md' : 'border-border'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                    {service.badgeText}
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${
                      service.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {!service.popular && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badgeText}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-foreground">{service.pricing}</span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>Same day</span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-2">
                      <Button 
                        className={`w-full ${
                          service.popular ? 'bg-primary hover:bg-primary/90' : ''
                        }`}
                        variant={service.popular ? 'default' : 'outline'}
                      >
                        Get Free Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full" asChild>
                        <a href={`tel:${businessPhone}`}>
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Service Process */}
        <div className="bg-muted/30 rounded-xl p-6 md:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              How It Works
            </h3>
            <p className="text-muted-foreground">
              Simple, fast, and convenient service in 3 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">Book Service</h4>
              <p className="text-sm text-muted-foreground">
                Call us or request a quote online. We&apos;ll schedule a convenient time for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">We Come to You</h4>
              <p className="text-sm text-muted-foreground">
                Our professional team arrives at your location with all necessary equipment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">Service Complete</h4>
              <p className="text-sm text-muted-foreground">
                Enjoy professional service with guaranteed satisfaction and upfront pricing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Need a different service? We&apos;ve got you covered.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href={`tel:${businessPhone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call for Custom Quote
              </a>
            </Button>
            <Button size="lg" variant="outline">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 