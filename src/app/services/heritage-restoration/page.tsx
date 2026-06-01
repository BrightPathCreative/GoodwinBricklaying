import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceList } from "@/components/ServiceList";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { EnquiryCta } from "@/components/EnquiryCta";
import { ServiceGallery } from "@/components/ServiceGallery";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { FaqItem } from "@/lib/schema";
import styles from "../services.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Heritage Brickwork & Restoration Melbourne | Goodwin Bricklaying",
  description:
    "Specialist heritage brickwork, repointing, crack stitching, and masonry restoration for Melbourne's finest period homes. Camberwell, Hawthorn, Canterbury, Toorak, and surrounding suburbs.",
  path: "/services/heritage-restoration",
  ogTitle: "Heritage Brickwork & Restoration Melbourne | Goodwin",
  ogDescription:
    "Specialist heritage brickwork, repointing, and crack stitching for Melbourne's period homes.",
});

const heritageServices = [
  {
    title: "Heritage Brickwork",
    text: "Matching and rebuilding original brickwork on period homes and listed buildings, maintaining architectural character and structural integrity.",
  },
  {
    title: "Repointing and Pointing Styles",
    text: "Raking out and replacing deteriorated mortar using period-appropriate profiles and materials. Profiles include flush, struck, weathered, raised ribbon, bird's beak, penny rolled, and recessed pointing to match original construction.",
  },
  {
    title: "Crack Stitching",
    text: "Structural repair of cracked masonry using specialist reinforcement techniques that stabilise the wall without compromising heritage aesthetics.",
  },
  {
    title: "Remedial Work",
    text: "Diagnosis and repair of failing brickwork, spalling, moisture ingress, and structural movement in heritage and modern buildings.",
  },
];

const gallery = [
  {
    src: "/images/heritage-restoration/carlton-garden-wall/photo-2026-05-23-10-34-22.jpg",
    alt: "Restored heritage polychrome brick garden wall in Carlton by Goodwin Bricklaying",
  },
  {
    src: "/images/heritage-restoration/carlton-garden-wall/photo-2026-05-23-10-34-28.jpg",
    alt: "Reclaimed brick detailing and capped pier on a restored Carlton garden wall",
  },
  {
    src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-23.jpg",
    alt: "Remedial brickwork repair on a Melbourne period home by Goodwin Bricklaying",
  },
  {
    src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-27.jpg",
    alt: "Repaired heritage masonry after remedial works by Goodwin Bricklaying",
  },
  {
    src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-33.jpg",
    alt: "Heritage home renovation with matched brickwork by Goodwin Bricklaying",
  },
  {
    src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-36.jpg",
    alt: "Period home renovation brickwork blended with the original masonry",
  },
  {
    src: "/images/heritage-restoration/carlton-garden-wall/photo-2026-05-23-10-34-24.jpg",
    alt: "Detail of a rebuilt heritage brick garden wall in Carlton by Goodwin Bricklaying",
  },
  {
    src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-25.jpg",
    alt: "Remedial repointing on a Melbourne period home by Goodwin Bricklaying",
  },
  {
    src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-34.jpg",
    alt: "Heritage renovation brickwork matched to the original construction by Goodwin Bricklaying",
  },
];

const reviews = [
  {
    quote:
      "Thanks David and team for restoring our 1915 heritage chimney. Looks great! Very pleased with the professionalism of the whole job. If you want high quality work from guys who love heritage, call Goodwin.",
    author: "Linda T.",
  },
  {
    quote:
      "His craftsmanship and dedication and level of detail to his job is top class. The front of the house has never looked better.",
    author: "Ben L.",
  },
];

const faqs: ReadonlyArray<FaqItem> = [
  {
    question: "How do you match original mortar and brick on a heritage property?",
    answer:
      "David assesses the existing mortar profile, colour, and composition before any work begins. Where necessary, samples are tested and mortar is mixed to match the original as closely as possible. For brickwork, he sources period-appropriate materials to ensure the finished result is seamless. This process takes time and expertise, which is why it's not something every bricklayer can deliver.",
  },
  {
    question:
      "Can you repair heritage brickwork without affecting its heritage overlay status?",
    answer:
      "Yes. David is experienced in working on heritage-listed and heritage-overlay properties across Melbourne. He understands the requirements that apply to these properties and works in a way that respects and preserves their character. If your property has a specific heritage overlay, mention this when you enquire and David will advise accordingly.",
  },
  {
    question: "What is crack stitching, and when is it needed?",
    answer:
      "Crack stitching is a structural repair technique used when masonry walls develop cracking due to movement, settlement, or structural stress. Steel reinforcement is inserted into the masonry at key points to stabilise the wall and prevent further movement, without the need to rebuild or significantly alter the appearance of the original brickwork. It is commonly used on older homes where the original construction has shifted over time.",
  },
  {
    question:
      "Do you work on heritage-listed buildings and properties with heritage overlays in Melbourne?",
    answer:
      "Yes. David regularly works on period properties across Hawthorn, Canterbury, Camberwell, Toorak, and other inner Melbourne suburbs where heritage overlays apply. He is familiar with the care and approvals these properties may require and works closely with homeowners and their architects or council contacts where needed.",
  },
];

