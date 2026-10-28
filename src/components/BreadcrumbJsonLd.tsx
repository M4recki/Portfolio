import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

type Crumb = { name: string; path: string };

/**
 * BreadcrumbList JSON-LD — jq JSON-LD dla nawigacji okruszkowej.
 * Użycie na podstronach: <BreadcrumbJsonLd crumbs={[{name: "Cennik", path: "/cennik/"}]} />
 * (bez strony głównej — ona jest pierwszym elementem zawsze).
 */
export default function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const base = SITE.url ? SITE.url : "";
  const items = [
    { name: "Start", path: "/" },
    ...crumbs,
  ].map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: `${base}${c.path}`,
  }));

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items,
      }}
    />
  );
}
