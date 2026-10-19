import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EnquiryCta } from "@/components/EnquiryCta";
import { ServiceGallery } from "@/components/ServiceGallery";
import { ServiceList } from "@/components/ServiceList";
import { ServiceCtaBand } from "@/components/ServiceCtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { locationPageSchema } from "@/lib/schema";
import { serviceNav } from "@/lib/site";
import { getLocation, locationSlugs } from "@/lib/locations";
import styles from "./locations.module.css";

type Params = { suburb: string };

export function generateStaticParams(): Array<Params> {
  return locationSlugs.map((suburb) => ({ suburb }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { suburb } = await params;
  const location = getLocation(suburb);
  if (!location) return {};
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
    ogTitle: location.metaTitle,
    ogDescription: location.metaDescription,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { suburb } = await params;
  const location = getLocation(suburb);
  if (!location) notFound();

  const nearby = location.nearby
    .map((slug) => getLocation(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const introParagraphs = [...location.body.slice(1), ...location.localContext];
  const showIntro = introParagraphs.length > 0;

  return (
    <>
      <JsonLd data={locationPageSchema(location)} />

      <PageHero
        eyebrow="Areas Served"
        title={location.headline}
        subtext={location.body[0]}
        crumbs={[
          homeCrumb,
          { name: "Areas Served", url: "/locations" },
          { name: location.name },
        ]}
        image={location.hero}
        showCta
      />

      {showIntro ? (
        <section className="section section--cream" aria-labelledby="loc-intro">
          <div className="container-narrow">
            <Reveal as="h2" id="loc-intro" className={styles.heading}>
              {location.introHeading}
            </Reveal>
            <Reveal className={styles.lead}>
              {introParagraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="section section--dark" aria-labelledby="loc-services">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Services in {location.name}
          </Reveal>
          <Reveal as="h2" id="loc-services" className={styles.heading}>
            What We Offer in {location.name}
          </Reveal>
          <ServiceList items={location.services} tone="dark" />
        </div>
      </section>

      <ServiceGallery
        eyebrow={`Work in ${location.name}`}
        heading={location.galleryHeading}
        items={location.gallery}
        tone="cream"
      />

      <ServiceCtaBand
        heading={`Get a quote for your ${location.name} project`}
        body="David provides detailed quotes with full construction specifics. If you're not sure what your property needs, he'll give you an honest assessment, with no obligation and no sales pressure."
        buttonLabel={`Enquire in ${location.name}`}
      />

      <section className="section section--cream" aria-labelledby="loc-explore">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Explore
          </Reveal>
          <Reveal as="h2" id="loc-explore" className={styles.heading}>
            Specialist Services
          </Reveal>
          <Reveal className={styles.linkGrid}>
            {serviceNav.map((service) => (
              <Link key={service.href} href={service.href} className={styles.linkRow}>
                <span>{service.label}</span>
                <span className={styles.linkArrow} aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="loc-faq">
        <div className={`container ${styles.faqWrap}`}>
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            {location.name}
          </Reveal>
          <Reveal as="h2" id="loc-faq" className={styles.heading}>
            Frequently Asked Questions
          </Reveal>
          <Reveal>
            <Faq items={location.faqs} />
          </Reveal>
        </div>
      </section>

      {nearby.length > 0 ? (
        <section className="section section--cream" aria-labelledby="loc-nearby">
          <div className="container-narrow">
            <Reveal as="h2" id="loc-nearby" className={styles.heading}>
              Also Serving Nearby
            </Reveal>
            <Reveal as="nav" className={styles.nearby} aria-label="Nearby suburbs">
              {nearby.map((item) => (
                <Link
                  key={item.slug}
                  href={`/locations/${item.slug}`}
                  className={styles.nearbyLink}
                >
                  {item.name}
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}

      <EnquiryCta
        heading={`Get a Quote in ${location.name}`}
        body={location.closing}
        buttonLabel={`Enquire in ${location.name}`}
      />
    </>
  );
}
