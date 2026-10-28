/* ============================================================
 * src/lib/schema.ts — JSON-LD (jedno źródło prawdy)
 * Encje: Organization/ProfessionalService, Person, WebSite,
 * OfferCatalog usług i BlogPosting. Wszystkie powiązane przez @id.
 * Zasada uczciwości: dane kontaktowe trafiają do schema TYLKO gdy
 * są realne (placeholdery z data.ts są pomijane).
 * ============================================================ */

import { persona, services } from "@/lib/data";
import { SITE, SITE_URL } from "@/lib/site";

export const ID = {
  business: `${SITE_URL}/#business`,
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
} as const;

const hasRealPhone = !/^\+?0{6,}$/.test(persona.phone.replace(/[\s-]/g, ""));
const hasRealEmail = !persona.email.includes("example.");

const sameAs = [
  persona.linkedin,
  persona.github,
].filter((url) => url.startsWith("http"));

/** Cena „od X zł" → liczba dla schema.org (bez walut i spacji). */
function priceFrom(label: string): number | undefined {
  const digits = label.split("/")[0].replace(/[^\d]/g, "");
  return digits ? Number(digits) : undefined;
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": ID.website,
  url: SITE_URL,
  name: SITE.name,
  description: SITE.description,
  inLanguage: "pl-PL",
  publisher: { "@id": ID.business },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": ID.person,
  name: persona.name,
  jobTitle: persona.role,
  description: persona.tagline,
  url: SITE_URL,
  image: `${SITE_URL}/og.jpg`,
  sameAs,
  knowsAbout: [
    "Strony internetowe dla polskich rzemieślników",
    "Szybkie strony wizytówki dla lokalnych firm",
    "Widoczność w Google i wyszukiwarkach AI",
    "Szybkie ładowanie stron (Lighthouse 100)",
    "Opisy firm zrozumiałe dla Google",
    "Odpowiedzi na pytania klientów w wyszukiwarce",
    "Strony dla elektryków, hydraulików, stolarzy",
    "Obecność lokalnej firmy w internecie",
    "Tworzenie stron od podstaw",
  ],
  worksFor: { "@id": ID.business },
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": ID.business,
  name: SITE.name,
  alternateName: SITE.title,
  description: SITE.description,
  url: SITE_URL,
  image: `${SITE_URL}/og.jpg`,
  logo: `${SITE_URL}/og.jpg`,
  founder: { "@id": ID.person },
  employee: { "@id": ID.person },
  sameAs,
  areaServed: { "@type": "Country", name: "Polska" },
  knowsLanguage: "pl",
  priceRange: "1000-2500 PLN",
  serviceType: [
    "Strony internetowe dla polskich rzemieślników",
    "Dostosowanie strony WordPress",
    "Widoczność w Google i wyszukiwarkach AI",
    "Teksty, które zachęcają do kontaktu",
    "Audyt i poprawa widoczności strony",
    "Obecność lokalnej firmy w internecie",
    "Szybkie ładowanie stron",
    "Opisy firmy zrozumiałe dla Google",
    "Optymalizacja pod wyszukiwarki AI",
    "Znajomość polskiego rynku",
  ],
  ...(hasRealPhone ? { telephone: persona.phone } : {}),
  ...(hasRealEmail ? { email: persona.email } : {}),
};

/** Katalog usług z cenami „od" — dla /uslugi/. */
export const servicesCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/uslugi/#katalog`,
  name: "Usługi — strony internetowe dla rzemieślników",
  url: `${SITE_URL}/uslugi/`,
  itemListElement: services.map((service) => {
    const price = priceFrom(service.price);
    return {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.text,
        provider: { "@id": ID.business },
        areaServed: { "@type": "Country", name: "Polska" },
      },
      ...(price
        ? { price, priceCurrency: "PLN", availability: "https://schema.org/InStock" }
        : {}),
    };
  }),
};

/** HowTo schema dla sekcji procesu (U9, R11) */
export function howToSchema(steps: ReadonlyArray<{ name: string; text: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Jak pracuję — od rozmowy do publikacji",
    description: "Czterostopniowy proces budowy strony internetowej dla rzemieślnika.",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  words: number;
}) {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    wordCount: post.words,
    inLanguage: "pl-PL",
    image: `${SITE_URL}/og.jpg`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": ID.person, "@type": "Person", name: persona.name, url: SITE_URL },
    publisher: { "@id": ID.business, "@type": "Organization", name: SITE.name },
  };
}
