import { Reveal } from "./Reveal";
import styles from "./ServiceList.module.css";

export type ServiceItem = { title: string; text: string };

/**
 * Two-column list of named services (title + description) with a staggered
 * grid reveal. Use `tone="dark"` when placed on a heritage section.
 */
export function ServiceList({
  items,
  tone = "light",
}: {
  items: ReadonlyArray<ServiceItem>;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      variant="grid"
      className={`${styles.grid} ${tone === "dark" ? styles["grid--dark"] : ""}`}
    >
      {items.map((item) => (
        <div key={item.title} className={styles.item}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </Reveal>
  );
}
