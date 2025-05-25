import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export function Contact() {
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '0468 358 074'
  
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Ready to Get Started?
          </h2>
          
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 space-y-4">
              <Button size="lg" className="w-full" asChild>
                <a href={`tel:${businessPhone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call {businessPhone}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 