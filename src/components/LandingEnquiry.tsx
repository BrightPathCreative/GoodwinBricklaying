import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { LANDING_ENQUIRY_ID } from "./services/variant";
import { site } from "@/lib/site";
import styles from "./LandingEnquiry.module.css";

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
            <a href={site.phoneHref} className={styles.phone}>
              {site.phoneLabel}
            </a>
          </p>
        </Reveal>
        <Reveal variant="fade">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
