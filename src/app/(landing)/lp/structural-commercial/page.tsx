import type { Metadata } from "next";
import { StructuralCommercialContent } from "@/components/services/StructuralCommercialContent";
import { buildMetadata } from "@/lib/seo";

/** Google Ads landing page for /services/structural-commercial. Paid traffic only: noindex. */
export const metadata: Metadata = buildMetadata({
  title: "Commercial Masonry & Structural Brickwork Melbourne | Goodwin Bricklaying",
  description:
    "Commercial blockwork, retaining walls, extensions, and structural masonry for builders and developers across Melbourne. Quality-first, on-time delivery.",
  path: "/lp/structural-commercial",
  noindex: true,
});

export default function StructuralCommercialLandingPage() {
  return <StructuralCommercialContent variant="landing" />;
}
