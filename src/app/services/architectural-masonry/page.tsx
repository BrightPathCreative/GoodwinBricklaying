import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceList } from "@/components/ServiceList";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { EnquiryCta } from "@/components/EnquiryCta";
import { ServiceCtaBand } from "@/components/ServiceCtaBand";
import { ServiceGallery } from "@/components/ServiceGallery";
import TiltedCarousel from "@/components/TiltedCarousel";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { FaqItem } from "@/lib/schema";
import styles from "../services.module.css";

export const metadata: Metadata = buildMetadata({
  title:
    "Architectural Masonry Melbourne | Vaulted Ceilings, Arches & Brick Tunnels",
  description:
    "Bespoke architectural masonry including vaulted ceilings, arches, and brick tunnels. Trusted by Melbourne architects and premium builders. 25 years of specialist experience.",
  path: "/services/architectural-masonry",
  ogTitle: "Architectural Masonry Melbourne | Vaulted Ceilings & Arches",
  ogDescription:
    "Bespoke architectural masonry trusted by Melbourne architects. 25 years experience.",
});

const architecturalServices = [
  {
    title: "Vaulted Ceilings",
    text: "Structural brick and masonry vaulted ceiling construction for high-end residential and architectural projects. Each vault is engineered for permanence and designed to form.",
    image: {
      src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-32.jpg",
      alt: "Brick vaulted ceiling under construction in a Fitzroy residence by Goodwin Bricklaying",
    },
  },
  {
    title: "Arches",
    text: "Custom arch construction in a range of styles, including segmental, semi-circular, gothic, and flat. Built to architectural specification or designed in collaboration with David and your architect.",
    image: {
      src: "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-curved-brick-retaining-wall-prahran-council-park-completed.jpg",
      alt: "Completed curved architectural brick retaining wall at a Prahran council park by Goodwin Bricklaying",
    },
  },
  {
    title: "Brick Tunnels",
    text: "Bespoke brick tunnel construction for architectural entrances, undercroft spaces, wine cellars, and statement features.",
    image: {
      src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-47.jpg",
      alt: "Curved brick tunnel vault detail handcrafted by Goodwin Bricklaying in Fitzroy",
    },
  },
  {
    title: "Bespoke Masonry",
    text: "Custom masonry features for luxury residential builds, including garden walls, feature brick installations, and statement facades.",
    image: {
      src: "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-close-up-detail-textured-facade.jpg",
      alt: "Close-up of dental-pattern brickwork detail on a textured facade by Goodwin Bricklaying",
    },
  },
];

const gallery = [
  {
    src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-32.jpg",
    alt: "Brick vaulted ceiling under construction in a Fitzroy residence by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-44.jpg",
    alt: "Hand-laid brick vault springing from the wall in a Fitzroy build by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-47.jpg",
    alt: "Curved brick tunnel vault detail handcrafted by Goodwin Bricklaying in Fitzroy",
  },
  {
    src: "/images/architectural-masonry/herringbone/goodwin-bricklaying-herringbone-brick-pattern-completed-interior-feature-wall.jpg",
    alt: "Completed interior herringbone brick feature wall by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/herringbone/goodwin-bricklaying-herringbone-brick-pattern-feature-wall-construction-in-progress.jpg",
    alt: "Herringbone brick feature wall under construction by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-close-up-detail-textured-facade.jpg",
    alt: "Close-up of dental-pattern brickwork detail on a textured facade by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/hit-and-miss/goodwin-bricklaying-hit-and-miss-decorative-brick-screen-wall-melbourne.jpg",
    alt: "Hit-and-miss decorative brick screen wall in Melbourne by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-masonry-curved-wall-timber-seating-prahran-park.jpg",
    alt: "Curved architectural masonry wall with timber seating at a Prahran park",
  },
  {
    src: "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-two-storey-contemporary-home-exterior.jpg",
    alt: "Two-storey contemporary home with a dental-pattern brick exterior by Goodwin Bricklaying",
  },
];

const fitzroyTunnelImages = [
  {
    src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-32.jpg",
    alt: "Brick vaulted ceiling under construction in a Fitzroy residence by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-34.jpg",
    alt: "Hand-laid brickwork forming the Fitzroy tunnel vault by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-35.jpg",
    alt: "Curved brick vault springing detail in the Fitzroy tunnel by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-36.jpg",
    alt: "Progress view of the handcrafted Fitzroy brick tunnel by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-38.jpg",
    alt: "Interior of the curved brick tunnel vault in Fitzroy by Goodwin Bricklaying",
  },
  {
    src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-42.jpg",
    alt: "Detail of the completed Fitzroy brick tunnel vault by Goodwin Bricklaying",
  },
];

const reviews = [
  {
    quote:
      "David is a true master of his craft. He didn't just execute; he helped me navigate design choices and suggested valuable additions, even when it increased his own workload. His commitment to the best possible outcome is clear.",
    author: "Jaspreet C.",
  },
  {
    quote:
      "Dave was very responsive throughout all stages. The quality of his work was amazing. Fast, reasonably priced and highly accommodating. Would highly recommend, and will use on future projects.",
    author: "Rebecca W.",
  },
];

