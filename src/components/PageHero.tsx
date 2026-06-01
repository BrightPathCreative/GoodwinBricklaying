import type { ReactNode } from "react";
import Image from "next/image";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import styles from "./PageHero.module.css";

/**
 * Standard inner-page hero: breadcrumb, eyebrow label, the page's single H1,
 * and supporting subtext on a dark heritage band. An optional background image
 * sits behind a dark scrim so the light text stays legible.
 */
export function PageHero({
  eyebrow,
  title,
  subtext,
  crumbs,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtext?: ReactNode;
  crumbs: ReadonlyArray<Crumb>;
  image?: { src: string; alt: string };
}) {
  return (
    <header className={`${styles.hero} ${image ? styles.hasImage : ""}`}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className={styles.image}
          priority
        />
      ) : null}
      {/* Breadcrumb kept as invisible structured data only — the visible
          trail was removed for a cleaner, more editorial hero. */}
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className={`container ${styles.inner}`}>
        {eyebrow ? (
          <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>
        ) : null}
        <h1 className={styles.title}>{title}</h1>
        {subtext ? <p className={styles.subtext}>{subtext}</p> : null}
      </div>
    </header>
  );
}
