import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./CairoShowcase.module.css";

type ShowcaseImage = {
  src: string;
  alt: string;
  caption: string;
  /** Bias the crop so the wall stays in frame. */
  position?: string;
};

const base = "/images/heritage-restoration/cairo-flats-wall";

const lead: ShowcaseImage = {
  src: `${base}/photo-2026-05-23-10-34-26-1.jpg`,
  alt: "The completed heritage boundary wall running the length of Hanover Street, Fitzroy, with the Cairo flats rising behind it, rebuilt by Goodwin Bricklaying",
  caption:
    "The completed wall on Hanover Street, with the heritage-listed Cairo flats rising behind it.",
  position: "center 55%",
};

type Chapter = {
  label: string;
  title: string;
  rows: ShowcaseImage[][];
};

const chapters: Chapter[] = [
  {
    label: "Before",
    title: "A wall 150 years in the making",
    rows: [
      [
        {
          src: `${base}/photo-2026-05-23-10-34-22.jpg`,
          alt: "Close detail of the original handmade brick and weathered lime mortar on the Cairo flats heritage wall before restoration",
          caption:
            "The original wall — handmade brick and lime mortar, weathered by more than 150 Fitzroy winters.",
        },
        {
          src: `${base}/photo-2026-05-23-10-34-23.jpg`,
          alt: "The base of the original Cairo flats wall during careful deconstruction, with the corbelled course lifted and reinforcement exposed",
          caption:
            "Careful deconstruction — each course recorded, the original bricks set aside for reuse.",
        },
      ],
    ],
  },
  {
    label: "The Work",
    title: "Rebuilt brick by brick",
    rows: [
      [
        {
          src: `${base}/photo-2026-05-23-10-34-24.jpg`,
          alt: "David Goodwin and a team member on the Hanover Street wall project site, opposite the Royal Exhibition Building",
          caption:
            "David and the team on site, opposite the Royal Exhibition Building.",
          position: "center 35%",
        },
        {
          src: `${base}/photo-2026-05-23-10-34-24-1.jpg`,
          alt: "A reclaimed-brick pier being rebuilt by hand with stainless ties on the Cairo flats heritage wall",
          caption: "Rebuilding a pier by hand — tied, plumbed and levelled.",
        },
        {
          src: `${base}/photo-2026-05-23-10-34-25-2.jpg`,
          alt: "A bricklayer checking the level along the rounded brick capping course of the rebuilt Cairo flats wall",
          caption:
            "Setting the rounded capping true along the full length of the wall.",
        },
      ],
      [
        {
          src: `${base}/photo-2026-05-23-10-34-25.jpg`,
          alt: "A rebuilt section of the Cairo flats heritage wall on new footings, with its bullnose brick capping in place",
          caption: "A rebuilt section on new footings and drainage, capped and ready.",
        },
        {
          src: `${base}/photo-2026-05-23-10-34-28.jpg`,
          alt: "The rebuilt pier on the corner of Hanover Street, Fitzroy, beside the heritage interpretation board during the works",
          caption:
            "On the corner of Hanover Street, beside the heritage interpretation board recording the wall's history.",
          position: "center 30%",
        },
      ],
    ],
  },
  {
    label: "Unveiled",
    title: "Returned to the Fitzroy streetscape",
    rows: [
      [
        {
          src: `${base}/photo-2026-05-23-10-34-27-2.jpg`,
          alt: "The finished elevation of the Cairo flats heritage wall, reclaimed brick relaid to the original bond and colour",
          caption: "The finished elevation — reclaimed brick relaid to the original bond.",
        },
        {
          src: `${base}/photo-2026-05-23-10-34-26-2.jpg`,
          alt: "A rebuilt brick pier crowned with its original sandstone cap on the frontage of the Cairo flats wall, Fitzroy",
          caption: "A rebuilt pier, crowned again with its original sandstone cap.",
        },
        {
          src: `${base}/photo-2026-05-23-10-34-27.jpg`,
          alt: "The capped pier and gate of the restored Cairo flats heritage wall with its project heritage plaque, Fitzroy",
          caption: "The capped pier and gate, with the project's heritage plaque.",
        },
      ],
      [
        {
          src: `${base}/photo-2026-05-23-10-34-26-3.jpg`,
          alt: "The restored Cairo flats heritage wall stretching the length of the boundary along the footpath, Fitzroy",
          caption: "The wall stretching the length of the boundary, returned to the street.",
        },
        {
          src: `${base}/photo-2026-05-23-10-34-27-1.jpg`,
          alt: "A long view of the completed Cairo flats heritage boundary wall after eight months of restoration, Fitzroy",
          caption: "Eight months of work, unveiled to the Fitzroy community.",
        },
        {
          src: `${base}/photo-2026-05-23-10-34-25-1.jpg`,
          alt: "A dragonfly resting on the new brickwork of the restored Cairo flats heritage wall, Fitzroy",
          caption: "A dragonfly settles on the new brickwork — the wall alive in its setting again.",
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
 * Editorial photo essay for the Cairo Flats heritage wall — a full-bleed lead
 * image followed by chaptered before / work / finished rows. Captions tell the
 * eight-month restoration story.
 */
export function CairoShowcase() {
  return (
    <div className={styles.showcase}>
      <Reveal variant="up" className={styles.lead}>
        <figure className={styles.figure}>
          <div className={`${styles.leadFrame} image-shape`}>
            <Image
              src={lead.src}
              alt={lead.alt}
              fill
              priority={false}
              sizes="(min-width: 1100px) 1040px, 100vw"
              className={styles.image}
              style={lead.position ? { objectPosition: lead.position } : undefined}
            />
          </div>
          <figcaption className={styles.caption}>{lead.caption}</figcaption>
        </figure>
      </Reveal>

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
