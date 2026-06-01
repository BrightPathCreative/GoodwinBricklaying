import type { Metadata } from "next";
import { site } from "./site";

/**
 * Builds per-page metadata with an absolute title (so approved meta titles
 * from docs/seo.md are used verbatim, not run through the layout template),
 * a canonical URL, and complete Open Graph tags.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  noindex?: boolean;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_AU",
      url: `${site.url}${path}`,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [
        {
          url: "/og/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "Luxury heritage masonry by Goodwin Bricklaying, inner Melbourne",
        },
      ],
    },
  };
}
