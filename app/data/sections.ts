export interface SectionVariant {
  id: string;
  label: string;
  thumbnail: string;
}

export interface Section {
  id: number;
  name: string;
  variants: SectionVariant[];
}

export const sections: Section[] = [
  {
    id: 1,
    name: "Navbar",
    variants: [
      { id: "navbar-1", label: "Option A", thumbnail: "/templates/navbar-1.png" },
      { id: "navbar-2", label: "Option B", thumbnail: "/templates/navbar-2.png" },
      { id: "navbar-3", label: "Option C", thumbnail: "/templates/navbar-3.png" },
      { id: "navbar-4", label: "Option D", thumbnail: "/templates/navbar-4.png" },
    ],
  },
  {
    id: 2,
    name: "Hero",
    variants: [
      { id: "hero-1", label: "Option A", thumbnail: "/templates/hero-1.png" },
      { id: "hero-2", label: "Option B", thumbnail: "/templates/hero-2.png" },
      { id: "hero-3", label: "Option C", thumbnail: "/templates/hero-3.png" },
      { id: "hero-4", label: "Option D", thumbnail: "/templates/hero-4.png" },
    ],
  },
  {
    id: 3,
    name: "About Us",
    variants: [
      { id: "about-1", label: "Option A", thumbnail: "/templates/aboutus-1.png" },
      { id: "about-2", label: "Option B", thumbnail: "/templates/aboutus-2.png" },
      { id: "about-3", label: "Option C", thumbnail: "/templates/aboutus-3.png" },
    ],
  },
  {
    id: 4,
    name: "Services",
    variants: [
      { id: "service-1", label: "Option A", thumbnail: "/templates/product-1.png" },
      { id: "service-2", label: "Option B", thumbnail: "/templates/product-2.png" },
      { id: "service-3", label: "Option C", thumbnail: "/templates/product-3.png" },
      { id: "service-4", label: "Option D", thumbnail: "/templates/product-4.png" },
      { id: "service-5", label: "Option E", thumbnail: "/templates/product-5.png" },
    ],
  },
  {
    id: 5,
    name: "Kelebihan",
    variants: [
      { id: "kelebihan-1", label: "Option A", thumbnail: "/templates/kelebihan-1.png" },
      { id: "kelebihan-2", label: "Option B", thumbnail: "/templates/kelebihan-2.png" },
      { id: "kelebihan-3", label: "Option C", thumbnail: "/templates/kelebihan-3.png" },
      { id: "kelebihan-4", label: "Option D", thumbnail: "/templates/kelebihan-4.png" },
    ],
  },
  {
    id: 6,
    name: "Gallery",
    variants: [
      { id: "gallery-1", label: "Option A", thumbnail: "/templates/gallery-1.png" },
      { id: "gallery-2", label: "Option B", thumbnail: "/templates/gallery-2.png" },
      { id: "gallery-3", label: "Option C", thumbnail: "/templates/gallery-3.png" },
      { id: "gallery-4", label: "Option D", thumbnail: "/templates/gallery-4.png" },
    ],
  },
  {
    id: 7,
    name: "Portofolio",
    variants: [
      { id: "portofolio-1", label: "Option A", thumbnail: "/templates/portofolio-1.png" },
      { id: "portofolio-2", label: "Option B", thumbnail: "/templates/portofolio-2.png" },
    ],
  },
  {
    id: 8,
    name: "Teams",
    variants: [
      { id: "teams-1", label: "Option A", thumbnail: "/templates/team-1.png" },
      { id: "teams-2", label: "Option B", thumbnail: "/templates/team-2.png" },
      { id: "teams-3", label: "Option C", thumbnail: "/templates/team-3.png" },
    ],
  },
  {
    id: 9,
    name: "Pricing",
    variants: [
      { id: "pricing-1", label: "Option A", thumbnail: "/templates/pricing-1.png" },
      { id: "pricing-2", label: "Option B", thumbnail: "/templates/pricing-2.png" },
      { id: "pricing-3", label: "Option C", thumbnail: "/templates/pricing-3.png" },
    ],
  },
  {
    id: 10,
    name: "FAQ",
    variants: [
      { id: "faq-1", label: "Option A", thumbnail: "/templates/faq-1.png" },
      { id: "faq-2", label: "Option B", thumbnail: "/templates/faq-2.png" },
      { id: "faq-3", label: "Option C", thumbnail: "/templates/faq-3.png" },
    ],
  },
  {
    id: 11,
    name: "Reviews",
    variants: [
      { id: "review-1", label: "Option A", thumbnail: "/templates/review-1.png" },
      { id: "review-2", label: "Option B", thumbnail: "/templates/review-2.png" },
      { id: "review-3", label: "Option C", thumbnail: "/templates/review-3.png" },
    ],
  },
  {
    id: 12,
    name: "Our Clients",
    variants: [
      { id: "clients-1", label: "Option A", thumbnail: "/templates/ourclient-1.png" },
      { id: "clients-2", label: "Option B", thumbnail: "/templates/ourclient-2.png" },
      { id: "clients-3", label: "Option C", thumbnail: "/templates/ourclient-3.png" },
    ],
  },
  {
    id: 13,
    name: "CTA",
    variants: [
      { id: "cta-1", label: "Option A", thumbnail: "/templates/cta-1.png" },
      { id: "cta-2", label: "Option B", thumbnail: "/templates/cta-2.png" },
      { id: "cta-3", label: "Option C", thumbnail: "/templates/cta-3.png" },
      { id: "cta-4", label: "Option D", thumbnail: "/templates/cta-4.png" },
    ],
  },
  {
    id: 14,
    name: "Location",
    variants: [
      { id: "location-1", label: "Option A", thumbnail: "/templates/lokasi-1.png" },
      { id: "location-2", label: "Option B", thumbnail: "/templates/lokasi-2.png" },
      { id: "location-3", label: "Option C", thumbnail: "/templates/lokasi-3.png" },
    ],
  },
  {
    id: 15,
    name: "Footer",
    variants: [
      { id: "footer-1", label: "Option A", thumbnail: "/templates/Footer-1.png" },
      { id: "footer-2", label: "Option B", thumbnail: "/templates/Footer-2.png" },
      { id: "footer-3", label: "Option C", thumbnail: "/templates/Footer-3.png" },
    ],
  },
];
