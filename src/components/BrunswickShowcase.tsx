import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./CairoShowcase.module.css";

type ShowcaseImage = {
  src: string;
  alt: string;
  caption: string;
  /** Bias the crop so the stack stays in frame. */
  position?: string;
};

const base = "/images/chimneys-fireplaces/brunswick-licorice-factory";
const team = "/images/team";
const prefix = `${base}/goodwin-bricklaying-brunswick-licorice-factory-chimney`;

type Chapter = {
  label: string;
  title: string;
  rows: ShowcaseImage[][];
};

const chapters: Chapter[] = [
  {
    label: "Before",
    title: "A crown at the end of its life",
    rows: [
      [
        {
          src: `${prefix}-crown-before-restoration.jpg`,
          alt: "The original crown of the Old Licorice Factory chimney in Brunswick, cracked and losing brick before restoration",
          caption:
            "The original crown, cracked through and shedding brick above a live street.",
        },
        {
          src: `${prefix}-flue-aerial-view-before-rebuild.jpg`,
          alt: "Aerial view down the flue of the Old Licorice Factory chimney in Brunswick, with the capping broken away before rebuild",
          caption:
            "Looking down the flue from above, with the capping broken away around it.",
        },
      ],
    ],
  },
  {
    label: "At Height",
    title: "Rebuilding a crown from a scaffold deck",
    rows: [
      [
        {
          src: `${prefix}-crown-rebuild-on-scaffold-deck.jpg`,
          alt: "The octagonal chimney crown of the Old Licorice Factory under rebuild on a timber scaffold deck in Brunswick",
          caption:
            "The crown under rebuild, worked from a timber deck at the top of the stack.",
        },
        {
          src: `${team}/goodwin-bricklaying-david-goodwin-on-scaffold-deck-chimney-crown.jpg`,
          alt: "David Goodwin standing on the scaffold deck beside the Old Licorice Factory chimney crown in Brunswick",
          caption: "David on the deck, alongside the crown he rebuilt.",
        },
      ],
      [
        {
          src: `${prefix}-crown-rebuild-through-scaffolding.jpg`,
          alt: "The rebuilt chimney crown of the Old Licorice Factory seen through the scaffolding, Brunswick",
          caption: "Framed by the scaffold that carried every brick up to it.",
        },
        {
          src: `${prefix}-crown-rebuild-framed-by-scaffolding.jpg`,
          alt: "The rebuilt Old Licorice Factory chimney crown framed by scaffolding above the Brunswick development",
          caption: "The rebuilt crown clear of the deck, ready for its capping.",
        },
        {
          src: `${prefix}-new-octagonal-capping-slab-top-down.jpg`,
          alt: "The new octagonal concrete capping slab set over the rebuilt Old Licorice Factory chimney crown, Brunswick",
          caption:
            "The new octagonal capping, set true over the corbelled courses beneath.",
          position: "center 40%",
        },
      ],
    ],
  },
  {
    label: "The Detail",
    title: "Corbelled brick, course by course",
    rows: [
      [
        {
          src: `${prefix}-crown-corbelling-under-capping-blue-sky.jpg`,
          alt: "Corbelled brickwork stepping out beneath the capping of the restored Old Licorice Factory chimney, Brunswick",
          caption:
            "Each course steps out a little further than the one below to carry the capping.",
        },
        {
          src: `${prefix}-crown-corbel-central-pier-detail.jpg`,
          alt: "The central brick pier and corbelled courses of the rebuilt Old Licorice Factory chimney crown, Brunswick",
          caption: "The central pier, plumbed and tied back into the stack.",
        },
        {
          src: `${prefix}-crown-corbel-brick-macro-detail.jpg`,
          alt: "Close detail of the corbelled brick edge and mortar joints on the restored Old Licorice Factory chimney, Brunswick",
          caption: "The cut edge of a corbel, where the work either holds a line or does not.",
        },
      ],
      [
        {
          src: `${prefix}-crown-corbel-corner-detail.jpg`,
          alt: "Corner corbel detail beneath the capping of the rebuilt Old Licorice Factory chimney crown, Brunswick",
          caption: "A corner corbel turning the octagon beneath the capping.",
        },
        {
          src: `${prefix}-crown-corbelling-from-below-steel-banding.jpg`,
          alt: "The rebuilt corbelled crown of the Old Licorice Factory chimney seen from below, with steel banding around the stack, Brunswick",
          caption: "Seen from below, with the steel banding that restrains the stack.",
        },
        {
          src: `${prefix}-crown-corbelling-edge-detail-against-sky.jpg`,
          alt: "Corbelled brick courses of the restored Old Licorice Factory chimney crown against the sky, Brunswick",
          caption: "The finished profile, read against the sky.",
        },
      ],
    ],
  },
  {
    label: "Back on the Skyline",
    title: "A landmark returned to Brunswick",
    rows: [
      [
        {
          src: `${prefix}-restored-octagonal-stack-full-height.jpg`,
          alt: "The full height of the restored octagonal brick chimney at the Old Licorice Factory, Brunswick, by Goodwin Bricklaying",
          caption:
            "The full height of the stack, standing clear of the scaffold that surrounded it.",
          position: "center 40%",
        },
        {
          src: `${prefix}-restored-stack-sunlit-brunswick.jpg`,
          alt: "The restored Old Licorice Factory chimney lit by afternoon sun above the surrounding Brunswick development",
          caption: "Afternoon sun on the brickwork, with the new development around it.",
        },
      ],
      [
        {
          src: `${prefix}-restored-crown-against-apartments.jpg`,
          alt: "The rebuilt crown of the Old Licorice Factory chimney against the neighbouring apartment building, Brunswick",
          caption: "The rebuilt crown, sitting against its new neighbours.",
        },
        {
          src: `${team}/goodwin-bricklaying-david-goodwin-beside-heritage-chimney-brunswick.jpg`,
          alt: "David Goodwin standing beside the base of the heritage brick chimney at the Old Licorice Factory, Brunswick",
          caption: "David at the base of the stack, at the end of the work.",
          position: "center 35%",
        },
      ],
    ],
  },
];

function Figure({ image, sizes }: { image: ShowcaseImage; sizes: string }) {
  return (
    <figure className={styles.figure}>
      <div className={`${styles.frame} image-shape`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className={styles.image}
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      </div>
      <figcaption className={styles.caption}>{image.caption}</figcaption>
    </figure>
  );
}

/**
 * Editorial photo essay for the Old Licorice Factory chimney in Brunswick.
 * Chaptered rows working from the failing crown, up to the scaffold deck, and
 * back out to the finished stack. The lead photograph sits with the project
 * story above this, so the essay opens straight into its first chapter.
 */
export function BrunswickShowcase() {
  return (
    <div className={styles.showcase}>
      {chapters.map((chapter) => (
        <div key={chapter.title} className={styles.chapter}>
          <Reveal variant="up" className={styles.chapterHead}>
            <span className={`eyebrow ${styles.chapterLabel}`}>{chapter.label}</span>
            <h3 className={styles.chapterTitle}>{chapter.title}</h3>
          </Reveal>
          {chapter.rows.map((row, i) => (
            <Reveal
              key={i}
              variant="grid"
              className={row.length === 2 ? styles.duo : styles.trio}
            >
              {row.map((image) => (
                <Figure
                  key={image.src}
                  image={image}
                  sizes={
                    row.length === 2
                      ? "(min-width: 760px) 50vw, 100vw"
                      : "(min-width: 760px) 33vw, 100vw"
                  }
                />
              ))}
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}
