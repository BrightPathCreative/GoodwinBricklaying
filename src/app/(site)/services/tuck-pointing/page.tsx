import type { Metadata } from "next";
import { TuckPointingContent } from "@/components/services/TuckPointingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tuck Pointing Melbourne | Period-Accurate Heritage Finish",
  description:
    "Specialist tuck pointing for Victorian and Edwardian homes across inner Melbourne. Heritage-accurate finish delivered in collaboration with specialist subcontractors.",
  path: "/services/tuck-pointing",
  ogTitle: "Tuck Pointing Melbourne | Period-Accurate Heritage Finish",
  ogDescription:
    "Specialist tuck pointing for Victorian and Edwardian homes across inner Melbourne.",
});

export default function TuckPointingPage() {
  return <TuckPointingContent />;
}
