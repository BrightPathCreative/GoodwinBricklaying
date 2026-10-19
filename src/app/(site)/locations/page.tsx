import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EnquiryCta } from "@/components/EnquiryCta";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { locations } from "@/lib/locations";
import styles from "./[suburb]/locations.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Areas Served | Heritage Bricklayer Inner Melbourne",
  description:
    "Goodwin Bricklaying serves Camberwell, Hawthorn, Toorak, Canterbury, Glen Iris, Surrey Hills, Richmond, Fitzroy, and Hawksburn. Heritage restoration and architectural masonry across inner Melbourne.",
  path: "/locations",
  ogTitle: "Areas Served | Goodwin Bricklaying Melbourne",
  ogDescription:
    "Heritage bricklaying and architectural masonry across Camberwell, Hawthorn, Toorak, and inner Melbourne suburbs.",
});

export default function LocationsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas Served"
        title="Heritage Bricklaying Across Inner Melbourne"
        subtext="Goodwin Bricklaying is based in Camberwell and works across Melbourne's finest heritage and architectural suburbs. Select your area to see local services, recent work, and answers to common questions."
        crumbs={[homeCrumb, { name: "Areas Served" }]}
        image={{
          src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-36.jpg",
          alt: "Heritage brickwork restoration on a period Melbourne home by Goodwin Bricklaying",
        }}
      />

      <section className="section section--cream" aria-labelledby="locations-grid">
        <div className="container">
          <Reveal as="h2" id="locations-grid" className={styles.heading}>
            Suburbs We Serve
          </Reveal>
          <Reveal className={styles.linkGrid}>
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className={styles.linkRow}
              >
                <span>
                  {location.name}
                  <span className={styles.locationBlurb}>: {location.metaDescription}</span>
                </span>
                <span className={styles.linkArrow} aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Not Sure Which Page to Read?"
        body="David services inner Melbourne within approximately 40 minutes of Camberwell. Enquire with your suburb and project details, and he responds within 24 hours."
        buttonLabel="Get a Quote"
      />
    </>
  );
}
