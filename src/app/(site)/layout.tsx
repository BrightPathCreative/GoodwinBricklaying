import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

/** Full site chrome: primary nav, footer, and the back-to-top control. */
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
    </>
  );
}
