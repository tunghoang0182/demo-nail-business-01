import previewImageSource from "./nail-business-01.png";

const templateConfig = {
  id: "nail-business-01",
  slug: "nail-business-01",
  name: "Nail Business 01",
  categoryLabel: "Nail Templates",
  niche: "nail",
  tier: "business",
  defaultTheme: "soft-pink",
  description:
    "A clean nail business layout with a white centered navbar, full-width pink hero image, about content, service pricing, and contact details.",
  sourcePath: "template-library/templates/nail/nail-business-01",
  previewImage: previewImageSource.src,
  previewImageAlt:
    "Nail Business 01 pink hero banner with a clean white navigation layout",
  includedPages: ["Home"],
  sections: ["Navbar", "Hero image", "About", "Services", "Contact"],
} as const;

export type TemplateConfig = typeof templateConfig;

export default templateConfig;
