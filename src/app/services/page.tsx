import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { EnquiryCta } from "@/components/EnquiryCta";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { FaqItem } from "@/lib/schema";
import styles from "./services.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Masonry Services Melbourne | Goodwin Bricklaying",
  description:
    "Heritage restoration, architectural masonry, chimney stacks, retaining walls, and tuck pointing across inner Melbourne. Quality brickwork for discerning homeowners, architects, and builders.",
  path: "/services",
});

const services = [
  {
    title: "Heritage & Restoration",
    text: "Melbourne's older homes and buildings deserve more than a patch job. David specialises in heritage brickwork, repointing, crack stitching, and remedial work that blends seamlessly with original construction.",
    href: "/services/heritage-restoration",
    image:
      "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-34.jpg",
    alt: "Heritage home renovation brickwork matched to the original by Goodwin Bricklaying",
  },
  {
    title: "Architectural Masonry",
    text: "Vaulted ceilings, arches, brick tunnels, and bespoke architectural masonry for architects, designers, and high-end residential builds. Work that makes a statement and lasts generations.",
    href: "/services/architectural-masonry",
    image:
      "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-44.jpg",
    alt: "Hand-laid brick vaulted ceiling in a Fitzroy residence by Goodwin Bricklaying",
  },
  {
    title: "Chimneys & Fireplaces",
    text: "Chimney stack construction and restoration, heritage fireplace work, and handcrafted pizza ovens. Precise structural masonry with a craftsman's eye for detail.",
    href: "/services/chimneys-fireplaces",
    image:
      "/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-27-metre-heritage-landmark-1938.jpg",
    alt: "27-metre 1938 Highett Gasworks heritage chimney landmark by Goodwin Bricklaying",
  },
  {
    title: "Structural & Commercial",
    text: "Commercial blockwork, retaining walls, extensions, and structural masonry for builders, developers, and commercial clients across Melbourne.",
    href: "/services/structural-commercial",
    image:
      "/images/structural-commercial/goodwin-bricklaying-commercial-geometric-blockwork-walls-aerial-view-construction.jpg",
    alt: "Aerial view of geometric commercial blockwork walls by Goodwin Bricklaying",
  },
  {
    title: "Tuck Pointing and Specialised Pointing",
    text: "Fine tuck pointing performed in collaboration with specialist subcontractors, delivering a level of finish that matches the quality of the surrounding work.",
    href: "/services/tuck-pointing",
    image:
      "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59-3.jpg",
    alt: "Fine traditional tuck pointing on heritage brickwork by Goodwin Bricklaying",
  },
] as const;

const faqs: ReadonlyArray<FaqItem> = [
  {
    question: "I'm not sure which service I need. Can you help?",
    answer:
      "Yes. Get in touch with David directly and describe what you're working with. He'll point you in the right direction and give you an honest assessment of what's involved, with no obligation.",
  },
  {
    question: "Do you quote on all project types?",
    answer:
      "David quotes on heritage and restoration work, architectural masonry, chimneys and fireplaces, structural and commercial masonry, and tuck pointing. He does not quote on very small patch repairs or minor jobs. If you're unsure, contact him and he'll let you know straightaway.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "Availability varies depending on the current project schedule. David will give you an honest timeline when he provides your quote. For urgent structural or heritage issues, contact him directly and he will do his best to assist.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Masonry at Every Scale. One Standard of Craftsmanship."
        subtext="From intricate heritage repointing to large-scale commercial blockwork, Goodwin Bricklaying brings the same precision and care to every project."
        crumbs={[homeCrumb, { name: "Services" }]}
      />

      <section className="section section--cream" aria-labelledby="services-list">
        <div className="container">
          <Reveal as="h2" id="services-list" className={styles.heading}>
            What We Do
          </Reveal>
          <Reveal variant="grid" className={styles.serviceGrid}>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={styles.serviceCard}
              >
                <span className={styles.serviceCardImage}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className={styles.serviceCardImg}
                  />
                </span>
                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                <p className={styles.serviceCardText}>{service.text}</p>
                <span className={styles.serviceCardArrow}>
                  Explore <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="services-faq">
        <div className={`container ${styles.faqWrap}`}>
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Answers
          </Reveal>
          <Reveal as="h2" id="services-faq" className={styles.heading}>
            Frequently Asked Questions
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Not sure which service you need?"
        body="Get in touch with David directly. He'll give you an honest assessment and a detailed quote: no obligation, no sales pressure."
        buttonLabel="Enquire Now"
      />
    </>
  );
}
