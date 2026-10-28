# Plan implementacji — Rebuild Portfolio v2 (Next.js)

**Baza wymagań:** docs/plans/rebuild-v2-requirements.md (R1–R12)
**Legacy:** index.html, css/style.css, js/script.js → archiwizowane w `legacy/` (Unit 10; treść kopiowana do NIE w v2)

## Architektura (max 1 strona)
- Next.js App Router, `output: 'export'` (statyczny HTML → AEO deklaratywne, hosting dowolny/Vercel)
- Struktura: `src/app/` (routes), `src/components/` (shared), `src/content/blog/*.mdx` (posty), `public/` (assets)
- Design tokens via Tailwind v4 `@theme`: --color-ink #0f172a, --color-accent #c5a265, font-heading Georgia, font-body system sans, spacing 8px scale
- Metadane per strona (metadata API); JSON-LD komponent `<JsonLd>` injectowany per typ; canonical z `NEXT_PUBLIC_SITE_URL` (domyślnie Vercel URL, domena po deploy)
- Deployment: Vercel (auto z GitHub), Netlify jako backup

### Unit 1: Scaffold Next.js + Tailwind + shadcn/ui + Framer Motion
**Goal:** Działający minimalny eksport statyczny.Index pusty placeholder.
**Requirements trace:** R1
**Dependencies:** — 
**Files:** package.json, next.config.mjs, tsconfig.json, postcss.config, src/app/layout.tsx, src/app/globals.css, .gitignore, README.md
**Approach:** create-next-app (App Router, TS), output:'export', distDir; Tailwind v4 (`@import "tailwindcss"`, @theme tokens), shadcn/ui init (default theme tamed do kolorów), framer-motion install. BasePath/assetPrefix NIE (domena w root).
**Patterns:** — green space; konwencja App Router
**Test scenarios:** build & export bez błędów; `npm run dev` serwuje 200; PageSpeed baseline raport generowany
**Verification:** `next build` produkuje `out/index.html` z class Tw
**Planning-time unknowns:** Deferred — wersje zależności (lockstep z React 19)

### Unit 2: Design system + shared components
**Goal:** Spójny system wizualny (palette, typografia, spacing) + komponenty (Header, Footer, Button, Section, JsonLd).
**Requirements trace:** R1, R7, R8, R12
**Dependencies:** Unit 1
**Files:** src/app/globals.css (tokens final), src/components/{Header,Footer,Button,Section,JsonLd}.tsx, src/lib/{site.ts,data.ts}, public/icons (LinkedIn/GitHub SVG), favicon.ico
**Approach:** Header: sticky, nawigacja 7 pozycji (Home, O mnie, Usługi, Cennik, Portfolio, Blog, Kontakt), mobile hamburger; Footer: kontakt telefon T O D O/web/contact, social links (placeholder URL until user data), copyright. Button/Section wg shadcn styl z Tailwind; JsonLd `<script type="application/ld+json">`. Favicon: generate "MB" (sharp lub SVG→ico).
**Patterns:** kontekstowe kolor tokens z @theme; motion-safe variants
**Test scenarios:** header na 375/768/1440; focus-visible na wszystkich linkach; contrast wc (4.5:1) na ink/gold/white
**Verification:** snapshot headless chrome 375px OK; keyboard nav reach CTA
**Planning-time unknowns:** Deferred — real social URLs (user <batch>)

### Unit 3: Home page
**Goal:** Landing determinująca konwersję: Hero (USP + USP photo + CTA tel/form), sekcja "Dlaczego" (kombinacja 5 unikalnych rzeczy), teaser Usługi/Cennik/Portfolio, mini-FAQ, CTA końcowe.
**Requirements trace:** R1, R3, R4, R12
**Dependencies:** Unit 2
**Files:** src/app/page.tsx, src/components/home/{Hero,WhyMe,Teaser,FaqMini,CtaBand}.tsx
**Approach:** Hero headline: "Strony internetowe dla rzemieślników od zera — z SEO/AEO/GEO wbudowanym, i copy konwersyjny" + phone CTA `<a href="tel:...">` (number from data.ts placeholder T O D O); Framer Motion: fade-up on hero (gated prefers-reduced-motion), hover scale CTA; deklaratywne answer w pierwszych 30% (AEO)
**Patterns:** reuse Button/Section; motion via `<motion.div>` + useReducedMotion
**Test scenarios:** render na 5 breakpoint; motion disabled przy reduced-motion; CTA tel jest linkiem
**Verification:** headless screenshot 1440 + 375 — layout bez overflow; hierarchy H1→H2
**Planning-time unknowns:** Deferred — phone number, email

