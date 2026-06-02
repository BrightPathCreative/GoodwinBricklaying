import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EnquiryCta } from "@/components/EnquiryCta";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
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

  return (
    <>
      <PageHero
        eyebrow="Areas Served"
        title={location.headline}
        subtext={location.body[0]}
        crumbs={[homeCrumb, { name: location.name }]}
        image={location.hero}
      />

      {location.body.length > 1 ? (
        <section className="section section--cream" aria-labelledby="loc-intro">
          <div className="container-narrow">
            <Reveal as="h2" id="loc-intro" className={styles.heading}>
              Local Masonry, Done Properly
            </Reveal>
            <Reveal className={styles.lead}>
              {location.body.slice(1).map((para) => (
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
          <Reveal as="ul" variant="grid" className={styles.tags}>
            {location.services.map((service) => (
              <li key={service} className={styles.tag}>
                {service}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

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
        heading={`Get a Quote — ${location.name}`}
        body={location.closing}
        buttonLabel={`Enquire — ${location.name}`}
      />
    </>
  );
}
