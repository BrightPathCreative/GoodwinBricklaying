import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "@/components/legal.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | Goodwin Bricklaying",
  description:
    "Cookie Policy for Goodwin Bricklaying. Learn how we use cookies on our website.",
  path: "/cookie-policy",
  ogTitle: "Cookie Policy | Goodwin Bricklaying",
  ogDescription: "How Goodwin Bricklaying uses cookies on this website.",
});

const cookieRows = [
  {
    type: "Essential",
    purpose:
      "Required for the website to function correctly (e.g. form submissions).",
    provider: "Goodwin Bricklaying",
  },
  {
    type: "Analytics",
    purpose:
      "Understand how visitors use the site — pages visited, time on site, referral source.",
    provider: "Google Analytics 4",
  },
  {
    type: "Marketing (if applicable)",
    purpose: "Track ad performance if Google Ads campaigns are active.",
    provider: "Google Ads",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        crumbs={[homeCrumb, { name: "Cookie Policy" }]}
      />

      <section className="section section--cream">
        <div className="container-narrow">
          <Reveal>
            <span className={styles.updated}>Last updated: June 2026</span>
            <div className={styles.prose}>
              <p>
                This Cookie Policy explains how Goodwin Bricklaying (ABN{" "}
                {site.abn}) uses cookies and similar tracking technologies on
                goodwinbricklaying.com.au.
              </p>

              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit
                a website. They help the site remember your preferences and
                understand how you interact with it.
              </p>

              <h2>Cookies We Use</h2>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Cookie Type</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Provider</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieRows.map((row) => (
                      <tr key={row.type}>
                        <td>{row.type}</td>
                        <td>{row.purpose}</td>
                        <td>{row.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Google Analytics</h2>
              <p>
                This website uses Google Analytics 4 (GA4) to collect anonymised
                usage data. No personally identifiable information is collected
                through analytics cookies. You can opt out of Google Analytics
                tracking at any time using the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>

              <h2>Managing Cookies</h2>
              <p>
                You can control and delete cookies through your browser settings.
                Please note that disabling certain cookies may affect the
                functionality of this website. For instructions on managing
                cookies in your browser:
              </p>
              <ul>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h2>Cookie Consent</h2>
              <p>
                By continuing to use this website, you consent to our use of
                cookies as described in this policy. A cookie consent notice will
                be displayed on your first visit.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. The current
                version will always be available at this URL.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about our use of cookies?{" "}
                <Link href="/contact">Get in touch</Link>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
