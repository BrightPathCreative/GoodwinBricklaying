import { site } from "@/lib/site";
import styles from "./GoogleRating.module.css";

/**
 * Google rating summary that opens the Business Profile reviews in a new tab.
 * Figures live in site.google so the home page, trust bar and /testimonials
 * always agree.
 */
export function GoogleRating() {
  const { rating, reviewCount, reviewsUrl } = site.google;

  return (
    <a
      href={reviewsUrl}
      className={styles.rating}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.score}>
        {rating} <span className={styles.star} aria-hidden="true">★</span>
      </span>
      <span>
        on Google, {reviewCount} reviews
      </span>
    </a>
  );
}
