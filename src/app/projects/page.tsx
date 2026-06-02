import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProjectGallery } from "@/components/ProjectGallery";
import { EnquiryCta } from "@/components/EnquiryCta";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { featuredProjects } from "@/lib/projects";
import styles from "./projects.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Portfolio | Goodwin Bricklaying Melbourne",
  description:
    "A portfolio of heritage restoration, architectural masonry, and landmark chimney work across Melbourne, including the Highett Gasworks chimney, a 40-metre Collingwood stack, and a 10,000-brick heritage wall.",
  path: "/projects",
  ogTitle: "Projects & Portfolio | Goodwin Bricklaying",
  ogDescription:
    "Landmark and signature masonry projects across inner Melbourne by Goodwin Bricklaying.",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work That Speaks for Itself."
        subtext="A selection of recent and landmark projects across Melbourne: heritage restoration, architectural masonry, chimney stacks, and structural work, each led personally by David Goodwin."
        crumbs={[homeCrumb, { name: "Projects" }]}
        image={{
          src: "/images/hero-fitzroy-brick-arch-tunnel-melbourne.jpg",
          alt: "Vaulted heritage brick archway by Goodwin Bricklaying, Fitzroy Melbourne",
        }}
      />

      <section className="section" aria-labelledby="featured-heading">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrow}`}>
            Selected Work
          </Reveal>
          <Reveal as="h2" id="featured-heading" className={styles.heading}>
            Landmark &amp; Signature Projects
          </Reveal>

          <div className={styles.featuredList}>
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.title}
                variant={index % 2 === 0 ? "left" : "right"}
                className={`${styles.featured} ${
                  index % 2 === 1 ? styles.featuredReverse : ""
                }`}
              >
                <div className={`${styles.media} image-shape`}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.body}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.location}>{project.location}</p>
                  <p className={styles.blurb}>{project.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="gallery-heading">
        <div className="container">
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrow}`}>
            Gallery
          </Reveal>
          <Reveal as="h2" id="gallery-heading" className={styles.heading}>
            Browse the Full Gallery
          </Reveal>
          <Reveal>
            <ProjectGallery />
          </Reveal>
        </div>
      </section>

      <EnquiryCta
        heading="Have a project in mind?"
        body="Whether it's a heritage facade, an architectural feature, or a commercial build, David will give you an honest assessment and a detailed quote."
        buttonLabel="Contact Goodwin"
      />
    </>
  );
}
