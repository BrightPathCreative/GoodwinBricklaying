import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Testimonials, type Testimonial } from "@/components/Testimonials";
import { EnquiryCta } from "@/components/EnquiryCta";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import styles from "./testimonials.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Client Reviews | Goodwin Bricklaying Melbourne",
  description:
    "See what Melbourne homeowners, architects, and builders say about Goodwin Bricklaying. Rated 5 stars on Google.",
  path: "/testimonials",
  ogTitle: "Client Reviews | Goodwin Bricklaying Melbourne",
  ogDescription:
    "5-star Google reviews from Melbourne homeowners, architects, and builders.",
});

const reviews: ReadonlyArray<Testimonial> = [
  {
    quote:
      "David is a true master of his craft. He didn't just execute; he helped me navigate design choices and suggested valuable additions, even when it increased his own workload. His commitment to the best possible outcome is clear.",
    author: "Jaspreet C.",
  },
  {
    quote:
      "Thanks David and team for restoring our 1915 heritage chimney. Looks great! Very pleased with the professionalism of the whole job. If you want high quality work from guys who love heritage, call Goodwin.",
    author: "Linda T.",
  },
  {
    quote:
      "His craftsmanship and dedication and level of detail to his job is top class, not to mention a top bloke as well. We are very happy with the result and the front of the house has never looked better.",
    author: "Ben L.",
  },
  {
    quote:
      "He restored a garage wall on a 1930s home and you can't tell the difference! All in all, excellent craftsmanship from a lovely team, led by the delightful David.",
    author: "Priyanka B.",
  },
  {
    quote:
      "Terrific job. Our house is old and fiddly, built in 1930 and sinking in one corner due to a lack of foundation and a dodgy build. David, Anthony, and Ben arrived promptly at 7:30am and got to it.",
    author: "Fiona S.",
  },
  {
    quote:
      "Dave was very responsive throughout all stages. The quality of his work was amazing. Fast, reasonably priced and highly accommodating. Would highly recommend, and will use on future projects.",
    author: "Rebecca W.",
  },
  {
    quote:
      "He provided a reasonable quote with all the construction details, which made me decide from the start without hesitation or comparison. During the week-long construction process, he was very professional.",
    author: "Ying H.",
  },
  {
    quote:
      "David booked the next day and fixed it so professionally. I really appreciate David's skills, reliability and reasonable price.",
    author: "Bill W.",
  },
];

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
          <Testimonials items={reviews} />
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
