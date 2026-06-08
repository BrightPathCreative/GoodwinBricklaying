import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { EnquiryCta } from "@/components/EnquiryCta";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { FaqItem } from "@/lib/schema";
import styles from "./about.module.css";

export const metadata: Metadata = buildMetadata({
  title:
    "About David Goodwin | 25 Years of Specialist Masonry in Melbourne",
  description:
    "David Goodwin has spent 25 years mastering heritage brickwork, architectural masonry, and chimney restoration across Melbourne's inner suburbs. Learn the story behind Goodwin Bricklaying.",
  path: "/about",
  ogTitle: "About David Goodwin | 25 Years of Specialist Masonry",
  ogDescription:
    "The story behind Goodwin Bricklaying — heritage specialist, Melbourne.",
});

const landmarks = [
  "Chimney Stack: Highett Gasworks, Melbourne.",
  "Chimney Stack: Collingwood (40 metres).",
  "Chimney Stack Restoration: Old Licorice Factory, Brunswick (in progress).",
  "Brick Tunnel: Fitzroy.",
  "Cairo Flats, Fitzroy: 10,000-brick heritage boundary wall rebuild.",
  "Kirra Gardens, Camberwell.",
];

const landmarkPhotos = [
  {
    src: "/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-completed-restoration-red-brick-cropped.jpg",
    alt: "Completed restoration of the heritage Highett Gasworks chimney by Goodwin Bricklaying",
  },
  {
    src: "/images/chimneys-fireplaces/collingwood-chimney/goodwin-bricklaying-collingwood-heritage-chimney-stacks-street-level-view-melbourne.jpg",
    alt: "Heritage brick chimney stacks at street level in Collingwood, Melbourne, by Goodwin Bricklaying",
  },
  {
    src: "/images/chimneys-fireplaces/brunswick-licorice-factory/goodwin-bricklaying-brunswick-licorice-factory-chimney-restoration-new-brickwork-corbelling.jpg",
    alt: "New corbelled brickwork on the Old Licorice Factory chimney restoration in Brunswick",
  },
  {
    src: "/images/hero-fitzroy-brick-arch-tunnel-melbourne.jpg",
    alt: "Vaulted brick arch tunnel built by Goodwin Bricklaying in Fitzroy, Melbourne",
  },
  {
    src: "/images/heritage-restoration/cairo-flats-wall/photo-2026-05-23-10-34-26.jpg",
    alt: "Restored heritage boundary wall at the Cairo Flats, Fitzroy, by Goodwin Bricklaying",
  },
  {
    src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-36.jpg",
    alt: "Heritage brickwork restoration on a period home by Goodwin Bricklaying, inner Melbourne",
  },
] as const;

