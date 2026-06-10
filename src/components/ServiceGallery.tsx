import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./ServiceGallery.module.css";

export type GalleryItem = { src: string; alt: string };

/**
 * Editorial image grid for a single service page. Server component (no
 * lightbox). The interactive lightbox lives on the /projects page.
 */
export function ServiceGallery({
  eyebrow = "Selected Work",
  heading,
  items,
  tone = "cream",
}: {
  eyebrow?: string;
  heading: string;
  items: ReadonlyArray<GalleryItem>;
  tone?: "cream" | "dark";
}) {
  return (
    <section
      className={`section ${tone === "dark" ? "section--dark" : "section--cream"}`}
      aria-label={heading}
    >
      <div className="container">
        <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrow}`}>
          {eyebrow}
        </Reveal>
        <Reveal as="h2" className={styles.heading}>
          {heading}
        </Reveal>
        <Reveal variant="grid" className={styles.grid}>
          {items.map((item) => (
            <figure key={item.src} className={`${styles.item} image-shape`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
                className={styles.image}
              />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
