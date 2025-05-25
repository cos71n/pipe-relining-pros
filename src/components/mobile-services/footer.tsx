import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin } from "lucide-react"
import { useQuoteChat } from "@/contexts/quote-chat-context"

export function Footer() {
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '0468 358 074'
  const { openChat } = useQuoteChat()
  
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <Image
                src="https://static.wixstatic.com/media/b9ada1_4a29515a6c4241b89fd8e41292065500~mv2.png/v1/fill/w_247,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BorderMobileMechanic_LOGO_v2_PNG.png"
                alt="Border Mobile Mechanical"
                width={140}
                height={52}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Mobile mechanic services open 24/7 for regular & emergency services
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:ml-8">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="#services" className="block hover:underline">Services</Link>
              <Link href="#about" className="block hover:underline">About</Link>
              <button 
                onClick={openChat}
                className="block hover:underline text-left"
              >
                Contact
              </button>
              <div className="flex items-center gap-2 mt-4">
                <Phone className="w-4 h-4" />
                <a href={`tel:${businessPhone}`} className="hover:underline">
                  {businessPhone}
                </a>
              </div>
            </div>
          </div>
          
          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <div className="space-y-2 text-sm">
              <Link href="/locations/tweed-heads" className="block hover:underline">Tweed Heads</Link>
              <Link href="/locations/burleigh" className="block hover:underline">Burleigh</Link>
              <Link href="/locations/palm-beach" className="block hover:underline">Palm Beach</Link>
              <Link href="/locations" className="block hover:underline font-medium">All Locations</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2025 Border Mobile Mechanical. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 