import Script from "next/script";
import styles from "./ContactForm.module.css";

const GHL_FORM_ID = "225OACBfUcQBAHbYOg1N";
const GHL_FORM_HEIGHT = 592;

/** GoHighLevel enquiry form embedded via BrightPath CRM. */
export function ContactForm() {
  const iframeId = `inline-${GHL_FORM_ID}`;

  return (
    <div className={styles.embed} style={{ minHeight: GHL_FORM_HEIGHT }}>
      <iframe
        src={`https://links.brightpathcreative.com.au/widget/form/${GHL_FORM_ID}`}
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
