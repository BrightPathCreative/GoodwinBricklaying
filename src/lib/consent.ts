/**
 * Lightweight cookie-consent storage (no third-party platform, per
 * docs/sitemap.md). Analytics/Ads scripts must check hasAnalyticsConsent()
 * before firing. A "gb:consent" event fires whenever the choice changes.
 */

export const CONSENT_KEY = "gb-cookie-consent";
export const CONSENT_EVENT = "gb:consent";

export type Consent = {
  essential: true;
  analytics: boolean;
  decidedAt: string;
};

export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean): Consent {
  const consent: Consent = {
    essential: true,
    analytics,
    decidedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
  } catch {
    /* storage unavailable, banner simply reappears next visit */
  }
  return consent;
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics === true;
}
