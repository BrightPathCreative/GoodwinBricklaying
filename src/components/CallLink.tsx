import { site } from "@/lib/site";

/**
 * Click-to-call link. Desktop visitors can't tap to call, so they see the
 * number written out; on phones a short label keeps buttons tidy. Both labels
 * sit inside the one tel: link (swapped by the .label-desktop / .label-mobile
 * rules in globals.css), so call tracking sees a single, unchanged href.
 */
export function CallLink({
  className,
  desktopLabel = `Call ${site.phoneDisplay}`,
  mobileLabel = "Call Now",
  tabIndex,
}: {
  className?: string;
  desktopLabel?: string;
  mobileLabel?: string;
  tabIndex?: number;
}) {
  return (
    <a href={site.phoneHref} className={className} tabIndex={tabIndex}>
      {desktopLabel === mobileLabel ? (
        desktopLabel
      ) : (
        <>
          <span className="label-desktop">{desktopLabel}</span>
          <span className="label-mobile">{mobileLabel}</span>
        </>
      )}
    </a>
  );
}
