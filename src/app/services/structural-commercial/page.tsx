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
  title: "Commercial Masonry & Structural Brickwork Melbourne | Goodwin Bricklaying",
  description:
    "Commercial blockwork, retaining walls, extensions, and structural masonry for builders and developers across Melbourne. Quality-first, on-time delivery.",
  path: "/services/structural-commercial",
  ogTitle: "Commercial Masonry & Structural Brickwork Melbourne",
  ogDescription:
    "Blockwork, retaining walls, and commercial masonry for Melbourne builders and developers.",
});

const structuralServices = [
  {
    title: "Blockwork",
    text: "Concrete and cement block construction for commercial and residential applications, precision-laid and structurally sound.",
  },
  {
    title: "Retaining Walls",
    text: "Engineered retaining wall construction in brick and block for residential and commercial sites.",
  },
  {
    title: "Extensions",
    text: "Brick and masonry extensions that integrate seamlessly with existing structures.",
  },
  {
    title: "Commercial Projects",
    text: "Large-scale commercial masonry for builders, developers, and government contracts delivered through principal builders.",
  },
];

const gallery = [
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-blockwork-retaining-walls-construction-site-melbourne.jpg",
    alt: "Commercial blockwork retaining walls on a Melbourne construction site by Goodwin Bricklaying",
  },
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-curved-blockwork-basement-parking-construction.jpg",
    alt: "Curved structural blockwork in a basement car park under construction by Goodwin Bricklaying",
  },
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-geometric-blockwork-walls-aerial-view-construction.jpg",
    alt: "Aerial view of geometric commercial blockwork walls by Goodwin Bricklaying",
  },
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-structural-blockwork-steel-reinforcement-scaffolding.jpg",
    alt: "Structural blockwork with steel reinforcement and scaffolding on a Melbourne build",
  },
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-rendered-blockwork-planter-wall-waterproofed.jpg",
    alt: "Waterproofed rendered blockwork planter wall by Goodwin Bricklaying",
  },
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-blockwork-structures-elevated-view-building-site.jpg",
    alt: "Elevated view of commercial blockwork structures on a Melbourne building site",
  },
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-curved-blockwork-underground-car-park-stack-bond.jpg",
    alt: "Curved stack-bond blockwork in an underground car park by Goodwin Bricklaying",
  },
];

const reviews = [
  {
    quote:
      "Terrific job. Our house is old and fiddly, built in 1930 and sinking in one corner due to a lack of foundation and a dodgy build. David, Anthony, and Ben arrived promptly at 7:30am and got to it.",
    author: "Fiona S.",
  },
  {
    quote:
      "He provided a reasonable quote with all the construction details, which made me decide from the start without hesitation or comparison. During the week-long construction process, he was very professional.",
    author: "Ying H.",
  },
];

const faqs: ReadonlyArray<FaqItem> = [
  {
    question: "Do you work as a subcontractor for builders and developers?",
    answer:
      "Yes. David regularly works as a subcontractor for residential builders and commercial developers across Melbourne. He is experienced in working within a broader construction programme, meeting deadlines, and coordinating with other trades on site.",
  },
  {
    question: "What types of commercial projects do you take on?",
    answer:
      "Goodwin Bricklaying takes on commercial blockwork, structural masonry, and large-scale projects delivered through principal builders. Government and civil projects are also completed via builder arrangements. Contact David to discuss the scope and requirements of your project.",
  },
  {
    question: "Can you build brick retaining walls for residential properties?",
    answer:
      "Yes. David builds brick and block retaining walls for residential and commercial sites across inner Melbourne. Each wall is designed to suit the specific site conditions and structural requirements of the project.",
  },
];

export default function StructuralCommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Structural & Commercial"
        title="Structural Masonry. Commercial Capability. The Same Standard."
        subtext="Commercial blockwork, retaining walls, extensions, and structural masonry for builders, developers, and commercial clients across Melbourne."
        crumbs={[
          homeCrumb,
          { name: "Services", url: "/services" },
          { name: "Structural & Commercial" },
        ]}
        image={{
          src: "/images/structural-commercial/goodwin-bricklaying-commercial-blockwork-curved-walls-multi-storey-development.jpg",
          alt: "Curved structural blockwork walls under construction at a multi-storey Melbourne development by Goodwin Bricklaying",
        }}
      />

      <section className="section section--cream" aria-labelledby="structural-intro">
        <div className="container-narrow">
          <Reveal as="h2" id="structural-intro" className={styles.headingTight}>
            Built Right From the Ground Up.
          </Reveal>
          <Reveal className={styles.lead}>
            <p>
              David Goodwin brings the same attention to detail to structural and
              commercial masonry as he does to his heritage and architectural
              work. That is what separates him from the majority of the field.
            </p>
            <p>
              Goodwin Bricklaying works alongside builders and developers on
              commercial projects across inner Melbourne, delivering blockwork,
              extensions, and retaining walls that are built correctly, on time,
              and to specification.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="structural-services">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Capabilities
          </Reveal>
          <Reveal as="h2" id="structural-services" className={styles.heading}>
            What We Build
          </Reveal>
          <ServiceList items={structuralServices} tone="dark" />
        </div>
      </section>

      <ServiceGallery
        heading="Blockwork & Structural Masonry on Site"
        items={gallery}
      />

      <section className="section section--cream" aria-labelledby="structural-who">
        <div className="container-narrow">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Who We Work With
          </Reveal>
          <Reveal as="h2" id="structural-who" className={styles.headingTight}>
            Working With Builders and Developers
          </Reveal>
          <Reveal as="p" className={styles.note}>
            Goodwin Bricklaying is a preferred subcontractor for Melbourne&apos;s
            premium residential builders and commercial developers. If you are a
            builder with a project requiring a reliable, quality-first masonry
            subcontractor, David welcomes enquiries.
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="structural-reviews">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Client Reviews
          </Reveal>
          <Reveal as="h2" id="structural-reviews" className={styles.heading}>
            What Builders and Homeowners Say
          </Reveal>
          <Testimonials items={reviews} />
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="structural-faq">
        <div className={`container ${styles.faqWrap}`}>
          <Reveal as="h2" id="structural-faq" className={styles.heading}>
            Frequently Asked Questions
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="structural-area">
        <div className="container-narrow">
          <Reveal as="h2" id="structural-area" className={styles.headingTight}>
            Where We Work
          </Reveal>
          <Reveal as="p" className={styles.areaText}>
            Structural and commercial masonry services across Camberwell,
            Richmond, Fitzroy, Hawthorn, and inner Melbourne. Available for
            projects city-wide through principal builder arrangements.
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Discuss Your Project"
        body="If you are a builder or developer seeking a quality-first masonry subcontractor, David welcomes enquiries. Get in touch to discuss scope, timeline, and specification."
        buttonLabel="Discuss Your Project"
      />
    </>
  );
}
