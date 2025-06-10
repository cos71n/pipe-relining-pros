import React from 'react'
import Image from 'next/image'

export default function PipeReliningInfo() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Pipe Relining Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/pipe-relining-pros/pipe-relining-sydney.png"
                alt="Pipe relining services in Sydney - Expert trenchless pipe repair"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                loading="lazy"
                quality={90}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Expert Pipe Relining Services in Sydney
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  When your pipes are damaged, cracked, or blocked, traditional repair methods often require expensive excavation that disrupts your property. Our advanced pipe relining technology offers a better solution for Sydney homeowners and businesses.
                </p>
                
                <p>
                  Using state-of-the-art trenchless technology, we insert a new pipe liner inside your existing damaged pipes, creating a seamless, durable replacement that lasts for decades. This no-dig approach saves time, money, and protects your landscaping.
                </p>
                
                <p>
                  Our Sydney pipe relining specialists have successfully completed thousands of projects across the metropolitan area, from residential bathroom repairs to large commercial sewer line rehabilitations. We're fully licensed, insured, and committed to delivering lasting solutions.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Benefits of Pipe Relining:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-hero mt-2 flex-shrink-0"></div>
                      <span>No excavation required - minimal disruption to your property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-hero mt-2 flex-shrink-0"></div>
                      <span>Cost-effective alternative to traditional pipe replacement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-hero mt-2 flex-shrink-0"></div>
                      <span>Long-lasting solution with 50+ year lifespan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-hero mt-2 flex-shrink-0"></div>
                      <span>Suitable for all pipe materials and sizes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 