import type { Metadata } from "next";
import { OutdoorKitchensContent } from "@/components/services/OutdoorKitchensContent";
import { buildMetadata } from "@/lib/seo";
import { ServiceExplore } from "@/components/site/ServiceExplore";
import { TrustStrip } from "@/components/site/TrustStrip";

const description =
  "Custom brick pizza ovens, outdoor kitchen designs, fire pits and feature walls in Melbourne. Melbourne bricklayers with heritage restoration experience. Get a quote.";

export const metadata: Metadata = buildMetadata({
  title:
    "Outdoor Kitchens, Pizza Ovens and Fire Pits in Melbourne | Goodwin Bricklaying",
  description,
  path: "/services/outdoor-kitchens-pizza-ovens",
  ogTitle: "Outdoor Kitchens, Pizza Ovens and Fire Pits in Melbourne",
  ogDescription:
    "Custom brick pizza ovens, outdoor kitchens, fire pits and feature walls, built properly from the footing up.",
});

export default function OutdoorKitchensPizzaOvensPage() {
  return (
    <>
      {/* Service schema for this page already comes from
          OutdoorKitchensContent (shared with /lp), so none is added here. */}
      <OutdoorKitchensContent afterHero={<TrustStrip />} />
      <ServiceExplore service="outdoor-kitchens-pizza-ovens" />
    </>
  );
}
