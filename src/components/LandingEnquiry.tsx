import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { LANDING_ENQUIRY_ID } from "./services/variant";
import styles from "./LandingEnquiry.module.css";
import { CallLink } from "./CallLink";

/**
 * The enquiry form embedded on a Google Ads landing page, with click-to-call
 * alongside. Every quote button on the page anchors here.
 */
export function LandingEnquiry({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section
      id={LANDING_ENQUIRY_ID}
      className="section section--cream"
      aria-labelledby="landing-enquiry-heading"
    >
      <div className={`container ${styles.inner}`}>
        <Reveal variant="fade">
          <h2 id="landing-enquiry-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.lead}>{body}</p>
          <p className={styles.call}>
            Prefer to talk it through?{" "}
            <CallLink className={styles.phone} />
          </p>
        </Reveal>
        <Reveal variant="fade">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
