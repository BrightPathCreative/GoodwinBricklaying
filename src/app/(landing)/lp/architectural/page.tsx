import type { Metadata } from "next";
import { ArchitecturalContent } from "@/components/services/ArchitecturalContent";
import { buildMetadata } from "@/lib/seo";

/** Google Ads landing page for /services/architectural. Paid traffic only: noindex. */
export const metadata: Metadata = buildMetadata({
  title: "Architectural Masonry Melbourne | Vaulted Ceilings, Arches & Brick Tunnels",
  description:
    "Bespoke architectural masonry including vaulted ceilings, arches, and brick tunnels. Trusted by Melbourne architects and premium builders. 25 years of specialist experience.",
  path: "/lp/architectural",
  noindex: true,
});

export default function ArchitecturalLandingPage() {
  return <ArchitecturalContent variant="landing" />;
}
