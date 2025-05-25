"use client";

import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useQuoteChat } from "@/contexts/quote-chat-context";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const data = [
  {
    id: "oil-change",
    title: "Oil Change & Maintenance",
    description:
      "Quick and convenient oil changes with premium oil and filters. We also perform multi-point inspections to catch potential issues early and keep your vehicle running smoothly.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/oil-change.jpeg",
  },
  {
    id: "logbook-service",
    title: "Logbook Service",
    description:
      "Complete manufacturer-specified logbook servicing to maintain your warranty. We follow all service schedules and use genuine or approved parts to keep your vehicle in peak condition.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/logbook.avif",
  },
  {
    id: "purchase-inspection",
    title: "Purchase Inspections",
    description:
      "Comprehensive pre-purchase vehicle inspections to help you make informed buying decisions. We check all major systems and provide detailed reports on the vehicle's condition.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/purchase-inspection.avif",
  },
  {
    id: "breakdown-service",
    title: "Breakdown Service",
    description:
      "Emergency roadside assistance when you need it most. We provide fast response times for breakdowns, jump starts, flat tire changes, and getting you back on the road safely.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/breakdown.avif",
  },
  {
    id: "brake-services",
    title: "Brake Services",
    description:
      "Professional brake service at your location. We handle brake pad replacement, rotor resurfacing, brake fluid changes, and complete brake system diagnostics to keep you safe on the road.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/brake.avif",
  },
  {
    id: "battery-services",
    title: "Battery Services",
    description:
      "Complete battery service including testing, cleaning terminals, and replacement with high-quality batteries. We'll ensure your car starts reliably every time.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/battery.avif",
  },
  {
    id: "engine-diagnostics",
    title: "Engine Diagnostics & Repair",
    description:
      "Advanced diagnostic equipment to identify engine problems quickly. From check engine lights to performance issues, we provide expert repairs at your location.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/engine-repair.jpeg",
  },
  {
    id: "ac-heating",
    title: "AC & Heating Service",
    description:
      "Stay comfortable year-round with our climate control services. We repair and service air conditioning, heating systems, and cabin air filters for optimal comfort.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/services/ac-heating.avif",
  },
];

const Gallery4 = ({
  title = "Our Services",
  description = "Border Mobile Mechanical can help you with your car issue, wherever you are. From routine maintenance to complex repairs, we bring the garage to your location with fully equipped vehicles and expert technicians.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openChat } = useQuoteChat();

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header - matching site style */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Mobile Services
            <span className="text-primary"> That Come to You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-end mb-8">
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
          >
            <CarouselContent className="ml-0">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                >
                  <div className="group rounded-xl">
                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        width={360}
                        height={270}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                        <div className="mb-2 pt-4 text-xl font-bold md:mb-3 md:pt-4 lg:pt-4 drop-shadow-lg">
                          {item.title}
                        </div>
                        <div className="mb-6 line-clamp-3 text-sm md:text-base text-white/95 md:mb-8 lg:mb-6 drop-shadow-md">
                          {item.description}
                        </div>
                        <Button 
                          className="bg-hero hover:bg-hero/90 text-hero-foreground shadow-lg"
                          onClick={(e) => {
                            e.preventDefault();
                            openChat();
                          }}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Get Quick Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Dots indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery4 }; 