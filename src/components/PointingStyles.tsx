import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./PointingStyles.module.css";

const base = "/images/tuck-pointing/pointing-styles";

type PointingStyle = {
  /** Index shown alongside the name, as a specimen plate number. */
  number: string;
  name: string;
  description: string;
  /** Close-up of the joint profile itself. */
  detail: { src: string; alt: string };
  /** The sample pier the profile was worked on, shown in full. */
  pier: { src: string; alt: string };
};

const pointingStyles: ReadonlyArray<PointingStyle> = [
  {
    number: "01",
    name: "Tuck Pointing",
    description:
      "A coloured base mortar finished flush with the brick face, then a fine ribbon of contrasting lime set into a cut groove. The illusion is a wall of perfectly gauged brick, with joints finer than any bricklayer could truly lay.",
    detail: {
      src: `${base}/goodwin-bricklaying-tuck-pointing-joint-detail.jpg`,
      alt: "Close detail of traditional tuck pointing, a fine pale ribbon of lime set into a coloured base mortar on red brickwork, by Goodwin Bricklaying",
    },
    pier: {
      src: `${base}/goodwin-bricklaying-tuck-pointing-brick-pier.jpg`,
      alt: "Sample brick pier finished in traditional tuck pointing by Goodwin Bricklaying, Melbourne",
    },
  },
  {
    number: "02",
    name: "Ribbon Pointing",
    description:
      "A flat band of mortar stood slightly proud of the brick face and cut straight along both edges. Bold and graphic, and unmistakable from the far side of the street.",
    detail: {
      src: `${base}/goodwin-bricklaying-ribbon-pointing-joint-detail.jpg`,
      alt: "Close detail of ribbon pointing, a raised flat band of pale mortar standing proud of dark heritage brickwork, by Goodwin Bricklaying",
    },
    pier: {
      src: `${base}/goodwin-bricklaying-ribbon-pointing-brick-pier.jpg`,
      alt: "Sample brick pier finished in ribbon pointing, with a Goodwin stamped brick set into the face",
    },
  },
  {
    number: "03",
    name: "Weather Struck",
    description:
      "Pressed in at the top of the joint and left proud at the bottom, so water runs off the mortar instead of sitting on it. The workhorse profile for elevations that take the weather.",
    detail: {
      src: `${base}/goodwin-bricklaying-weather-struck-pointing-joint-detail.jpg`,
      alt: "Close detail of a weather struck mortar joint angled to shed water, on red brickwork by Goodwin Bricklaying",
    },
    pier: {
      src: `${base}/goodwin-bricklaying-weather-struck-pointing-brick-pier.jpg`,
      alt: "Sample brick pier finished with weather struck pointing by Goodwin Bricklaying, Melbourne",
    },
  },
  {
    number: "04",
    name: "Bird's Beak",
    description:
      "Struck back from both edges to a fine central ridge. It catches the light along every course and gives a wall a crisp, tailored shadow line.",
    detail: {
      src: `${base}/goodwin-bricklaying-birds-beak-pointing-joint-detail.jpg`,
      alt: "Close detail of a bird's beak mortar joint struck to a fine central ridge on pale brickwork by Goodwin Bricklaying",
    },
    pier: {
      src: `${base}/goodwin-bricklaying-birds-beak-pointing-brick-pier.jpg`,
      alt: "Sample brick pier finished with bird's beak pointing by Goodwin Bricklaying, Melbourne",
    },
  },
  {
    number: "05",
    name: "Penny Rolled",
    description:
      "A narrow groove run down the centre of the joint with a penny-sized iron, leaving two rounded shoulders either side. A Victorian detail that rewards a close look.",
    detail: {
      src: `${base}/goodwin-bricklaying-penny-rolled-pointing-joint-detail.jpg`,
      alt: "Close detail of penny rolled pointing, a fine central groove run between two rounded mortar shoulders, by Goodwin Bricklaying",
    },
    pier: {
      src: `${base}/goodwin-bricklaying-penny-rolled-pointing-brick-pier.jpg`,
      alt: "Sample brick pier finished with penny rolled pointing by Goodwin Bricklaying, Melbourne",
    },
  },
  {
    number: "06",
    name: "Rolled Joint",
    description:
      "Compressed into a smooth concave curve with a jointing iron. Tight, weather-resistant, and forgiving of handmade brick that varies course to course.",
    detail: {
      src: `${base}/goodwin-bricklaying-rolled-joint-pointing-joint-detail.jpg`,
      alt: "Close detail of a rolled concave mortar joint compressed with a jointing iron on heritage brickwork by Goodwin Bricklaying",
    },
    pier: {
      src: `${base}/goodwin-bricklaying-rolled-joint-pointing-brick-pier.jpg`,
      alt: "Sample brick pier finished with rolled jointing by Goodwin Bricklaying, Melbourne",
    },
  },
  {
    number: "07",
    name: "Flush Lime Pointing",
    description:
      "Lime mortar finished level with the brick face, or a whisker behind it. The quietest of the profiles: nothing competes with the brick, which is exactly why heritage work so often calls for it.",
    detail: {
      src: `${base}/goodwin-bricklaying-flush-recessed-lime-pointing-joint-detail.jpg`,
      alt: "Close detail of flush lime pointing finished level with the brick face on heritage brickwork by Goodwin Bricklaying",
    },
    pier: {
      src: `${base}/goodwin-bricklaying-flush-recessed-lime-pointing-brick-pier.jpg`,
      alt: "Sample brick pier finished with flush lime pointing by Goodwin Bricklaying, Melbourne",
    },
  },
  {
    number: "08",
    name: "Raked Jointing",
    description:
      "Raked back to a set depth so every brick reads as its own block. A deep shadow line, and the profile most often specified on contemporary architectural brickwork.",
    detail: {
      src: `${base}/goodwin-bricklaying-raked-jointing-joint-detail.jpg`,
      alt: "Close detail of raked jointing recessed to a set depth, throwing a deep shadow line across brickwork by Goodwin Bricklaying",
    },
    pier: {
      src: `${base}/goodwin-bricklaying-raked-jointing-brick-pier.jpg`,
      alt: "Sample brick pier finished with raked jointing by Goodwin Bricklaying, Melbourne",
    },
  },
];

/**
 * Specimen plates for the eight pointing and jointing profiles. Each plate
 * pairs a close-up of the joint with the sample pier it was worked on, so the
 * profile can be read both in detail and in the round. Server component: the
 * only motion is the shared scroll reveal and an image hover scale.
 */
export function PointingStyles() {
  return (
    <Reveal variant="grid" className={styles.grid}>
      {pointingStyles.map((style) => (
        <article key={style.name} className={styles.card}>
          <div className={styles.plate}>
            <figure className={`${styles.frame} ${styles.frameDetail}`}>
              <Image
                src={style.detail.src}
                alt={style.detail.alt}
                fill
                sizes="(min-width: 900px) 28vw, 55vw"
                className={styles.image}
              />
            </figure>
            <figure className={`${styles.frame} ${styles.framePier}`}>
              <Image
                src={style.pier.src}
                alt={style.pier.alt}
                fill
                sizes="(min-width: 900px) 22vw, 45vw"
                className={styles.image}
              />
            </figure>
          </div>
          <div className={styles.meta}>
            <span className={styles.number}>{style.number}</span>
            <h3 className={styles.name}>{style.name}</h3>
          </div>
          <p className={styles.text}>{style.description}</p>
        </article>
      ))}
    </Reveal>
  );
}
