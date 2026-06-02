import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { Faq } from "@/components/Faq";
import { Testimonials, type Testimonial } from "@/components/Testimonials";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import type { FaqItem } from "@/lib/schema";
import { site } from "@/lib/site";
import styles from "./page.module.css";

const services = [
  {
    title: "Heritage & Restoration",
    text: "Repointing, crack stitching, heritage brickwork, and remedial work that honours the original.",
    href: "/services/heritage-restoration",
    image:
      "/images/heritage-restoration/carlton-garden-wall/photo-2026-05-23-10-34-26.jpg",
    alt: "Restored heritage garden wall in Carlton rebuilt by Goodwin Bricklaying using reclaimed brick",
  },
  {
    title: "Architectural Masonry",
    text: "Vaulted ceilings, arches, brick tunnels, and bespoke masonry for architects and high-end builders.",
    href: "/services/architectural-masonry",
    image:
      "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-curved-brick-retaining-wall-prahran-council-park-completed.jpg",
    alt: "Curved architectural brick retaining wall built by Goodwin Bricklaying in a Prahran council park",
  },
  {
    title: "Chimneys & Fireplaces",
    text: "Chimney stacks, heritage fireplace restoration, and handcrafted pizza ovens.",
    href: "/services/chimneys-fireplaces",
    image:
      "/images/chimneys-fireplaces/collingwood-chimney/goodwin-bricklaying-collingwood-40-metre-chimney-stack-full-height-ground-view.jpg",
    alt: "Forty-metre heritage brick chimney stack in Collingwood restored by Goodwin Bricklaying",
  },
  {
    title: "Structural & Commercial",
    text: "Blockwork, retaining walls, extensions, and commercial projects across Melbourne.",
    href: "/services/structural-commercial",
    image:
      "/images/structural-commercial/goodwin-bricklaying-commercial-blockwork-curved-walls-multi-storey-development.jpg",
    alt: "Curved commercial blockwork walls on a multi-storey Melbourne development by Goodwin Bricklaying",
  },
] as const;

const showcase = [
  {
    image:
      "/images/architectural-masonry/herringbone/goodwin-bricklaying-herringbone-brick-pattern-completed-interior-feature-wall.jpg",
    caption: "Herringbone feature wall",
    alt: "Completed interior herringbone brick feature wall handcrafted by Goodwin Bricklaying",
  },
  {
    image:
      "/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-completed-restoration-red-brick.jpg",
    caption: "Highett Gasworks chimney",
    alt: "Restored red-brick Highett Gasworks heritage chimney by Goodwin Bricklaying",
  },
  {
    image:
      "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-01.jpg",
    caption: "Traditional tuck pointing",
    alt: "Close-up of traditional tuck pointing on heritage brickwork by Goodwin Bricklaying",
  },
  {
    image:
      "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-modern-residential-facade-street-view.jpg",
    caption: "Dental-pattern facade",
    alt: "Contemporary residential facade with dental-pattern brickwork by Goodwin Bricklaying",
  },
] as const;

const whyPoints = [
  "Winner of the 2026 Quality Business Award, rated the #1 masonry business in the City of Boroondara, with a quality score above 95% (the top 1% of Australian businesses).",
  "25 years of specialist masonry experience.",
  "Heritage restoration expertise: a rare skill set in Melbourne.",
  "Landmark projects including the Highett Gasworks chimney, the historic Old Licorice Factory Brunswick, the 1860s Cairo Flats 10,000-brick heritage wall rebuild, and Kirra Gardens Camberwell.",
  "Trusted by homeowners, architects, builders, and developers across inner Melbourne.",
  "Fully insured: public liability and WorkCover.",
] as const;

const testimonials: ReadonlyArray<Testimonial> = [
  {
    quote:
      "David is a true master of his craft. He didn't just execute; he helped me navigate design choices and suggested valuable additions, even when it increased his own workload. His commitment to the best possible outcome is clear.",
    author: "Jaspreet C.",
  },
  {
    quote:
      "His craftsmanship and dedication and level of detail is top class. We are very happy with the result and the front of the house has never looked better.",
    author: "Ben L.",
  },
  {
    quote:
      "He restored a garage wall on a 1930s home and you can't tell the difference! Excellent craftsmanship from a lovely team, led by the delightful David.",
    author: "Priyanka B.",
  },
];