const faqs: ReadonlyArray<FaqItem> = [
  {
    question:
      "Can you work directly from an architect's drawings and specifications?",
    answer:
      "Yes. David regularly works from architectural drawings and specifications provided by the project architect, builder, or designer. He is experienced in liaising directly with architects throughout the construction process to ensure the finished result matches the design intent precisely.",
  },
  {
    question: "What is involved in building a vaulted brick ceiling?",
    answer:
      "A vaulted brick ceiling is a structural masonry form that requires careful engineering, precise formwork, and a deep understanding of how brick and mortar behave under load. David assesses each project individually, works from the architectural specification, and constructs the vault in stages to ensure structural soundness and the correct visual form. It is a complex, skilled undertaking that very few bricklayers in Victoria are equipped to deliver.",
  },
  {
    question: "Do you build brick arches in residential homes?",
    answer:
      "Yes. David builds custom brick arches in a range of styles, from simple segmental arches over doorways and windows to more complex forms for architectural feature walls and entrances. Each arch is built to specification and constructed to last.",
  },
  {
    question: "Can I see examples of your architectural masonry work?",
    answer:
      "Yes. Visit the Projects gallery on this site for examples of David's architectural work. The Fitzroy brick tunnel is currently being professionally filmed and will be added to the portfolio shortly. You are also welcome to contact David directly to discuss your project and he can share relevant examples.",
  },
];

export default function ArchitecturalMasonryPage() {
  return (
    <>
      <PageHero
        eyebrow="Architectural Masonry"
        title="Masonry That Architects Trust. Work That Lasts Generations."
        subtext="Vaulted ceilings, arches, brick tunnels, and bespoke architectural masonry for residential builds, architectural commissions, and landmark projects across Melbourne."
        crumbs={[
          homeCrumb,
          { name: "Services", url: "/services" },
          { name: "Architectural Masonry" },
        ]}
        image={{
          src: "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-curved-brick-retaining-wall-prahran-council-park-completed.jpg",
          alt: "Completed curved architectural brick retaining wall with timber bench seating at a Prahran council park by Goodwin Bricklaying",
        }}
        showCta
      />

      <section className="section section--cream" aria-labelledby="arch-intro">
        <div className="container-narrow">
          <Reveal as="h2" id="arch-intro" className={styles.headingTight}>
            Beyond the Ordinary.
          </Reveal>
          <Reveal className={styles.lead}>
            <p>
              Most bricklayers don&apos;t do this kind of work. Vaulted ceilings
              require a structural understanding and spatial precision that goes
              far beyond standard construction. Arches and brick tunnels demand
              geometry, patience, and an instinct built over years, not months.
            </p>
            <p>
              David Goodwin is one of a small number of craftspeople in Victoria
              capable of executing this level of architectural masonry, and he
              is the one architects and builders come to when the job genuinely
              matters.
            </p>
          </Reveal>
          <TiltedCarousel />
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="arch-services">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Capabilities
          </Reveal>
          <Reveal as="h2" id="arch-services" className={styles.heading}>
            What We Build
          </Reveal>
          <ServiceList items={architecturalServices} tone="dark" />
        </div>
      </section>

      <ServiceGallery
        heading="Vaults, Arches & Bespoke Brickwork"
        items={gallery}
      />

      <ServiceCtaBand
        heading="Planning an architectural masonry feature?"
        body="From a single arch to a vaulted ceiling — David works from your drawings or collaborates on the design."
      />

      <section className="section section--cream" aria-labelledby="arch-highlight">
        <div className="container-narrow">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Project Highlight
          </Reveal>
          <Reveal as="h2" id="arch-highlight" className={styles.headingTight}>
            The Fitzroy Tunnel
          </Reveal>
          <Reveal as="p" className={styles.note}>
            One of our most distinctive recent projects: a handcrafted brick
            tunnel in Fitzroy, currently being professionally filmed for the
            Goodwin Bricklaying portfolio. The kind of work that takes weeks and
            lasts centuries.
          </Reveal>
          <Reveal>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                overflowX: "auto",
                marginTop: "2.5rem",
                paddingBottom: "1rem",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {fitzroyTunnelImages.map((image) => (
                <div
                  key={image.src}
                  style={{
                    position: "relative",
                    flex: "0 0 auto",
                    width: "min(80vw, 360px)",
                    height: "260px",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    scrollSnapAlign: "start",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 360px, 80vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="arch-who">
        <div className="container">
          <Reveal>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "clamp(1.5rem, 4vw, 3rem)",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  flex: "1 1 360px",
                  minWidth: "min(100%, 360px)",
                  aspectRatio: "4 / 3",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-masonry-curved-wall-timber-seating-prahran-park.jpg"
                  alt="Curved architectural masonry wall with timber seating at a Prahran park by Goodwin Bricklaying"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: "1 1 360px" }}>
                <h2 id="arch-who" className={styles.headingTight}>
                  Trusted by Architects and Designers
                </h2>
                <p className={styles.note}>
                  David regularly works alongside architects, interior
                  designers, and premium builders on residential and commercial
                  projects across inner Melbourne. His approach, including
                  detailed quoting, clear communication, and a refusal to
                  compromise on outcome, makes him a preferred tradesperson for
                  projects where the standard must be right.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="arch-reviews">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Client Reviews
          </Reveal>
          <Reveal as="h2" id="arch-reviews" className={styles.heading}>
            What Our Clients Say
          </Reveal>
          <Testimonials items={reviews} />
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="arch-faq">
        <div className={`container ${styles.faqWrap}`}>
          <Reveal as="h2" id="arch-faq" className={styles.heading}>
            Frequently Asked Questions
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="arch-area">
        <div className="container-narrow">
          <Reveal as="h2" id="arch-area" className={styles.headingTight}>
            Where We Work
          </Reveal>
          <Reveal as="p" className={styles.areaText}>
            Goodwin Bricklaying delivers architectural masonry in Toorak,
            Hawthorn, Camberwell, Canterbury, Glen Iris, Surrey Hills, Richmond,
            Fitzroy, and surrounding inner Melbourne suburbs.
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Discuss an Architectural Commission"
        body="From a single feature arch to a fully vaulted ceiling, David works from your architect's drawings or collaborates on the design. Get in touch to discuss your project."
        buttonLabel="Enquire Now"
      />
    </>
  );
}