### Unit 4: O mnie + Usługi
**Goal:** Wiarygodność eksperta (historia, projekcje, techniki) + pełna oferta usług danego audytu i opieki.
**Requirements trace:** R5? (bez R5 — to R10), R7, R8, R10
**Dependencies:** Unit 2
**Files:** src/app/o-mnie/page.tsx, src/app/uslugi/page.tsx, src/components/{ServiceCard,AboutBlock}.tsx
**Approach:** O mnie: history web dev (honest: własne projekty, 3 demo, cel specjalizacja AEO dla rzemd.), photo placeholder (frame z alt "Marek Baranski — zdjęcie w przygotowaniu"), social ikonki. Usługi: 6 kart (Strona od zera, WordPress, SEO/AEO/GEO konfig, Copy konwersyjny, Audyt SEO/AEO 300 zł, Opieka 150 zł/mies) + link do Cennik
**Test scenarios:** 6 kart grid 2×3 (768), 1 col mobile; ARIA na kartach; link "kapituła cennika" działa
**Verification:** schema ProfessionalService na O mnie; a11y axe pass 0 critical
**Planning-time unknowns:** Deferred — photo file, bio szczegóły

### Unit 5: Cennik
**Goal:** Przejrzyste stawki — budowа zaufania, eliminuje barier unclear wyceny (ceny "od X zł").
**Requirements trace:** R4
**Dependencies:** Unit 2
**Files:** src/app/cennik/page.tsx, src/components/PriceCard.tsx
**Approach:** 4 PriceCards: Wizytówka od 1000 zł (strona single-page: hero, oferta, kontakt); Strona + Blog od 2500 zł (multi-page/struktura, MDX/blog); Audyt SEO/AEO 300 zł; Opieka 150 zł/mies. Bandera "Oferta pilotażowa: pierwsza strona dla pierwszych 3 klientów — promocyjna cena w zamian za prawo do case studies". FAQ answers schema-endpoint "Ile kosztuje strona?" + "Co wchodzi w cene?"
**Test scenarios:** grid 1/2/4 cols responsive; "od" jawnie zawarte w copy; CTA per card
**Verification:** headless render; schema FAQPage zawiera cenniki Q&A
**Planning-time unknowns:** — 

