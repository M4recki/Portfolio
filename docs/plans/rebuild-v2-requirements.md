# Rebuild Portfolio v2 — Wymagania (New Feature)

**Wersja:** 1.0
**Status:** Draft (awaiting gate 3→4)
**Data:** 2026-10-26
**Baza:** docs/product/mission.md + mvp-plan.md + docs/plans/tech-stack.md; przebudowa MVP (index.html, style.css, script.js)

## Frame problemu
Obecny MVP (single-page HTML/CSS/JS) spełnia fundament AEO, ale jest "szkieletem": brak fotografii/logo/favicon, brak kanałów kontaktu, cennika, firmy, sekcji portfolio, bloga i analityki. Docelowo strona ma być narzędziem sprzedaży eksperta (via Next.js portfolio) dla rzemieślników – dowodem umiejętności (PageSpeed 95-100 jako "patrz, Twoja też taka będzie").

## Wymagania

| ID | Wymaganie | Priorytet | Uwagi |
|----|-----------|-----------|-------|
| R1 | Architektura: Next.js (App Router, static export/SSG) + Tailwind v4 + shadcn/ui + Framer Motion | Must Have | Zgodność z mission: prędkość <2s, AEO deklaratywny HTML |
| R2 | Multi-page: Home, O mnie, Usługi, Cennik, Portfolio, Blog, Kontakt | Must Have | Zamiast long-page; BreadcrumbList schema dla każdej strony |
| R3 | Kontakt (realne wartości): telefon, e-mail, formularz (Formspree/Netlify Forms) | Must Have | Wartości w batchu — placeholder dopóki nie podane |
| R4 | Cennik: Wizytówka od 1000 zł · Strona + blog od 2500 zł · Audyt SEO/AEO 300 zł · Opieka 150 zł/mies · Oferta pilotażowa | Must Have | Sekcja Cena + FAQ answer "Ile kosztuje" |
| R5 | Portfolio: sekcja realnych projektów (własne/szkolne/znajomi + 3 demo rzemieślnicy jako uzupełnienie) | Must Have | Bez fałszywych metryk; opis + obrazki + technologii |
| R6 | Blog MDX: 3 seedowe posty (czy potrzebna strona; Google/AI AEO-GEO; przygotowanie do prowadzenia prac) | Must Have | 600-900 słów/post; FAQPage schema per post; og tematy |
| R7 | Assety osobiste: zdjęcie, logo/fotograf (typograficzny "MB"), favicon | Must Have | Favicon "MB" generated od startu; zdjęcie placeholder |
| R8 | Social in stopka + O mnie: LinkedIn + GitHub | Must Have | URL w batchu |
| R9 | Analityka: GA4 + Google Search Console (skrypty gotowe tą placeholder ID) | Should Have | Estetyce ochrona przed GTM fallback |
| R10 | Kanal usługi: Audyt SEO/AEO jako usługa, Opieka/utrzymanie jako oferta abonamentowa | Must Have | Widoczne w Usługi + Cennik |
| R11 | AEO/GEO przeniesione do v2: JSON-LD types (ProfessionalService, FAQPage, HowTo, WebSite, BreadcrumbList, og meta, sitemap) + deklaratywne odpowiedzi | Must Have | Fundament z MVP — nie tracimy przy zmianie frameworka |
| R12 | Wydajność/a11y: LCP < 2.5s, PageSpeed 95-100 (dowód klienckie), prefers-reduced-motion, WCAG AA, kontrast 4.5:1 | Must Have | Framer Motion gated na reduced-motion |

## Kryteria sukcesu (czy przebudowa będzie widoczna?)
1. PageSpeed Insights ≥ 95 (mobile) wstrzymana na URL produkcyjnym (Vercel/Netlify)
2. Wdrożona strona na domenie z rozwiązanymi kontaktami (telefon, mail, formularz > test het verschil enquiry)
3. 5 stron (Home + 6) live z pełną nawigacją i schema markup (BreadcrumbList na każdej)
4. Blog z 3 opublikowanymi postami, każdy z FAQ schema
5. Formularz działa (test: submit → mail przy istnieje)

## Granice zakresu

**IN:**
- Next.js rebuild, Tailwind, shadcn, Framer Motion, SEO/AEO schema, blog MDX, cennik, portfolio, kontakt, analityka podsietka

**OUT:**
- E-commerce, systemy płatności (NIE w portfolio)
- Pierwotne logika klienckie (panel admin), CMS klienta
- Automatyzacja marketingu, email monitoring beyond kontakt
- Sanity/Strapi headless CMS (YAGNI — decyzja po pierwszych 3 projektach: explore czerwcowego)
- Multi-kraj (angielska wersja) — dopiero po Q-validation

## Kluczowe decyzje przeglądu

| Decyzja | Wybrana | Dlaczego | Alternatywy rozważone |
|---------|---------|----------|------------------------|
| Stack | Next.js + Tailwind + shadcn + Framer Motion | AEO-safe z SSG, skill React przenośny, komponenty dla przyszłych projektów | Astro (perf default, ale shadcn/Motion w FB kompat.), WordPress (CMS dopiero po pierwszych projektach), Clean HTML (blog ręczny) |
| Headless CMS | BRAK na teraz (MDX blog) | YAGNI; Decyzja revisit po 3 projektach | Sanity.io / Strapi |
| Hosting deploy | Vercel (na statyczny QA) | Zero-config Next.js, free, SSL, CDN | Netlify (backup) |
| Cennik | Widoczny, "od X zł" (1000/2500/300, opieka 150/mies) | Zaufanie rzemieślników, zero bariera "zapy o wycenę" | Usługa pakietów bez kwot |
| Portfolio | Własne projekty + up-front 3 demo rzemieślników | Uczciwe bez fałszywych metryk | Fikcyjnie klienti case studies (NIE) |

## Otwarte do rozwiązania (Faza 4 clarify batch)

| # | Pytanie | Skutek źle | Owner |
|---|---------|------------|-------|
| QD1 | Realny numer telefonu i e-mail | Wizytówka bez kontaktu | Marek |
| QD2 | URL LinkedIn + GitHub | Brak social proof | Marek |
| QD3 | Lista projektów osobistych (spis + opisy/tech) | Sekcja portfolio pusta | Marek |
| QD4 | Zdjęcie osobiste (plik/strona) | Placeholder/brak | Marek, owybier zakłócenia |
| QD5 | Domena finalna (marekbaranski.pl?) | Deploy bez domeny | Marek |
| QD6 | Form endpoint — Formspree konto czy Netlify Forms | Formularz nie działa na prod | Marek |
