import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "./contact.module.css";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import siteStyles from "@/components/site/site.module.css";
import { contactPageSchema } from "@/lib/siteSchema";

const description =
  "Enquire about heritage restoration, architectural masonry, or chimney work in Melbourne. David responds within 24 hours. Serving Camberwell, Hawthorn, Toorak, and inner Melbourne.";

const nextSteps = [
  {
    title: "Send your enquiry",
    text: "Use the form above or call David directly. A few lines about your property and what you have in mind is plenty.",
  },
  {
    title: "Talk it through with David",
    text: "You'll speak with David himself. He'll ask about your property and give you an honest view of what it needs.",
  },
  {
    title: "Receive a detailed quote",
    text: "David provides detailed quotes with full construction specifics: no vague estimates, no surprises on site, and no obligation.",
  },
] as const;

/*
 * TODO: ASK SARA: business hours (days and times David takes calls). Once
 * confirmed, add an hours line under "Find Us on Google" and add
 * openingHoursSpecification in lib/siteSchema.ts.
 */

export const metadata: Metadata = buildMetadata({
  title: "Contact Goodwin Bricklaying | Melbourne Masonry Enquiries",
  description,
  path: "/contact",
  ogTitle: "Contact Goodwin Bricklaying | Melbourne Masonry Enquiries",
  ogDescription:
    "Enquire about heritage restoration or architectural masonry in Melbourne.",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema(description)} />

      <PageHero
        eyebrow="Contact"
        title="Let's Discuss Your Project."
        subtext="Whether you have a detailed brief or simply a property that needs expert eyes, David welcomes every enquiry. Fill in the form below and he'll be in touch promptly."
        crumbs={[homeCrumb, { name: "Contact" }]}
        image={{
          src: "/images/hero-fitzroy-brick-arch-tunnel-melbourne.jpg",
          alt: "Heritage brick archway by Goodwin Bricklaying, Fitzroy Melbourne",
        }}
      />

      <section className="section section--cream" aria-labelledby="contact-heading">
        <div className={`container ${styles.inner}`}>
          <Reveal variant="fade">
            <h2 id="contact-heading" className={styles.heading}>
              Send an Enquiry
            </h2>
            <p className={styles.lead}>
              Tell David a little about your property and what you have in mind.
              There&apos;s no obligation, and no sales pressure.
            </p>
            <div className={styles.reassure}>
              <p className={styles.reassureLead}>
                David replies to every enquiry within 24 hours.
              </p>
              <p>
                Prefer to talk it through? Call{" "}
                <a href={site.phoneHref} className={styles.reassurePhone}>
                  {site.phoneDisplay}
                </a>
              </p>
            </div>
          </Reveal>
          <Reveal variant="fade">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className={`section section--cream ${siteStyles.contactMore}`} aria-labelledby="contact-next">
        <div className={`container ${styles.inner}`}>
          <Reveal as="span" variant="fade" className={`eyebrow ${siteStyles.eyebrowSpace}`}>
            What Happens Next
          </Reveal>
          <Reveal as="h2" id="contact-next" className={siteStyles.heading}>
            You&apos;ll Speak Directly With David
          </Reveal>
          <Reveal as="p" className={siteStyles.lead}>
            Every enquiry goes straight to David Goodwin, who has 25 years of
            specialist masonry experience and leads every project personally.
            You&apos;ll deal with him from your first enquiry through to the
            finished job.
          </Reveal>
          <Reveal as="ol" className={siteStyles.steps}>
            {nextSteps.map((step) => (
              <li key={step.title} className={siteStyles.step}>
                <h3 className={siteStyles.stepTitle}>{step.title}</h3>
                <p className={siteStyles.stepText}>{step.text}</p>
              </li>
            ))}
          </Reveal>
          <Reveal className={siteStyles.contactGoogle}>
            <h2 id="contact-google" className={siteStyles.subheading}>
              Find Us on Google
            </h2>
            <p className={siteStyles.lead}>
              See our Google Business Profile for reviews from Melbourne
              homeowners, architects, and builders.
            </p>
            <div className={siteStyles.inlineLinks}>
              <a
                href={site.google.reviewsUrl}
                className={siteStyles.arrowLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View our Google Business Profile{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
              <Link href="/testimonials" className={siteStyles.arrowLink}>
                Read client reviews <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
