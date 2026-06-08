/**
 * Location (suburb) page content for the local-SEO pages under /locations/.
 * Copy is sourced from docs/copy/locations/*.md and extended for on-page depth.
 * Meta titles and descriptions match docs/seo.md. No claims beyond docs/brief.md.
 */

import type { FaqItem } from "./schema";

export type LocationGalleryItem = { src: string; alt: string };

export type Location = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  /** Page H1. */
  headline: string;
  /** Intro body paragraphs — first shown in hero, rest in intro section. */
  body: ReadonlyArray<string>;
  /** H2 for the intro section below the hero. */
  introHeading: string;
  /** Additional locality / architecture context paragraphs. */
  localContext: ReadonlyArray<string>;
  /** Services offered locally (rendered as a tag list). */
  services: ReadonlyArray<string>;
  /** Closing line above the CTA. */
  closing: string;
  hero: { src: string; alt: string };
  galleryHeading: string;
  gallery: ReadonlyArray<LocationGalleryItem>;
  faqs: ReadonlyArray<FaqItem>;
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
    introHeading: "Your Local Camberwell Bricklayer",
    localContext: [
      "Camberwell's streetscapes are defined by Edwardian and Interwar homes, Californian Bungalows, and substantial brick villas — many within Boroondara heritage overlays. That combination of age, architectural detail, and council scrutiny demands a bricklayer who understands period construction, not just modern blockwork.",
      "David has completed heritage restorations, chimney repairs, and architectural masonry across Camberwell for over two decades — including landmark residential work at Kirra Gardens. When Camberwell homeowners need masonry done properly, they call someone who lives and works here.",
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
    galleryHeading: "Heritage and Architectural Brickwork in Camberwell",
    gallery: [
      {
        src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-36.jpg",
        alt: "Heritage brickwork restoration to the porch and front fence of a Camberwell period home by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-36-1.jpg",
        alt: "New arched brick opening built into a Camberwell period home during renovation by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-35-2.jpg",
        alt: "Steel beam and structural opening in heritage brickwork during a Camberwell home renovation by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-25.jpg",
        alt: "Heritage chimney rebuilt on a tiled Camberwell roof by Goodwin Bricklaying",
      },
      {
        src: "/images/architectural-masonry/herringbone/goodwin-bricklaying-herringbone-brick-pattern-completed-interior-feature-wall.jpg",
        alt: "Reclaimed brick herringbone feature wall for a Camberwell luxury renovation by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-27.jpg",
        alt: "Completed heritage red-brick front garden wall by Goodwin Bricklaying, Camberwell Melbourne",
      },
    ],
    faqs: [
      {
        question: "Do you offer a local bricklayer service in Camberwell?",
        answer:
          "Yes. Goodwin Bricklaying is based in Camberwell, and David Goodwin is the bricklayer Camberwell homeowners deal with directly. There is no subcontracting chain — you get the specialist who has worked across this suburb for over 20 years.",
      },
      {
        question: "What types of homes do you work on in Camberwell?",
        answer:
          "David works on Edwardian and Interwar brick homes, Californian Bungalows, heritage-overlay properties, and high-end renovations across Camberwell. Services include repointing, crack stitching, chimney restoration, retaining walls, extensions, and bespoke architectural masonry.",
      },
      {
        question: "Can you match original brick and mortar on a Camberwell heritage home?",
        answer:
          "Yes. David assesses existing mortar profiles, colour, and composition before work begins. Brick is sourced to match original construction where required, and mortar is mixed to blend with the existing fabric. This is core to every heritage project in Camberwell.",
      },
      {
        question: "How do I get a quote for bricklaying in Camberwell?",
        answer:
          "Enquire through the contact form or request a call back. David responds within 24 hours with a detailed quote and honest assessment of what your Camberwell property needs. There is no obligation and no sales pressure.",
      },
    ],
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
    introHeading: "Heritage Brickwork for Hawthorn's Finest Homes",
    localContext: [
      "From the grand Victorian terraces along Glenferrie Road to the Edwardian villas and Arts and Crafts homes tucked behind them, Hawthorn's brickwork tells the story of Melbourne's growth. Many of these properties carry heritage overlays, and the mortar joints, chimney stacks, and facades need specialist care — not a general trades approach.",
      "David has restored 1915 chimneys, repointed weathered facades, and completed structural crack repairs across Hawthorn. His work is trusted by homeowners who understand that heritage masonry is a discipline, not a line item.",
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
    galleryHeading: "Heritage Restoration Work Across Hawthorn",
    gallery: [
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-23.jpg",
        alt: "Heritage chimney crown before remedial repair on a Hawthorn period home by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-24.jpg",
        alt: "Heritage chimney rebuilt with a new rounded cement capping in Hawthorn by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-25-1.jpg",
        alt: "The Goodwin name carved into the cement capping of a restored twin-pot Hawthorn heritage chimney",
      },
      {
        src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59-1.jpg",
        alt: "Period-accurate repointing on heritage red brickwork for a Hawthorn home by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-33.jpg",
        alt: "Structural opening propped and rebuilt in original brickwork during a Hawthorn heritage renovation",
      },
      {
        src: "/images/heritage-restoration/cairo-flats-wall/photo-2026-05-23-10-34-27.jpg",
        alt: "Heritage red-brick boundary wall rebuilt brick by brick by Goodwin Bricklaying, Hawthorn-area period property",
      },
    ],
    faqs: [
      {
        question: "Do you restore chimneys on heritage homes in Hawthorn?",
        answer:
          "Yes. Chimney stack restoration is one of David's core specialisations. He has worked on Hawthorn chimneys dating to the early 1900s — rebuilding crowns, repointing stacks, and restoring twin-pot chimneys to their original profile. All work is fully insured.",
      },
      {
        question: "Can you repoint a Victorian terrace facade in Hawthorn?",
        answer:
          "Yes. David specialises in heritage repointing across Hawthorn's Victorian and Edwardian terraces. He rakes out deteriorated mortar, matches the original joint profile, and uses period-appropriate materials so the finished work blends seamlessly with the original brickwork.",
      },
      {
        question: "Do you work on Hawthorn properties with heritage overlays?",
        answer:
          "Yes. David is experienced with heritage-overlay requirements across Boroondara and inner Melbourne. He works respectfully with original fabric and can advise on what your Hawthorn property needs before work begins. Mention any overlay status when you enquire.",
      },
      {
        question: "How much does a heritage bricklayer cost in Hawthorn?",
        answer:
          "Every Hawthorn project is different — scope, access, materials, and heritage complexity all affect the quote. David provides detailed quotes with full construction specifics so you know exactly what you're paying for. Enquire for an honest assessment with no obligation.",
      },
    ],
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
    introHeading: "Premium Masonry for Toorak Residences",
    localContext: [
      "Toorak combines grand period estates, contemporary architectural homes, and meticulous renovations where every detail is scrutinised. Vaulted brick ceilings, bespoke garden walls, heritage facade restoration, and chimney work on substantial properties — this is work that requires a bricklayer comfortable at the top of the market.",
      "David collaborates with architects and builders on Toorak projects where precision, material selection, and finish quality are non-negotiable. His 25 years of specialist experience and fully insured operation give discerning homeowners the confidence to invest in work that lasts.",
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
    galleryHeading: "Luxury and Architectural Masonry for Toorak",
    gallery: [
      {
        src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-45.jpg",
        alt: "Barrel-vaulted brick ceiling under construction for a Toorak luxury home by Goodwin Bricklaying",
      },
      {
        src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-46.jpg",
        alt: "Hand-laid brick vaulted ceiling detail for a Toorak residence by Goodwin Bricklaying",
      },
      {
        src: "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-modern-residential-facade-street-view.jpg",
        alt: "Dentil brick pattern facade on a contemporary Toorak home by Goodwin Bricklaying",
      },
      {
        src: "/images/architectural-masonry/herringbone/goodwin-bricklaying-herringbone-brick-pattern-completed-interior-feature-wall.jpg",
        alt: "Reclaimed brick herringbone feature wall in a Toorak interior by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-26-1.jpg",
        alt: "Restored heritage red-brick garden wall with matched reclaimed brick for a Toorak property",
      },
      {
        src: "/images/architectural-masonry/hit-and-miss/goodwin-bricklaying-hit-and-miss-decorative-brick-screen-wall-melbourne.jpg",
        alt: "Hit-and-miss decorative brick screen wall for a Toorak architectural project by Goodwin Bricklaying",
      },
    ],
    faqs: [
      {
        question: "Do you work with architects on Toorak projects?",
        answer:
          "Yes. David regularly collaborates with architects and premium builders on Toorak residential projects. He is comfortable reading plans, working to engineering specifications, and delivering architectural masonry features — vaulted ceilings, arches, and bespoke brickwork — to the standard these projects demand.",
      },
      {
        question: "Can you build vaulted brick ceilings in Toorak homes?",
        answer:
          "Yes. Vaulted and barrel-vaulted brick ceilings are a signature of Goodwin Bricklaying's architectural work. David has completed hand-laid vaulted ceilings for luxury residences across inner Melbourne, including projects of the calibre expected in Toorak.",
      },
      {
        question: "Do you restore heritage facades on Toorak period homes?",
        answer:
          "Yes. Alongside contemporary architectural work, David restores heritage brickwork on Toorak's period properties — repointing, mortar matching, chimney restoration, and remedial masonry that respects the original architecture while meeting modern structural requirements.",
      },
      {
        question: "Is Goodwin Bricklaying insured for Toorak residential work?",
        answer:
          "Yes. Goodwin Bricklaying carries public liability insurance and WorkCover. David has 25 years of specialist masonry experience and is trusted by Toorak homeowners, architects, and builders for premium residential work.",
      },
    ],
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
    introHeading: "Period Home Masonry in Canterbury",
    localContext: [
      "Canterbury is defined by substantial Edwardian and Interwar homes, Californian Bungalows with distinctive brick detailing, and garden walls that frame some of Boroondara's most desirable streets. The brickwork here is often original — and when mortar fails or cracks appear, the repair needs to be invisible.",
      "David has repointed Canterbury facades, restored garden walls with reclaimed brick, and completed chimney and remedial work on period homes where the owners expect craftsmanship, not compromise.",
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
    galleryHeading: "Heritage Brickwork Restored in Canterbury",
    gallery: [
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-26-2.jpg",
        alt: "Heritage red-brick garden wall restoration in progress for a Canterbury period home",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-26-3.jpg",
        alt: "Reclaimed brick laid into a restored heritage wall for a Canterbury homeowner by Goodwin Bricklaying",
      },
      {
        src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-00-2.jpg",
        alt: "Hand-finished tuck pointing on weathered heritage brickwork, Canterbury VIC by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-34-2.jpg",
        alt: "Heritage brickwork matched over a new opening in a Canterbury period home renovation",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-25-2.jpg",
        alt: "Heritage chimney stack restoration on a Canterbury tiled roof by Goodwin Bricklaying",
      },
      {
        src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59-3.jpg",
        alt: "Fine traditional tuck pointing on heritage red brick for a Canterbury home by Goodwin Bricklaying",
      },
    ],
    faqs: [
      {
        question: "Can you match mortar on a Canterbury Californian Bungalow?",
        answer:
          "Yes. Mortar matching is central to David's heritage work in Canterbury. He assesses the existing mortar's colour, composition, and joint profile before mixing a replacement that blends with the original brickwork. The goal is a repair you cannot see.",
      },
      {
        question: "What is crack stitching and do you offer it in Canterbury?",
        answer:
          "Crack stitching is a structural repair technique that stabilises cracked masonry walls using steel reinforcement inserted at key points. David offers crack stitching across Canterbury on period homes where walls have shifted due to settlement or structural stress — without rebuilding or altering the original appearance.",
      },
      {
        question: "Do you restore front garden walls in Canterbury?",
        answer:
          "Yes. Heritage front garden and boundary walls are a common Canterbury project. David sources reclaimed brick where needed, rebuilds failed sections, and repoints existing work to restore walls that define the streetscape.",
      },
      {
        question: "How do I find a heritage bricklayer in Canterbury?",
        answer:
          "Goodwin Bricklaying serves Canterbury as part of its inner Melbourne service area, based in nearby Camberwell. David is a specialist heritage bricklayer with 25 years experience — enquire with your project details for a detailed quote within 24 hours.",
      },
    ],
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
      "From repointing a weathered Federation facade to building a curved retaining wall in a new extension, Glen Iris projects demand versatility without compromising on quality.",
    ],
    introHeading: "Heritage and Contemporary Masonry in Glen Iris",
    localContext: [
      "Glen Iris sits between Camberwell and Malvern, with a mix of Federation and Edwardian brick homes, post-war character properties, and architect-designed renovations. Many older Glen Iris walls feature locally distinctive brick — including reclaimed Glen Iris frog-marked brick that David has sourced and laid on restoration projects.",
      "Whether your Glen Iris project is a heritage repair, a structural extension, or an architectural feature wall, David brings the same specialist approach: assess properly, match materials accurately, and build work that lasts.",
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
      src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-26-3.jpg",
      alt: "Reclaimed Glen Iris frog-marked brick laid into a restored heritage wall by Goodwin Bricklaying",
    },
    galleryHeading: "Masonry Projects Across Glen Iris",
    gallery: [
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-26-1.jpg",
        alt: "Restored heritage red-brick garden wall with curved end for a Glen Iris home by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-35.jpg",
        alt: "Heritage brickwork renovation with structural propping for a Glen Iris period property",
      },
      {
        src: "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-curved-brick-retaining-wall-prahran-council-park-completed.jpg",
        alt: "Curved architectural brick retaining wall by Goodwin Bricklaying, Glen Iris-area residential project",
      },
      {
        src: "/images/structural-commercial/goodwin-bricklaying-commercial-rendered-blockwork-planter-wall-waterproofed.jpg",
        alt: "Rendered and waterproofed blockwork retaining wall for a Glen Iris extension by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-27.jpg",
        alt: "Completed heritage red-brick front garden wall by Goodwin Bricklaying, Glen Iris Melbourne",
      },
      {
        src: "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-two-storey-contemporary-home-exterior.jpg",
        alt: "Decorative dentil brick pattern on a contemporary Glen Iris home exterior by Goodwin Bricklaying",
      },
    ],
    faqs: [
      {
        question: "Do you build retaining walls in Glen Iris?",
        answer:
          "Yes. David builds brick and blockwork retaining walls for Glen Iris homeowners — from garden terraces and boundary walls to structural retaining required for extensions and sloping blocks. All work is engineered to specification and fully insured.",
      },
      {
        question: "Can you work on both heritage and modern homes in Glen Iris?",
        answer:
          "Yes. Glen Iris projects range from Federation repointing and chimney restoration to contemporary architectural features and extension blockwork. David is a specialist comfortable across both — the standard of finish is the same regardless of the era.",
      },
      {
        question: "Do you source matching brick for Glen Iris heritage repairs?",
        answer:
          "Yes. David sources reclaimed and period-appropriate brick for Glen Iris restoration work, including locally distinctive Glen Iris frog-marked brick where the original fabric requires it. Matching brick and mortar is essential to invisible heritage repairs.",
      },
      {
        question: "How far is Goodwin Bricklaying from Glen Iris?",
        answer:
          "Goodwin Bricklaying is based in Camberwell, minutes from Glen Iris. David services Glen Iris regularly as part of his inner Melbourne coverage — approximately 40 minutes from base for surrounding suburbs.",
      },
    ],
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
      "David understands the brick profiles, mortar styles, and construction details that make Federation and Edwardian homes in Surrey Hills distinctive — and he restores them accordingly.",
    ],
    introHeading: "Federation and Edwardian Masonry in Surrey Hills",
    localContext: [
      "Surrey Hills' heritage streetscapes feature Federation villas with ornate brick detailing, Edwardian cottages, and front garden walls that frame tree-lined avenues. Many properties date to the early 1900s, and the original brickwork and tuck-pointed mortar joints are now a century old.",
      "David provides repointing, tuck pointing, chimney restoration, and crack stitching for Surrey Hills homeowners who want their period homes maintained to the standard they deserve — not patched with mismatched mortar and modern shortcuts.",
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
    galleryHeading: "Federation Home Restoration in Surrey Hills",
    gallery: [
      {
        src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-58.jpg",
        alt: "Tuck pointing on heritage red brickwork for a Surrey Hills Federation home by Goodwin Bricklaying",
      },
      {
        src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59.jpg",
        alt: "Repointing detail on weathered Federation brickwork in Surrey Hills by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-26.jpg",
        alt: "Heritage garden wall rebuild with reclaimed brick for a Surrey Hills period property",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-25.jpg",
        alt: "Heritage chimney restoration on a Surrey Hills tiled roof by Goodwin Bricklaying",
      },
      {
        src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-00.jpg",
        alt: "Period-accurate mortar pointing profile on a Surrey Hills heritage home by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-36-2.jpg",
        alt: "Heritage brickwork detail during a Surrey Hills period home renovation by Goodwin Bricklaying",
      },
    ],
    faqs: [
      {
        question: "Do you specialise in Federation home brickwork in Surrey Hills?",
        answer:
          "Yes. Federation homes are a core part of David's heritage work across inner Melbourne, including Surrey Hills. He understands the brick types, mortar profiles, and decorative detailing common to Federation construction and restores them with period-appropriate materials and techniques.",
      },
      {
        question: "What is tuck pointing and do Surrey Hills homes need it?",
        answer:
          "Tuck pointing is a fine pointing technique that creates crisp, uniform mortar joints on weathered brickwork — common on Victorian and Federation homes. Many Surrey Hills properties benefit from tuck pointing or specialist repointing when original mortar has deteriorated. David delivers this in collaboration with specialist subcontractors.",
      },
      {
        question: "Can you repair cracks in Surrey Hills brick walls?",
        answer:
          "Yes. David diagnoses the cause of cracking before recommending repair. For structural cracks in period masonry, crack stitching stabilises the wall without rebuilding. For mortar failure, repointing restores weatherproofing and appearance. He provides an honest assessment of what your Surrey Hills property needs.",
      },
      {
        question: "Do you service Surrey Hills from Camberwell?",
        answer:
          "Yes. Surrey Hills is within Goodwin Bricklaying's core service area. David is based in Camberwell and works across Surrey Hills regularly — it is one of the nine suburbs served as a dedicated location.",
      },
    ],
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
      "When a Richmond terrace needs work that respects its history, homeowners call a specialist — not a generalist.",
    ],
    introHeading: "Victorian Terrace Restoration in Richmond",
    localContext: [
      "Richmond's housing stock is dominated by single-fronted and double-fronted Victorian terraces, workers' cottages, and converted industrial buildings — much of it built in the late 1800s with red brick, lime mortar, and decorative detail that modern trades often struggle to replicate.",
      "David has repointed Richmond facades, restored chimney stacks, and completed structural repairs on terrace party walls where the original construction demands careful handling. His work preserves the streetscape character that makes Richmond one of Melbourne's most sought-after suburbs.",
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
    galleryHeading: "Victorian Terrace and Heritage Work in Richmond",
    gallery: [
      {
        src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59-2.jpg",
        alt: "Heritage repointing on a Richmond Victorian terrace facade by Goodwin Bricklaying",
      },
      {
        src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-00-1.jpg",
        alt: "Mortar joint profile detail on Richmond heritage red brickwork by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/cairo-flats-wall/photo-2026-05-23-10-34-26.jpg",
        alt: "Restored heritage brick boundary wall with capped pier by Goodwin Bricklaying, Richmond-area period property",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-24.jpg",
        alt: "Heritage chimney rebuilt with new cement capping for a Richmond period home by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-35-1.jpg",
        alt: "Structural heritage brickwork opening during a Richmond terrace renovation by Goodwin Bricklaying",
      },
      {
        src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-00-2.jpg",
        alt: "Hand-finished tuck pointing on weathered Victorian brickwork, Richmond by Goodwin Bricklaying",
      },
    ],
    faqs: [
      {
        question: "Do you restore Victorian terraces in Richmond?",
        answer:
          "Yes. Victorian terrace restoration is one of David's core specialisations. He has worked across Richmond on repointing, chimney repairs, party wall stabilisation, and facade restoration — always matching original brick and mortar profiles.",
      },
      {
        question: "Can you repoint the front facade of a Richmond terrace?",
        answer:
          "Yes. Facade repointing is one of the most common Richmond projects. David rakes out failed mortar, matches the original joint profile — whether flush, struck, or tuck pointed — and uses materials appropriate to the building's age. The result should be invisible.",
      },
      {
        question: "Do you repair chimney stacks on Richmond terraces?",
        answer:
          "Yes. Richmond's Victorian terraces often have original chimney stacks that have deteriorated over 130+ years. David rebuilds crowns, repoints stacks, and restores chimney pots to safe, functional, and visually correct condition.",
      },
      {
        question: "How do I get a heritage bricklaying quote in Richmond?",
        answer:
          "Enquire through the contact page with your Richmond address and a description of the work. David responds within 24 hours with a detailed quote. Photos of the affected brickwork help speed up the assessment.",
      },
    ],
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
      "From the heritage-listed Cairo Flats boundary wall to hand-laid vaulted ceilings, Fitzroy is where David's specialist skills are most visible.",
    ],
    introHeading: "Architectural and Heritage Masonry in Fitzroy",
    localContext: [
      "Fitzroy's built environment spans 1860s brick walls, Victorian terraces, industrial warehouses, and cutting-edge contemporary architecture. The suburb demands a bricklayer who can restore a 150-year-old boundary wall one week and build a sweeping brick arch tunnel the next.",
      "David's landmark Cairo Flats heritage wall project on Hanover Street — opposite the Royal Exhibition Building — is one of Melbourne's most significant recent heritage masonry restorations. It represents the standard of work Fitzroy properties deserve.",
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
    galleryHeading: "Landmark Masonry Projects in Fitzroy",
    gallery: [
      {
        src: "/images/heritage-restoration/cairo-flats-wall/photo-2026-05-23-10-34-26-1.jpg",
        alt: "Restored heritage boundary wall along Hanover Street with the Cairo flats behind, Fitzroy by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/cairo-flats-wall/photo-2026-05-23-10-34-28.jpg",
        alt: "Rebuilt heritage brick pier with stone capping on Hanover Street, Fitzroy by Goodwin Bricklaying",
      },
      {
        src: "/images/hero-goodwin-bricklaying-lit-brick-arch-tunnel-melbourne.jpg",
        alt: "Illuminated vaulted brick arch tunnel built by Goodwin Bricklaying, Fitzroy Melbourne",
      },
      {
        src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-32.jpg",
        alt: "Vaulted brick ceiling detail by Goodwin Bricklaying, Fitzroy Melbourne",
      },
      {
        src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-38.jpg",
        alt: "Hand-laid brick barrel vault under construction in Fitzroy by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/cairo-flats-wall/photo-2026-05-23-10-34-25.jpg",
        alt: "Heritage brick wall reconstruction in progress at the Cairo flats site, Fitzroy by Goodwin Bricklaying",
      },
    ],
    faqs: [
      {
        question: "Did Goodwin Bricklaying restore the Cairo Flats heritage wall in Fitzroy?",
        answer:
          "Yes. David Goodwin led the heritage reconstruction of the 150-year-old brick boundary wall on Hanover Street at the Cairo flats in Fitzroy — opposite the Royal Exhibition Building. The wall was carefully deconstructed, given new footings and drainage, then historically reconstructed brick by brick over eight months.",
      },
      {
        question: "Can you build brick arches and tunnels in Fitzroy?",
        answer:
          "Yes. Architectural brickwork — including barrel-vaulted tunnels, arches, and vaulted ceilings — is a signature of Goodwin Bricklaying. David has completed landmark architectural masonry in Fitzroy that demonstrates the full range of structural brick craft.",
      },
      {
        question: "Do you work on heritage-listed buildings in Fitzroy?",
        answer:
          "Yes. David is experienced with heritage-listed and heritage-overlay properties. The Cairo Flats wall project was completed under expert heritage guidance. If your Fitzroy property has heritage status, mention this when you enquire and David will advise on approach and requirements.",
      },
      {
        question: "What services does a bricklayer offer in Fitzroy?",
        answer:
          "Goodwin Bricklaying offers heritage restoration, repointing, architectural masonry, brick tunnels and arches, chimney restoration, and structural masonry across Fitzroy. David is a specialist with 25 years experience — not a general bricklaying contractor.",
      },
    ],
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
      "Adjacent to Toorak and defined by grand Edwardian and Interwar residences, Hawksburn properties demand the same specialist standard as Melbourne's most prestigious suburbs.",
    ],
    introHeading: "Luxury Period Home Masonry in Hawksburn",
    localContext: [
      "Hawksburn Village and the surrounding streets feature substantial brick homes built in the early 1900s — many with original chimneys, tuck-pointed facades, and garden walls that require ongoing specialist maintenance. These are not properties where average trades work suffices.",
      "David provides heritage repointing, chimney restoration, tuck pointing, and luxury residential masonry for Hawksburn homeowners who expect precision, discretion, and a finish that honours the architecture.",
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
    galleryHeading: "Heritage and Luxury Masonry in Hawksburn",
    gallery: [
      {
        src: "/images/heritage-restoration/cairo-flats-wall/photo-2026-05-23-10-34-27.jpg",
        alt: "Heritage red-brick boundary wall rebuilt for a Hawksburn period property by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-25-1.jpg",
        alt: "Restored twin-pot heritage chimney with Goodwin capping detail, Hawksburn-area home",
      },
      {
        src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59-3.jpg",
        alt: "Fine traditional tuck pointing on heritage brickwork for a Hawksburn residence by Goodwin Bricklaying",
      },
      {
        src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-43.jpg",
        alt: "Hand-laid brick vaulted ceiling for a luxury Hawksburn renovation by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-34.jpg",
        alt: "Heritage brickwork rebuilt over a new opening in a Hawksburn period home by Goodwin Bricklaying",
      },
      {
        src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-26-1.jpg",
        alt: "Restored heritage red-brick garden wall with matched reclaimed brick, Hawksburn by Goodwin Bricklaying",
      },
    ],
    faqs: [
      {
        question: "Do you provide heritage bricklaying in Hawksburn?",
        answer:
          "Yes. Hawksburn is one of nine dedicated service areas for Goodwin Bricklaying. David provides heritage brickwork, repointing, chimney restoration, and luxury residential masonry for Hawksburn's period homes and high-end renovations.",
      },
      {
        question: "Is Hawksburn within your service area?",
        answer:
          "Yes. Hawksburn sits within Goodwin Bricklaying's core inner Melbourne service area, alongside Toorak, Richmond, and Camberwell. David is based in Camberwell and services Hawksburn regularly.",
      },
      {
        question: "Can you restore chimneys on Hawksburn period homes?",
        answer:
          "Yes. Chimney restoration is a core service. Many Hawksburn homes have original chimney stacks that need repointing, crown rebuilds, or full restoration. David works at height with full insurance and the specialist skills these structures require.",
      },
      {
        question: "What makes Goodwin Bricklaying different for Hawksburn homeowners?",
        answer:
          "David is a specialist heritage and architectural bricklayer with 25 years experience — not a volume contractor. Hawksburn homeowners get direct access to the tradesman, detailed quotes with construction specifics, and work built to a standard that matches the suburb's architecture.",
      },
    ],
    nearby: ["toorak", "richmond", "hawthorn", "camberwell"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export const locationSlugs = locations.map((location) => location.slug);