const faqs: ReadonlyArray<FaqItem> = [
  {
    question:
      "Will I deal directly with David, or is work handed off to other tradespeople?",
    answer:
      "David is on site for every project and leads the work personally. He may work alongside his regular team of bricklayers and labourers, but he is always the one responsible for the outcome. You will have direct contact with David from the first enquiry through to completion.",
  },
  {
    question:
      "What makes Goodwin Bricklaying different from other bricklayers?",
    answer:
      "Twenty-five years of experience in specialist masonry, including heritage restoration and architectural work that most bricklayers simply don't have the skill or background to take on. David's clients are homeowners, architects, and builders who want the work done properly and to the highest standard, and that's the only standard David works to.",
  },
  {
    question: "Do you take on small jobs?",
    answer:
      "Goodwin Bricklaying focuses on quality projects where the skills and experience David has developed over 25 years are genuinely needed. Small patch repairs and low-budget jobs are not the right fit. If you're unsure whether your project is a good match, contact David and he'll give you an honest answer.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="25 Years. One Standard. The Best."
        subtext="David Goodwin has been laying bricks since before most people in his industry finished their apprenticeship. What began as a trade has become a life's craft, built on precision, pride, and an unwillingness to cut corners."
        crumbs={[homeCrumb, { name: "About" }]}
        image={{
          src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-34.jpg",
          alt: "Heritage brickwork matched to the original during a period home renovation by Goodwin Bricklaying, Melbourne",
        }}
      />

      <section className="section section--cream" aria-labelledby="story-heading">
        <div className="container">
          <div className={styles.storyGrid}>
            <Reveal variant="left">
              <span className={`eyebrow ${styles.eyebrowSpace}`}>Our Story</span>
              <h2 id="story-heading" className={styles.heading}>
                The Story Behind Goodwin Bricklaying
              </h2>
              <div className={styles.lead}>
                <p>
                  David Reuben Goodwin started out doing what bricklayers do:
                  residential work, new builds, extensions. But over two
                  decades, something became clear. The work that kept him up at
                  night, in the best way, was the difficult stuff. The heritage
                  restorations. The vaulted ceilings. The chimney stacks others
                  had turned down.
                </p>
                <p>
                  Based in Camberwell, David has spent 25 years refining a skill
                  set that very few tradespeople in Melbourne can match. He has
                  restored pre-war facades in Canterbury and Hawthorn, built
                  landmark chimney stacks for commercial clients across the city,
                  including the Highett Gasworks and a 40-metre stack in
                  Collingwood, and is currently working on the Old Licorice
                  Factory chimney in Brunswick: a project that tells you
                  everything about the kind of work he is drawn to.
                </p>
                <p>
                  David doesn&apos;t take every job. He works with homeowners,
                  architects, and builders who share his commitment to doing
                  things properly, clients who understand that quality masonry is
                  an investment, not a line item to trim. Goodwin Bricklaying
                  exists for those clients.
                </p>
              </div>
            </Reveal>
            <Reveal variant="right" className={`${styles.storyFigure} image-shape`}>
              <Image
                src="/images/heritage-restoration/remedial/photo-2026-05-23-10-12-25.jpg"
                alt="Bricklayer rebuilding a tall red-brick heritage chimney on a Melbourne roof by Goodwin Bricklaying"
                fill
                sizes="(min-width: 960px) 40vw, 100vw"
                className={styles.coverImage}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="how-heading">
        <div className="container-narrow">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            How We Work
          </Reveal>
          <Reveal as="h2" id="how-heading" className={styles.heading}>
            Taken Seriously, Start to Finish
          </Reveal>
          <Reveal className={`${styles.lead} ${styles.leadDark}`}>
            <p>
              Every enquiry is taken seriously. David provides detailed quotes
              with full construction specifics: no vague estimates, no surprises
              on site.
            </p>
            <p>
              Once a project starts, the standard doesn&apos;t change. David and
              his team arrive on time, communicate clearly, and treat every
              property with the care it deserves.
            </p>
            <p>
              The goal on every job, whether it&apos;s a chimney in Fitzroy or a
              heritage facade in Glen Iris, is that when it&apos;s done you
              can&apos;t tell anyone else was ever there. Except that it looks
              better than it ever has.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.banner} aria-label="David Goodwin at work">
        <Image
          src="/images/architectural-masonry/hit-and-miss/goodwin-bricklaying-hit-and-miss-decorative-brick-screen-wall-melbourne.jpg"
          alt=""
          fill
          sizes="100vw"
          className={styles.bannerImage}
          aria-hidden
        />
        <div className={styles.bannerScrim} aria-hidden />
        <div className={`container ${styles.bannerInner}`}>
          <Reveal variant="fade">
            <p className={styles.bannerText}>
              Twenty-five years of heritage restoration and architectural masonry
              across inner Melbourne.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="landmarks-heading">
        <div className="container">
          <div className={styles.landmarkGrid}>
            <Reveal variant="left">
              <span className={`eyebrow ${styles.eyebrowSpace}`}>Selected Work</span>
              <h2 id="landmarks-heading" className={styles.heading}>
                Landmark Projects
              </h2>
              <p className={styles.landmarkIntro}>
                From commercial chimney stacks to heritage boundary walls, these
                are the projects that define David&apos;s reputation across
                inner Melbourne.
              </p>
              <ul className={`${styles.list} ${styles.listDark}`}>
                {landmarks.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="right" className={styles.landmarkPhotos}>
              {landmarkPhotos.map((photo) => (
                <figure
                  key={photo.src}
                  className={`${styles.landmarkPhoto} image-shape`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 960px) 22vw, 50vw"
                    className={styles.coverImage}
                  />
                </figure>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="about-faq">
        <div className={`container ${styles.faqWrap}`}>
          <Reveal as="h2" id="about-faq" className={styles.heading}>
            Frequently Asked Questions
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Work with a craftsman who cares."
        body="If you value quality masonry and want the job done properly, David would be glad to hear from you. Honest assessment, detailed quote, no sales pressure."
        buttonLabel="Get in Touch"
      />
    </>
  );
}
