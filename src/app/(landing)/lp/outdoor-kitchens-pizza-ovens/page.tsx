import type { Metadata } from "next";
import { OutdoorKitchensContent } from "@/components/services/OutdoorKitchensContent";
import { buildMetadata } from "@/lib/seo";

/** Google Ads landing page for /services/outdoor-kitchens-pizza-ovens. Paid traffic only: noindex. */
export const metadata: Metadata = buildMetadata({
  title:
    "Outdoor Kitchens, Pizza Ovens and Fire Pits in Melbourne | Goodwin Bricklaying",
  description:
    "Custom brick pizza ovens, outdoor kitchen designs, fire pits and feature walls in Melbourne. Melbourne bricklayers with heritage restoration experience. Get a quote.",
  path: "/lp/outdoor-kitchens-pizza-ovens",
  noindex: true,
});

export default function OutdoorKitchensLandingPage() {
  return <OutdoorKitchensContent variant="landing" />;
}
