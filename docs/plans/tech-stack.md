# Tech Stack — Portfolio Marek Baranski

## Decyzja strategiczna: HTML/CSS/JS czysto + opcjonalnie WordPress
Motywacja z MVP i mission: kontrola techniczna, szybkość (< 2s, LCP < 2.5s), brak JS-only content (AEO wymaga deklaratywnych odpowiedzi w HTML), personal brand (nie szablon agencji).

## Warstwa 1 — Frontend (MVP)
- **Język:** HTML5 semantyczny (header, nav, main, section, article, footer, aside) — kluczowe dla AEO / schema
- **CSS:** CSS3 custom properties (theme tokens: --color-ink, --color-paper, --color-accent, --font-heading, --font-body), mobile-first, no frameworks (kontrola, brak bloat)
- **JS:** Vanilla JS minimalny (formularz kontaktowy — walidacja + wysyłka przez Formspree / Netlify Forms / EmailJS, nici więcej)
- **Responsywny:** Media queries: 320px, 768px, 1024px, 1280px; touch-first

## Warstwa 2 — Schema / AEO / SEO (fundament, nie dodatek)
- **Schema JSON-LD:** LocalBusiness, FAQ, How-to, Review (case study), Organization, WebSite, BreadcrumbList
- **Meta:** Open Graph, Twitter Card, canonical, hreflang (1 język — pl)
- **SEO:** title / meta description z lokalizacją i copy konwersyjnym; H1 z frazą kluczową; deklaratywne odpowiedzi w pierwszych 30% sekcji
- **Prędkość:** Lighthouse, Web Vitals (LCP, FID, CLS), obrazki WebP / lazy load

## Warstwa 3 — Hosting / Deploy / CDN
- **Opcja A (szybka, kontrolowana):** Netlify (static site, CDN globalny, HTTPS, branch deploy, forms) — polecana dla HTML/CSS/JS
- **Opcja B (WordPress, jeśli client wymaga CMS):** LiteSpeed / cPanel z LiteSpeed Cache, temat własny (nie szablon agencji), plugin: RankMath / Yoast + Schema Pro
- **Domena:** marekbaranski.com / .pl (zdalna praca — brak specyficznego miasta); domena może być dowolna, ale najlepiej imię + nazwisko. Lokalny SEO / LocalBusiness schema opiera się na dowolnym regionie (np. Kraków + 30 km) albo ogólnopolskim, zależnie od pierwszych klientów.
- **SSL:** Wbudowane (Let’s Encrypt / Netlify)

## Warstwa 4 — Analytics / Monitoring (pre-scale, ręczny)
- **Google Search Console:** indeksacja, frazy, klikalność
- **Google Analytics 4:** ruch, konwersje (form submit, click-to-call)
- **Brand Radar / ręczny:** test w ChatGPT / Claude / Perplexity na temat strony — czy Marek Baranski cytowany? (AEO tracking)
- **Lighthouse CI:** automatyczny test przy deploy (opcjonalnie, Phase 5+)

## Warstwa 5 — Treści / Copy (nie technical, ale integral)
- **Copy:** pisany ręcznie (nie AI-szablon), ton osobisty, deklaratywne odpowiedzi, FAQ z realnymi pytaniami klientów
- **Obrazy:** zdjęcia własne / lokalne (nie stock — autentyczność)
- **Case study:** tekst z wywiadu + recenzja Google (realia, nie fikcja)

## Co NIE jest w stacku MVP
- React / Vue / Angular (niepotrzebny JS, bloat, AEO risk z CSR)
- CMS poza WordPress (opcjonalnie tylko dla klienta, nie portfolio)
- Baza danych (Mongo / PostgreSQL — niepotrzebna dla portfolio statycznego)
- System płatności (nie e-commerce)
- Automatyzacja marketingu (email marketing — Phase 5+)
