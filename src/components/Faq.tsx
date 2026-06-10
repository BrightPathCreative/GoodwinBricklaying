import { faqPageSchema, type FaqItem } from "@/lib/schema";
import { JsonLd } from "./JsonLd";
import styles from "./Faq.module.css";

/**
 * Accessible FAQ list using native <details>/<summary> (open, indexable, and
 * keyboard-operable, design.md AEO rules). Emits FAQPage structured data so
 * the same answers feed rich results and LLM answers.
 */
export function Faq({ items }: { items: ReadonlyArray<FaqItem> }) {
  return (
    <div className={styles.list}>
      <JsonLd data={faqPageSchema(items)} />
      {items.map((item) => (
        <details key={item.question} className={styles.item} name="faq">
          <summary className={styles.summary}>
            <span>{item.question}</span>
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
