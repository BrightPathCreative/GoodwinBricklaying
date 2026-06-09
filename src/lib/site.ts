/**
 * Central site configuration for Goodwin Bricklaying.
 * Business facts sourced from docs/brief.md — do not invent or alter.
 */

export const site = {
  name: "Goodwin Bricklaying",
  legalName: "Goodwin Brick Block & Heritage",
  abn: "87 434 328 744",
  url: "https://goodwinbricklaying.com.au",
  // Email intentionally not published — enquiries route through the GHL form
  // and click-to-call only.
  // GHL CRM tracking number. `phone` is the E.164 value used for structured
  // data; `phoneHref` is the tel: link behind every "Click to Call" CTA.
  phone: "+61489262279",
  phoneLabel: "Click to Call",
  phoneHref: "tel:+61489262279",
  instagram: {
    handle: "@goodwinbrickblockandheritage",
    url: "https://www.instagram.com/goodwinbrickblockandheritage",
  },
  // Street address intentionally withheld — private. Service-area business;
  // only the base suburb/state are referenced publicly.
  address: {
    locality: "Camberwell",
    region: "VIC",
    country: "AU",
  },
  description:
    "25 years of specialist brickwork across Melbourne's finest homes and heritage buildings. Heritage restoration, architectural masonry, and chimney stacks. Camberwell-based, inner Melbourne.",
  // Agency credit shown in the footer. Confirm the public URL before launch.
  agency: {
    name: "BrightPath Creative",
    url: "https://brightpathcreative.com.au",
  },
} as const;

/** Service pages — used by the header dropdown and footer site map. */
export const serviceNav: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Heritage & Restoration", href: "/services/heritage-restoration" },
  { label: "Architectural Masonry", href: "/services/architectural-masonry" },
  { label: "Chimneys & Fireplaces", href: "/services/chimneys-fireplaces" },
  { label: "Structural & Commercial", href: "/services/structural-commercial" },
  { label: "Tuck Pointing", href: "/services/tuck-pointing" },
];

/**
 * Primary navigation. The logo is the home link, so there is no "Home" item.
 * "Services" carries a dropdown of the individual service pages.
 */
export type NavItem = {
  label: string;
  href: string;
  children?: ReadonlyArray<{ label: string; href: string }>;
};

export const primaryNav: ReadonlyArray<NavItem> = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: serviceNav },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
];

/** Primary call-to-action in the header (and mobile menu). */
export const navCta = { label: "Get a Quote", href: "/contact" } as const;

/** Suburbs served — used in footer and location pages. */
export const locationNav: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Camberwell", href: "/locations/camberwell" },
  { label: "Hawthorn", href: "/locations/hawthorn" },
  { label: "Toorak", href: "/locations/toorak" },
  { label: "Canterbury", href: "/locations/canterbury" },
  { label: "Glen Iris", href: "/locations/glen-iris" },
  { label: "Surrey Hills", href: "/locations/surrey-hills" },
  { label: "Richmond", href: "/locations/richmond" },
  { label: "Fitzroy", href: "/locations/fitzroy" },
  { label: "Hawksburn", href: "/locations/hawksburn" },
];

export const legalNav: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];
