import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { EnquiryCta } from "@/components/EnquiryCta";
import { homeCrumb } from "@/components/Breadcrumbs";
import { outdoorKitchensServiceSchema, type FaqItem } from "@/lib/schema";
import styles from "./services.module.css";
import outdoor from "./outdoor-kitchens.module.css";

const concepts = "/images/outdoor-kitchens/design-concepts";
const ovens = "/images/outdoor-kitchens/pizza-ovens";

const ovenDetails = [
  {
    title: "Dome and floor",
    text: "The dome holds heat and the floor cooks the base. We use fire-rated brick and refractory materials made for sustained high temperatures.",
  },
  {
    title: "Base and bench",
    text: "The oven sits on a solid base or bench built for the weight and heat. We build the base ourselves or bring in the right trades, depending on the style you want.",
  },
  {
    title: "Flue and chimney",
    text: "A properly sized flue draws smoke away from the cook and the guests.",
  },
  {
    title: "Finish",
    text: "Render, brick or stone, matched to your home and garden.",
  },
];

const whyGoodwin = [
  {
    title: "Heritage-level brickwork",
    text: "Our work includes the Highett Gasworks chimney and the Cairo Flats heritage wall in Fitzroy. The same attention to detail goes into your backyard.",
  },
  {
    title: "Built to last",
    text: "Correct footings, materials and flues, not shortcuts.",
  },
  {
    title: "Designed around you",
    text: "Your space, your style, your budget.",
  },
  {
    title: "Clear communication",
    text: "You know what is happening and when.",
  },
];

const steps = [
  {
    title: "Call or send an enquiry",
    text: "Tell us what you want to build and where.",
  },
  {
    title: "Site visit and quote",
    text: "We look at the space, talk through options and give you a clear quote.",
  },
  {
    title: "Design and plan",
    text: "We confirm the design, materials and finish with you.",
  },
  { title: "Build", text: "We build it and keep the site tidy." },
  { title: "Handover", text: "We show you how to cure and use it." },
];

const faqs: ReadonlyArray<FaqItem> = [
  {
    question: "What is a wood-fired pizza oven made from?",
    answer:
      "A wood-fired pizza oven is usually built from fire-rated brick or refractory materials that handle very high temperatures, set on a solid base. The dome holds heat, the floor cooks the pizza and a flue carries smoke away. Goodwin builds brick pizza ovens in Melbourne to suit your space and finish.",
  },
  {
    question: "How much does a pizza oven or outdoor kitchen cost?",
    answer:
      "Supply and install of a pizza oven kit starts from $5,500. Custom brick pizza ovens, outdoor kitchens, fire pits and feature walls are quoted after we have seen your site, because size, materials, access and finish change the price. A compact pizza oven costs far less than a full outdoor kitchen with a barbecue, bench and chimney.",
  },
  {
    question: "Can you supply and install a pizza oven kit?",
    answer:
      "Yes. If you have chosen a pizza oven kit, we can supply and install it. Supply and install of a pizza oven kit starts from $5,500. If you would rather have a custom brick oven built from the footing up, we do that too.",
  },
  {
    question: "How long does it take to build a pizza oven?",
    answer:
      "A pizza oven takes a minimum of one week to build. Only a small amount of the dome can be built each day, or it can collapse. Outdoor kitchens, fire pits and feature walls vary too much from job to job to give a standard timeframe, so we give you one in your quote once we have seen the site.",
  },
  {
    question: "Do I need a council permit?",
    answer:
      "Most of the time you will not need a permit, but it depends on your property and the size of the build. Chimneys, larger masonry structures and fire-related builds can be affected by council, building and fire rules. Goodwin does not handle permit paperwork, so if you are unsure, check with your local council before we start.",
  },
  {
    question: "Can you build a full outdoor kitchen?",
    answer:
      "Yes. We design and build brick outdoor kitchens that can include a pizza oven, a built-in barbecue, a bench, storage and a chimney. The designs on this page are concepts that show what is possible for your property.",
  },
  {
    question: "Do you build brick fire pits?",
    answer:
      "Yes. We build brick fire pits in round and square designs, set into pavers, lawn or seating areas. Check council and fire authority rules for open fires before you plan one.",
  },
  {
    question: "What is a brick feature wall?",
    answer:
      "A feature wall is a brick wall built to be seen. It can frame a pizza oven, add a heritage look to a garden or hide a service area, and it can include arches, niches and firewood storage.",
  },
  {
    question: "Can you add an oven or kitchen to my existing patio or pergola?",
    answer:
      "Often, yes. We check the space, the structure and the clearances first. Wood-fired ovens and barbecues need safe distances from timber, so every site is assessed before we quote.",
  },
  {
    question: "How do I look after a new pizza oven?",
    answer:
      "A new brick oven needs to be dried out slowly with several small fires before you cook in it at full heat. We show you how at handover.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "We are based in Camberwell, Melbourne, and travel up to an hour from Camberwell for outdoor kitchen and pizza oven projects. See our location pages for the suburbs we cover.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call 0489 262 279 or send an enquiry through the form on this page. Tell us what you would like to build and where, and we will get back to you.",
  },
];

