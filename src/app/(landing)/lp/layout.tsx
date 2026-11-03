import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { MobileCallBar } from "@/components/MobileCallBar";
import { LANDING_ENQUIRY_ID } from "@/components/services/variant";
import styles from "./landing.module.css";

/**
 * Google Ads landing pages. No nav, no site footer: just the logo, the
 * click-to-call number, and a single legal line, so the only ways forward are
 * the on-page enquiry form or a phone call. On phones the sticky bar's quote
 * button jumps to the form on the page rather than leaving for /contact.
 *
 * The logo is deliberately not a link to the home page, for the same reason.
 * The privacy policy link stays because the form collects personal details.
 */
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <Image
            src="/logo/goodwin-logo.svg"
            alt={`${site.name} logo`}
            width={1671}
            height={413}
            className={styles.logo}
            priority
            unoptimized
          />
          <a
            href={site.phoneHref}
            className={`btn btn--light ${styles.call}`}
            aria-label={`Call David on ${site.phoneDisplay}`}
          >
            <span className="label-desktop">Call {site.phoneDisplay}</span>
            <span className={`label-mobile ${styles.callIcon}`}>
              <Phone size={20} strokeWidth={1.5} aria-hidden="true" />
            </span>
          </a>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className={styles.legal}>
        <div className={`container ${styles.legalInner}`}>
          <span>
            © {new Date().getFullYear()} {site.legalName}. ABN {site.abn}.
          </span>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </footer>
      <MobileCallBar quoteHref={`#${LANDING_ENQUIRY_ID}`} />
    </>
  );
}
