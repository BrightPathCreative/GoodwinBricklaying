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
  title:
    "Chimney Stack Construction & Restoration Melbourne | Goodwin Bricklaying",
  description:
    "Specialist chimney stack construction and heritage restoration across Melbourne. From residential fireplaces to 40-metre commercial stacks. Fully insured. 25 years experience.",
  path: "/services/chimneys-fireplaces",
  ogTitle: "Chimney Stack Construction & Restoration Melbourne",
  ogDescription:
    "Specialist chimney work from residential stacks to 40-metre commercial builds.",
});

const chimneyServices = [
  {
    title: "Chimney Stack Construction and Restoration",
    text: "New chimney stack construction and full heritage restoration, from domestic residential stacks to large-scale commercial and industrial chimneys.",
  },
  {
    title: "Heritage Fireplace Restoration",
    text: "Repair, repointing, and restoration of heritage fireplaces, retaining original character while ensuring structural soundness and safety.",
  },
  {
    title: "Fireplace Installation and Modification",
    text: "New fireplace construction and modification work for residential and architectural builds.",
  },
  {
    title: "Pizza Ovens",
    text: "Handcrafted brick pizza oven construction, built to function beautifully and become the centrepiece of any outdoor entertaining space.",
  },
];

const landmarks = [
  "Chimney Stack: Highett Gasworks, Melbourne.",
  "Chimney Stack: Collingwood (40 metres).",
  "Chimney Stack Restoration: Old Licorice Factory, Brunswick (currently in progress).",
];

const gallery = [
  {
    src: "/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-27-metre-heritage-landmark-1938.jpg",
    alt: "27-metre 1938 Highett Gasworks heritage chimney landmark restored by Goodwin Bricklaying",
  },
  {
    src: "/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-completed-restoration-red-brick.jpg",
    alt: "Completed red-brick restoration of the Highett Gasworks chimney by Goodwin Bricklaying",
  },
  {
    src: "/images/chimneys-fireplaces/collingwood-chimney/goodwin-bricklaying-collingwood-40-metre-chimney-crown-aerial-drone-view.jpg",
    alt: "Aerial drone view of the restored 40-metre Collingwood chimney crown",
  },
  {
    src: "/images/chimneys-fireplaces/brunswick-licorice-factory/goodwin-bricklaying-brunswick-licorice-factory-chimney-restoration-new-brickwork-corbelling.jpg",
    alt: "New corbelled brickwork on the Old Licorice Factory chimney restoration in Brunswick",
  },
  {
    src: "/images/chimneys-fireplaces/brunswick-licorice-factory/goodwin-bricklaying-brunswick-licorice-factory-chimney-crown-rebuild-capping-detail.jpg",
    alt: "Rebuilt chimney crown capping detail on the Old Licorice Factory, Brunswick",
  },
  {
    src: "/images/chimneys-fireplaces/collingwood-chimney/goodwin-bricklaying-collingwood-heritage-chimney-stacks-street-level-view-melbourne.jpg",
    alt: "Heritage chimney stacks viewed at street level in Collingwood, Melbourne",
  },
  {
    src: "/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-full-scaffolding-during-restoration.jpg",
    alt: "Highett Gasworks chimney under full scaffolding during restoration by Goodwin Bricklaying",
  },
  {
    src: "/images/chimneys-fireplaces/brunswick-licorice-factory/goodwin-bricklaying-brunswick-licorice-factory-chimney-crown-rebuild-bricklayer-at-height.jpg",
    alt: "Goodwin Bricklaying craftsman rebuilding the Old Licorice Factory chimney crown at height in Brunswick",
  },
  {
    src: "/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-restored-crown-new-brickwork.jpg",
    alt: "Restored crown with new brickwork on the Highett Gasworks chimney by Goodwin Bricklaying",
  },
];

const reviews = [
  {
    quote:
      "Thanks David and team for restoring our 1915 heritage chimney. Looks great! Very pleased with the professionalism of the whole job. Removal of gas flue, repointing etc.",
    author: "Linda T.",
  },
];