### Unit 6: Portfolio
**Goal:** Realna sekcja projektów (Marek własne + 3 demo rzemd. BUILDER placeholder-ready), pokazanie skill + honesty.
**Requirements trace:** R5
**Dependencies:** Unit 2
**Files:** src/app/portfolio/page.tsx, src/components/ProjectCard.tsx, src/lib/projects.ts (data-driven), public/img/projects/* (placeholders)
**Approach:** ProjectCard: title, opis, tech badges (HTML/CSS/JS, Next, WP), link (jeśli live) / screenshot; dane z projects.ts (łatwe dodawanie — array). Kierunek: własne projekty Marek + 3 demo (elektryk, hydraulicz, stolarz) oznaczone "Demo — w wzorcowe, nie score". **Empty state (P1-2 fix):** jeśli projects.ts bez własnych projektów — karta "Portfolio rośnie: przykłady w przygotowaniu" + 3 miniatury demo + CTA do Usługi
**Test scenarios:** grid responsive; card fallback jeśli brak obrazka; alt text każdy img
**Verification:** cards renderują z projects.ts bez hardcode; add-nowy projekt = edit data only
**Planning-time unknowns:** Deferred — spis projektów Marek <batch>, screenshots

### Unit 7: Blog (MDX)
**Goal:** 3 seedowe posty AEO-short (600-900 słów) + pipeline MDX do łatwego dodawanie.
**Requirements trace:** R6
**Dependencies:** Unit 1
**Files:** src/content/blog/{czy-potrzebna-strona-2026,google-i-ai-jak-klienci-szukaja,przygotowanie-do-budowy-strony}.mdx, src/app/blog/page.tsx, src/app/blog/[slug]/page.tsx, src/lib/blog.ts, gray-matter + next-mdx-remote (deps)
**Approach:** generateStaticParams ze slug; frontmatter title/desc/date/tags; per post render FAQPage JSON-LD z frontmatter FAQ array; lista blogowa z excerpt
**Test scenarios:** 3 posty render; 404 dla niewiem slug (fixtures static export); schema FAQPage w head unverifiable — headless dump-dom check; **frontmatter validation (P1-3 fix):** build fail-fast jeśli brak title/desc/date/FAQ array w .mdx (zasada: zero silent missing schema)
**Verification:** 3/3 post wysany; DOM selector `<script ld+json>` per post
**Planning-time unknowns:** — (tematy potwierdzone w Phase 2)

### Unit 8: Kontakt
**Goal:** Ready-to-use kanały: telefon (tel:), e-mail (mailto:), formularz (client-side validation, POST do placeholder endpoint).
**Requirements trace:** R3
**Dependencies:** Unit 2
**Files:** src/app/kontakt/page.tsx, src/components/ContactForm.tsx
**Approach:** Form React (controlled inputs, inline errors: brak imienia/email format/message min 10 chars), honeypot field; submit → fetch POST do `NEXT_PUBLIC_FORM_ENDPOINT` (placeholder https://formspree.io/f/YOUR_ID — swap Real przy deploy); success/failure inline states, aria-live announce; obok: tel + mailto cards; LocalBusiness-type schema reużyjes z home
**Test scenarios:** happy submit fetch intercepted; błędy edge (empty email, invalid format); reduced-motion; aria-live correct on failure; **double-submit guard** (button disabled podczas fetch)
**Verification:** form spełnia a11y (axe 0 critical); submit nie nawiguje
**Planning-time unknowns:** Deferred — real endpoint, phone, email <batch>

### Unit 9: SEO/AEO wiring global
**Goal:** Pełny AEO pakiet per strona: metadata (title/desc/canonical/OG), JSON-LD (ProfessionalService, WebSite, BreadcrumbList per strona, FAQPage blog), sitemap.xml, robots.txt.
**Requirements trace:** R11
**Dependencies:** Units 3-8 (routes istnieją)
**Files:** src/app/{layout,page,...}/metadata per route, src/components/Auth? nie. src/lib/schema.ts (builders), src/app/sitemap.ts (Next gen), src/app/robots.ts, .env.example (NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_FORM_ENDPOINT, NEXT_PUBLIC_GA_ID)
**Approach:** buildLd(): ProfessionalService (dane z data.ts: name, description, areaServed "Polska", contactPoint], BreadcrumbList builder (path array), WebSite; metadata helper per route (title pattern: `[Page] | Marek Barański — Strony dla rzemd.`); canonical z env; sitemap robots pełna; GA4: script placeholder ga ID
**Test scenarios:** sitemap zawiera 7 URLs; BreadcrumbList w DOM każdej subpage; canonical obecnego URL (Vercel vs custom domena env)
**Verification:** Rich Results Test (Google) PO deploy — ProfessionalService bez errors; `grep -c ld+json out/**/*.html` ≥ 8 plików
**Planning-time unknowns:** Deferred —нализна SITE_URL (po deploy domena)

### Unit 10: Migracja + Weryfikacja + Deploy prep
**Goal:** Stary MVP archiwizowany; v2 statyczny build wyczyszczony; instrukcja deploy; PageSpeed verify.
**Requirements trace:** R1, R12
**Dependencies:** Units 1-9
**Files:** legacy/{index.html,css/style.css,js/script.js,robots.txt,sitemap.xml} (migrated), README.md (deploy steps), package.json scripts ("build:export")
**Approach:** git-style move legacy/ (no git — FS move); clean orphan files; `next build` (output export) → out/; headless chrome screenshots 375/768/1440 vs MVP baseline; grep JSON-LD count vs v1 (4 baseline → ≥8); PageSpeed local via lightspeed CLI (npx lighthouse http://localhost) — target ≥95 mobile pre-deploy; README: Vercel import, env variables setup, form endpoint swap, domain connect "Po deploy"
**Test scenarios:** build exit 0; out/ size < 2MB JS total (perf budget); legacy nieengu PDT (404)
**Verification:** README deploy gotowy; local lighthouse ≥95; screenshots ok
**Planning-time unknowns:** Deferred — host final (Vercel assumed)

### Quality bar checklist
- [x] Każdy Unit ma trace R1-R12 (Unit 4 ma R10, Unit 7 R6; pełna mapa: R1→U1,R2→U3-8 nacjonalism,R3→U8,R4→U5,R5→U6,R6→U7,R7→U2/4,R8→U2,R9→U9,R10→U4,R11→U9,R12→U3/10)
- [x] DAG bez cycles (1→2→(3,4,5,6,7,8)→9→10)
- [x] ≥3 test scenarios per Unit
- [x] ≤8 files per Unit (max: Unit 1 = 8)
- [x] ≤2 new abstrakcje per Unit (komponenty + helpers)
- [x] Planning unknowns sklasyfikowane (wszystkie Deferred — data values od usera)
- [x] Handoff test: engineer nie musi wymyślć zachowań — Dane walidacja i routing zdefiniowane

### Plan-time blockers: brak P0. Data values (phone/email/projects/photo/social URLs) są Deferred — nie blokują buildu, blokują tylko final deploy.
