/* ============================================================
 * JsonLd (U2) — injectuje typ schema.org jako JSON-LD.
 * Serwerowy — deklaratywne schema dla Google AI / AEO.
 * ============================================================ */

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
