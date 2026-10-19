import type { Metadata } from "next";
import { StructuralCommercialContent } from "@/components/services/StructuralCommercialContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Masonry & Structural Brickwork Melbourne | Goodwin Bricklaying",
  description:
    "Commercial blockwork, retaining walls, extensions, and structural masonry for builders and developers across Melbourne. Quality-first, on-time delivery.",
  path: "/services/structural-commercial",
  ogTitle: "Commercial Masonry & Structural Brickwork Melbourne",
  ogDescription:
    "Blockwork, retaining walls, and commercial masonry for Melbourne builders and developers.",
});

export default function StructuralCommercialPage() {
  return <StructuralCommercialContent />;
}
