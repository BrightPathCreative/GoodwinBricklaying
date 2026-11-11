import type { Metadata } from "next";
import { StructuralCommercialContent } from "@/components/services/StructuralCommercialContent";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/siteSchema";
import { ServiceExplore } from "@/components/site/ServiceExplore";
import { TrustStrip } from "@/components/site/TrustStrip";

const description =
  "Commercial blockwork, retaining walls, extensions, and structural masonry for builders and developers across Melbourne. Quality-first, on-time delivery.";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Masonry & Structural Brickwork Melbourne | Goodwin Bricklaying",
  description,
  path: "/services/structural-commercial",
  ogTitle: "Commercial Masonry & Structural Brickwork Melbourne",
  ogDescription:
    "Blockwork, retaining walls, and commercial masonry for Melbourne builders and developers.",
});

export default function StructuralCommercialPage() {
  return (
    <>
      <JsonLd data={serviceSchema("structural-commercial", description)} />
      <StructuralCommercialContent afterHero={<TrustStrip />} />
      <ServiceExplore service="structural-commercial" />
    </>
  );
}
