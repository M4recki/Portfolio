# Structure — Portfolio Marek Baranski

## 1. Information Architecture (IA)

### 1.1. Główna struktura (Top-Level Pages)

| Page | Cel | Szczegóły |
|------|-----|-----------|
| **Home** | Wstęp, USP, lokalizacja, CTA "Zadzwoń teraz" | H1: "Marek Baranski — strony dla rzemieślników, które przyciągają klientów w [miasto]" |
| **O mnie** | Brand story, osobowość, doświadczenie, wiarygodność | Storytelling, zdjęcie, osobisty ton, "dlaczego ja?" |
| **Usługi** | Co oferuję (strony, SEO/AEO, copy konwersyjny) | 3-4 usługi z opisem, targetem, CTA |
| **Case Studies** | 1-3 realne case studies z wynikami | Problem → Rozwiązanie → Wynik (zapytania, recenzje) |
| **FAQ / AEO** | Schema FAQ, odpowiedzi na pytania klientów | 3-5 pytań (np. "Czego potrzebuję?", "Czy strona będzie widoczna w Google?", "Ile kosztuje?")
| **Blog / Wiedza** | Artykuły o lokalnym SEO, AEO, technologii dla rzemieślników | (Phase 4+ – opcjonalny)
| **Kontakt** | Formularz, numer telefonu, mapa, Google Business Profile | CTA "Zadzwoń teraz", "Poproś o wycenę"
| **About / Portfolio** | Podsumowanie projektów, portfolio | Link do case studies |

### 1.2. Podstrony (Sub-Pages)

- **Home** → H1 + intro + CTA + hero image
- **O mnie** → Story + values + credentials + photo
- **Usługi** → 3-4 sekcje (Strony, SEO/AEO, Copy, Wsparcie)
- **Case Studies** → 1-3 case studies (zazwyczaj jako osobne podstrony lub sekcja)
- **FAQ** → Schema FAQ, 3-5 pytań
- **Kontakt** → Formularz + telefon + mapa + Google Business

### 1.3. Struktura danych (Schema Markup)

| Schema | Gdzie | Cel |
|--------|-------|-----|
| **LocalBusiness** | Home, O mnie, Usługi | Lokalizacja, godziny, adres, recenzje |
| **FAQPage** | FAQ | Pytania + odpowiedzi (konwersyjne) |
| **HowTo** | Usługi / Case Studies | "Jak zrobić stronę dla elektryka?" – proces krok po kroku |
| **Review** | Case Studies | Recenzje klientów (z Google) |
| **WebPage** | Wszystkie podstrony | Meta description, og, autor |
| **BreadcrumbList** | Home, Usługi, Case Studies | Nawigacja w strukturze |

### 1.4. Nawigacja (Navigation)

- **Header (stały):** Logo (Marek Baranski), menu (Home, O mnie, Usługi, Case Studies, FAQ, Kontakt), ikona profilu (opcjonalnie), link do Google Maps
- **Sidebar (opcjonalna na mobile):** "O mnie", "Usługi", "Case Studies", "FAQ", "Kontakt" (na desktop)
- **Footer:** Adres, telefon, e-mail, social links (Facebook, LinkedIn), link do Google Business, copyright

### 1.5. Wizualna hierarchia (Wireframe)

```
+--------------------------------------------------+
|  LOGO  |  Home  | O mnie  | Usługi  | Case Studies | FAQ  | Kontakt |
+--------------------------------------------------+
|        |        |         |         |              |      |         |
|  Hero  |  Story |  Services|  Case   |  FAQ         |  Form |  Map     |
|  (H1)  |  (Bio) |  (3)    |  (3)    |  (3)         |  (CTA)|  (GIS)   |
+--------------------------------------------------+
```

### 1.6. SEO / AEO Integration

- **H1:** Unikalny na stronie (lokalizacja + USP)
- **Meta Title:** "strony internetowe dla rzemieślników" + "Marek Baranski" (max 60 znaków) — unikalna na wszystkie urządzenia; można dopisać jedno miejsce (np. Kraków) tylko jako pierwsze miejsce na meta description/H1, ale H1 kontekst ogólny (niejako „Polska", „mieszkaniec miasta X")
- **Meta Description:** "Marek Baranski tworzy strony internetowe dla elektryków, hydraulików, stolarzy — AEO/GEO-ready, copy konwersyjny, SEO lokalne. Zdalna praca." (max 155 znaków)

**Local SEO note:** Lokalizacja [miasto] nie jest ograniczeniem — zdalna praca pozwala obsługiwać klientów z dowolnego miasta. Lokalny SEO opiera się na regionie / okolicach (np. Kraków+30km), ale na szersze pole ogólnopolskie; FAQ + schema ogólne + dedykowane dla każdego klienta.
- **Meta Description:** "Marek Baranski tworzy strony internetowe dla elektryków, hydraulików i innych rzemieślników. AEO/GEO-ready, copy konwersyjny, lokalny SEO." (max 155 znaków)
- **Canonical:** / (unikaj duplikatów)
- **Open Graph:** image, title, description (dla social sharing)
- **Twitter Card:** summary, site name, URL
- **Schema:** LocalBusiness (główny), FAQPage, HowTo, Review (case studies)

### 1.7. Wymagania techniczne (Summary)

- **Technologia:** HTML5 + CSS3 + Vanilla JS (MVP) / WordPress (opcjonalnie)
- **Performance:** Lighthouse > 90, LCP < 2.5s, CLS < 0.1, FID < 100
- **Responsywność:** Mobile-first, touch-friendly
- **Dostępność:** ARIA, kontrast, czytelność (WCAG 2.1 AA)
- **SEO:** Deklaratywny copy, schema, meta tags, sitemap.xml
- **Analytics:** GA4 + Search Console (ręczny test w AI)
