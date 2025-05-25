// This template requires the Embla Auto Scroll plugin to be installed:
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://shadcnblocks.com/images/block/logos/astro.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://shadcnblocks.com/images/block/logos/figma.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://shadcnblocks.com/images/block/logos/react.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://shadcnblocks.com/images/block/logos/shadcn-ui.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://shadcnblocks.com/images/block/logos/supabase.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://shadcnblocks.com/images/block/logos/vercel.svg",
      className: "h-7 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {heading}
          </h2>
        </div>
        <div className="relative mx-auto flex items-center justify-center overflow-hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
            className="w-full max-w-none"
          >
            <CarouselContent className="ml-0 flex">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-3 flex shrink-0 items-center justify-center h-16 w-20">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className="max-h-12 max-w-16 w-auto h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 }; 