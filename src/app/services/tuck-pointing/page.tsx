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
  title: "Tuck Pointing Melbourne | Period-Accurate Heritage Finish",
  description:
    "Specialist tuck pointing for Victorian and Edwardian homes across inner Melbourne. Heritage-accurate finish delivered in collaboration with specialist subcontractors.",
  path: "/services/tuck-pointing",
  ogTitle: "Tuck Pointing Melbourne | Period-Accurate Heritage Finish",
  ogDescription:
    "Specialist tuck pointing for Victorian and Edwardian homes across inner Melbourne.",
});

const tuckServices = [
  {
    title: "Heritage Tuck Pointing",
    text: "Period-accurate tuck pointing for Victorian and Edwardian homes across inner Melbourne.",
  },
  {
    title: "Restoration Tuck Pointing",
    text: "Replacement and restoration of deteriorated tuck pointing as part of broader heritage restoration projects.",
  },
  {
    title: "Matched Tuck Pointing",
    text: "Colour and profile matching to blend new tuck pointing with original work on period properties.",
  },
];

const gallery = [
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-58.jpg",
    alt: "Fine tuck pointing detail on heritage red brickwork by Goodwin Bricklaying",
  },
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59.jpg",
    alt: "Tuck pointing ribbon lines on a Melbourne period facade",
  },
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59-1.jpg",
    alt: "Period-accurate tuck pointing mortar profile on heritage brickwork",
  },
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-00.jpg",
    alt: "Restored tuck pointing on a Victorian-era brick wall by Goodwin Bricklaying",
  },
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59-2.jpg",
    alt: "Close-up of colour-matched tuck pointing on heritage masonry",
  },
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-00-1.jpg",
    alt: "Fine contrasting mortar ribbon of traditional tuck pointing by Goodwin Bricklaying",
  },
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59-3.jpg",
    alt: "Crisp tuck pointing lines across a heritage brick wall by Goodwin Bricklaying",
  },
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-00-2.jpg",
    alt: "Detail of period-accurate tuck pointing on Edwardian brickwork by Goodwin Bricklaying",
  },
];

const reviews = [
  {
    quote:
      "David booked the next day and fixed it so professionally. I really appreciate David's skills, reliability and reasonable price.",
    author: "Bill W.",
  },
  {
    quote:
      "Dave was very responsive throughout all stages. The quality of his work was amazing. Fast, reasonably priced and highly accommodating. Would highly recommend, and will use on future projects.",
    author: "Rebecca W.",
  },
];

const faqs: ReadonlyArray<FaqItem> = [
  {
    question: "What is tuck pointing, and is it the same as repointing?",
    answer:
      "No, they are different. Repointing is the process of replacing deteriorated mortar between bricks with fresh mortar. Tuck pointing is a more specialised technique where a coloured base mortar is applied flush with the brick face, and then a thin ribbon of contrasting mortar is pressed into a fine groove to give the appearance of very fine, precise joints. It is characteristic of high-quality Victorian and Edwardian brickwork.",
  },
  {
    question: "Does my heritage home need tuck pointing?",
    answer:
      "If your home is Victorian or Edwardian and has decorative brickwork with very fine, raised mortar lines, it likely has original tuck pointing that may need restoration. David can assess the condition of your existing tuck pointing and advise on whether restoration or replacement is appropriate.",
  },
  {
    question: "Do you match the colour and profile of existing tuck pointing?",
    answer:
      "Yes. Colour and profile matching is a core part of the tuck pointing service. David works with specialist subcontractors who have the experience and materials to match original tuck pointing profiles and colours as closely as possible, ensuring the finished result is consistent with the existing work.",
  },
];

export default function TuckPointingPage() {
  return (
    <>
      <PageHero
        eyebrow="Tuck Pointing"
        title="Fine Tuck Pointing. Period-Accurate Finish."
        subtext="Specialist tuck pointing for heritage homes, period buildings, and premium residential masonry, delivered in collaboration with Melbourne's finest tuck pointing specialists."
        crumbs={[
          homeCrumb,
          { name: "Services", url: "/services" },
          { name: "Tuck Pointing" },
        ]}
        image={{
          src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-01.jpg",
          alt: "Specialist tuck pointing in progress on weathered red brickwork with fresh lime mortar by Goodwin Bricklaying",
        }}
      />

      <section className="section section--cream" aria-labelledby="tuck-intro">
        <div className="container-narrow">
          <Reveal as="h2" id="tuck-intro" className={styles.headingTight}>
            The Finishing Detail That Defines the Work.
          </Reveal>
          <Reveal className={styles.lead}>
            <p>
              Tuck pointing is the fine art of applying a narrow mortar ribbon
              over a flush-coloured base coat to create the illusion of fine,
              precise joints. It is a defining feature of high-quality heritage
              brickwork in Victorian and Edwardian homes.
            </p>
            <p>
              Goodwin Bricklaying delivers tuck pointing in partnership with
              specialist subcontractors, ensuring the same standard of precision
              and period accuracy that defines all of our work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="tuck-services">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Services
          </Reveal>
          <Reveal as="h2" id="tuck-services" className={styles.heading}>
            What We Offer
          </Reveal>
          <ServiceList items={tuckServices} tone="dark" />
        </div>
      </section>

      <ServiceGallery
        heading="Period-Accurate Tuck Pointing"
        items={gallery}
      />

      <section className="section section--cream" aria-labelledby="tuck-reviews">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Client Reviews
          </Reveal>
          <Reveal as="h2" id="tuck-reviews" className={styles.heading}>
            What Our Clients Say
          </Reveal>
          <Testimonials items={reviews} />
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="tuck-faq">
        <div className={`container ${styles.faqWrap}`}>
          <Reveal as="h2" id="tuck-faq" className={styles.heading}>
            Frequently Asked Questions
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="tuck-area">
        <div className="container-narrow">
          <Reveal as="h2" id="tuck-area" className={styles.headingTight}>
            Where We Work
          </Reveal>
          <Reveal as="p" className={styles.areaText}>
            Tuck pointing in Camberwell, Hawthorn, Canterbury, Toorak, Glen Iris,
            Surrey Hills, Hawksburn, Richmond, Fitzroy, and surrounding inner
            Melbourne areas.
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Enquire About Tuck Pointing"
        body="David will assess the condition of your existing tuck pointing and advise on whether restoration or replacement is appropriate. Get in touch for an honest assessment."
        buttonLabel="Enquire Now"
      />
    </>
  );
}
