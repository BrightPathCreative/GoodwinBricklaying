"use client";

import { useEffect } from "react";
import { CONSENT_EVENT, hasAnalyticsConsent } from "@/lib/consent";
import { trackConversion, trackEvent } from "@/lib/analytics";

/**
 * Fires the GA4 `generate_lead` event and the Google Ads lead conversion when
 * the GoHighLevel form redirects to /thank-you.
 *
 * The form is a cross-origin iframe, so its submit event can't be observed from
 * here — the redirect is the only reliable signal. Guarded by sessionStorage so
 * a refresh or a later return to the page doesn't inflate the count, and it
 * listens for the consent event so accepting cookies on this page still counts
 * the enquiry.
 */
const ONCE_KEY = "gb-lead-tracked";

export function LeadTracking() {
  useEffect(() => {
    const fire = () => {
      if (!hasAnalyticsConsent()) return;

      try {
        if (window.sessionStorage.getItem(ONCE_KEY)) return;
        window.sessionStorage.setItem(ONCE_KEY, "1");
      } catch {
        /* storage unavailable, fall through and count it anyway */
      }

      trackEvent("generate_lead", { form_name: "Enquiry Form" });
      trackConversion("lead");
    };

    fire();
    window.addEventListener(CONSENT_EVENT, fire);
    return () => window.removeEventListener(CONSENT_EVENT, fire);
  }, []);

  return null;
}
