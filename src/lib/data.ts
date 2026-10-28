/* ============================================================
 * src/lib/data.ts — JEDYNE ŹRÓDŁO DANYCH treści (U2)
 * Zmiana ceny/usługi/FAQ = edycja TYLKO tutaj.
 * Wartości oznaczone TODO — podmiana po dostarczeniu przez klienta.
 * ============================================================ */

/* === Konkrety zamiast obietnic — liczby, które da się sprawdzić === */
export const stats = [
  { value: "100%", label: "kodu pisanego od zera", note: "Bez gotowych, ociężałych szablonów." },
  { value: "< 24 h", label: "na odpowiedź z wyceną", note: "Telefon, e-mail albo formularz." },
  { value: "24/7", label: "Twoja oferta widoczna", note: "Także wtedy, gdy nie odbierasz." },
] as const;

/* === Dla kogo / nie dla kogo — uczciwe odsianie === */
export const fitFor = [
  "Chcesz, żeby strona przynosiła telefony od klientów z Google, a nie tylko „ładnie wyglądała”.",
  "Wolisz rozmawiać wprost z osobą, która buduje stronę — bez pośredników i działu obsługi.",
  "Masz swoją robotę i chcesz ją pokazać tak, żeby klient od razu wiedział, po co do Ciebie dzwoni.",
] as const;

export const notFitFor = [
  "Szukasz najtańszej strony z gotowego szablonu za 200 zł.",
  "Chcesz stronę „na wczoraj”, bez jednej krótkiej rozmowy o swojej firmie.",
  "Nie interesuje Cię, skąd przyjdą klienci — liczy się tylko sam adres w internecie.",
] as const;

export const persona = {
  name: "Marek Barański",
  role: "Web developer — strony dla rzemieślników",
  tagline: "Strony internetowe zbudowane pod Ciebie — z widocznością w Google i tekstami, które sprzedają. Praca zdalna, cała Polska.",
  phone: "+48 536 953 515",
  phoneHref: "tel:+48536953515",
  email: "mbaranski28@gmail.com",
  emailHref: "mailto:mbaranski28@gmail.com",
  /* TODO(user: batch danych) — pusty string = ikona bez linku (Footer to obsłuży) */
  linkedin: "https://www.linkedin.com/in/marek-bara%C5%84ski-516639248/",
  github: "https://github.com/M4recki?tab=repositories",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "O mnie", href: "/o-mnie/" },
  { label: "Usługi", href: "/uslugi/" },
  { label: "Cennik", href: "/cennik/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Blog", href: "/blog/" },
  { label: "Kontakt", href: "/kontakt/" },
] as const;

/** Dlaczego ja — 5 elementów (wersja REALNA, bez insider experience)
 * Źródło: docs/product/mission.md (korekta po walidacji Q0). */
export const whyMe = [
  {
    title: "Budowa od zera",
    text: "Strona zbudowana pod Ciebie — nie z gotowego szablonu agencji. Szybkość, czysta struktura, wszystko pod kontrolą.",
  },
  {
    title: "Widoczność w Google",
    text: "Struktura strony, odpowiedzi na pytania klientów i szybkość — wszystko dopasowane od pierwszego dnia, żeby Twoja oferta była widoczna w wyszukiwaniu.",
  },
  {
    title: "Teksty, które sprzedają",
    text: "Treść odpowiada na pytania klienta, zanim je zada — bez lania wody i opisów, które niczego nie tłumaczą.",
  },
  {
    title: "Praca zdalna",
    text: "Współpracę prowadzę zdalnie z każdym regionem Polski — kontakt telefoniczny, e-mail, wideo.",
  },
  {
    title: "Osobisty ton",
    text: "Rozmawiasz z osobą, która buduje Twoją stronę bez pośredników — bez agencji, bez zewnętrznej obsługi.",
  },
] as const;

/** Usługi — 6 kart (U4) */
export const services = [
  {
    title: "Strona internetowa od zera",
    text: "Strona zbudowana pod Twoją branżę — szybka, bez gotowych szablonów agencji.",
    price: "od 1 000 zł",
    href: "/cennik/",
  },
  {
    title: "Strona WordPress",
    text: "Własny wygląd, szybkie ładowanie, pełna kontrola nad treścią i wyglądem.",
    price: "od 2 500 zł",
    href: "/cennik/",
  },
  {
    title: "Widoczność w Google",
    text: "Struktura strony, treść odpowiadająca na pytania, szybkość — wszystko dopasowane, żebyś był widoczny w wynikach wyszukiwania.",
    price: "w pakiecie strony",
    href: "/uslugi/#katalog-uslug",
  },
  {
    title: "Teksty zachęcające",
    text: "Treść, która odpowiada na pytania klientów i zachęca do kontaktu — bez lania wody.",
    price: "w pakiecie strony",
    href: "/uslugi/#katalog-uslug",
  },
  {
    title: "Audyt widoczności",
    text: "Sprawdzenie strony: co poprawić, żeby była widoczna w Google i szybka.",
    price: "300 zł",
    href: "/cennik/",
  },
  {
    title: "Opieka nad stroną",
    text: "Aktualizacje, kopia zapasowa i sprawdzanie widoczności w Google i AI — co miesiąc.",
    price: "150 zł/mies.",
    href: "/cennik/",
  },
] as const;

