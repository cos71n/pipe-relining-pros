import { Badge } from "@/components/ui/badge"

export interface FaqItem {
  question: string;
  answer: string;
}

const mobileMechanicFaqs: FaqItem[] = [
  {
    question: "What areas do you service in Burleigh?",
    answer:
      "We provide mobile mechanic services throughout Burleigh and surrounding Gold Coast areas. We come to your home, workplace, or wherever your car is located - no need to visit a workshop.",
  },
  {
    question: "How quickly can you get to me?",
    answer:
      "We offer same-day service and can typically reach you within 2-4 hours of your call. For emergency breakdowns, we prioritize urgent calls and aim to be there as soon as possible.",
  },
  {
    question: "What services can you perform on-site?",
    answer:
      "Our fully equipped mobile workshop can handle most car services including oil changes, brake repairs, battery replacement, diagnostics, tune-ups, and general maintenance. We bring all necessary tools and equipment to you.",
  },
  {
    question: "Do you work on all car makes and models?",
    answer:
      "Yes, we service all major car brands including Toyota, Honda, Ford, Mazda, Subaru, VW, BMW, Mercedes, Audi, Hyundai, and many more. Our experienced mechanics are trained to work on both domestic and imported vehicles.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing is competitive and transparent. We provide upfront quotes before starting any work, with no hidden fees. Mobile service rates include the convenience of coming to you, often saving you money on towing costs.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. We are fully licensed mobile mechanics with comprehensive insurance coverage. All our work comes with a warranty, and we use quality parts and professional equipment for every job.",
  },
];

export function MobileMechanicFaq() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Badge variant="secondary" className="bg-hero/10 text-hero border-hero/20 text-xs font-medium">
            FAQ
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold lg:text-5xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-balance text-muted-foreground lg:text-lg max-w-3xl mx-auto">
            Get answers to common questions about our mobile mechanic services in Burleigh and the Gold Coast area.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-screen-sm">
          {mobileMechanicFaqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-hero/10 font-mono text-xs text-hero border border-hero/20">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{faq.question}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 