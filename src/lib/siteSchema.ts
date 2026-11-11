import { localBusinessSchema } from "./schema";
import { site } from "./site";
import { getServiceLink, suburbLinks, type ServiceSlug } from "./siteLinks";

/**
 * Structured data for the main site only. Never import this from /lp/* or
 * from the shared service content components (they also render on /lp/*).
 *
 * lib/schema.ts is left untouched because the landing pages depend on it.
 */

/** Stable identifier for the business, so other schema can reference it. */
export const BUSINESS_ID = `${site.url}/#business`;

/**
 * Minimal reference to the LocalBusiness. Carries name and url as well as the
 * @id so each page still makes sense on its own when read in isolation.
 */
const businessRef = {
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": BUSINESS_ID,
  name: site.name,
  url: site.url,
} as const;

/** The nine suburbs as schema Place objects. */
const suburbsServed = suburbLinks.map((suburb) => ({
  "@type": "Place",
  name: `${suburb.label}, Victoria`,
}));

/**
 * Homepage LocalBusiness, identical to localBusinessSchema() plus an @id.
 *
 * openingHoursSpecification: TODO: ASK SARA for business hours before adding.
 * aggregateRating: deliberately left out. The rating comes from Google
 * reviews, and Google's review snippet guidelines do not allow a business to
 * mark up third-party reviews about itself.
 */
export function homeLocalBusinessSchema(): Record<string, unknown> {
  return { ...localBusinessSchema(), "@id": BUSINESS_ID };
}

/** Service, for each main-site service page. */
export function serviceSchema(
  slug: ServiceSlug,
  description: string,
): Record<string, unknown> {
  const service = getServiceLink(slug);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${service.href}#service`,
    name: service.label.replace("&", "and"),
    description,
    url: `${site.url}${service.href}`,
    provider: businessRef,
    areaServed: suburbsServed,
  };
}

/** ContactPage, for /contact. */
export function contactPageSchema(description: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    description,
    url: `${site.url}/contact`,
    inLanguage: "en-AU",
    mainEntity: {
      ...businessRef,
      telephone: site.phone,
      areaServed: suburbsServed,
    },
  };
}
