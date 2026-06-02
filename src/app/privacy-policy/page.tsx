import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { homeCrumb } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "@/components/legal.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Goodwin Bricklaying",
  description:
    "Privacy Policy for Goodwin Bricklaying. Learn how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
  ogTitle: "Privacy Policy | Goodwin Bricklaying",
  ogDescription:
    "How Goodwin Bricklaying collects, uses, and protects your personal information.",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        crumbs={[homeCrumb, { name: "Privacy Policy" }]}
      />

      <section className="section section--cream">
        <div className="container-narrow">
          <Reveal>
            <span className={styles.updated}>Last updated: June 2026</span>
            <div className={styles.prose}>
              <p>
                Goodwin Bricklaying (ABN {site.abn}), operated by David Reuben
                Goodwin, is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, store, and disclose your
                personal information in accordance with the Australian Privacy
                Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>

              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li>
                  <strong>Contact information:</strong> Name, phone number,
                  email address, and suburb or postcode.
                </li>
                <li>
                  <strong>Project information:</strong> Details about your
                  property, project type, and any other information you provide
                  when making an enquiry.
                </li>
                <li>
                  <strong>Usage data:</strong> Information about how you use this
                  website, including pages visited and time spent on the site,
                  collected via analytics tools (such as Google Analytics 4).
                </li>
              </ul>
              <p>
                We only collect information that is reasonably necessary to
                respond to your enquiry and provide our services.
              </p>

              <h2>2. How We Collect Your Information</h2>
              <p>We collect personal information:</p>
              <ul>
                <li>
                  When you fill in and submit the enquiry form on this website.
                </li>
                <li>When you call or send an email to us directly.</li>
                <li>
                  When you contact us via Instagram or other social media
                  platforms.
                </li>
                <li>
                  Automatically, via website analytics and cookies (see our{" "}
                  <Link href="/cookie-policy">Cookie Policy</Link>).
                </li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul>
                <li>
                  Respond to your enquiry and provide quotes or project
                  assessments.
                </li>
                <li>Communicate with you about your project.</li>
                <li>Improve this website and our services.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p>
                We do not use your information for unsolicited marketing without
                your consent.
              </p>

              <h2>4. Disclosure of Your Information</h2>
              <p>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes. We may share your
                information with:
              </p>
              <ul>
                <li>
                  <strong>BrightPath Creative</strong> (our CRM and website
                  provider), for the purpose of managing enquiries and
                  communications.
                </li>
                <li>
                  <strong>Service providers</strong> who assist with website
                  hosting and analytics, bound by confidentiality obligations.
                </li>
                <li>
                  <strong>Legal authorities</strong>, if required to do so by
                  law.
                </li>
              </ul>

              <h2>5. Data Storage and Security</h2>
              <p>
                Your personal information is stored securely. We take reasonable
                steps to protect it from misuse, loss, unauthorised access,
                modification, or disclosure. However, no data transmission over
                the internet is completely secure, and we cannot guarantee
                absolute security.
              </p>

              <h2>6. Access and Correction</h2>
              <p>
                You have the right to access and correct the personal
                information we hold about you. To make a request, contact us via
                the details at the foot of this policy. We will respond within a
                reasonable time frame.
              </p>

              <h2>7. Cookies</h2>
              <p>
                This website uses cookies to improve your experience and collect
                analytics data. For full details, please see our{" "}
                <Link href="/cookie-policy">Cookie Policy</Link>.
              </p>

              <h2>8. Links to Other Websites</h2>
              <p>
                This website may contain links to external websites. We are not
                responsible for the privacy practices of those sites and
                encourage you to review their policies.
              </p>

              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The current
                version will always be available at this URL. We encourage you to
                review this page periodically.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or
                how we handle your personal information, please contact us:
              </p>
              <address className={styles.contactBlock}>
                {site.legalName}
                <br />
                {site.address.locality} {site.address.region} 3124
                <br />
                Enquiries:{" "}
                <Link href="/contact">goodwinbricklaying.com.au/contact</Link>
              </address>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
