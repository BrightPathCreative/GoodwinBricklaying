import Script from "next/script";
import { GTM_ID } from "@/lib/gtm";

/**
 * Google Tag Manager container.
 *
 * GTM loads its own tags (and can load a Google tag of its own), so it is kept
 * separate from the gtag.js loader in Analytics.tsx.
 */
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}
