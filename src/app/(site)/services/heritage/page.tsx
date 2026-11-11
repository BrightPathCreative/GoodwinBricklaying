import type { Metadata } from "next";
import { HeritageContent } from "@/components/services/HeritageContent";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/siteSchema";
import { ServiceExplore } from "@/components/site/ServiceExplore";
import { TrustStrip } from "@/components/site/TrustStrip";

const description =
  "Specialist heritage brickwork, repointing, crack stitching, and masonry restoration for Melbourne's finest period homes. Camberwell, Hawthorn, Canterbury, Toorak, and surrounding suburbs.";

export const metadata: Metadata = buildMetadata({
  title: "Heritage Brickwork & Restoration Melbourne | Goodwin Bricklaying",
  description,
  path: "/services/heritage",
  ogTitle: "Heritage Brickwork & Restoration Melbourne | Goodwin",
  ogDescription:
    "Specialist heritage brickwork, repointing, and crack stitching for Melbourne's period homes.",
});

export default function HeritageRestorationPage() {
  return (
    <>
      <JsonLd data={serviceSchema("heritage", description)} />
      <HeritageContent afterHero={<TrustStrip />} />
      <ServiceExplore service="heritage" />
    </>
  );
}