const faqs: ReadonlyArray<FaqItem> = [
  {
    question: "Can you restore a heritage chimney on an older Melbourne home?",
    answer:
      "Yes. Heritage chimney restoration is one of David's specialities. He has restored chimneys on period homes across Hawthorn, Camberwell, Canterbury, and surrounding suburbs, including a 1915 chimney that required full repointing, partial rebuilding, and gas flue removal. He works carefully to preserve the original character of the chimney while ensuring it is structurally sound.",
  },
  {
    question: "Do you build new chimney stacks as well as restore existing ones?",
    answer:
      "Yes. Goodwin Bricklaying builds new chimney stacks for residential and commercial clients, as well as restoring and repairing existing stacks. David has completed chimney projects ranging from domestic residential work through to large-scale commercial stacks, including a 40-metre stack in Collingwood.",
  },
  {
    question: "Can you build a custom pizza oven?",
    answer:
      "Yes. David builds handcrafted brick pizza ovens for residential clients. Each oven is constructed to function properly and to complement its surrounding space, whether that's a backyard entertaining area, a kitchen extension, or an architectural outdoor setting.",
  },
  {
    question: "Do you handle fireplace repairs and modifications?",
    answer:
      "Yes. David carries out heritage fireplace restoration, repair, repointing, and modification work for residential and architectural clients. If you have a period fireplace that needs attention, or want to modify an existing fireplace as part of a renovation, get in touch and David will assess what's involved.",
  },
];

export default function ChimneysFireplacesPage() {
  return (
    <>
      <PageHero
        eyebrow="Chimneys & Fireplaces"
        title="Chimney Stacks Built to Stand for Generations."
        subtext="From landmark commercial stacks to heritage fireplace restoration and handcrafted pizza ovens: specialist chimney and fireplace masonry throughout Melbourne."
        crumbs={[
          homeCrumb,
          { name: "Services", url: "/services" },
          { name: "Chimneys & Fireplaces" },
        ]}
        image={{
          src: "/images/chimneys-fireplaces/collingwood-chimney/goodwin-bricklaying-collingwood-40-metre-chimney-stack-full-height-ground-view.jpg",
          alt: "Restored 40-metre heritage brick chimney stack in Collingwood, Melbourne by Goodwin Bricklaying",
        }}
      />

      <section className="section section--cream" aria-labelledby="chimney-intro">
        <div className="container-narrow">
          <Reveal as="h2" id="chimney-intro" className={styles.headingTight}>
            The Detail Work Others Turn Down.
          </Reveal>
          <Reveal className={styles.lead}>
            <p>
              Chimney work at the level David operates is a specialist
              discipline. It is structural, exposed to the elements, and when it
              is on a heritage building or a landmark site, there is no room for
              error.
            </p>
            <p>
              David has completed chimney projects that have stopped traffic: a
              40-metre stack in Collingwood, the chimney at the Highett Gasworks in
              Melbourne, and the current restoration of the chimney at the Old
              Licorice Factory in Brunswick, a project that sums up exactly why
              clients choose Goodwin.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="chimney-services">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Services
          </Reveal>
          <Reveal as="h2" id="chimney-services" className={styles.heading}>
            What We Do
          </Reveal>
          <ServiceList items={chimneyServices} tone="dark" />
        </div>
      </section>

      <ServiceGallery
        heading="Landmark Stacks & Heritage Chimneys"
        items={gallery}
      />

      <section className="section section--cream" aria-labelledby="chimney-landmarks">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Landmark Projects
          </Reveal>
          <Reveal as="h2" id="chimney-landmarks" className={styles.heading}>
            Stacks That Define a Skyline
          </Reveal>
          <Reveal variant="grid" className={styles.landmarkList}>
            {landmarks.map((item) => (
              <p key={item} className={styles.landmarkItem}>
                {item}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="chimney-reviews">
        <div className="container">
          <Reveal as="h2" id="chimney-reviews" className={styles.heading}>
            What Our Clients Say
          </Reveal>
          <Testimonials items={reviews} />
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="chimney-faq">
        <div className={`container ${styles.faqWrap}`}>
          <Reveal as="h2" id="chimney-faq" className={styles.heading}>
            Frequently Asked Questions
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="chimney-area">
        <div className="container-narrow">
          <Reveal as="h2" id="chimney-area" className={styles.headingTight}>
            Where We Work
          </Reveal>
          <Reveal as="p" className={styles.areaText}>
            Chimney and fireplace work in Hawthorn, Camberwell, Canterbury,
            Toorak, Glen Iris, Surrey Hills, Hawksburn, Richmond, Fitzroy,
            Collingwood, and surrounding inner Melbourne suburbs.
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Enquire About Your Chimney or Fireplace"
        body="Whether it's a heritage stack, a new fireplace, or a handcrafted pizza oven, David will assess what's involved and provide a detailed quote."
        buttonLabel="Get a Quote"
      />
    </>
  );
}
