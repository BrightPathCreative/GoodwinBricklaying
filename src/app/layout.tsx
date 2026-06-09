import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
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

// TAN Twinkle — licensed Canva/foundry display font (webfont licence purchased).
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
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
        <CookieConsent />
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
