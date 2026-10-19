import type { Metadata } from "next";
import { ArchitecturalContent } from "@/components/services/ArchitecturalContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "Architectural Masonry Melbourne | Vaulted Ceilings, Arches & Brick Tunnels",
  description:
    "Bespoke architectural masonry including vaulted ceilings, arches, and brick tunnels. Trusted by Melbourne architects and premium builders. 25 years of specialist experience.",
  path: "/services/architectural",
  ogTitle: "Architectural Masonry Melbourne | Vaulted Ceilings & Arches",
  ogDescription:
    "Bespoke architectural masonry trusted by Melbourne architects. 25 years experience.",
});

export default function ArchitecturalMasonryPage() {
  return <ArchitecturalContent />;
}
