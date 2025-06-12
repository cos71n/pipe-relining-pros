import React from 'react';
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
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
                src="https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/pipe-relining-pros-logo.png"
                alt="Pipe Relining Pros"
                width={264}
                height={100}
                className="w-auto"
                style={{ height: '100px' }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Professional pipe relining services for Sydney. No-dig pipe repairs and relining solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:ml-8">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="#services" className="block hover:underline">Services</Link>
              <Link href="#our-process" className="block hover:underline">About</Link>
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
              <span className="block">North Shore</span>
              <span className="block">Eastern Suburbs</span>
              <span className="block">Inner West</span>
              <span className="block font-medium">All Locations</span>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2025 Pipe Relining Pros. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 