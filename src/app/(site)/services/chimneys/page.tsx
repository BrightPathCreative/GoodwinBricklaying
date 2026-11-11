import type { Metadata } from "next";
import { ChimneysContent } from "@/components/services/ChimneysContent";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/siteSchema";
import { ServiceExplore } from "@/components/site/ServiceExplore";
import { TrustStrip } from "@/components/site/TrustStrip";

const description =
  "Specialist chimney stack construction and heritage restoration across Melbourne. From residential fireplaces to 40-metre commercial stacks. Fully insured. 25 years experience.";

export const metadata: Metadata = buildMetadata({
  title:
    "Chimney Stack Construction & Restoration Melbourne | Goodwin Bricklaying",
  description,
  path: "/services/chimneys",
  ogTitle: "Chimney Stack Construction & Restoration Melbourne",
  ogDescription:
    "Specialist chimney work from residential stacks to 40-metre commercial builds.",
});

export default function ChimneysFireplacesPage() {
  return (
    <>
      <JsonLd data={serviceSchema("chimneys", description)} />
      <ChimneysContent />
      <ServiceExplore service="chimneys" />
      <TrustStrip />
    </>
  );
}
