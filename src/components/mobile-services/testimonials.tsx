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
      text: "Ben is an absolute legend. Saved our car from the side of the road, and he did it with a smile even though it was a prick of a job. Good old fashioned service. Highly recommend 👍"
    },
    {
      author: {
        name: "Liah Williams",
        handle: "@google_review",
        avatar: getReviewImageUrl("liah.png")
      },
      text: "Huge thank you to Ben for coming to my rescue! My car battery died unexpectedly, and he was kind enough to come out and replace it on just an hour's notice. Super professional, fast, and friendly—truly grateful for the help!"
    },
    {
      author: {
        name: "Maddison Bailey",
        handle: "@google_review",
        avatar: getReviewImageUrl("maddison.png")
      },
      text: "Called up for a non urgent job, and Ben was able to provide a diagnosis on the same day. A prompt communicator, who explained everything thoroughly (to someone who doesn't know anything about cars!!). Ben was able to fix the issue straight away the next day, and honestly my car has never driven better! Super reasonable price, with a breakdown explained bit by bit. Would one hundred percent recommend this service!!"
    },
    {
      author: {
        name: "robb 4220",
        handle: "@google_review",
        avatar: getReviewImageUrl("robb.png")
      },
      text: "The boys came out to me on time as usual and had the entire tune and service new plugs etc done in just over an hour👌100% recommend to anyone and everyone. Only $45 more than the place I took it to last time and they came to me=Legends."
    },
    {
      author: {
        name: "Sophie",
        handle: "@google_review",
        avatar: getReviewImageUrl("sophie.png")
      },
      text: "Ben was amazing! Was driving to Brisbane in the rain and my windscreen wipers stopped working. Called him to help and within an hour or so he was at my door with the part sourced (which I was sure would've taken days to find as it's not a common car). Super honest bloke with great work and price to match!! Highly recommend"
    },
    {
      author: {
        name: "Thomas Derraik",
        handle: "@google_review",
        avatar: getReviewImageUrl("thomas.png")
      },
      text: "Ben was available within two hours of me contacting him for a pre-purchase inspection, and he did a comprehensive check of the car. He found a few issues and was happy to explain them patiently to me and the seller. He also gave me advice on how I should proceed when it comes to servicing and fixing the issues, which allowed me to negotiate the price fairly and drive away with an otherwise fantastic used car. I am impressed and thankful for the great service."
    },
    {
      author: {
        name: "Salome Chemouilli",
        handle: "@google_review",
        avatar: getReviewImageUrl("salome.png")
      },
      text: "Battery dead this morning and Ben manage to organise a repair at 2:30pm the same day ! Life saver! Professional and reliable ! Totally recommended !"
    },
    {
      author: {
        name: "Ken Salale",
        handle: "@google_review",
        avatar: getReviewImageUrl("ken.png")
      },
      text: "Ben was great. He did a service and brake replacement on my Mercedes. He was early, well prepared and friendly. His work was faultless and surprised me and how proficient he was considering the car wasn't on a hoist. Would highly recommend his business and will use again in the future."
    },
    // Duplicate the reviews for better infinite scroll effect
    {
      author: {
        name: "Christopher Parker",
        handle: "@google_review",
        avatar: getReviewImageUrl("christopher.png")
      },
      text: "Ben is an absolute legend. Saved our car from the side of the road, and he did it with a smile even though it was a prick of a job. Good old fashioned service. Highly recommend 👍"
    },
    {
      author: {
        name: "Liah Williams",
        handle: "@google_review",
        avatar: getReviewImageUrl("liah.png")
      },
      text: "Huge thank you to Ben for coming to my rescue! My car battery died unexpectedly, and he was kind enough to come out and replace it on just an hour's notice. Super professional, fast, and friendly—truly grateful for the help!"
    },
    {
      author: {
        name: "Maddison Bailey",
        handle: "@google_review",
        avatar: getReviewImageUrl("maddison.png")
      },
      text: "Called up for a non urgent job, and Ben was able to provide a diagnosis on the same day. A prompt communicator, who explained everything thoroughly (to someone who doesn't know anything about cars!!). Ben was able to fix the issue straight away the next day, and honestly my car has never driven better! Super reasonable price, with a breakdown explained bit by bit. Would one hundred percent recommend this service!!"
    },
    {
      author: {
        name: "robb 4220",
        handle: "@google_review",
        avatar: getReviewImageUrl("robb.png")
      },
      text: "The boys came out to me on time as usual and had the entire tune and service new plugs etc done in just over an hour👌100% recommend to anyone and everyone. Only $45 more than the place I took it to last time and they came to me=Legends."
    },
    {
      author: {
        name: "Sophie",
        handle: "@google_review",
        avatar: getReviewImageUrl("sophie.png")
      },
      text: "Ben was amazing! Was driving to Brisbane in the rain and my windscreen wipers stopped working. Called him to help and within an hour or so he was at my door with the part sourced (which I was sure would've taken days to find as it's not a common car). Super honest bloke with great work and price to match!! Highly recommend"
    },
    {
      author: {
        name: "Thomas Derraik",
        handle: "@google_review",
        avatar: getReviewImageUrl("thomas.png")
      },
      text: "Ben was available within two hours of me contacting him for a pre-purchase inspection, and he did a comprehensive check of the car. He found a few issues and was happy to explain them patiently to me and the seller. He also gave me advice on how I should proceed when it comes to servicing and fixing the issues, which allowed me to negotiate the price fairly and drive away with an otherwise fantastic used car. I am impressed and thankful for the great service."
    },
    {
      author: {
        name: "Salome Chemouilli",
        handle: "@google_review",
        avatar: getReviewImageUrl("salome.png")
      },
      text: "Battery dead this morning and Ben manage to organise a repair at 2:30pm the same day ! Life saver! Professional and reliable ! Totally recommended !"
    },
    {
      author: {
        name: "Ken Salale",
        handle: "@google_review",
        avatar: getReviewImageUrl("ken.png")
      },
      text: "Ben was great. He did a service and brake replacement on my Mercedes. He was early, well prepared and friendly. His work was faultless and surprised me and how proficient he was considering the car wasn't on a hoist. Would highly recommend his business and will use again in the future."
    }
  ]

  return (
    <TestimonialsSection
      title="Real Customer Comments"
      description="We have 100's of satisfied customers across the Tweed & Gold Coast region. See what some of them said in these real Google reviews."
      testimonials={mobileServicesTestimonials}
      className="bg-muted/30"
    />
  )
} 