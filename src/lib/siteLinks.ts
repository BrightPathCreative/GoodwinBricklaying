import { locationNav, serviceNav } from "./site";

/**
 * Internal-linking data for the main site only (never /lp/*).
 *
 * The one-line descriptions reuse the approved service tile copy from the
 * home page, so no new claims are introduced here.
 */

export type ServiceSlug =
  | "heritage"
  | "architectural"
  | "chimneys"
  | "outdoor-kitchens-pizza-ovens"
  | "structural-commercial"
  | "tuck-pointing";

export type ServiceLink = {
  slug: ServiceSlug;
  /** Short label, matches the header dropdown. */
  label: string;
  href: string;
  /** One line shown under the link. */
  description: string;
  /** Lower-case phrase for "<phrase> in <Suburb>" link text. */
  phrase: string;
};

const descriptions: Record<ServiceSlug, { description: string; phrase: string }> = {
  heritage: {
    description:
      "Repointing, crack stitching, heritage brickwork, and remedial work that honours the original.",
    phrase: "Heritage restoration",
  },
  architectural: {
    description:
      "Vaulted ceilings, arches, brick tunnels, and bespoke masonry for architects and high-end builders.",
    phrase: "Architectural masonry",
  },
  chimneys: {
    description:
      "Chimney stacks, heritage fireplace restoration, and handcrafted pizza ovens.",
    phrase: "Chimney restoration",
  },
  "outdoor-kitchens-pizza-ovens": {
    description:
      "Brick pizza ovens, outdoor kitchens, fire pits, and feature walls, built properly from the footing up.",
    phrase: "Outdoor kitchens and pizza ovens",
  },
  "structural-commercial": {
    description:
      "Blockwork, retaining walls, extensions, and commercial projects across Melbourne.",
    phrase: "Structural masonry",
  },
  "tuck-pointing": {
    description:
      "Fine tuck pointing and traditional joint profiles, matched to the original work on period homes.",
    phrase: "Tuck pointing",
  },
};

export const serviceLinks: ReadonlyArray<ServiceLink> = serviceNav.map(
  (item) => {
    const slug = item.href.replace("/services/", "") as ServiceSlug;
    return { slug, label: item.label, href: item.href, ...descriptions[slug] };
  },
);

export function getServiceLink(slug: ServiceSlug): ServiceLink {
  const found = serviceLinks.find((item) => item.slug === slug);
  if (!found) throw new Error(`Unknown service slug: ${slug}`);
  return found;
}

/** Closest related services for each service page. */
export const relatedServices: Record<ServiceSlug, ReadonlyArray<ServiceSlug>> = {
  heritage: ["tuck-pointing", "chimneys"],
  chimneys: ["heritage", "tuck-pointing"],
  "tuck-pointing": ["heritage", "chimneys"],
  architectural: ["outdoor-kitchens-pizza-ovens", "structural-commercial"],
  "outdoor-kitchens-pizza-ovens": ["architectural", "heritage"],
  "structural-commercial": ["architectural", "heritage"],
};

/** The nine suburb pages, in the same order as the footer. */
export const suburbLinks = locationNav;
