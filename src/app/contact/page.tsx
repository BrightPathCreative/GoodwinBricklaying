import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Contact Goodwin Bricklaying | Melbourne Masonry Enquiries",
  description:
    "Enquire about heritage restoration, architectural masonry, or chimney work in Melbourne. David responds within 24 hours. Serving Camberwell, Hawthorn, Toorak, and inner Melbourne.",
  path: "/contact",
  ogTitle: "Contact Goodwin Bricklaying | Melbourne Masonry Enquiries",
  ogDescription:
    "Enquire about heritage restoration or architectural masonry in Melbourne.",
});

export default function ContactPage() {
  return (
    <>
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
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.formCol}>
              <Reveal variant="left">
                <h2 id="contact-heading" className={styles.heading}>
                  Send an Enquiry
                </h2>
                <p className={styles.lead}>
                  Tell David a little about your property and what you have in
                  mind. There&apos;s no obligation, and no sales pressure.
                </p>
              </Reveal>
              <Reveal variant="left">
                <ContactForm />
              </Reveal>
            </div>

            <Reveal variant="right" className={styles.detailsCol}>
              <h2 className={styles.heading}>Contact Details</h2>
              <address className={styles.detailList}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Phone</span>
                  <span className={styles.detailValue}>
                    <a href={site.phoneHref}>{site.phoneLabel}</a>
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Instagram</span>
                  <span className={styles.detailValue}>
                    <a
                      href={site.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.instagram.handle}
                    </a>
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Based</span>
                  <span className={styles.detailValue}>
                    {site.address.locality} {site.address.region} 3124
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Serving</span>
                  <span className={styles.detailValue}>
                    Inner Melbourne and surrounding suburbs
                  </span>
                </div>
              </address>
              <p className={styles.responseNote}>
                David responds to all enquiries within 24 hours. For urgent
                requests, call or text directly.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
