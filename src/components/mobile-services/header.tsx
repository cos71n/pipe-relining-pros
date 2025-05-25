"use client"

import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Phone, Menu, MapPin, Clock, MessageCircle } from "lucide-react"
import { useQuoteChat } from "@/contexts/quote-chat-context"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { openChat } = useQuoteChat()
  
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE || "0468 358 074"

  // Environment-based business info
  // const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Border Mobile Mechanic'
  // const serviceArea = process.env.NEXT_PUBLIC_SERVICE_AREA || 'Your City'

  const navigationItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#service-area", label: "Locations" },
  ]

  const handleGetQuoteClick = () => {
    openChat()
    setIsOpen(false) // Close mobile menu if open
  }

  // Scroll detection for dynamic shadow
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95 transition-shadow duration-300 ${
      isScrolled ? 'shadow-sm' : ''
    }`}>
      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://static.wixstatic.com/media/b9ada1_4a29515a6c4241b89fd8e41292065500~mv2.png/v1/fill/w_247,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BorderMobileMechanic_LOGO_v2_PNG.png"
              alt="Border Mobile Mechanic"
              width={140}
              height={52}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Aligned with hero content */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="max-w-screen-lg w-full flex justify-center">
              <nav className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="hidden sm:inline-flex bg-hero hover:bg-hero/90 text-hero-foreground"
              onClick={handleGetQuoteClick}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              Get Quick Quote
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${businessPhone}`}>
                <Phone className="w-4 h-4 mr-1" />
                Call Now
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Access navigation links, contact information, and quick quote options
                </SheetDescription>
                
                <div className="flex flex-col space-y-4 mt-4">
                  <div className="flex items-center space-x-2 pb-4 border-b">
                    <Image
                      src="https://static.wixstatic.com/media/b9ada1_4a29515a6c4241b89fd8e41292065500~mv2.png/v1/fill/w_247,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BorderMobileMechanic_LOGO_v2_PNG.png"
                      alt="Border Mobile Mechanic"
                      width={120}
                      height={44}
                      className="h-10 w-auto"
                    />
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium py-2 px-3 rounded-md hover:bg-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-4 border-t space-y-2">
                    <Button 
                      className="w-full bg-hero hover:bg-hero/90 text-hero-foreground" 
                      onClick={handleGetQuoteClick}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Quick Quote
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`tel:${businessPhone}`}>Call {businessPhone}</a>
                    </Button>
                  </div>

                  <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Gold Coast & Northern NSW</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>24/7 for regular & emergency services</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
} 