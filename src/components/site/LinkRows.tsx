import Link from "next/link";
import styles from "./site.module.css";

export type LinkRowItem = { href: string; label: string; description?: string };

/** Stacked link rows with an optional one-line description and an arrow. */
export function LinkRows({
  items,
  label,
}: {
  items: ReadonlyArray<LinkRowItem>;
  /** Accessible name for the list, when there is no visible heading. */
  label?: string;
}) {
  return (
    <ul className={styles.linkList} aria-label={label}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={styles.linkRow}>
            <span className={styles.linkRowText}>
              <span className={styles.linkRowTitle}>{item.label}</span>
              {item.description ? (
                <span className={styles.linkRowDesc}>{item.description}</span>
              ) : null}
            </span>
            <span className={styles.linkArrow} aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Plain text links in a responsive grid, for suburb lists. */
export function TextLinks({
  items,
  label,
}: {
  items: ReadonlyArray<{ href: string; label: string }>;
  label?: string;
}) {
  return (
    <ul className={styles.textLinks} aria-label={label}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={styles.textLink}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
