import { EnquiryCta } from "@/components/EnquiryCta";
import { LandingEnquiry } from "@/components/LandingEnquiry";
import type { ServiceVariant } from "./variant";

/**
 * Closing call-to-action for a service page. On the landing variant the form
 * itself sits here, so ad traffic can enquire without leaving the page.
 */
export function ServiceEnquiry({
  variant,
  heading,
  body,
  buttonLabel,
}: {
  variant: ServiceVariant;
  heading: string;
  body: string;
  buttonLabel: string;
}) {
  if (variant === "landing") {
    return <LandingEnquiry heading={heading} body={body} />;
  }
  return <EnquiryCta heading={heading} body={body} buttonLabel={buttonLabel} />;
}
