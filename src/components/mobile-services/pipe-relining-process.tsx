import React from 'react'
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function PipeReliningProcess() {
  const processSteps = [
    {
      stage: 1,
      title: "Clear blockages with high-pressure water jetting",
      description: "We start by thoroughly clearing any blockages using our powerful water jetting equipment to prepare your pipes for relining."
    },
    {
      stage: 2,
      title: "Detailed inspection with snake CCTV camera",
      description: "Our advanced CCTV camera technology pinpoints and marks the exact location and extent of pipe damage for precise repair."
    },
    {
      stage: 3,
      title: "Position resin-lined sleeve in damaged section",
      description: "We carefully insert our specially designed resin-lined packer and position it precisely over the damaged area of your pipe."
    },
    {
      stage: 4,
      title: "Inflate sleeve to bond resin with pipe walls",
      description: "The packer is inflated, pressing the resin liner firmly against your existing pipe walls to create a perfect seal."
    },
    {
      stage: 5,
      title: "Cure resin to form permanent new pipe lining",
      description: "We remove the packer and allow the resin to cure, forming a strong, seamless new pipe lining inside your existing pipe."
    },
    {
      stage: 6,
      title: "Final inspection to confirm perfect seal",
      description: "A thorough final inspection ensures your newly lined pipe is completely sealed and ready for years of reliable service."
    }
  ]

  return (
    <section id="our-process" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - SEO Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-hero/10 text-hero border-hero/20">
                Our Process
              </Badge>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                The Process Behind Professional Pipe Relining
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our <strong>pipe relining process in Sydney</strong> follows a proven 6-stage methodology that ensures lasting results without excavation. We&apos;ve perfected this <strong>trenchless pipe repair process</strong> through thousands of successful projects across Sydney&apos;s residential and commercial properties.
              </p>
              
              <p>
                Each stage of our <strong>no-dig pipe relining procedure</strong> is designed to deliver maximum durability and minimal disruption. From initial blockage clearing to final quality inspection, our <strong>Sydney pipe relining specialists</strong> use state-of-the-art equipment and premium materials to create a new pipe within your existing pipe.
              </p>

              <p>
                The entire <strong>pipe relining installation process</strong> typically takes just one day, and your pipes are ready for use within hours. Our systematic approach ensures that every <strong>pipe relining project in Sydney</strong> meets our strict quality standards and provides our customers with a reliable, long-lasting solution.
              </p>

              <div className="mt-6 p-6 bg-hero/5 rounded-lg border border-hero/20">
                <h3 className="text-xl font-semibold text-foreground mb-3">Why Our Process Works</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hero mt-0.5 flex-shrink-0" />
                    <span><strong>No excavation required</strong> - protect your landscaping and property</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hero mt-0.5 flex-shrink-0" />
                    <span><strong>Minimal disruption</strong> - most projects completed in a single day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hero mt-0.5 flex-shrink-0" />
                    <span><strong>50+ year lifespan</strong> - long-term solution that lasts decades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hero mt-0.5 flex-shrink-0" />
                    <span><strong>Cost-effective</strong> - significantly cheaper than full pipe replacement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side - Process Steps */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Our 6-Stage Pipe Relining Process
            </h3>
            
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.stage} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-hero text-hero-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {step.stage}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">
                      Stage {step.stage}: {step.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 