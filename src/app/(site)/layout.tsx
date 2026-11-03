import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { MobileCallBar } from "@/components/MobileCallBar";
import { navCta } from "@/lib/site";

/** Full site chrome: primary nav, footer, back-to-top, and the mobile call bar. */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
      <BackToTop />
      <MobileCallBar quoteHref={navCta.href} />
    </>
  );
}
