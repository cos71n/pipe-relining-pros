import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

export function Testimonials() {
  // R2 bucket configuration for Border Mobile Mechanical
  const R2_BASE_URL = "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev"
  const TENANT_PREFIX = "border-mobile-mechanical"
  
  const getReviewImageUrl = (filename: string) => {
    return `${R2_BASE_URL}/${TENANT_PREFIX}/reviews/${filename}`
  }

  const mobileServicesTestimonials = [
    {
      author: {
        name: "Christopher Parker",
        handle: "@google_review",
        avatar: getReviewImageUrl("christopher.png")
      },
      text: "The team are absolute legends. Fixed our blocked drain that had been causing problems for months, and they did it with a smile even though it was a challenging job. Good old fashioned service. Highly recommend 👍"
    },
    {
      author: {
        name: "Liah Williams",
        handle: "@google_review",
        avatar: getReviewImageUrl("liah.png")
      },
      text: "Huge thank you for coming to my rescue! Our sewer pipe collapsed unexpectedly, and they were kind enough to come out and provide pipe relining on just a few hours' notice. Super professional, fast, and friendly—truly grateful for the help!"
    },
    {
      author: {
        name: "Maddison Bailey",
        handle: "@google_review",
        avatar: getReviewImageUrl("maddison.png")
      },
      text: "Called up for a drain inspection, and they were able to provide a full CCTV assessment on the same day. Prompt communicators, who explained everything thoroughly (to someone who doesn't know anything about plumbing!!). They were able to fix the pipe relining issue straight away the next day, and honestly our drainage has never worked better! Super reasonable price, with a breakdown explained bit by bit. Would one hundred percent recommend this service!!"
    },
    {
      author: {
        name: "robb 4220",
        handle: "@google_review",
        avatar: getReviewImageUrl("robb.png")
      },
      text: "The team came out to me on time as usual and had the entire pipe relining job done in just over two hours👌100% recommend to anyone and everyone. Only $200 more than the quote I got elsewhere and they came to me with no digging required=Legends."
    },
    {
      author: {
        name: "Sophie",
        handle: "@google_review",
        avatar: getReviewImageUrl("sophie.png")
      },
      text: "They were amazing! Had a major blockage that was causing sewage backup and called them to help. Within an hour they were at my door with the high-pressure water jetting equipment (which I was sure would've taken days to organise). Super honest team with great work and price to match!! Highly recommend"
    },
    {
      author: {
        name: "Thomas Derraik",
        handle: "@google_review",
        avatar: getReviewImageUrl("thomas.png")
      },
      text: "They were available within two hours of me contacting them for a drain inspection before buying our house, and they did a comprehensive CCTV check of all the pipes. They found a few issues and were happy to explain them patiently to me and the seller. They also gave me advice on how I should proceed with pipe relining, which allowed me to negotiate the price fairly and buy the house with confidence. Impressed and thankful for the great service."
    },
    {
      author: {
        name: "Salome Chemouilli",
        handle: "@google_review",
        avatar: getReviewImageUrl("salome.png")
      },
      text: "Blocked drain this morning and they managed to organise a repair at 2:30pm the same day! Life saver! Professional and reliable! Totally recommended!"
    },
    {
      author: {
        name: "Ken Salale",
        handle: "@google_review",
        avatar: getReviewImageUrl("ken.png")
      },
      text: "They were great. They did a full pipe relining job on our damaged sewer line. They were early, well prepared and friendly. Their work was faultless and surprised me at how efficient they were considering no excavation was required. Would highly recommend their business and will use again in the future."
    },
    // Duplicate the reviews for better infinite scroll effect
    {
      author: {
        name: "Christopher Parker",
        handle: "@google_review",
        avatar: getReviewImageUrl("christopher.png")
      },
      text: "The team are absolute legends. Fixed our blocked drain that had been causing problems for months, and they did it with a smile even though it was a challenging job. Good old fashioned service. Highly recommend 👍"
    },
    {
      author: {
        name: "Liah Williams",
        handle: "@google_review",
        avatar: getReviewImageUrl("liah.png")
      },
      text: "Huge thank you for coming to my rescue! Our sewer pipe collapsed unexpectedly, and they were kind enough to come out and provide pipe relining on just a few hours' notice. Super professional, fast, and friendly—truly grateful for the help!"
    },
    {
      author: {
        name: "Maddison Bailey",
        handle: "@google_review",
        avatar: getReviewImageUrl("maddison.png")
      },
      text: "Called up for a drain inspection, and they were able to provide a full CCTV assessment on the same day. Prompt communicators, who explained everything thoroughly (to someone who doesn't know anything about plumbing!!). They were able to fix the pipe relining issue straight away the next day, and honestly our drainage has never worked better! Super reasonable price, with a breakdown explained bit by bit. Would one hundred percent recommend this service!!"
    },
    {
      author: {
        name: "robb 4220",
        handle: "@google_review",
        avatar: getReviewImageUrl("robb.png")
      },
      text: "The team came out to me on time as usual and had the entire pipe relining job done in just over two hours👌100% recommend to anyone and everyone. Only $200 more than the quote I got elsewhere and they came to me with no digging required=Legends."
    },
    {
      author: {
        name: "Sophie",
        handle: "@google_review",
        avatar: getReviewImageUrl("sophie.png")
      },
      text: "They were amazing! Had a major blockage that was causing sewage backup and called them to help. Within an hour they were at my door with the high-pressure water jetting equipment (which I was sure would've taken days to organise). Super honest team with great work and price to match!! Highly recommend"
    },
    {
      author: {
        name: "Thomas Derraik",
        handle: "@google_review",
        avatar: getReviewImageUrl("thomas.png")
      },
      text: "They were available within two hours of me contacting them for a drain inspection before buying our house, and they did a comprehensive CCTV check of all the pipes. They found a few issues and were happy to explain them patiently to me and the seller. They also gave me advice on how I should proceed with pipe relining, which allowed me to negotiate the price fairly and buy the house with confidence. Impressed and thankful for the great service."
    },
    {
      author: {
        name: "Salome Chemouilli",
        handle: "@google_review",
        avatar: getReviewImageUrl("salome.png")
      },
      text: "Blocked drain this morning and they managed to organise a repair at 2:30pm the same day! Life saver! Professional and reliable! Totally recommended!"
    },
    {
      author: {
        name: "Ken Salale",
        handle: "@google_review",
        avatar: getReviewImageUrl("ken.png")
      },
      text: "They were great. They did a full pipe relining job on our damaged sewer line. They were early, well prepared and friendly. Their work was faultless and surprised me at how efficient they were considering no excavation was required. Would highly recommend their business and will use again in the future."
    }
  ]

  return (
    <TestimonialsSection
      title="Customer Comments"
      description="We have 100's of satisfied customers across the Sydney region. See what some of them said in these comments."
      testimonials={mobileServicesTestimonials}
      className="bg-muted/30"
    />
  )
} 