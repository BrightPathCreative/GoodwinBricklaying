import type { MetadataRoute } from "next";
import { serviceNav, site } from "@/lib/site";
import { locationSlugs } from "@/lib/locations";

/**
 * XML sitemap. Mirrors docs/sitemap.md. The 404 page is intentionally excluded
 * (noindex). Legal pages are included (index, follow per docs/copy).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${site.url}${path}`;

  const staticPaths = [
    "/",
    "/about",
    "/services",
    "/projects",
    "/testimonials",
    "/contact",
    "/locations",
    "/privacy-policy",
    "/cookie-policy",
  ];

  const servicePaths = serviceNav.map((service) => service.href);
  const locationPaths = locationSlugs.map((slug) => `/locations/${slug}`);

  return [...staticPaths, ...servicePaths, ...locationPaths].map((path) => ({
    url: url(path),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
