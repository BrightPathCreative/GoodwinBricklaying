"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { withAttribution } from "@/lib/attribution";
import styles from "./ContactForm.module.css";

const GHL_FORM_ID = "225OACBfUcQBAHbYOg1N";
const GHL_FORM_HEIGHT = 592;
const GHL_FORM_SRC = `https://links.brightpathcreative.com.au/widget/form/${GHL_FORM_ID}`;

/** GoHighLevel enquiry form embedded via BrightPath CRM. */
export function ContactForm() {
  const iframeId = `inline-${GHL_FORM_ID}`;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Pass the visit's gclid/UTM tags into the form's hidden fields. Only
  // touches the iframe when there are tags to add, so most visitors get the
  // form exactly as before; form_embed.js finds the iframe by id, so swapping
  // its src doesn't affect the resize or the /thank-you redirect.
  useEffect(() => {
    const iframe = iframeRef.current;
    const src = withAttribution(GHL_FORM_SRC);
    if (iframe && src !== GHL_FORM_SRC) iframe.src = src;
  }, []);

  return (
    <div className={styles.embed} style={{ minHeight: GHL_FORM_HEIGHT }}>
      <iframe
        ref={iframeRef}
        src={GHL_FORM_SRC}
        className={styles.iframe}
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Enquiry Form"
        data-height={String(GHL_FORM_HEIGHT)}
        data-layout-iframe-id={iframeId}
        data-form-id={GHL_FORM_ID}
        title="Enquiry Form"
      />
      <Script
        src="https://links.brightpathcreative.com.au/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