const faqs: ReadonlyArray<FaqItem> = [
  {
    question: "What types of projects do you specialise in?",
    answer:
      "David specialises in heritage brickwork and restoration, architectural masonry including vaulted ceilings and arches, and chimney stack construction and repair. He also takes on structural blockwork, retaining walls, and extensions for builders and developers. He does not take on small patch jobs or low-budget repairs: his work is for clients who want the job done properly, once.",
  },
  {
    question: "Do you work directly with homeowners, or only through builders?",
    answer:
      "Both. David works directly with homeowners on residential projects, and as a preferred subcontractor for architects, builders, and developers. If you're not sure whether your project is the right fit, get in touch and David will give you an honest answer.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Goodwin Bricklaying holds public liability insurance and WorkCover. David has 25 years of specialist masonry experience. For any specific licensing queries related to your project type, please raise these when you enquire and David will advise accordingly.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Fill in the enquiry form on the Contact page, or call the number at the top of this page. David responds to all enquiries within 24 hours and provides detailed quotes with full construction specifics: no vague estimates, no surprises on site.",
  },
  {
    question: "Which suburbs do you service?",
    answer:
      "Goodwin Bricklaying primarily serves inner Melbourne suburbs including Camberwell, Hawthorn, Toorak, Canterbury, Glen Iris, Surrey Hills, Hawksburn, Richmond, and Fitzroy. David works within approximately 40 minutes of Camberwell and focuses on areas where heritage and architectural work is in demand. Contact us to confirm availability for your suburb.",
  },
  {
    question: "How long have you been in the trade?",
    answer:
      "David has been working as a bricklayer and masonry specialist for 25 years. Over that time he has completed landmark projects including the Highett Gasworks chimney in Melbourne, a 40-metre chimney stack in Collingwood, and heritage restoration work across some of Melbourne's most significant period homes.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <section className={styles.hero} aria-label="Introduction">
        <Image
          src="/images/hero-goodwin-bricklaying-lit-brick-arch-tunnel-melbourne.jpg"
          alt="Warmly lit heritage brick archway and vaulted tunnel handcrafted by Goodwin Bricklaying in Melbourne"
          fill
          sizes="100vw"
          priority
          className={styles.heroImage}
        />
        <div className={`container ${styles.heroInner}`}>
          <span className={`eyebrow ${styles.heroEyebrow}`}>
            Heritage Masonry · Inner Melbourne
          </span>
          <h1 className={styles.heroHeadline}>
            <span className={styles.heroLineOne}>Luxury Masonry.</span>{" "}
            <span className={styles.heroLineTwo}>Heritage Restoration.</span>{" "}
            <span className={styles.heroLineThree}>
              Architectural Craftsmanship.
            </span>
          </h1>
          <p className={styles.heroSub}>
            Twenty-five years of bespoke brickwork across Melbourne&apos;s and
            England&apos;s finest homes and most significant heritage buildings.
          </p>
          <div className={styles.trustBar}>
            <span className={styles.awardBadge}>
              <Image
                src="/images/quality-business-award-2026-badge.png"
                alt="2026 Quality Business Award winner badge"
                width={32}
                height={32}
                className={styles.awardBadgeImg}
              />
              2026 Quality Business Award Winner
            </span>
            <span>25 Years Experience</span>
            <span>Public Liability &amp; WorkCover Insured</span>
            <span>Heritage Specialists</span>
          </div>
          <Link href="/projects" className={`btn btn--light ${styles.heroCta}`}>
            View Projects
          </Link>
        </div>
        <ScrollIndicator />
      </section>

      <section className={`section ${styles.intro}`}>
        <div className={`container ${styles.introGrid}`}>
          <Reveal variant="left" className={styles.introCopy}>
            <h2 className={styles.introHeading}>
              Built on detail, tradition, and refined workmanship.
            </h2>
            <div className={styles.introBody}>
              <p>
                Goodwin Bricklaying specialises in luxury residential masonry,
                architectural builds, and heritage restoration throughout
                Victoria. Every project, whether a pre-war chimney in Hawthorn
                or a vaulted ceiling in Toorak, is approached with precision,
                craftsmanship, and respect for timeless construction.
              </p>
              <p>
                We work with discerning homeowners, architects, and builders who
                understand that the finest results take time, skill, and a
                craftsman who truly cares.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" className={`${styles.introFigure} image-shape`}>
            <Image
              src="/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-47-3.jpg"
              alt="Hand-laid brick fan vaulted ceiling crafted by Goodwin Bricklaying in a Fitzroy residence"
              fill
              sizes="(min-width: 960px) 45vw, 100vw"
              className={styles.coverImage}
            />
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.services}`} aria-labelledby="services-heading">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.sectionEyebrow}`}>
            Services
          </Reveal>
          <Reveal as="h2" id="services-heading" className={styles.sectionHeading}>
            What We Do
          </Reveal>
          <Reveal variant="grid" className={styles.serviceGrid}>
            {services.map((service) => (
              <Link key={service.href} href={service.href} className={styles.serviceTile}>
                <span className={`${styles.serviceImage} image-shape`}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className={styles.coverImage}
                  />
                </span>
                <h3 className={styles.serviceTileTitle}>{service.title}</h3>
                <p className={styles.serviceTileText}>{service.text}</p>
                <span className={styles.serviceTileArrow}>
                  Explore <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.showcase}`} aria-labelledby="showcase-heading">
        <div className="container">
          <div className={styles.showcaseHead}>
            <div>
              <Reveal as="span" variant="fade" className={`eyebrow ${styles.sectionEyebrow}`}>
                Selected Work
              </Reveal>
              <Reveal as="h2" id="showcase-heading" className={styles.showcaseHeading}>
                A portfolio built brick by brick.
              </Reveal>
            </div>
            <Reveal variant="fade" className={styles.showcaseLink}>
              <Link href="/projects" className={styles.serviceTileArrow}>
                View all projects <span aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>
          </div>
          <Reveal variant="grid" className={styles.showcaseGrid}>
            {showcase.map((item) => (
              <Link key={item.image} href="/projects" className={`${styles.showcaseItem} image-shape`}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 24vw, 50vw"
                  className={styles.coverImage}
                />
                <span className={styles.showcaseCaption}>{item.caption}</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.why}`} aria-labelledby="why-heading">
        <div className={`container ${styles.whyGrid}`}>
          <Reveal variant="left">
            <span className={`eyebrow ${styles.sectionEyebrow}`}>Why Goodwin</span>
            <h2 id="why-heading" className={styles.whyHeading}>
              A craftsman who works with those who want the best.
            </h2>
            <span className={`${styles.whyImage} image-shape`}>
              <Image
                src="/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-two-storey-contemporary-home-exterior.jpg"
                alt="Bright contemporary two-storey home with white dental-pattern brickwork by Goodwin Bricklaying"
                fill
                sizes="(min-width: 960px) 40vw, 100vw"
                className={styles.coverImage}
              />
            </span>
          </Reveal>
          <Reveal variant="right" className={styles.whyList}>
            {whyPoints.map((point) => (
              <p key={point} className={styles.whyItem}>
                {point}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.testimonials}`} aria-labelledby="testimonials-heading">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.sectionEyebrow}`}>
            Testimonials
          </Reveal>
          <Reveal as="h2" id="testimonials-heading" className={styles.sectionHeading}>
            What Our Clients Say
          </Reveal>
          <Testimonials items={testimonials} />
        </div>
      </section>

      <section className={`section ${styles.faq}`} aria-labelledby="faq-heading">
        <div className={`container ${styles.faqInner}`}>
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.sectionEyebrow}`}>
            Answers
          </Reveal>
          <Reveal as="h2" id="faq-heading" className={styles.sectionHeading}>
            Frequently Asked Questions
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.cta}`} aria-labelledby="cta-heading">
        <Image
          src="/images/hero-fitzroy-brick-arch-tunnel-melbourne.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className={styles.ctaImage}
        />
        <div className={`container ${styles.ctaInner}`}>
          <Reveal>
            <h2 id="cta-heading" className={styles.ctaHeading}>
              Let&apos;s discuss your next project.
            </h2>
            <p className={styles.ctaSub}>
              Heritage restoration, architectural builds, and luxury residential
              masonry: serving Camberwell, Hawthorn, Toorak, and surrounding
              inner Melbourne suburbs.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn--light">
                Contact Goodwin
              </Link>
              <a href={site.phoneHref} className={styles.ctaPhone}>
                {site.phoneLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
