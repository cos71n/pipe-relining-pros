import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Your Mobile Service Business'
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+1-555-123-4567'
  const serviceArea = process.env.NEXT_PUBLIC_SERVICE_AREA || 'Your City'
  
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{businessName}</h3>
            <p className="text-sm text-muted-foreground">
              Professional mobile services that come to you.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${businessPhone}`} className="hover:underline">
                  {businessPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Serving {serviceArea}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="#services" className="block hover:underline">Services</Link>
              <Link href="#about" className="block hover:underline">About</Link>
              <Link href="#contact" className="block hover:underline">Contact</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 {businessName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 