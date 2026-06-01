import { Reveal } from "./Reveal";
import styles from "./Testimonials.module.css";

export type Testimonial = { quote: string; author: string };

function Stars() {
  return (
    <div className={styles.stars} role="img" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.26L21.5 9l-5 4.87L17.8 21 12 17.27 6.2 21l1.3-7.13-5-4.87 6.6-.74L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials({
  items,
}: {
  items: ReadonlyArray<Testimonial>;
}) {
  return (
    <Reveal as="div" variant="grid" className={styles.grid}>
      {items.map((item) => (
        <figure key={item.author} className={styles.card}>
          <Stars />
          <blockquote className={styles.quote}>{item.quote}</blockquote>
          <figcaption className={styles.author}>{item.author}</figcaption>
        </figure>
      ))}
    </Reveal>
  );
}
