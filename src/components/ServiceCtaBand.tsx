import Link from "next/link";
import { Reveal } from "./Reveal";
import { navCta } from "@/lib/site";
import styles from "./ServiceCtaBand.module.css";
import { CallLink } from "./CallLink";

/**
 * Compact mid-page call-to-action for long service pages, sits between
 * content sections so readers don't have to scroll to the footer to convert.
 */
export function ServiceCtaBand({
  heading,
  body,
  buttonLabel = navCta.label,
  buttonHref = navCta.href,
}: {
  heading: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className={styles.band} aria-labelledby="service-cta-heading">
      <div className="container">
        <Reveal className={styles.inner}>
          <div className={styles.copy}>
            <h2 id="service-cta-heading" className={styles.heading}>
              {heading}
            </h2>
            {body ? <p className={styles.body}>{body}</p> : null}
          </div>
          <div className={styles.actions}>
            <Link href={buttonHref} className="btn btn--light">
              {buttonLabel}
            </Link>
            <CallLink className={styles.phone} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
