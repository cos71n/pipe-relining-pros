import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

export function Testimonials() {
  const mobileServicesTestimonials = [
    {
      author: {
        name: "Sarah Johnson",
        handle: "@sarahj_auto",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      text: "Amazing mobile mechanic service! They fixed my car in my driveway while I worked from home. Professional, fast, and affordable. Highly recommend!"
    },
    {
      author: {
        name: "Mike Rodriguez",
        handle: "@mike_drives",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Best mobile service experience ever! No more waiting at repair shops. They came to my office and had my car running perfectly in under an hour."
    },
    {
      author: {
        name: "Lisa Chen",
        handle: "@lisac_pets",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "My dog absolutely loves their mobile grooming service! Max is so much calmer getting groomed at home. The groomer is incredibly skilled and patient."
    },
    {
      author: {
        name: "David Thompson",
        handle: "@davidthomps",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Exceptional mobile cleaning service! They transformed our home while we were at work. Eco-friendly products and attention to detail is outstanding."
    },
    {
      author: {
        name: "Jennifer Walsh",
        handle: "@jenwrites",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      text: "Emergency car repair saved my day! Called them on Sunday and they were at my location within 2 hours. Professional service at fair prices."
    },
    {
      author: {
        name: "Chris Martinez",
        handle: "@chrism_biz",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Mobile service is the future! No more taking time off work for car maintenance. They handle everything on-site with top-quality results."
    },
    {
      author: {
        name: "Amanda Foster",
        handle: "@amandaf_home",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Fantastic mobile cleaning team! They work around our schedule and always leave our house spotless. Trustworthy and reliable service."
    },
    {
      author: {
        name: "Ryan Parker",
        handle: "@ryanp_cars",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face"
      },
      text: "Mobile mechanic exceeded all expectations! Fixed my transmission issue right in my garage. Saved me hundreds compared to traditional shops."
    }
  ]

  return (
    <TestimonialsSection
      title="What Our Customers Say"
      description="Trusted by hundreds of satisfied customers across the area. See why mobile services are the convenient choice for busy professionals."
      testimonials={mobileServicesTestimonials}
      className="bg-muted/30"
    />
  )
} 