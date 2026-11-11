import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  getServiceLink,
  relatedServices,
  suburbLinks,
  type ServiceSlug,
} from "@/lib/siteLinks";
import { LinkRows, TextLinks } from "./LinkRows";
import styles from "./site.module.css";

/**
 * Internal links for the main-site service pages: related services, all nine
 * suburb pages, and the projects portfolio.
 *
 * Only used by the page files under app/(site)/services. The service content
 * components are shared with the /lp/* Google Ads pages, so this block is
 * rendered by the page file rather than inside the content component.
 */
export function ServiceExplore({ service }: { service: ServiceSlug }) {
  const current = getServiceLink(service);
  const related = relatedServices[service].map(getServiceLink);
  const headingId = `explore-${service}`;
  const areasId = `areas-${service}`;

  return (
    <section className="section section--cream" aria-labelledby={headingId}>
      <div className="container">
        <div className={styles.exploreGroup}>
          <Reveal as="span" variant="fade" className={`eyebrow ${styles.eyebrowSpace}`}>
            Explore
          </Reveal>
          <Reveal as="h2" id={headingId} className={styles.heading}>
            Related Services
          </Reveal>
          <Reveal>
            <LinkRows
              items={related.map((item) => ({
                href: item.href,
                label: item.label,
                description: item.description,
              }))}
            />
          </Reveal>
          <Reveal className={styles.inlineLinks}>
            <Link href="/projects" className={styles.arrowLink}>
              See our recent work <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/services" className={styles.arrowLink}>
              All services <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>

        <div className={styles.exploreGroup}>
          <Reveal as="h2" id={areasId} className={styles.subheading}>
            Areas We Service
          </Reveal>
          <Reveal>
            <TextLinks
              label={`${current.phrase} by suburb`}
              items={suburbLinks.map((suburb) => ({
                href: suburb.href,
                label: `${current.phrase} in ${suburb.label}`,
              }))}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
