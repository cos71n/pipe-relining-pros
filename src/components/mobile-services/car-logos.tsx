"use client";

import { Logos3 } from "@/components/ui/logos3";

const carLogos = [
  {
    id: "toyota",
    description: "Toyota",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/toyota.webp",
  },
  {
    id: "honda",
    description: "Honda", 
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/honda.webp",
  },
  {
    id: "ford",
    description: "Ford",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/ford.webp", 
  },
  {
    id: "mazda",
    description: "Mazda",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/mazda.webp",
  },
  {
    id: "subaru",
    description: "Subaru", 
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/subaru.webp",
  },
  {
    id: "volkswagen",
    description: "Volkswagen",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/vw.webp",
  },
  {
    id: "bmw",
    description: "BMW",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/bmw.webp",
  },
  {
    id: "mercedes",
    description: "Mercedes-Benz",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/mercedes.webp",
  },
  {
    id: "audi",
    description: "Audi",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/audi.webp",
  },
  {
    id: "hyundai",
    description: "Hyundai",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/hyundai.webp",
  },
  {
    id: "isuzu",
    description: "Isuzu",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/isuzu.webp",
  },
  {
    id: "kia",
    description: "Kia",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/kia.webp",
  },
  {
    id: "land-rover",
    description: "Land Rover",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/land-rover.webp",
  },
  {
    id: "lexus",
    description: "Lexus",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/lexus.webp",
  },
  {
    id: "mitsubishi",
    description: "Mitsubishi",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/mitsubishi.webp",
  },
  {
    id: "nissan",
    description: "Nissan",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/nissan.webp",
  },
  {
    id: "porsche",
    description: "Porsche",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/porsche.webp",
  },
  {
    id: "skoda",
    description: "Skoda",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/skoda.webp",
  },
  {
    id: "suzuki",
    description: "Suzuki",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/suzuki.webp",
  },
  {
    id: "volvo",
    description: "Volvo",
    image: "https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev/border-mobile-mechanical/car-logos/volvo.webp",
  },
];

export function CarLogos() {
  return (
    <Logos3 
      heading="We Work On Any Car"
      logos={carLogos}
    />
  );
} 