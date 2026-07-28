"use client";

import { useEffect } from "react";
import { trackConversion, trackEvent } from "@/lib/analytics";

/**
 * Fires the GA4 `click_to_call` event and the Google Ads call conversion for
 * any tel: link on the page.
 *
 * One delegated listener rather than a handler on each CTA: the number appears
 * in the nav, hero, mid-page bands, footer and every service page, so
 * delegation keeps the tracking in one place and picks up new CTAs for free.
 */
export function CallTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!link) return;

      trackEvent("click_to_call", {
        link_text: link.textContent?.trim().slice(0, 100),
      });
      trackConversion("call");
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
