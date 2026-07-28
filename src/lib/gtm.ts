/**
 * Google Tag Manager container ID, shared by the consent-gated loader script
 * (components/GoogleTagManager.tsx) and the <noscript> fallback iframe in the
 * root layout. Defaults to the live Goodwin Bricklaying container; override
 * per environment with NEXT_PUBLIC_GTM_ID (blank disables GTM entirely).
 */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-TJZ4JM4R";