export default function HeritageRestorationPage() {
  return (
    <>
      <PageHero
        eyebrow="Heritage & Restoration"
        title="Melbourne's Heritage Deserves More Than a Patch Job."
        subtext="Specialist heritage brickwork, repointing, crack stitching, and restoration for pre-war homes and heritage buildings across Camberwell, Hawthorn, Canterbury, and inner Melbourne."
        crumbs={[
          homeCrumb,
          { name: "Services", url: "/services" },
          { name: "Heritage & Restoration" },
        ]}
        image={{
          src: "/images/heritage-restoration/carlton-garden-wall/photo-2026-05-23-10-34-26.jpg",
          alt: "Restored heritage polychrome brick garden wall with capped pier by Goodwin Bricklaying in Carlton, Melbourne",
        }}
      />

      <section className="section section--cream" aria-labelledby="heritage-intro">
        <div className="container-narrow">
          <Reveal as="h2" id="heritage-intro" className={styles.headingTight}>
            A Rare Skill. The Highest Standard.
          </Reveal>
          <Reveal className={styles.lead}>
            <p>
              Very few bricklayers can do heritage masonry to a genuinely high
              standard. It is a discipline built on decades of hands-on
              experience, an intimate knowledge of historical materials, and the
              skill to match original mortar profiles, brick colours, and
              construction methods with near-invisible accuracy. The result
              either looks right or it doesn&apos;t, and there is no shortcut to
              getting it right.
            </p>
            <p>
              David Goodwin has spent 25 years becoming one of Melbourne&apos;s
              most trusted heritage restoration specialists. He has worked on
              1915 chimneys in Hawthorn, 1930s facades in Canterbury, clinker
              brick Art Deco homes, and pre-war residential properties across
              inner Melbourne, restoring them to a condition that matches, and
              often exceeds, their original construction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="heritage-services">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Heritage Services
          </Reveal>
          <Reveal as="h2" id="heritage-services" className={styles.heading}>
            What We Restore
          </Reveal>
          <ServiceList items={heritageServices} tone="dark" />
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="heritage-cairo">
        <div className="container-narrow">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Landmark Project
          </Reveal>
          <Reveal as="h2" id="heritage-cairo" className={styles.headingTight}>
            The Cairo Flats Heritage Wall, Fitzroy
          </Reveal>
          <Reveal className={styles.lead}>
            <p>
              On the Hanover Street side of the iconic, heritage-listed Cairo
              Apartments in Fitzroy, directly opposite the Royal Exhibition
              Building, stood a brick boundary wall more than 150 years old. It
              was a surviving feature of the site&apos;s nineteenth-century origins.
            </p>
            <p>
              Goodwin Bricklaying carefully deconstructed the ageing wall, fitted
              new footings and drainage, and then historically reconstructed it
              brick by brick under expert heritage guidance, preserving both its
              structural integrity and its original character. The extensive
              eight-month project was completed and proudly unveiled to the
              Fitzroy community.
            </p>
          </Reveal>
        </div>
      </section>

      <ServiceGallery
        heading="Heritage Brickwork, Restored to Last"
        items={gallery}
      />

      <section className="section section--cream" aria-labelledby="heritage-reviews">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Client Reviews
          </Reveal>
          <Reveal as="h2" id="heritage-reviews" className={styles.heading}>
            Trusted on Melbourne&apos;s Finest Period Homes
          </Reveal>
          <Testimonials items={reviews} />
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="heritage-faq">
        <div className={`container ${styles.faqWrap}`}>
          <Reveal as="h2" id="heritage-faq" className={styles.heading}>
            Frequently Asked Questions
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="heritage-area">
        <div className="container-narrow">
          <Reveal as="h2" id="heritage-area" className={styles.headingTight}>
            Serving Melbourne&apos;s Heritage Suburbs
          </Reveal>
          <Reveal as="p" className={styles.areaText}>
            Goodwin Bricklaying provides heritage restoration services
            throughout Camberwell, Hawthorn, Canterbury, Glen Iris, Toorak,
            Surrey Hills, Hawksburn, Richmond, and Fitzroy: the suburbs where
            Melbourne&apos;s finest period architecture stands.
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Enquire About Your Heritage Project"
        body="David provides detailed quotes with full construction specifics. If you're not sure what your property needs, he'll give you an honest assessment."
        buttonLabel="Get a Quote"
      />
    </>
  );
}
