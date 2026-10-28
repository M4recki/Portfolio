# Engineering Review — Portfolio Marek Baranski

## 1. Technical Architecture (Matching docs/plans/tech-stack.md)

### 1.1. Stack Review (HTML/CSS/JS → Netlify / Vercel / LiteSpeed + WordPress opcjonalnie)
- **Chosen:** HTML5 + CSS3 (custom properties, mobile-first, no framework) + Vanilla JS (minim, Formspree / Netlify Forms / EmailJS)
- **Alternative (Phase 4+):** WordPress (LiteSpeed Cache, RankMath / Yoast + Schema Pro, custom theme — nie szablon agencji)
- **Hosting:** Netlify (static site, CDN globalny, HTTPS, branch deploy, forms) — polecane dla MVP
- **Domain:** [miasto].pl + .com → redirect

### 1.2. Build Pipeline (MVP — ręczny, bez CI)
- **Source:** /docs/ (HTML / CSS / JS)
- **Deploy:** Manual (drag-drop lub git-push do Netlify / Vercel)
- **Verification:** Lighthouse + Search Console + manual (AI test)
- **No CI/CD for MVP (Phase 5+):** Możliwe dodanie Netlify Deploy / GitHub Actions (opcjonalnie)

### 1.3. Performance (Critical for AEO—ChatGPT abandons pages >2s, 44.2% citations from first 30%)
- **Target:** Lighthouse > 90, LCP < 2.5s, CLS < 0.1, FID < 100ms
- **Images:** WebP / AVIF (lazy loading, responsive, srcset)
- **Fonts:** Self-hosted (Google Fonts / local), preconnect, font-display: swap
- **CSS:** Minified, critical CSS inlined (opcjonalnie — Phase 5+)
- **JS:** Minified, deferred / async, no heavy libraries
- **Schema:** JSON-LD inline (nie zewnętrzne pliki dla szybkości)

### 1.4. Security / Integrity
- **SSL:** Wbudowane (Let’s Encrypt / Netlify)
- **CORS / CSP:** Header Content-Security-Policy (opcjonalnie — Phase 5+)
- **Forms:** Netlify Forms (nie wymagają backend) — ale zabezpieczenie przed spam (honeypot / reCAPTCHA — Phase 5+)
- **No backend server:** Statyczna strona — mniejsza powierzchnia ataku

### 1.5. Accessibility (AEO + WCAG 2.1 AA — kluczowe dla AEO, bo AI wymaga deklaratywnej struktury)
- **Semantic HTML:** header, nav, main, section, article, footer, aside
- **ARIA:** role, aria-label, aria-describedby, aria-live (opcjonalnie dla formularza)
- **Focus:** visible focus ring (outline-style: solid; outline-color: accent)
- **Contrast:** > 4.5:1 (tekst), > 3:1 (duża literatura)
- **Keyboard:** Wszystkie interakcje (formularz, linki, CTA) dostępne z klawiatury

### 1.6. Schema Implementation (Critical — AEO / GEO foundation)
- **JSON-LD (inline):**
  - LocalBusiness (nazwa, adres, godziny, telefon, URL, recenzje, zdjęcia)
  - FAQPage (3-5 pytań + odpowiedzi)
  - HowTo (proces budowy strony — "Jak zrobić stronę dla elektryka?")
  - Review (case study + recenzja Google)
  - Organization (Marek Baranski, URL, logo, social links)
  - WebPage (meta, description, author)
  - BreadcrumbList (nawigacja)
- **Placement:** <head> (szybkość), ale nie blokujący (defer)
- **Validation:** Schema.org Validator + Rich Results Test (Google)

## 2. Code Quality / Maintainability

### 2.1. File Structure
```
/ (root)
  index.html
  /css/style.css (minified, custom properties)
  /js/script.js (minimal, deferred)
  /images/ (WebP, AVIF, responsive)
  /docs/ (mission.md, mvp-plan.md, etc.)
```

### 2.2. Naming / Organization
- **CSS:** BEM-style (.hero__title, .cta--primary) — czytelność
- **JS:** Named functions (handleFormSubmit, initLazyLoad) — debugowanie
- **HTML:** Semantic, lazy-loaded images (loading="lazy")
- **No frameworks:** Brak React / Vue — kontrola ładowania (AEO wymaga deklaratywnego HTML)

### 2.3. Testing (Manual — MVP)
- **Cross-browser:** Chrome, Firefox, Safari, Edge (desktop + mobile)
- **Device:** iPhone (Safari), Android (Chrome) — touch, responsywność
- **Performance:** Lighthouse (PageSpeed Insights) — przed deploy
- **AEO test:** Manually — ChatGPT / Claude / Perplexity — czy stronka cytowana?
- **Accessibility:** axe DevTools / WAVE — przed deploy (Phase 5+)

## 3. Potential Risks / Mitigation (Engineering focus)

| Risk | Impact | Mitigation |
|------|--------|------------|
| Strona zbudowana z „szybkiego szablonu” — brak kontroli | High | HTML/CSS/JS custom, nie szablon (zgodnie z mission) |
| AEO / GEO nie działa (brak schema / deklaratywnego copy) | High | JSON-LD inline + 3 FAQ + How-to + LocalBusiness (w MVP) |
| Strona za wolna (> 2s — ChatGPT abandon) | Critical | Lighthouse > 90, WebP, minified CSS/JS, no heavy libraries |
| Brak lokalizacji [miasto] — LocalBusiness schema pusta | High | Ustalić lokalizację przed MVP (CEO review: Q3, Q0) |
| Brak responsywności / mobile-first | High | Media queries + touch-first design (docs/plans/structure.md) |
| Brak testów (AEO) przed deploy | High | Manual test (ChatGPT / Claude / Perplexity) + Google Search Console |

## 4. Phase 5 — Engineering Action Plan (Next Steps)

1. **Ustalić lokalizację [miasto]** — bez tego nie można zbudować LocalBusiness schema
2. **Wgrać HTML/CSS/JS (MVP)** — Home + O mnie + Usługi + Case Study + FAQ + Kontakt
3. **Wstawić JSON-LD** — LocalBusiness + FAQPage + HowTo + Review
4. **Wdrażanie Netlify / Vercel** — HTTPS + CDN
5. **Lighthouse + Search Console** — indeksacja, testy wydajności
6. **Manual AEO test** — ChatGPT / Claude — czy Marek Baranski cytowany?
7. **Poprawki** — schema + copy + performance — przed Phase 6 (Deeper)

## 5. Conclusion / Engineering Verdict

- **Approach:** Static HTML/CSS/JS (MVP) + Netlify — kontrolowany, szybki, AEO-ready
- **Schema:** Wymagane (JSON-LD inline, 4 typy + BreadcrumbList) — kluczowe dla AEO/GEO
- **Performance:** Zielony (Lighthouse > 90), ale wymaga testów przed deploy
- **Maintenance:** Niski (brak backend, brak CMS — ale opcjonalnie WordPress Phase 5+)
- **Risky areas:** Lokalizacja [miasto], AEO test, Q1 (demand reality) — wymagają walidacji przed MVP
- **Verdict:** Build it — ale z warunkiem walidacji Q0, Q1, Q3 + określenia lokalizacji przed kodem