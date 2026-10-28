# Design Review — Portfolio Marek Baranski

## 1. Wireframe / Visual Structure (Building on docs/plans/structure.md)

### 1.1. Home Page (Hero Section)
- **Hero:** Marek Baranski (name, tagline "Specjalista od stron dla rzemieślników") + CTA "Zadzwoń teraz"
- **Info box (unique selling proposition):** „Strony internetowe od zera (HTML/CSS/JS + WordPress) z wbudowanym SEO/AEO/GEO i copy konwersyjnym, które zamieniają ruch w realne zapytania ofertowe od rzemieślników."
- **Live case study snippet:** Opis jednego case study z realnymi wynikami (wzrost zapytań).
- **Local SEO indicator:** Google Maps "Widoczny w Google" + podobne miasto (placeholder)
- **CTA (actions):** "Poproś o wycenę" (formularz), "Zadzwoń teraz" (widoczny numer telefonu)

### 1.2. Sekcja "O mnie"
- **Foto:** Marek w strój biznesowy/laptop (profesjonalny, ale nie korporacyjny)
- **Brand story:** 2-3 akapity (osobisty ton, relacyjny, bez „miłego dobrego agencji")
- **Credo:** 3 powody, dlaczego ja (i nie agencja)
- **Analiza persona:** "Dla elektryków, hydraulików, malarzy..."

### 1.3. Sekcja Usługi
- **3 usługi:**
  - 1. "Strona internetowa od zera (HTML/CSS/JS + WordPress)"
  - 2. "SEO/AEO/GEO od podstaw (FAQ, How-to, LocalBusiness schema)"
  - 3. "Copy konwersyjny (odpowiada na pytania przed zapytaniem)"
- **Pracuj ręcznie:** Nie automatyzujemy, pracujemy ręcznie (jak w docs/product/mvp-plan.md)

### 1.4. Case Studies
- **Realne: "Elektryk awaryjny (Kraków)" + "Stolarz (Warszawa)"
- **Struktura:** Problem → Rozwiązanie → Wynik (wzrost zapytań) + recenzja Google

### 1.5. Sekcja FAQ (AEO-ready)
- **Przykładowe 3 pytania:**
  1. "Jak długo trwa zrobienie strony?"
  2. "Czy strona będzie widoczna w Google?"
  3. "Ile kosztuje strona dla elektryka?"
- **Schéma FAQPage:** pytania + odpowiedzi z copy konwersyjnym (AEO-ready w pierwszych 30% każdej odpowiedzi)

### 1.6. Kontakt (CTA)
- **Formularz kontaktowy:** Imię, email, telefon, wiadomość (wymagany)
- **Widziany numer telefonu:** (na dole, na górze)
- **Mapka:** lokalizacja biura (placeholder, milenium design)

## 2. Design System (Szablon czcionek, kolorów, spacing)

### 2.1. Kolory (branding osobisty)
- **Szynka:** ciemny granat (#1a1a2e) + złoto (#f4a460) + niebieski akcent (#3a7ca1) / oryginalny branding
- **Neutralne:** biały (#ffffff) / szary #f9f9f9, #d4d4d4
- **Cel:** zimny / złoty / premium / profesjonalny, ale nie korporacyjny

### 2.2. Typografia
- **Heading:** Georgia / serif (warstwowy, prestiżowy, ale czytelny)
- **Body:** Open Sans / sans (modern, czytelny)
- **Scale:** H1 ~ 56px, H2 ~ 36px, H3 ~ 24px, Body ~ 16px (mobile-first)
- **Optymalizacja: anti-aliasing (blending), trackning, line-height ~ 1.5,Measure < 60 znaków

### 2.3. Spacing (higiena)
- **Grid:** 8px bazowy, 16px, 24px, 32px
- **Padding / margin:** consistent, nawet, miara
- **Reguła: ikke ogólną obowiązywać, ale maintain visual hierarchy"

### 2.4. Shadow
- **Cards:** subtelny shadow level 1 (box-shadow: 0 2px 8px rgba(0,0,0,0.08)) (bez heavy)
- **CTA:** nie heavy shadow, ogólnie klasyczny smart/zbilansowane

## 3. Accessiblity (AEO ≡ WCAG)

### 3.1. Kontrast i czytelność
- **Kontrast:** > 4.5:1 dla tekstów, > 3:1 dla dużej literatury
- **Focus states:** widoczne, “outline-style: solid;” (w stylu Apple-like)
- **Odczytanie stopki:** zasadniczo na check
- **Form:** labels, required indicators

### 3.2. Techniczne AEO-ready
- **Deklaratywny HTML:** Schema JSON-LD (localbusiness, faq, howto, review)
- **Struktura nagłówków:** H1 (unikalny), H2 (sekcje), H3 (elementy)
- **Struktura ARIA:** region, navigation, main, banner, contentinfo

### 3.3. Prędkość i wydajność
- **Ładowanie:** Lighthouse > 90, LCP < 2.5s, CLS < 0.1, FID < 100
- **Observer:** IntersectionObserver dla animacji (intersection-ratio: 0.1)
- **Obrazki:** WebP, LazyLoad, nie kompresja

## 4. Mikrokontrolek / Współdziałanie (Phase 5)

### 4.1. Hover / interakcja
- **CTA:** naive hover w kolorze, czytelne for color, czytelne for contrast i hover, differentiation
- **Wypełnianie formularza:** pliku błędów z informacją o błędzie (nie wymuszone)
- **Przewijanie:** smooth scroll (custom color), ou gerçek style (nasz)

### 4.2. Animacje (delight only)
- **Nav:** drobne podświetlenie menu (1.5s z powrotem)
- **Scroll:** scroll-down-rolling-scroll (żaden poważny)
- **Formularz:** naive hover (szary / nie heavy)

### 4.3. Worktree (sol do monitorowania)
- **Load times:** nagłówek visual tymczasowy
- **Query monitoring:** overpass search: query-przyciąganie-klientów (content)

## 5. Weryfikacja z rynkiem (walidacja AEO/GEO)

### 5.1. Testy (mockups/cookies)
- **Konwersja:** tests (append zapisz się + email -> feebdacl) (manual)
- **AEO:** Mockup: Content AEO-ready (FAQ, How-to) i test w ChatGPT / Claude -> manually
- **Responsywność:** Apparat soroban (mobile-first)

### 5.2. Pomoc techniczna (pomoc)
- **Handpiling:** AEO ready – kopia contentu "Frustration deviding copy"
- **Wsparcie:** Dostępność (jak zmiana), wsparcie (poprawki)

## 6. Ocena jakości (tolerancje)

### 6.1. Wymagania jakościowe (walidacja Design + AEO)
- **Szybkość:** Obsługa wszystkich przypadku w naszych (gotowe)
- **AEO:** pełne schema (FAQ, How-to, LocalBusiness, Review)
- **Responsywność:** miara: wszystko działa na mobile-first
- **Copy:** Konwersja, edukacyjna, deklaratywna (w pierwszych 30% strony)

### 6.2. Potwierdzenie wsparcia (mockup)
- **Wersja pro: Framer-Ready (komponenty)
- **Zaimprowizowane: "Styl biurowy" / "Pierwszy etap testów"
- **Pozostałe:** inkrementacja (Contentweavers), obsah w text ‘AEO-ready’

## 7. Działania nadchodzące (Phase 5)

1. **a + b:** Podgląd projektu (Figma, Adobe XD)
2. **c:** Projekt aplikacji (HTML/CSS/JS), wdrażanie do Netlify / Vercel
3. **d:** Wdrażanie (netlify / Vercel), Google Search Console
4. **e:** Pierwsze rozmowy walidacyjne (ceo + realni rzemieślnicy)
5. **f:** Poprawki copy / schema / walidacja AEO