import type { Metadata } from "next";
import { ChimneysContent } from "@/components/services/ChimneysContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "Chimney Stack Construction & Restoration Melbourne | Goodwin Bricklaying",
  description:
    "Specialist chimney stack construction and heritage restoration across Melbourne. From residential fireplaces to 40-metre commercial stacks. Fully insured. 25 years experience.",
  path: "/services/chimneys",
  ogTitle: "Chimney Stack Construction & Restoration Melbourne",
  ogDescription:
    "Specialist chimney work from residential stacks to 40-metre commercial builds.",
});

export default function ChimneysFireplacesPage() {
  return <ChimneysContent />;
}
