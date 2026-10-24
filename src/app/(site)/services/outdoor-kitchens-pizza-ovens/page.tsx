import type { Metadata } from "next";
import { OutdoorKitchensContent } from "@/components/services/OutdoorKitchensContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "Outdoor Kitchens, Pizza Ovens and Fire Pits in Melbourne | Goodwin Bricklaying",
  description:
    "Custom brick pizza ovens, outdoor kitchen designs, fire pits and feature walls in Melbourne. Melbourne bricklayers with heritage restoration experience. Get a quote.",
  path: "/services/outdoor-kitchens-pizza-ovens",
  ogTitle: "Outdoor Kitchens, Pizza Ovens and Fire Pits in Melbourne",
  ogDescription:
    "Custom brick pizza ovens, outdoor kitchens, fire pits and feature walls, built properly from the footing up.",
});

export default function OutdoorKitchensPizzaOvensPage() {
  return <OutdoorKitchensContent />;
}
