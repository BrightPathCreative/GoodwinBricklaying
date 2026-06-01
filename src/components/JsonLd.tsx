/**
 * Renders a JSON-LD <script> in the document. Server component — the markup
 * is emitted into the static HTML so crawlers and LLMs read it without JS.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, project-authored content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
