import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { ServiceCtaBand } from "@/components/ServiceCtaBand";
import { ServiceGallery } from "@/components/ServiceGallery";
import { BrunswickShowcase } from "@/components/BrunswickShowcase";
import { homeCrumb } from "@/components/Breadcrumbs";
import type { FaqItem } from "@/lib/schema";
import { ServiceEnquiry } from "./ServiceEnquiry";
import { quoteHref, type ServiceVariant } from "./variant";
import styles from "./services.module.css";

const leadService = {
  title: "Chimney Stack Construction and Restoration",
  text: "New chimney stack construction and full heritage restoration, from domestic residential stacks to large-scale commercial and industrial chimneys. Structural, exposed, and often worked at height on live sites.",
  image: {
    src: "/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-restored-crown-new-brickwork.jpg",
    alt: "Restored crown with new brickwork on the heritage Highett Gasworks chimney by Goodwin Bricklaying",
  },
};

const minorServices = [
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
  "Chimney Stack Restoration: Old Licorice Factory, Brunswick (Victorian Heritage Register H1289).",
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
  {
    src: "/images/chimneys-fireplaces/brunswick-licorice-factory/goodwin-bricklaying-brunswick-licorice-factory-chimney-restored-stack-sunlit-brunswick.jpg",
    alt: "The restored Old Licorice Factory chimney stack lit by afternoon sun in Brunswick, by Goodwin Bricklaying",
  },
  {
    src: "/images/chimneys-fireplaces/brunswick-licorice-factory/goodwin-bricklaying-brunswick-licorice-factory-chimney-crown-corbel-brick-macro-detail.jpg",
    alt: "Close detail of corbelled brickwork on the rebuilt Old Licorice Factory chimney crown, Brunswick",
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

export function ChimneysContent({
  variant = "page",
}: {
  variant?: ServiceVariant;
}) {
  return (
    <>
      <PageHero
        eyebrow="Chimneys & Fireplaces"
        title="Chimney Stacks Built to Stand for Generations."
        subtext="From landmark commercial stacks to heritage fireplace restoration and handcrafted pizza ovens: specialist chimney and fireplace masonry throughout Melbourne."
        crumbs={
          variant === "page"
            ? [
                homeCrumb,
                { name: "Services", url: "/services" },
                { name: "Chimneys & Fireplaces" },
              ]
            : undefined
        }
        image={{
          src: "/images/chimneys-fireplaces/collingwood-chimney/goodwin-bricklaying-collingwood-40-metre-chimney-stack-full-height-ground-view.jpg",
          alt: "Restored 40-metre heritage brick chimney stack in Collingwood, Melbourne by Goodwin Bricklaying",
        }}
        showCta
        ctaHref={quoteHref(variant)}
      />

      <section className="section section--cream" aria-labelledby="chimney-intro">
        <div className={`container ${styles.introGrid}`}>
          <Reveal variant="left">
            <h2 id="chimney-intro" className={styles.headingTight}>
              The Detail Work Others Turn Down.
            </h2>
            <div className={styles.lead}>
              <p>
                Chimney work at the level David operates is a specialist
                discipline. It is structural, exposed to the elements, and when
                it is on a heritage building or a landmark site, there is no
                room for error.
              </p>
              <p>
                David has completed chimney projects that have stopped traffic:
                a 40-metre stack in Collingwood, the chimney at the Highett
                Gasworks in Melbourne, and the crown of the heritage-listed Old
                Licorice Factory chimney in Brunswick, a project that sums up
                exactly why clients choose Goodwin.
              </p>
            </div>
          </Reveal>
          <Reveal
            as="figure"
            variant="right"
            className={`${styles.introFigure} image-shape`}
          >
            <Image
              src="/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-completed-red-brick-against-sky.jpg"
              alt="The restored 27-metre Highett Gasworks heritage chimney standing against a blue sky, by Goodwin Bricklaying"
              fill
              sizes="(min-width: 900px) 40vw, 100vw"
              className={styles.introImage}
            />
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
          <Reveal variant="grid" className={styles.leadService}>
            <figure className={`${styles.leadServiceFigure} image-shape`}>
              <Image
                src={leadService.image.src}
                alt={leadService.image.alt}
                fill
                sizes="(min-width: 860px) 50vw, 100vw"
                className={styles.leadServiceImage}
              />
            </figure>
            <div>
              <h3 className={styles.leadServiceTitle}>{leadService.title}</h3>
              <p className={styles.leadServiceText}>{leadService.text}</p>
            </div>
          </Reveal>
          <Reveal variant="grid" className={styles.minorServices}>
            {minorServices.map((item) => (
              <div key={item.title} className={styles.minorService}>
                <h3 className={styles.minorServiceTitle}>{item.title}</h3>
                <p className={styles.minorServiceText}>{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        className="section section--cream"
        aria-labelledby="chimney-brunswick"
      >
        <div className={`container ${styles.projectIntro}`}>
          <Reveal variant="left">
            <span className={`eyebrow ${styles.eyebrowSpace}`}>
              Landmark Project
            </span>
            <h2 id="chimney-brunswick" className={styles.headingTight}>
              The Old Licorice Factory Chimney, Brunswick
            </h2>
            <div className={styles.lead}>
            <p>
              The Australian Licorice Company built its Brunswick factory on
              Victoria Street in 1922, and for the next six decades the octagonal
              brick stack above it drew for the boilers of one of the country&apos;s
              great confectionery works. The factory closed in 1985. The chimney
              stayed.
            </p>
            <p>
              It is now on the Victorian Heritage Register (H1289), listed
              together with the remains of the fire tunnel that served it as the
              only known surviving chimney from the steam-driven years of Melbourne&apos;s
              confectionery industry. The register&apos;s own words on why it
              matters are worth repeating: the elaborate, octagonal stack is
              significant as{" "}
              <em>a fine example of the fully refined skills of the bricklayer</em>.
            </p>
            <p>
              A century of Melbourne weather had taken the crown at the top of
              it. The capping was broken through, courses were cracked and
              shedding brick, and the whole head of the stack needed rebuilding
              above a live site. Goodwin Bricklaying took it down and built it
              back: corbelled courses stepped out by hand to carry a new
              octagonal capping, matched course for course to the 1922
              brickwork, worked from a scaffold deck several storeys up.
            </p>
            <p>
              The stack now stands at the centre of the redevelopment rising
              around it, kept, as the register intended, for the skill it was
              built with.
            </p>
            </div>
          </Reveal>
          <Reveal as="figure" variant="right" className={styles.projectFigureWrap}>
            <div className={`${styles.projectFigure} image-shape`}>
              <Image
                src="/images/chimneys-fireplaces/brunswick-licorice-factory/goodwin-bricklaying-brunswick-licorice-factory-chimney-restored-stack-over-brunswick-rooftops.jpg"
                alt="The restored octagonal brick chimney of the Old Licorice Factory standing over the Brunswick rooftops, rebuilt by Goodwin Bricklaying"
                fill
                sizes="(min-width: 960px) 45vw, 100vw"
                style={{ objectPosition: "center 45%" }}
                className={styles.projectImage}
              />
            </div>
            <figcaption className={styles.projectCaption}>
              The stack over the Brunswick rooftops, with its crown rebuilt.
            </figcaption>
          </Reveal>
        </div>
        <div className="container">
          <BrunswickShowcase />
        </div>
      </section>

      <ServiceGallery
        heading="Landmark Stacks & Heritage Chimneys"
        items={gallery}
      />

      <ServiceCtaBand
        buttonHref={quoteHref(variant)}
        heading="Discuss your chimney or fireplace project"
        body="From heritage stacks to pizza ovens, get a detailed quote with full construction specifics."
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

      <ServiceEnquiry
        variant={variant}
        heading="Enquire About Your Chimney or Fireplace"
        body="Whether it's a heritage stack, a new fireplace, or a handcrafted pizza oven, David will assess what's involved and provide a detailed quote."
        buttonLabel="Get a Quote"
      />
    </>
  );
}
