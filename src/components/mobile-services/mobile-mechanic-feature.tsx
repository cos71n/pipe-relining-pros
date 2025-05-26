import Image from "next/image"
import { Badge } from "@/components/ui/badge"

function MobileMechanicFeature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          <div className="rounded-md w-full aspect-video h-full flex-1 overflow-hidden">
            <Image
              src="https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/border-van.jpg"
              alt="Border Mobile Mechanical van - Professional mobile mechanic service"
              width={800}
              height={450}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
              loading="lazy"
              quality={85}
            />
          </div>
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
            <div>
              <Badge variant="secondary" className="bg-hero/10 text-hero border-hero/20">
                Mobile Service
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl font-extrabold lg:text-6xl tracking-tight lg:max-w-xl text-left">
                Mobile Mechanic Burleigh
              </h2>
              <p className="text-balance text-muted-foreground lg:text-lg max-w-xl lg:max-w-sm leading-relaxed text-left">
                Skip the hassle of visiting a workshop or paying for expensive towing. 
                Our fully equipped mobile mechanics come to you in Burleigh with professional tools 
                and expertise to get your car running smoothly again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MobileMechanicFeature } 