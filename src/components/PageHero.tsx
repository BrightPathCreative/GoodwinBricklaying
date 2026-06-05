import type { ReactNode } from "react";
import Image from "next/image";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import styles from "./PageHero.module.css";

/**
 * Mirrors the home hero treatment: the first sentence renders in the TAN
 * Twinkle display font (capitalised), and any following sentences drop to the
 * Montserrat secondary heading font. Non-string titles are rendered untouched.
 */
function renderTitle(title: ReactNode): ReactNode {
  if (typeof title !== "string") {
    return title;
  }

  const match = title.match(/^(.+?[.!?])\s+(.+)$/);
  if (!match) {
    return <span className={styles.titleLead}>{title}</span>;
  }

  const [, lead, rest] = match;
  return (
    <>
      <span className={styles.titleLead}>{lead}</span>
      <span className={styles.titleRest}>{rest}</span>
    </>
  );
}

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
        <h1 className={styles.title}>{renderTitle(title)}</h1>
        {subtext ? <p className={styles.subtext}>{subtext}</p> : null}
      </div>
    </header>
  );
}
