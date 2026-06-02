/**
 * Location (suburb) page content for the local-SEO pages under /locations/.
 * Copy is sourced verbatim from docs/copy/locations/*.md. Meta titles and
 * descriptions match docs/seo.md. No claims beyond docs/brief.md.
 */

export type Location = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  /** Page H1. */
  headline: string;
  /** Intro body paragraphs. */
  body: ReadonlyArray<string>;
  /** Services offered locally (rendered as a tag list). */
  services: ReadonlyArray<string>;
  /** Closing line above the CTA. */
  closing: string;
  hero: { src: string; alt: string };
  /** Slugs of nearby suburbs for internal linking. */
  nearby: ReadonlyArray<string>;
};

export const locations: ReadonlyArray<Location> = [
  {
    slug: "camberwell",
    name: "Camberwell",
    metaTitle: "Bricklayer Camberwell | Heritage Masonry Specialist",
    metaDescription:
      "Expert heritage brickwork and masonry restoration in Camberwell VIC. 25 years experience. Fully insured. Local specialist.",
    headline: "Bricklaying and Heritage Masonry in Camberwell VIC",
    body: [
      "Goodwin Bricklaying is based in Camberwell, which means when you're looking for a bricklayer in Camberwell, you're looking for David. He knows these streets, the architecture, and the heritage homes that line them better than almost anyone in the trade.",
      "Whether you're restoring an Edwardian facade off Burke Road, building a feature wall in a luxury renovation, or dealing with a structural problem in a period home, David delivers the same standard every time: precise, considered, and built to last.",
    ],
    services: [
      "Heritage brickwork and repointing",
      "Crack stitching and remedial masonry",
      "Chimney stack restoration",
      "Architectural masonry",
      "Retaining walls and extensions",
      "Tuck pointing",
    ],
    closing:
      "Goodwin Bricklaying is your local specialist for heritage brickwork, restoration masonry, and luxury residential builds in Camberwell and surrounding suburbs. 25 years experience. Fully insured.",
    hero: {
      src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-34.jpg",
      alt: "Heritage brickwork restoration on a period home by Goodwin Bricklaying, Camberwell Melbourne",
    },
    nearby: ["hawthorn", "canterbury", "glen-iris", "surrey-hills"],
  },
  {
    slug: "hawthorn",
    name: "Hawthorn",
    metaTitle: "Heritage Bricklayer Hawthorn | Goodwin Bricklaying",
    metaDescription:
      "Specialist heritage brickwork, repointing, and chimney restoration in Hawthorn VIC. Trusted by Hawthorn homeowners. 25 years experience.",
    headline: "Bricklayer and Heritage Masonry Specialist: Hawthorn VIC",
    body: [
      "Hawthorn is one of Melbourne's great heritage suburbs, and the quality of its older homes demands a bricklayer who understands what that means. David Goodwin has worked across Hawthorn for over a decade, restoring Victorian terraces, repointing Edwardian facades, and completing chimney work on some of the suburb's most notable properties.",
      "When the architecture is beautiful and the stakes are high, homeowners in Hawthorn call Goodwin.",
    ],
    services: [
      "Heritage brickwork and repointing",
      "Chimney restoration",
      "Heritage facade restoration",
      "Architectural masonry",
      "Crack stitching",
      "Tuck pointing",
    ],
    closing:
      "Expert heritage bricklaying and masonry restoration in Hawthorn VIC. Fully insured. 25 years experience. Trusted by homeowners, architects, and builders.",
    hero: {
      src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-25.jpg",
      alt: "Heritage chimney restoration on a period home by Goodwin Bricklaying, Hawthorn Melbourne",
    },
    nearby: ["camberwell", "richmond", "toorak", "canterbury"],
  },
  {
    slug: "toorak",
    name: "Toorak",
    metaTitle: "Luxury Masonry Toorak | Heritage Bricklaying Specialist",
    metaDescription:
      "Premium masonry and heritage restoration in Toorak VIC. Architectural features, heritage facades, and chimney work for discerning homeowners.",
    headline: "Luxury Masonry and Heritage Bricklaying: Toorak VIC",
    body: [
      "Toorak's homes set the standard for luxury residential architecture in Melbourne, and the bricklayer you choose for your Toorak property needs to match it. David Goodwin works with homeowners, architects, and builders on Toorak's most discerning projects: heritage restorations, architectural masonry features, and premium residential builds that demand the highest level of craft.",
      "If you want the best, call Goodwin.",
    ],
    services: [
      "Luxury residential masonry",
      "Heritage restoration and repointing",
      "Architectural features: arches and vaulted ceilings",
      "Chimney restoration",
      "Bespoke garden walls and feature brickwork",
    ],
    closing:
      "Goodwin Bricklaying delivers luxury masonry and heritage restoration in Toorak. 25 years experience. Fully insured. Trusted by Melbourne's most discerning homeowners.",
    hero: {
      src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-44.jpg",
      alt: "Hand-laid brick vaulted ceiling feature by Goodwin Bricklaying for a luxury Toorak residence, Melbourne",
    },
    nearby: ["hawksburn", "richmond", "hawthorn", "camberwell"],
  },
  {
    slug: "canterbury",
    name: "Canterbury",
    metaTitle: "Heritage Bricklayer Canterbury | Masonry Restoration",
    metaDescription:
      "Expert heritage brickwork and period home masonry restoration in Canterbury VIC. Mortar matching, repointing, crack stitching.",
    headline: "Heritage Bricklayer: Canterbury VIC",
    body: [
      "Canterbury's wide, tree-lined streets are home to some of Melbourne's finest period properties. When heritage brickwork needs restoration, whether it's repointing a 1920s facade, stitching a crack in an original brick wall, or matching mortar on a Californian Bungalow, David Goodwin is the specialist Canterbury homeowners trust.",
      "His work is precise, respectful of the original architecture, and built to last another century.",
    ],
    services: [
      "Heritage brickwork",
      "Repointing and mortar matching",
      "Crack stitching",
      "Chimney restoration",
      "Remedial masonry",
      "Tuck pointing",
    ],
    closing:
      "Expert heritage bricklaying and masonry restoration in Canterbury VIC. Fully insured. 25 years experience.",
    hero: {
      src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-26-1.jpg",
      alt: "Restored heritage red-brick garden wall by Goodwin Bricklaying, Canterbury Melbourne",
    },
    nearby: ["camberwell", "surrey-hills", "hawthorn", "glen-iris"],
  },
  {
    slug: "glen-iris",
    name: "Glen Iris",
    metaTitle: "Bricklayer Glen Iris | Heritage & Architectural Masonry",
    metaDescription:
      "Heritage restoration, retaining walls, and architectural masonry in Glen Iris VIC. 25 years experience. Fully insured.",
    headline: "Bricklaying and Masonry Specialist: Glen Iris VIC",
    body: [
      "Glen Iris blends character homes with contemporary renovations, and the bricklayer you choose needs to be comfortable with both. David Goodwin has worked across Glen Iris on heritage restorations, modern masonry features, retaining walls, and chimney work, always to the same high standard.",
    ],
    services: [
      "Heritage restoration",
      "Repointing",
      "Retaining walls",
      "Extensions",
      "Chimney work",
      "Architectural masonry",
    ],
    closing:
      "Bricklaying and masonry services in Glen Iris VIC. Heritage and architectural specialist. 25 years experience. Fully insured.",
    hero: {
      src: "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-curved-brick-retaining-wall-prahran-council-park-completed.jpg",
      alt: "Curved architectural brick retaining wall by Goodwin Bricklaying, Glen Iris Melbourne",
    },
    nearby: ["camberwell", "toorak", "hawthorn", "canterbury"],
  },
  {
    slug: "surrey-hills",
    name: "Surrey Hills",
    metaTitle: "Heritage Masonry Surrey Hills | Federation Home Specialists",
    metaDescription:
      "Heritage repointing and Federation home masonry restoration in Surrey Hills VIC. 25 years experience. Fully insured.",
    headline: "Heritage Masonry and Bricklaying: Surrey Hills VIC",
    body: [
      "Surrey Hills is known for its Federation homes, period cottages, and leafy streets, and the brickwork that defines them needs an expert's care. Goodwin Bricklaying provides heritage repointing, remedial masonry, and restoration work for Surrey Hills homeowners who won't accept anything less than the original quality.",
    ],
    services: [
      "Heritage repointing",
      "Federation and period home restoration",
      "Crack stitching",
      "Chimney work",
      "Tuck pointing",
    ],
    closing:
      "Heritage masonry and bricklaying in Surrey Hills VIC. Federation and Edwardian home specialists. 25 years experience. Fully insured.",
    hero: {
      src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-27.jpg",
      alt: "Completed heritage red-brick front garden wall by Goodwin Bricklaying, Surrey Hills Melbourne",
    },
    nearby: ["canterbury", "camberwell", "hawthorn", "glen-iris"],
  },
  {
    slug: "richmond",
    name: "Richmond",
    metaTitle: "Heritage Bricklayer Richmond | Victorian Terrace Specialists",
    metaDescription:
      "Heritage brickwork and Victorian terrace restoration in Richmond VIC. Repointing, crack stitching, chimney stacks. 25 years experience.",
    headline: "Bricklayer and Heritage Masonry: Richmond VIC",
    body: [
      "Richmond's terrace rows and Victorian workers' cottages are some of Melbourne's most recognisable streetscapes. Keeping them at their best requires a bricklayer with real heritage expertise, not just someone who can mix mortar. David Goodwin has worked across Richmond on repointing, structural crack repair, chimney restoration, and heritage brickwork that blends perfectly with original fabric.",
    ],
    services: [
      "Heritage repointing",
      "Victorian terrace restoration",
      "Crack stitching and structural repair",
      "Chimney stacks",
      "Tuck pointing",
    ],
    closing:
      "Heritage bricklaying and masonry restoration in Richmond VIC. Victorian terrace and period home specialists. 25 years experience. Fully insured.",
    hero: {
      src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59-1.jpg",
      alt: "Period-accurate tuck pointing on a Victorian terrace by Goodwin Bricklaying, Richmond Melbourne",
    },
    nearby: ["fitzroy", "hawthorn", "toorak", "hawksburn"],
  },
  {
    slug: "fitzroy",
    name: "Fitzroy",
    metaTitle: "Architectural Bricklayer Fitzroy | Heritage Masonry",
    metaDescription:
      "Architectural and heritage brickwork in Fitzroy VIC. Brick tunnels, arches, restoration masonry. 25 years experience. Fully insured.",
    headline: "Architectural Bricklayer and Heritage Masonry: Fitzroy VIC",
    body: [
      "Fitzroy is where old Melbourne and contemporary architecture collide, and the masonry work here needs to match both. Goodwin Bricklaying has completed some of its most distinctive work in Fitzroy, including a landmark brick tunnel currently being professionally filmed for our portfolio. David works on heritage restorations, architectural brickwork, and anything that requires genuine craft.",
    ],
    services: [
      "Heritage restoration and repointing",
      "Architectural brickwork",
      "Brick tunnels and arches",
      "Chimney restoration",
      "Structural masonry",
    ],
    closing:
      "Architectural and heritage bricklaying in Fitzroy VIC. 25 years experience. Fully insured.",
    hero: {
      src: "/images/hero-fitzroy-brick-arch-tunnel-melbourne.jpg",
      alt: "Vaulted heritage brick archway and tunnel by Goodwin Bricklaying, Fitzroy Melbourne",
    },
    nearby: ["richmond", "hawthorn", "camberwell", "toorak"],
  },
  {
    slug: "hawksburn",
    name: "Hawksburn",
    metaTitle: "Heritage Bricklayer Hawksburn | Luxury Residential Masonry",
    metaDescription:
      "Heritage and luxury residential masonry in Hawksburn VIC. Period home specialists. 25 years experience. Fully insured.",
    headline: "Heritage Bricklaying and Masonry: Hawksburn VIC",
    body: [
      "Hawksburn's elegant streets are home to some of Melbourne's finest period properties. Homeowners here understand the value of quality, and when it comes to heritage masonry and restoration brickwork, they call Goodwin. David and his team work with care and precision on every Hawksburn project, respecting the character of these exceptional homes.",
    ],
    services: [
      "Heritage brickwork",
      "Repointing",
      "Chimney restoration",
      "Luxury residential masonry",
      "Tuck pointing",
    ],
    closing:
      "Heritage bricklaying and masonry in Hawksburn VIC. Luxury residential and period home specialists. 25 years experience. Fully insured.",
    hero: {
      src: "/images/heritage-restoration/cairo-flats-wall/photo-2026-05-23-10-34-26.jpg",
      alt: "Restored heritage brick boundary wall with capped pier by Goodwin Bricklaying, Hawksburn Melbourne",
    },
    nearby: ["toorak", "richmond", "hawthorn", "camberwell"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export const locationSlugs = locations.map((location) => location.slug);
