import type { Metadata } from "next";
import { HeritageContent } from "@/components/services/HeritageContent";
import { buildMetadata } from "@/lib/seo";

/** Google Ads landing page for /services/heritage. Paid traffic only: noindex. */
export const metadata: Metadata = buildMetadata({
  title: "Heritage Brickwork & Restoration Melbourne | Goodwin Bricklaying",
  description:
    "Specialist heritage brickwork, repointing, crack stitching, and masonry restoration for Melbourne's finest period homes. Camberwell, Hawthorn, Canterbury, Toorak, and surrounding suburbs.",
  path: "/lp/heritage",
  noindex: true,
});

export default function HeritageLandingPage() {
  return <HeritageContent variant="landing" />;
}
