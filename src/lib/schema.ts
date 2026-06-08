import { site } from "./site";

/**
 * Structured-data builders. Values are sourced from docs/seo.md and
 * docs/brief.md — do not invent claims (e.g. never assert licensed builder).
 */

/** LocalBusiness + HomeAndConstructionBusiness — homepage only. */
export function localBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: site.name,
    alternateName: "Goodwin Brick Block and Heritage",
    description:
      "Luxury masonry, heritage restoration, and architectural brickwork specialists serving inner Melbourne. 25 years experience.",
    url: site.url,
    // telephone and email omitted intentionally — enquiries route through the
    // GHL form / click-to-call. Restore telephone once the CRM number is live.
    image: `${site.url}/og/og-default.jpg`,
    logo: `${site.url}/logo/goodwin-logo-seo.png`,
    // Street address and postcode intentionally omitted (private). Modelled as
    // a service-area business with locality/region only.
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: [
      "Camberwell",
      "Hawthorn",
      "Toorak",
      "Canterbury",
      "Glen Iris",
      "Surrey Hills",
      "Hawksburn",
      "Richmond",
      "Fitzroy",
    ],
    knowsAbout: [
      "Heritage brickwork",
      "Masonry restoration",
      "Architectural masonry",
      "Chimney stacks",
      "Repointing",
      "Tuck pointing",
      "Vaulted ceilings",
    ],
    foundingDate: "2000",
    hasCredential: "Public Liability Insurance, WorkCover",
    award:
      "2026 Quality Business Award for Best Masonry, City of Boroondara (Quality Score 95%+)",
    sameAs: [site.instagram.url],
  };
}

export type FaqItem = { question: string; answer: string };

/** FAQPage — for any page that renders FAQ content. */
export function faqPageSchema(items: ReadonlyArray<FaqItem>): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** WebPage + Service scoped to a single suburb — location landing pages. */
export function locationPageSchema(location: {
  name: string;
  slug: string;
  metaDescription: string;
  headline: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: location.headline,
    description: location.metaDescription,
    url: `${site.url}/locations/${location.slug}`,
    inLanguage: "en-AU",
    about: {
      "@type": "Service",
      name: `Bricklaying and Heritage Masonry in ${location.name}`,
      description: location.metaDescription,
      provider: {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        name: site.name,
        url: site.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
      },
      areaServed: {
        "@type": "City",
        name: location.name,
        containedInPlace: {
          "@type": "State",
          name: "Victoria",
          containedInPlace: { "@type": "Country", name: "Australia" },
        },
      },
    },
  };
}

export type Crumb = { name: string; url?: string };

/** BreadcrumbList — for inner pages (not the homepage). */
export function breadcrumbSchema(crumbs: ReadonlyArray<Crumb>): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.url ? { item: `${site.url}${crumb.url}` } : {}),
    })),
  };
}
