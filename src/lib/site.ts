/* ============================================================
 * src/lib/site.ts — konfiguracja serwisu
 * SITE.url: env NEXT_PUBLIC_SITE_URL; jeśli pusty, używamy
 * adresu docelowego z .env.example, żeby sitemap.xml i robots.txt
 * nie publikowały "example.com" (błąd krytyczny dla SEO).
 * Podmiana domeny = jedna zmienna środowiskowa.
 * ============================================================ */

/** Docelowa domena — nadpisywalna przez NEXT_PUBLIC_SITE_URL. */
const FALLBACK_URL = "https://marekbaranski.pl";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_URL
).replace(/\/+$/, "");

export const SITE = {
  name: "Marek Barański",
  url: SITE_URL,
  title: "Marek Barański — strony internetowe dla rzemieślników",
  description:
    "Strony internetowe budowane od zera z widocznością w wyszukiwaniu i tekstami zachęcającymi. Praca zdalna — cała Polska.",
  locale: "pl_PL",
} as const;

/** Absolutny URL dla danej ścieżki (canonicale, JSON-LD, sitemap). */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
