import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PointingStyles } from "@/components/PointingStyles";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { EnquiryCta } from "@/components/EnquiryCta";
import { ServiceCtaBand } from "@/components/ServiceCtaBand";
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
    question: "Which pointing profile is right for my brickwork?",
    answer:
      "It depends on the age of the building, the brick itself, and how exposed the wall is. Period homes usually call for the profile the wall was built with, whether that is tuck pointing, a penny rolled joint, or flush lime pointing, so the repair reads as original. Exposed elevations are often better served by a weather struck joint that sheds water, while contemporary architectural brickwork is frequently specified raked for the shadow line. David will look at what is already there and tell you what actually suits the wall.",
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
          src: "/images/tuck-pointing/pointing-styles/goodwin-bricklaying-tuck-pointing-joint-detail.jpg",
          alt: "Close detail of traditional tuck pointing, a fine pale ribbon of lime set into a coloured base mortar on heritage red brickwork by Goodwin Bricklaying",
        }}
        showCta
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

      <section
        className="section section--dark"
        aria-labelledby="pointing-styles"
      >
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Pointing &amp; Jointing Profiles
          </Reveal>
          <Reveal as="h2" id="pointing-styles" className={styles.headingStyles}>
            Eight Ways to Finish a Joint
          </Reveal>
          <Reveal as="p" className={styles.stylesIntro}>
            The profile of a mortar joint decides how a whole wall reads: how it
            catches the light, how it sheds water, and whether new work
            disappears into old. These are the profiles we cut and finish, each
            worked on a sample pier built for the purpose and shown twice: once
            in close detail, once in the round.
          </Reveal>
          <PointingStyles />
        </div>
      </section>

      <ServiceCtaBand
        heading="Not sure if your tuck pointing needs restoration?"
        body="David will assess the condition of your existing work and advise on the right approach."
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
