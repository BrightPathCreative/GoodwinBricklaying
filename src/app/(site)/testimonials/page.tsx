import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";
import { GoogleRating } from "@/components/GoogleRating";
import { EnquiryCta } from "@/components/EnquiryCta";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { googleReviews } from "@/lib/reviews";
import Link from "next/link";
import styles from "./testimonials.module.css";
import siteStyles from "@/components/site/site.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Client Reviews | Goodwin Bricklaying Melbourne",
  description:
    "See what Melbourne homeowners, architects, and builders say about Goodwin Bricklaying. Rated 5 stars on Google.",
  path: "/testimonials",
  ogTitle: "Client Reviews | Goodwin Bricklaying Melbourne",
  ogDescription:
    "5-star Google reviews from Melbourne homeowners, architects, and builders.",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What Our Clients Say."
        subtext="Goodwin Bricklaying is rated 5 stars on Google. Here is what Melbourne homeowners, architects, and builders say about working with David and his team."
        crumbs={[homeCrumb, { name: "Testimonials" }]}
        image={{
          src: "/images/heritage-restoration/cairo-flats-wall/photo-2026-05-23-10-34-26.jpg",
          alt: "Restored heritage boundary wall by Goodwin Bricklaying, Fitzroy Melbourne",
        }}
      />

      <section className="section section--cream" aria-labelledby="reviews-heading">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Google Reviews
          </Reveal>
          <Reveal as="h2" id="reviews-heading" className={styles.heading}>
            Trusted Across Inner Melbourne
          </Reveal>
          <Reveal as="p" className={styles.intro}>
            Every review below is from a verified Google review of Goodwin
            Bricklaying.
          </Reveal>
          <GoogleRating />
          <Testimonials items={googleReviews} />
          <Reveal variant="fade" className={siteStyles.inlineLinks}>
            <Link href="/projects" className={siteStyles.arrowLink}>
              See the projects behind these reviews{" "}
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/services" className={siteStyles.arrowLink}>
              Explore our services <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Join Melbourne's most discerning homeowners."
        body="If you want work you'll be proud of for decades, get in touch. David provides an honest assessment and a detailed quote, with no obligation."
        buttonLabel="Enquire Now"
      />
    </>
  );
}
