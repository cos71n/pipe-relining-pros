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
    id: "pipe-relining",
    title: "Pipe Relining",
    description:
      "Advanced trenchless pipe relining technology that repairs damaged pipes without excavation. Long-lasting solution with 50+ year lifespan.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/pipe-relining.jpg",
  },
  {
    id: "blocked-drains",
    title: "Blocked Drains",
    description:
      "Fast and effective blocked drain clearing using high-pressure water jetting and specialist equipment. Same-day service available.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/blocked-drains.jpg",
  },
  {
    id: "drain-inspections",
    title: "Drain Inspections",
    description:
      "Comprehensive CCTV drain inspections to identify blockages, cracks, and structural issues. Detailed reports with repair recommendations.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/cctv-drain.jpg",
  },
  {
    id: "robotic-cutting",
    title: "Robotic Cutting",
    description:
      "Precision robotic cutting services to remove tree roots, debris, and obstructions from your pipes. Minimal disruption to your property.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/robotic-cutting.jpg",
  },
  {
    id: "no-dig-repair",
    title: "No Dig Pipe Repair",
    description:
      "Revolutionary no-dig pipe repair solutions that fix damaged pipes without destroying your landscaping, driveways, or flooring.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/no-dig-pipe-repair.jpg",
  },
  {
    id: "sewer-line-repair",
    title: "Sewer Line Repair",
    description:
      "Expert sewer line repair services using modern techniques and equipment. We handle everything from minor repairs to complete sewer line replacement.",
    href: "#contact",
    image:
      "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/sewer-line-repair.jpg",
  },
];

const Gallery4 = ({
  description = "Blocked drains? Cracked pipes? We&apos;ll refresh your old pipes with a range of pipe relining and repair services in Sydney.",
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
            Pipe Repair Services in Sydney
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
                        width={320}
                        height={240}
                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 320px"
                        loading="lazy"
                        quality={75}
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

export default Gallery4; 