/** Image with a visible "Design concept" tag, so illustrations are never mistaken for finished jobs. */
function ConceptFigure({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`${outdoor.conceptFigure} ${className ?? ""}`}>
      <div className={`${outdoor.conceptFrame} image-shape`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 960px) 45vw, 100vw"
          className={outdoor.conceptImage}
        />
        <span className={outdoor.conceptTag}>Design concept</span>
      </div>
      {caption ? (
        <figcaption className={outdoor.caption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function OutdoorKitchensContent() {
  return (
    <>
      <JsonLd data={outdoorKitchensServiceSchema()} />
      <PageHero
        eyebrow="Outdoor Kitchens & Pizza Ovens"
        title="Outdoor Kitchens, Pizza Ovens, Fire Pits and Feature Walls in Melbourne"
        subtext="Goodwin Brick Block and Heritage is a Camberwell bricklaying business. We are known for heritage restoration and detailed brickwork, and we bring that same care to the part of your home where people gather."
        crumbs={[
          homeCrumb,
          { name: "Services", url: "/services" },
          { name: "Outdoor Kitchens & Pizza Ovens" },
        ]}
        image={{
          src: `${concepts}/goodwin-bricklaying-outdoor-kitchen-design-concept-regional-farm-clay-brick.jpg`,
          alt: "Design concept of a regional farm outdoor kitchen in clay brick under a timber pergola, with a brick pizza oven, barbecue and fire pit",
        }}
        imageLabel="Design concept"
        showCta
      />

      <section className="section section--cream" aria-label="Introduction">
        <div className="container-narrow">
          <Reveal className={styles.lead}>
            <p>
              A brick pizza oven, a fire pit or a feature wall becomes the
              centrepiece of a backyard. Built well, it lasts for decades. Built
              badly, it cracks, smokes and disappoints. We build them properly,
              from the footing up.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="oven-heading">
        <div className={`container ${outdoor.ovenGrid}`}>
          <Reveal variant="left">
            <Reveal
              as="span"
              variant="fade"
              className={`eyebrow ${styles.eyebrowSpace}`}
            >
              Pizza Ovens
            </Reveal>
            <h2 id="oven-heading" className={styles.headingTight}>
              Wood-fired brick pizza ovens
            </h2>
            <div className={`${styles.lead} ${styles.leadDark}`}>
              <p>
                A wood-fired pizza oven cooks hotter and faster than a kitchen
                oven, and the flavour is hard to beat. The oven only performs if
                it is built right, so the details matter.
              </p>
              <p>
                We build pizza ovens in a range of shapes and sizes, from
                compact domes to larger ovens set into a full outdoor
                entertaining area. If you would rather use a pizza oven kit of
                your choice, we can supply and install it. Supply and install of
                a pizza oven kit starts from $5,500.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" className={outdoor.ovenPhotos}>
            <figure className={outdoor.ovenFigure}>
              <div className={`${outdoor.ovenFrame} image-shape`}>
                <Image
                  src={`${ovens}/goodwin-bricklaying-brick-pizza-oven-dome-interior-circular-brick-pattern.jpg`}
                  alt="Inside of a brick pizza oven dome with a circular brick pattern, built by Goodwin Bricklaying"
                  fill
                  sizes="(min-width: 960px) 20vw, 50vw"
                  className={outdoor.conceptImage}
                />
              </div>
              <figcaption
                className={`${outdoor.caption} ${outdoor.captionDark}`}
              >
                Inside a brick dome. Our work.
              </figcaption>
            </figure>
            <figure className={outdoor.ovenFigure}>
              <div className={`${outdoor.ovenFrame} image-shape`}>
                <Image
                  src={`${ovens}/goodwin-bricklaying-brick-pizza-oven-dome-arched-opening-under-construction.jpg`}
                  alt="Brick pizza oven dome with an arched opening under construction on a bench, by Goodwin Bricklaying"
                  fill
                  sizes="(min-width: 960px) 20vw, 50vw"
                  className={outdoor.conceptImage}
                  style={{ objectPosition: "50% 55%" }}
                />
              </div>
              <figcaption
                className={`${outdoor.caption} ${outdoor.captionDark}`}
              >
                A brick dome under construction. Our work.
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="container">
          <Reveal variant="grid" className={outdoor.detailGrid}>
            {ovenDetails.map((item) => (
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
        aria-labelledby="kitchens-heading"
      >
        <div className="container">
          <Reveal
            as="span"
            variant="fade"
            className={`eyebrow ${styles.eyebrowSpace}`}
          >
            Outdoor Kitchens
          </Reveal>
          <Reveal as="h2" id="kitchens-heading" className={styles.headingTight}>
            Outdoor kitchen designs
          </Reveal>
          <Reveal className={styles.lead}>
            <p>
              Brick is the natural material for an outdoor kitchen. It handles
              heat, weather and years of use, and it looks better as it ages. A
              masonry outdoor kitchen can combine a pizza oven, a built-in
              barbecue, a bench with storage, firewood niches and a chimney, all
              in one design.
            </p>
            <p>
              The two images below are <strong>design concepts</strong>. They
              show the kind of outdoor kitchen we can design and build for a
              Victorian property. They are not completed projects.
            </p>
          </Reveal>
          <Reveal variant="grid" className={outdoor.conceptGrid}>
            <ConceptFigure
              src={`${concepts}/goodwin-bricklaying-outdoor-kitchen-design-concept-regional-farm-clay-brick.jpg`}
              alt="Design concept of a regional farm kitchen in clay brick under a timber pergola, with a pizza oven, barbecue, firewood niches and a round fire pit"
              caption="Image 1, design concept: a regional farm kitchen in clay brick under a timber pergola."
            />
            <ConceptFigure
              src={`${concepts}/goodwin-bricklaying-outdoor-kitchen-design-concept-brick-feature-wall-garden.jpg`}
              alt="Design concept of a refined brick feature wall outdoor kitchen with pizza oven, barbecue and arched firewood niche in a landscaped Melbourne garden"
              caption="Image 2, design concept: a refined brick feature wall kitchen for a landscaped Melbourne garden."
            />
          </Reveal>
          <Reveal className={`${styles.lead} ${outdoor.afterConcepts}`}>
            <p>
              Every outdoor kitchen is designed around your yard, your budget
              and how you like to entertain. Tell us what you have in mind and
              we will help you shape it.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="section section--dark"
        aria-labelledby="firepits-heading"
      >
        <div className="container">
          <Reveal
            as="span"
            variant="fade"
            className={`eyebrow ${styles.eyebrowSpace}`}
          >
            Fire Pits and Feature Walls
          </Reveal>
          <Reveal as="h2" id="firepits-heading" className={styles.heading}>
            Fire pits and feature walls
          </Reveal>
          <Reveal variant="grid" className={outdoor.pairGrid}>
            <article>
              <ConceptFigure
                src={`${concepts}/goodwin-bricklaying-fire-pit-design-concept-round-brick-stone-paving.jpg`}
                alt="Design concept of a round brick fire pit set into stone paving"
                className={outdoor.pairFigure}
              />
              <h3 className={outdoor.pairTitle}>Brick fire pits</h3>
              <p className={outdoor.pairText}>
                A built-in brick fire pit gives you a warm place to sit through
                the cooler months. We build round and square designs, sized to
                your space and set into pavers, lawn or a raised seating area.
                Please check local council and fire authority rules for open
                fires on your property before you plan one.
              </p>
            </article>
            <article>
              <ConceptFigure
                src={`${concepts}/goodwin-bricklaying-feature-wall-design-concept-arched-firewood-niche.jpg`}
                alt="Design concept of a brick feature wall with an arched firewood niche beside a pizza oven"
                className={outdoor.pairFigure}
              />
              <h3 className={outdoor.pairTitle}>Feature walls</h3>
              <p className={outdoor.pairText}>
                A brick feature wall can frame a pizza oven, hide a service
                area, or add a heritage look to a modern garden. We can include
                recessed niches, arches, firewood storage and detailed brick
                patterns. Our heritage restoration work means we know how to
                match and finish brick so a new wall looks like it belongs.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section
        className="section section--cream"
        aria-labelledby="why-outdoor-heading"
      >
        <div className="container">
          <Reveal
            as="span"
            variant="fade"
            className={`eyebrow ${styles.eyebrowSpace}`}
          >
            Why Goodwin
          </Reveal>
          <Reveal as="h2" id="why-outdoor-heading" className={styles.heading}>
            Why Goodwin
          </Reveal>
          <Reveal variant="grid" className={outdoor.whyGrid}>
            {whyGoodwin.map((item) => (
              <div key={item.title} className={outdoor.whyItem}>
                <h3 className={outdoor.whyTitle}>{item.title}</h3>
                <p className={outdoor.whyText}>{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        className="section section--cream"
        aria-labelledby="how-outdoor-heading"
      >
        <div className="container">
          <Reveal as="h2" id="how-outdoor-heading" className={styles.heading}>
            How it works
          </Reveal>
          <Reveal variant="grid" className={outdoor.steps}>
            {steps.map((step, index) => (
              <div key={step.title} className={outdoor.step}>
                <span className={outdoor.stepNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={outdoor.whyTitle}>{step.title}</h3>
                <p className={outdoor.whyText}>{step.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        className="section section--cream"
        aria-labelledby="outdoor-area-heading"
      >
        <div className="container">
          <Reveal
            as="span"
            variant="fade"
            className={`eyebrow ${styles.eyebrowSpace}`}
          >
            Service Area
          </Reveal>
          <Reveal
            as="h2"
            id="outdoor-area-heading"
            className={styles.headingTight}
          >
            Where we work
          </Reveal>
          <Reveal as="p" className={styles.areaText}>
            From Craigieburn in the north to Frankston in the south, Werribee in
            the west and Lilydale in the east, we cover a large portion of
            Melbourne. We are based in Camberwell and travel up to an hour from
            Camberwell for outdoor kitchen and pizza oven projects, so you get
            the same high quality brickwork and care wherever your backyard is.
            See our location pages for the suburbs we cover.
          </Reveal>
        </div>
      </section>

      <section
        className="section section--cream"
        aria-labelledby="outdoor-faq-heading"
      >
        <div className={`container ${styles.faqWrap}`}>
          <Reveal as="h2" id="outdoor-faq-heading" className={styles.heading}>
            Frequently Asked Questions
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Ready to plan your pizza oven, outdoor kitchen, fire pit or feature wall?"
        body="Call Goodwin on 0489 262 279 or send an enquiry. Tell us about your space and we will get back to you to arrange a quote."
        buttonLabel="Get a Quote"
      />
    </>
  );
}
