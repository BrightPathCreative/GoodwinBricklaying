import Image from "next/image";
import Link from "next/link";
import {
  legalNav,
  locationNav,
  serviceNav,
  site,
} from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Image
            src="/logo/goodwin-logo.svg"
            alt="Goodwin Bricklaying logo"
            width={1671}
            height={413}
            className={styles.logo}
            unoptimized
          />
          <p className={styles.statement}>
            Luxury masonry, heritage restoration, and architectural
            craftsmanship across inner Melbourne.
          </p>
          <a
            href={site.instagram.url}
            className={styles.social}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.instagram.handle}
          </a>
        </div>

        <nav aria-label="Services">
          <h2 className={styles.colTitle}>Services</h2>
          <ul className={styles.linkList}>
            {serviceNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Locations">
          <h2 className={styles.colTitle}>Areas Served</h2>
          <ul className={styles.linkList}>
            {locationNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.colTitle}>Contact</h2>
          <address className={styles.contactList}>
            <span>
              Servicing {site.address.locality} &amp; inner Melbourne,{" "}
              {site.address.region}
            </span>
            <a href={site.phoneHref}>{site.phoneLabel}</a>
          </address>
        </div>
      </div>

      <div className="container">
        <hr className={styles.divider} />
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} {site.legalName}. ABN {site.abn}.
        </span>
        <nav aria-label="Legal" className={styles.legal}>
          {legalNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="container">
        <p className={styles.credit}>
          Site designed and managed by{" "}
          <a
            href={site.agency.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.agency.name}
          </a>.
        </p>
      </div>
    </footer>
  );
}
