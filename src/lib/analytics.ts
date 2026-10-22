/**
 * GA4 and Google Ads event helpers.
 *
 * gtag.js loads with the afterInteractive strategy, so an event fired on mount
 * can beat the script into existence. Rather than dropping it, trackEvent
 * retries briefly and then gives up.
 */
declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

const RETRY_MS = 300;
const MAX_ATTEMPTS = 10; // ~3s total, then abandon the event

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {},
  attempt = 0,
): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }

  if (attempt < MAX_ATTEMPTS) {
    window.setTimeout(() => trackEvent(name, params, attempt + 1), RETRY_MS);
  }
}

/**
 * Google Ads conversions.
 *
 * Each conversion action created in the Ads UI has its own label, which pairs
 * with the account ID as `AW-XXXXXXXXX/label`. Labels live in env vars so a
 * conversion action can be renamed or replaced without a code change; an
 * unset label simply means that conversion doesn't report yet.
 */
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;

const CONVERSION_LABELS: Record<ConversionName, string | undefined> = {
  lead: process.env.NEXT_PUBLIC_ADS_LEAD_LABEL,
  call: process.env.NEXT_PUBLIC_ADS_CALL_LABEL,
};

export type ConversionName = "lead" | "call";

export function trackConversion(
  name: ConversionName,
  params: Record<string, unknown> = {},
): void {
  const label = CONVERSION_LABELS[name];
  if (!ADS_ID || !label) return;

  trackEvent("conversion", { send_to: `${ADS_ID}/${label}`, ...params });
}
