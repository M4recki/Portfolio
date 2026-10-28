export type Project = {
  title: string;
  kind: "Własny projekt" | "Demo" | "Case study klienta";
  description: string;
  tech: string[];
  link?: string;
  note?: string;
  image?: string;
  imageAlt?: string;
  /** 3 punkty do modala: problem → co zrobiłem → co z tego wynika */
  highlights?: string[];
  trade?: string;
};

/**
 * Źródło prawdy dla portfolio.
 * Uczciwość (uzgodnione w planie v2): żadnych zmyślonych case studies ani metryk.
 * Portfolio = własne projekty + wersje demonstracyjne stron (oznaczone „Demo”).
 */
export const projects: Project[] = [
  {
    title: "Czoch Motorsport — wersja demonstracyjna",
    kind: "Demo",
    description:
      "Wersja demonstracyjna strony dla warsztatu samochodowego: mocna sekcja powitalna, czytelny cennik, proces w krokach, galeria i kontakt. Dane przykładowe, ilustrująco pokazują układ i teksty.",
    tech: ["Kod od zera", "Teksty zachęcające", "Dane firmy dla Google"],
    trade: "Motoryzacja",
    link: "https://czochdemo.2137.one/",
    note: "Wersja demonstracyjna — dane przykładowe, nie jest to strona rzeczywistego klienta.",
    image: "/portfolio/czoch-motorsport.jpg",
    imageAlt:
      "Zrzut ekranu strony Czoch Motorsport — ciemna sekcja powitalna z czerwonymi akcentami, warsztat samochodowy",
    highlights: [
      "Problem: warsztat specjalistyczny potrzebuje wiarygodności, nie „ładnej stronki”.",
      "Rozwiązanie: mocna sekcja powitalna, cennik, proces i galeria pod decyzję o telefonie.",
      "Efekt: klient wie, co dostanie i ile zapłaci, zanim zadzwoni.",
    ],
  },
  {
    title: "Gajdrew — tartak, wersja demonstracyjna",
    kind: "Demo",
    description:
      "Wersja demonstracyjna strony dla tartaku: więźba dachowa i tarcica. Ciepła, rzemieślnicza estetyka, konkretna oferta z ceną wyceny 24–48 h, sekcja dla cieśli, realizacje i formularz zapytania. Dane przykładowe.",
    tech: ["Kod od zera", "FAQ widoczne w Google", "Teksty zachęcające"],
    trade: "Tartak",
    link: "https://gajdrew.2137.one/",
    note: "Wersja demonstracyjna — dane przykładowe, nie jest to strona rzeczywistego klienta.",
    image: "/portfolio/gajdrew.jpg",
    imageAlt:
      "Zrzut ekranu strony Gajdrew — tartak, jasny layout z brązowymi akcentami, zdjęcie stosu drewna",
    highlights: [
      "Problem: tartak sprzedaje przez telefon, ale klient nie zna specyfikacji.",
      "Rozwiązanie: konkretna oferta z wyceną 24–48 h i osobna sekcja dla cieśli.",
      "Efekt: zapytania z kompletem informacji zamiast pytań w kółko.",
    ],
  },
  {
    title: "RemontO — wykończenia, wersja demonstracyjna",
    kind: "Demo",
    description:
      "Wersja demonstracyjna strony dla firmy wykończeniowej: proces, realizacje, filmy, FAQ i przyciski kontaktu. Dane przykładowe, ilustrująco pokazują układ strony.",
    tech: ["Kod od zera", "FAQ widoczne w Google", "Dane firmy dla Google"],
    trade: "Remonty",
    link: "https://remontodemo.2137.one/",
    note: "Wersja demonstracyjna — dane przykładowe, nie jest to strona rzeczywistego klienta.",
    image: "/portfolio/remonto.jpg",
    imageAlt:
      "Zrzut ekranu strony RemontO — granatowa sekcja powitalna z domem, pomarańczowe przyciski telefon i WhatsApp",
    highlights: [
      "Problem: klient boi się remontu „w nieskończoność”.",
      "Rozwiązanie: obietnica terminu ~2 tygodnie, proces, realizacje i FAQ.",
      "Efekt: mniej obiekcji przed pierwszym telefonem.",
    ],
  },
  {
    title: "Izdebski — serwis opon, wersja demonstracyjna",
    kind: "Demo",
    description:
      "Wersja demonstracyjna strony dla serwisu opon: sekcja powitalna z ceną z góry, godziny otwarcia, cennik, opinie i rezerwacja wizyty. Dane przykładowe, ilustrująco pokazują układ strony.",
    tech: ["Kod od zera", "Teksty zachęcające", "Dane firmy dla Google"],
    trade: "Motoryzacja",
    link: "https://izdebski-serwis.netlify.app/",
    note: "Wersja demonstracyjna — dane przykładowe, nie jest to strona rzeczywistego klienta.",
    image: "/portfolio/izdebski-serwis.jpg",
    imageAlt:
      "Zrzut ekranu strony Izdebski — jasna sekcja powitalna z hasłem „Bez kolejek. Z ceną z góry. W jeden dzień.” i żółtymi akcentami",
    highlights: [
      "Problem: pytania „ile i kiedy” zostają bez odpowiedzi do telefonu.",
      "Rozwiązanie: ceny, godziny na żywo, rezerwacja i dowód społeczny.",
      "Efekt: klient przychodzi zdecydowany, a nie „dopytać”.",
    ],
  },
];
