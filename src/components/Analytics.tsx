"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, hasAnalyticsConsent } from "@/lib/consent";

/**
 * Consent-gated Google tag (gtag.js) for GA4 and Google Ads.
 *
 * Google's install snippet says one Google tag per page: that means one
 * gtag.js loader, not one product. GA4 and Ads are both configured on the
 * single loader below, which is why the Ads snippet from the Ads UI must not
 * be pasted in as well.
 *
 * Inert until an ID is provided via NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_ADS_ID,
 * and only loads once the visitor has granted analytics consent. It listens
 * for the consent event so tracking begins immediately after acceptance (no
 * reload required) and stays off entirely if consent is declined.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;

// Either product can front the loader; the configs below decide what reports.
const TAG_ID = GA_ID || ADS_ID;

export function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(hasAnalyticsConsent());
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  if (!TAG_ID || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}', { anonymize_ip: true });` : ""}
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
