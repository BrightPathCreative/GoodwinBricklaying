import type { Metadata } from "next";
import { TuckPointingContent } from "@/components/services/TuckPointingContent";
import { buildMetadata } from "@/lib/seo";

/** Google Ads landing page for /services/tuck-pointing. Paid traffic only: noindex. */
export const metadata: Metadata = buildMetadata({
  title: "Tuck Pointing Melbourne | Period-Accurate Heritage Finish",
  description:
    "Specialist tuck pointing for Victorian and Edwardian homes across inner Melbourne. Heritage-accurate finish delivered in collaboration with specialist subcontractors.",
  path: "/lp/tuck-pointing",
  noindex: true,
});

export default function TuckPointingLandingPage() {
  return <TuckPointingContent variant="landing" />;
}
