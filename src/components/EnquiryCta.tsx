import Link from "next/link";
import { Reveal } from "./Reveal";
import styles from "./EnquiryCta.module.css";
import { CallLink } from "./CallLink";

/**
 * Reusable closing call-to-action: heading, supporting line, an outlined
 * button, and the click-to-call number (CRM number once supplied).
 */
export function EnquiryCta({
  heading,
  body,
  buttonLabel,
  buttonHref = "/contact",
}: {
  heading: string;
  body: string;
  buttonLabel: string;
  buttonHref?: string;
}) {
  return (
    <section className={`section ${styles.cta}`} aria-labelledby="cta-heading">
      <div className="container">
        <Reveal>
          <h2 id="cta-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.body}>{body}</p>
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