/** Cennik — 4 PriceCards (U5). Ceny „od" jawnie. */
export const prices = [
  {
    name: "Wizytówka",
    price: "od 1 000 zł",
    desc: "Jedna strona: sekcja powitalna, oferta, kontakt. Szybka obecność w sieci z widocznością w wyszukiwaniu.",
    features: [
      "Strona od podstaw",
      "Dane firmy widoczne dla Google",
      "Teksty zachęcające",
      "Dostosowanie do telefonu, szybkie ładowanie",
    ],
    cta: "Wyceń wizytówkę",
    featured: false,
  },
  {
    name: "Strona + Blog",
    price: "od 2 500 zł",
    desc: "Wiele podstron z blogiem i rozbudowanymi odpowiedziami na pytania klientów.",
    features: [
      "Do 6 podstron + blog",
      "FAQ widoczne w Google",
      "Ścieżki nawigacji",
      "3 wpisy pomocnicze",
    ],
    cta: "Wyceń stronę",
    featured: true,
  },
  {
    name: "Audyt widoczności",
    price: "300 zł",
    desc: "Jednorazowy audyt istniejącej strony — co naprawić, żeby widziały Cię Google i AI.",
    features: [
      "Raport z wyników + rozmowa",
      "Stan widoczności w wynikach wyszukiwania",
      "Lista poprawek według ważności",
      "30 minut rozmowy po raporcie",
    ],
    cta: "Zamów audyt",
    featured: false,
  },
  {
    name: "Opieka",
    price: "150 zł/mies.",
    desc: "Spokój: aktualizacje, kopia zapasowa, sprawdzanie widoczności co miesiąc.",
    features: [
      "Aktualizacje + kopia zapasowa",
      "Raport widoczności w Google",
      "Sprawdzanie, czy AI poleca stronę",
      "Wsparcie e-mail",
    ],
    cta: "Zapytaj o opiekę",
    featured: false,
  },
] as const;

/** FAQ na stronie głównej (mini) — 3 pytania (U3, FAQPage schema U9) */
export const homeFaq = [
  {
    q: "Czy strona będzie widoczna w Google i AI?",
    a: "Tak — strona jest przygotowana pod wyszukiwarki od pierwszego dnia: odpowiada na pytania klientów prostym językiem, ma dane które Google czyta (struktura strony, wizytówka, FAQ, ceny), i ładuje się szybko. Dzięki temu widzą ją zarówno Google, jak i narzędzia AI.",
  },
  {
    q: "Ile kosztuje strona?",
    a: "Wizytówka od 1 000 zł, strona z blogiem od 2 500 zł, audyt 300 zł, opieka 150 zł/mies. Pełny cennik na stronie Cennik.",
  },
  {
    q: "Jak długo trwa budowa strony?",
    a: "Wizytówka: zwykle 5–10 dni roboczych od zebranych materiałów. Strona multi-page z blogiem: 2–4 tygodnie.",
  },
] as const;

/** Proces budowy (HowTo schema, U9) */
export const processSteps = [
  { name: "Rozmowa i plan", text: "Telefon lub e-mail — co robisz, dla kogo i po co ma być strona." },
  { name: "Struktura i teksty", text: "Układ podstron, optymalizacja pod wyszukiwarki i FAQ z realnych pytań klientów." },
  { name: "Budowa", text: "Czysty, szybki kod i optymalizacja techniczna pod Google." },
  { name: "Publikacja i sprawdzenie", text: "Publikacja strony, zgłoszenie do Google i sprawdzenie, czy wszystko działa." },
] as const;

/** Oferta pilotażowa (honest — zero fake case studies/Q0) */
export const pilotOffer = {
  title: "Oferta pilotażowa",
  text: "Pierwszym 2 klientom robię stronę w promocyjnej cenie w zamian za zgodę na publikację projektu jako studium przypadku. Cenę ustalam indywidualnie — wyślij zgłoszenie, a odpowiem w ciągu 24 godzin.",
} as const;
