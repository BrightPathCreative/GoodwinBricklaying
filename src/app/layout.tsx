import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import { Analytics } from "@/components/Analytics";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { CallTracking } from "@/components/CallTracking";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { GTM_ID } from "@/lib/gtm";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-montserrat",
});

// TAN Twinkle: licensed Canva/foundry display font (webfont licence purchased).
// Self-hosted from src/app/fonts; used for the H1 / logo-style display headings.
const tanTwinkle = localFont({
  src: [
    { path: "./fonts/TanTwinkle.woff2", weight: "400", style: "normal" },
    { path: "./fonts/TanTwinkle.woff", weight: "400", style: "normal" },
  ],
  display: "swap",
  variable: "--font-tan-twinkle",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Goodwin Bricklaying | Luxury Masonry & Heritage Restoration Melbourne",
    template: "%s | Goodwin Bricklaying",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_AU",
    url: site.url,
    title:
      "Goodwin Bricklaying | Luxury Masonry & Heritage Restoration Melbourne",
    description: site.description,
    images: [
      {
        url: "/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury heritage masonry by Goodwin Bricklaying, inner Melbourne",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-AU"
      className={`${dmSerifDisplay.variable} ${inter.variable} ${montserrat.variable} ${tanTwinkle.variable}`}
    >
      <head>
        {/* Reveal content immediately when JavaScript is unavailable. */}
        <noscript>
          <style>{`.reveal,.reveal-grid>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        {/* End Google Tag Manager (noscript) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {/* Header, footer and <main> come from the route group layouts:
            (site) carries the full site chrome, (landing) the stripped-back
            Google Ads pages. */}
        {children}
        <Analytics />
        <GoogleTagManager />
        <CallTracking />
        <VercelAnalytics />
      </body>
    </html>
  );
}
