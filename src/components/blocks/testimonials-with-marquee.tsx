import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 md:py-20 px-0",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div 
            className="flex gap-4 hover:[animation-play-state:paused] animate-marquee-seamless"
            style={{
              width: 'max-content',
              '--duration': '60s'
            } as React.CSSProperties}
          >
            {/* First set of testimonials */}
            {testimonials.slice(0, 8).map((testimonial, i) => (
              <TestimonialCard 
                key={`set1-${i}`}
                {...testimonial}
                className="flex-shrink-0"
              />
            ))}
            
            {/* Second set of testimonials for seamless loop */}
            {testimonials.slice(0, 8).map((testimonial, i) => (
              <TestimonialCard 
                key={`set2-${i}`}
                {...testimonial}
                className="flex-shrink-0"
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}