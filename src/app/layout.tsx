import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-jost",
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
    <html lang="en-AU" className={`${cormorant.variable} ${jost.variable}`}>
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
      </body>
    </html>
  );
}
