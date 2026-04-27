export const site = {
  name: "Nail Business 01",
  logo: "Nail Studio",
  tagline: "Clean beauty website layout",
  description:
    "A simple nail business website starter with a minimal white navbar and full-width pink hero image.",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Online Booking", href: null },
  ],
  socialLinks: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  hero: {
    ctaLabel: "Book Now",
    imageAlt: "Pink beauty banner with manicured hands and nail salon styling",
  },
  about: {
    eyebrow: "About Us",
    title: "A calm nail studio for polished everyday beauty Test and deploy Cloud",
    body:
      "Our studio is designed for relaxed appointments, careful detail work, and a clean beauty experience from the moment you arrive. We focus on healthy nail care, soft finishes, and timeless styles that feel effortless.",
    secondary:
      "Whether you are visiting for a simple refresh or a full self-care appointment, our team keeps every service thoughtful, hygienic, and tailored to your personal style.",
    imageAlt: "Soft pink manicure detail inside a nail studio",
  },
  aboutFeatures: [
    {
      eyebrow: "Our Care",
      title: "Thoughtful service with a soft, polished finish",
      body:
        "Every appointment is paced with comfort in mind, from gentle prep to the final glossy top coat. Our placeholder studio process focuses on calm details, clean tools, and finishes that feel refined without being overdone.",
      imageAlt: "Elegant nail care station with soft pink beauty styling",
    },
    {
      eyebrow: "Our Style",
      title: "Modern nail looks made for everyday confidence",
      body:
        "From natural tones to fresh seasonal color, the studio direction is simple, feminine, and easy to personalize. This placeholder content can later be replaced with your salon story, specialties, and signature client experience.",
      imageAlt: "Close-up of a polished manicure in a pink nail studio setting",
    },
  ],
  services: {
    eyebrow: "Services",
    title: "Simple treatments with clear pricing",
    categories: [
      {
        name: "Manicure",
        items: [
          { name: "Classic Manicure", price: "$25" },
          { name: "Gel Manicure", price: "$40" },
        ],
      },
      {
        name: "Pedicure",
        items: [
          { name: "Classic Pedicure", price: "$35" },
          { name: "Spa Pedicure", price: "$50" },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Visit Nail Studio",
    businessName: "Nail Studio",
    phone: "(555) 012-3456",
    address: "123 Rose Avenue, Suite 5, New York, NY",
    hours: [
      { day: "Monday", time: "10:00 AM - 7:00 PM" },
      { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
      { day: "Wednesday", time: "10:00 AM - 7:00 PM" },
      { day: "Thursday", time: "10:00 AM - 7:00 PM" },
      { day: "Friday", time: "10:00 AM - 7:00 PM" },
      { day: "Saturday", time: "10:00 AM - 7:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
} as const;
