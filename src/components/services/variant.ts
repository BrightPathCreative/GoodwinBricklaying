import { navCta } from "@/lib/site";

/**
 * Each service page's content renders in two places: the indexed page under
 * /services, and its Google Ads landing page under /lp. The landing variant
 * keeps visitors on the page, so every quote button jumps to the enquiry form
 * further down instead of leaving for /contact.
 */
export type ServiceVariant = "page" | "landing";

export const LANDING_ENQUIRY_ID = "enquire";

export function quoteHref(variant: ServiceVariant): string {
  return variant === "landing" ? `#${LANDING_ENQUIRY_ID}` : navCta.href;
}
