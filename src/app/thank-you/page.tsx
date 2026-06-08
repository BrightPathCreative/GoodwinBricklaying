import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "./thank-you.module.css";

/**
 * Confirmation page shown after a successful GoHighLevel enquiry submission.
 * The GHL form is configured to redirect here on submit. Kept out of search
 * (noindex) and out of the sitemap since it isn't a destination in its own
 * right.
 */
export const metadata: Metadata = buildMetadata({
  title: "Thank You | Goodwin Bricklaying",
  description:
    "Thank you for your enquiry. David from Goodwin Bricklaying will be in touch within 24 hours to discuss your Melbourne masonry project.",
  path: "/thank-you",
  noindex: true,
});

const nextSteps = [
  {
    title: "David reviews your enquiry",
    body: "Every enquiry is read personally — not passed to a call centre or sales team.",
  },
  {
    title: "He's in touch within 24 hours",
    body: "Expect a call or message to talk through your property and what you have in mind.",
  },
  {
    title: "A no-pressure assessment",
    body: "Where it helps, David will arrange to see the work in person before quoting.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Enquiry Received"
        title="Thank You. Your Enquiry Is On Its Way."
        subtext="We've received your details and David will be in touch shortly. In the meantime, feel free to explore more of our work."
        crumbs={[homeCrumb, { name: "Thank You" }]}
        image={{
          src: "/images/hero-fitzroy-brick-arch-tunnel-melbourne.jpg",
          alt: "Heritage brick archway by Goodwin Bricklaying, Fitzroy Melbourne",
        }}
      />

      <section
        className="section section--cream"
        aria-labelledby="thank-you-heading"
      >
        <div className={`container ${styles.inner}`}>
          <Reveal variant="fade">
            <span className={`eyebrow ${styles.eyebrow}`}>What Happens Next</span>
            <h2 id="thank-you-heading" className={styles.heading}>
              From here, it&apos;s in good hands.
            </h2>
          </Reveal>

          <Reveal variant="fade">
            <ol className={styles.steps}>
              {nextSteps.map((step, index) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal variant="fade">
            <div className={styles.actions}>
              <Link href="/projects" className="btn btn--dark">
                View Our Projects
              </Link>
              <Link href="/services" className="btn btn--dark">
                Explore Services
              </Link>
              <a
                href={site.instagram.url}
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
