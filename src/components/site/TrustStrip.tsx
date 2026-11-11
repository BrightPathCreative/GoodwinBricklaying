import { Award, Hourglass, ShieldCheck, Star } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./site.module.css";

/**
 * Compact row of credibility facts for main site pages. Never use on /lp/*.
 *
 * Every figure here is already published elsewhere on the site:
 * - 25 years: About page and home page.
 * - Insurance type: home page FAQ and LocalBusiness hasCredential.
 * - Google rating: site.google, also shown on the home and testimonials pages.
 * - Award: LocalBusiness `award` field.
 *
 * The ABN is left out because the footer already shows it on every page.
 *
 * TODO: ASK SARA: licence or registration number, and insurer or cover
 * amount. "Licensed" is deliberately not claimed until a number is confirmed
 * (lib/schema.ts warns against asserting it). Once confirmed, update the
 * "Fully insured" item below, for example "Licensed and insured".
 */
export function TrustStrip() {
  const { rating, reviewCount, reviewsUrl } = site.google;
  const iconProps = {
    size: 22,
    strokeWidth: 1.5,
    className: styles.trustIcon,
    "aria-hidden": true,
  } as const;

  return (
    <section className={styles.trust} aria-label="Why clients trust Goodwin Bricklaying">
      <div className="container">
        <ul className={styles.trustList}>
          <li className={styles.trustItem}>
            <Hourglass {...iconProps} />
            <span className={styles.trustText}>
              <span className={styles.trustLabel}>25 years&apos; experience</span>
              <span className={styles.trustDetail}>
                Specialist masonry, led by David
              </span>
            </span>
          </li>

          <li className={styles.trustItem}>
            <ShieldCheck {...iconProps} />
            <span className={styles.trustText}>
              <span className={styles.trustLabel}>Fully insured</span>
              <span className={styles.trustDetail}>
                Public liability and WorkCover
              </span>
            </span>
          </li>

          <li className={styles.trustItem}>
            <Star {...iconProps} />
            <span className={styles.trustText}>
              <span className={styles.trustLabel}>
                {rating} <span className={styles.star} aria-hidden="true">★</span>{" "}
                on Google
              </span>
              <a
                href={reviewsUrl}
                className={`${styles.trustDetail} ${styles.trustLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our {reviewCount} reviews
              </a>
            </span>
          </li>

          <li className={styles.trustItem}>
            <Award {...iconProps} />
            <span className={styles.trustText}>
              <span className={styles.trustLabel}>2026 Quality Business Award</span>
              <span className={styles.trustDetail}>
                Best Masonry, City of Boroondara
              </span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
