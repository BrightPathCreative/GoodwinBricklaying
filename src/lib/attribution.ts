/**
 * Ad and campaign attribution for the GHL enquiry form.
 *
 * Ad visitors usually land on one page and enquire on another, so the gclid
 * and UTM tags in the landing URL are gone by the time they reach the form.
 * They are kept in sessionStorage for the visit and appended to the form's
 * iframe URL, which GHL reads into its hidden UTM/GCLID fields.
 *
 * CRM attribution only: Google Ads conversion tracking uses its own cookies
 * and does not depend on this.
 */
const STORAGE_KEY = "gb-attribution";

const PARAMS = [
  "gclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type Attribution = Partial<Record<(typeof PARAMS)[number], string>>;

/**
 * Saves any attribution tags in the current URL (a fresh ad click replaces the
 * earlier one) and returns what is stored for this visit.
 */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  const url = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  for (const key of PARAMS) {
    const value = url.get(key);
    if (value) fromUrl[key] = value.slice(0, 200);
  }

  try {
    if (Object.keys(fromUrl).length > 0) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Attribution) : {};
  } catch {
    /* storage unavailable: use whatever this URL carries */
    return fromUrl;
  }
}

/** The form URL with the visit's attribution tags appended. */
export function withAttribution(src: string): string {
  const query = new URLSearchParams(captureAttribution()).toString();
  return query ? `${src}?${query}` : src;
}
