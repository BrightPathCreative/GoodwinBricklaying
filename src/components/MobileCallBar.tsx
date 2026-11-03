import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Bar fixed to the bottom of the screen on phones, so calling or asking for a
 * quote is always one tap away. Hidden on desktop (globals.css .mobile-bar).
 *
 * `quoteHref` is /contact on the main site and #enquire on Google Ads landing
 * pages, so ad visitors stay on the page with the form.
 */
export function MobileCallBar({ quoteHref }: { quoteHref: string }) {
  return (
    <div className="mobile-bar">
      <a href={site.phoneHref} className="btn btn--light">
        Call David
      </a>
      <Link href={quoteHref} className="btn mobile-bar__quote">
        Get a Quote
      </Link>
    </div>
  );
}
