import type { Metadata } from "next";
import { TuckPointingContent } from "@/components/services/TuckPointingContent";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/siteSchema";
import { ServiceExplore } from "@/components/site/ServiceExplore";
import { TrustStrip } from "@/components/site/TrustStrip";

const description =
  "Specialist tuck pointing for Victorian and Edwardian homes across inner Melbourne. Heritage-accurate finish delivered in collaboration with specialist subcontractors.";

export const metadata: Metadata = buildMetadata({
  title: "Tuck Pointing Melbourne | Period-Accurate Heritage Finish",
  description,
  path: "/services/tuck-pointing",
  ogTitle: "Tuck Pointing Melbourne | Period-Accurate Heritage Finish",
  ogDescription:
    "Specialist tuck pointing for Victorian and Edwardian homes across inner Melbourne.",
});

export default function TuckPointingPage() {
  return (
    <>
      <JsonLd data={serviceSchema("tuck-pointing", description)} />
      <TuckPointingContent />
      <ServiceExplore service="tuck-pointing" />
      <TrustStrip />
    </>
  );
}
