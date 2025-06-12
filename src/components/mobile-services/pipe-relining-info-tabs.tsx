"use client"

import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function PipeReliningInfoTabs() {
  const [activeTab, setActiveTab] = useState('how-it-works')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const tabs = [
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'types-of-relining', label: 'Types of Relining' },
    { id: 'faqs', label: 'FAQs' }
  ]

  const faqs = [
    {
      question: "What are the benefits of pipe relining?",
      answer: "Pipe relining offers numerous benefits including no excavation required, faster completion times (usually within a day), cost-effectiveness compared to full replacement, minimal disruption to your property, a 50+ year lifespan, and improved flow capacity. It's an environmentally friendly solution that strengthens your existing pipes without destroying landscaping or structural elements."
    },
    {
      question: "What are the risks of pipe relining?",
      answer: "When performed by experienced professionals like Pipe Relining Pros, risks are minimal. However, potential concerns include ensuring proper pipe preparation, correct liner sizing, and adequate curing time. We mitigate these risks through thorough CCTV inspections, professional-grade materials, and strict quality control processes. Our 35-year warranty demonstrates our confidence in the process."
    },
    {
      question: "I've got blocked or broken pipes, what can I do?",
      answer: "Start by getting a professional CCTV drain inspection to identify the exact problem. Avoid using harsh chemicals that can damage pipes further. Contact Pipe Relining Pros for a comprehensive assessment - we can clear blockages with high-pressure water jetting and determine if pipe relining is the best solution for your specific situation."
    },
    {
      question: "How much does pipe relining cost?",
      answer: "Pipe relining costs vary depending on pipe diameter, length, accessibility, and damage extent. Generally, it's 50-80% less expensive than full pipe replacement. We provide free, no-obligation quotes with transparent pricing. Contact us for a personalized quote based on your specific needs and property requirements."
    },
    {
      question: "How long does pipe relining take?",
      answer: "Most residential pipe relining projects are completed within 4-8 hours in a single day. The process includes initial inspection, pipe preparation, liner installation, and curing time. Complex or longer pipe runs may take longer, but we'll provide accurate timeframes during your consultation. Your pipes are typically ready for use within hours of completion."
    },
    {
      question: "How long does pipe relining last?",
      answer: "Professional pipe relining typically lasts 50+ years when properly installed and maintained. The resin-cured liner creates a seamless, corrosion-resistant pipe that's often stronger than the original. Pipe Relining Pros provides a 35-year warranty on our workmanship, demonstrating our confidence in the longevity of our pipe relining solutions."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-hero/10 text-hero border-hero/20 mb-4">
              Learn More
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything You Need to Know About Pipe Relining
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get expert insights into our pipe relining process, technology, and frequently asked questions.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'outline'}
                className={activeTab === tab.id ? 'bg-hero hover:bg-hero/90 text-hero-foreground' : ''}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-background rounded-lg p-8 shadow-sm">
            {activeTab === 'how-it-works' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">How Pipe Relining Works</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>Pipe relining</strong> is an advanced process used to repair damaged or broken sewer pipes. It solves blocked drain issues using trenchless pipe technology without the disruption of digging up your yard or damaging your walls and floors.
                  </p>
                  <p>
                    Our pipe relining method is known as <strong>&ldquo;cured-in-place pipe&rdquo; (CIPP) relining</strong>, which involves relining existing plumbing pipes to repair broken, cracked, tree root-damaged, or otherwise compromised pipes. This innovative approach provides a permanent solution that&apos;s less invasive than traditional repair methods.
                  </p>
                  <p>
                    <strong>Pipe Relining Pros</strong> uses advanced pipe relining technology as a no-dig solution for fixing broken pipes. With comprehensive CCTV drain inspection, our process works effectively on various pipe materials including PVC, Copper, Cast Iron, Concrete, and Vitrified Clay pipes.
                  </p>
                  <p>
                    Instead of excavating your damaged pipes, our relining process repairs them using a high-grade resin-saturated textile liner. This pipe liner functions like a protective sleeve inside your existing pipes. Once precisely positioned, the liner is inflated and left to cure, forming a brand-new, seamless pipe that&apos;s incredibly strong and durable within your old damaged pipe structure.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'types-of-relining' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Types of Pipe Relining Technology</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>Pipe relining</strong> is a trenchless method of repairing pipelines and sewer systems. Several different pipe relining technologies are available today, including Cured-in-Place Pipe lining (CIPP), Pull-in-Place systems, Pipe bursting, Sliplining, and Internal Pipe Coating methods.
                  </p>
                  <p>
                    The pipe relining technology and industry are constantly evolving. <strong>Pipe Relining Pros</strong> stays at the forefront of these advances, utilizing state-of-the-art equipment and premium-grade materials that rank among the top performers in industry testing. We use this cutting-edge technology to deliver superior drain pipe relining and pipe repair services throughout Sydney.
                  </p>
                  <p>
                    Sydney&apos;s older housing stock makes the benefits of no-dig solutions and underground pipe relining particularly valuable. Our trenchless approach is the preferred method over traditional pipe replacement, which typically involves extensive excavation that can destroy gardens, driveways, and interior floors.
                  </p>
                  <p>
                    The future of pipe relining continues to advance as this technology proves to be significantly less expensive and disruptive than conventional pipe repair methods. With an expected service life of up to 50+ years and our comprehensive 35-year workmanship guarantee, pipe relining represents an intelligent, permanent solution to pipe problems that also delivers environmental benefits through reduced waste and disruption.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-border rounded-lg">
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                        onClick={() => toggleFaq(index)}
                      >
                        <h3 className="text-lg font-semibold text-foreground pr-4">
                          {faq.question}
                        </h3>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-hero flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 