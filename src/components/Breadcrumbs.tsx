import Link from "next/link";
import { site } from "@/lib/site";
import type { Crumb } from "@/lib/schema";
import styles from "./Breadcrumbs.module.css";

/**
 * Visible breadcrumb trail with inline BreadcrumbList microdata (matches the
 * pattern in docs/content-notes.md). The last crumb is the current page and
 * is not linked. The microdata doubles as the structured data, so no separate
 * JSON-LD is emitted.
 */
export function Breadcrumbs({ crumbs }: { crumbs: ReadonlyArray<Crumb> }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol
        className={styles.list}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li
              key={crumb.name}
              className={styles.item}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {crumb.url && !isLast ? (
                <Link
                  href={crumb.url}
                  className={styles.link}
                  itemProp="item"
                >
                  <span itemProp="name">{crumb.name}</span>
                </Link>
              ) : (
                <span className={styles.current} itemProp="name">
                  {crumb.name}
                </span>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Convenience: Home crumb is implicit on every trail. */
export const homeCrumb: Crumb = { name: "Home", url: "/" };
export { site };
