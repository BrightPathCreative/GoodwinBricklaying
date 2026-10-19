import type { Metadata } from "next";
import { HeritageContent } from "@/components/services/HeritageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Heritage Brickwork & Restoration Melbourne | Goodwin Bricklaying",
  description:
    "Specialist heritage brickwork, repointing, crack stitching, and masonry restoration for Melbourne's finest period homes. Camberwell, Hawthorn, Canterbury, Toorak, and surrounding suburbs.",
  path: "/services/heritage",
  ogTitle: "Heritage Brickwork & Restoration Melbourne | Goodwin",
  ogDescription:
    "Specialist heritage brickwork, repointing, and crack stitching for Melbourne's period homes.",
});

export default function HeritageRestorationPage() {
  return <HeritageContent />;
}
