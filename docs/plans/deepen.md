# Phase 6 — Deepen (Open Gaps from Reviews)

## 1. Q0 — Unfair Advantage (CEO, Engineering Critical) — ZAKOŃCZONY (NEGATYWNY)
- **Odpowiedź użytkownika:** "nie mam doświadczenia ani kontaktu z ekspertami rzemieślniczymi" — Q0 (unfair advantage jako insider blue-collar) jest NIEPRAWIDZIWY.
- **Korekta:** Misja (mission.md) zaktualizowana — unfair advantage opiera się na UMIEJĘTNOŚCIACH (budowa od zera, AEO/GEO, copy konwersyjny, zdalna praca, osobisty ton), nie na insider experience. Strona będzie portfolio technicznego eksperta z AEO, nie "rzemieślnika-eksperta".

## 2. Q1 — Demand Reality (CEO Critical)
- **Gap:** Brak bezpośredniego dowodu, że rzemieślnicy płacą za AEO.
- **Deepen:** Copy edukacyjny (FAQ + How-to) pokaże wartość. Ale potrzeba 1 rozmowa z osobą, która już płaci za stronę (lub odmawia) — zrozumieć, czy AEO jest motywacją, czy tylko "strona".
- **Next:** Wykonać przed MVP — użyć jako input do copy (jakie pytania zadają?).

## 3. Q2 — Status Quo Cost (CEO)
- **Gap:** Brak liczb (ile zapytań tracą przez brak strony?).
- **Deepen:** W rozmowach z rzemieślnikami zapytać: "Ile zapytań ofertowych dostałeś przez Facebook / rekomendacje / katalogi w ostatnim miesiącu? Ile z nich zamieniło się w projekty?"
- **Next:** Użyć liczb w case studies (realne wyniki — nie fikcja).

## 4. Q3 — Persona Specificity (CEO, Engineering Critical)
- **Odpowiedź użytkownika:** "wszystko jedno, ważne aby było to rzemieślnictwo" — Q3 (persona) szerokie, nie konkretne.
- **Next:** MVP targetuje RZEMIEŚLNICY (elektrycy, hydraulicy, malarze, stolarze, blacharze) — broad, nie jedna persona. Case studies mogą być z różnymi branżami.
- **Plan:** Jeśli elektryk — strona z lokalizacją elektryka; jeśli stolarz — strona stolarska.

## 5. [miasto] — Localizacja (Engineering Critical)
- **Domena / lokalizacja:** Użytkownik potwierdził — "miasto nie ma znaczenia, będę pracował zdalnie". Brak [miasto]. Lokalny SEO / LocalBusiness schema opiera się na regionie (np. Kraków + 30 km) albo ogólnopolskim, zależnie od pierwszych klientów.
- **Next:** Ustalić 1 region startowy (np. Kraków) dla pierwszego LocalBusiness schema, ale H1 i meta title ogólne (bez [miasto]).

## 6. Brand Identity (Design Review — Phase 5 Gap) — KONFIRMOWANE W tej sesji
- **Logo:** Typograficzny, minimalistyczny: imię i nazwisko + tagline (np. "Strony internetowe · AEO/GEO · Zdalna praca"). Bez ikony, bez ilustracji — postać typograficzna, która przemawia na korzyść personalnego portfolio, nie szablon agencji.
- **Colors:** ciemny granat #0f172a + złoty #c5a265 + biały / strszarawy f8f9fa (premium, profesjonalny, zimno-łagodny, nie korporacyjny).
- **Fonts:** Heading: Georgia / serif czytelny i prestiżowy; Body: system-ui, Inter albo jakikolwiek solidny sans (modern, czytelny na urządzeniach mobilnych).
- **Grid:** 8px bazowy; spacing konsekwentnie 16/24/32.
- **IMAGE SAMPLE:** Marek w strój biznesowy (laptop, notatnik) — fotka należy wykonać; stock nie jest dozwolony (autentyczność w portfolio).
- **Variant check:** Jeśli użytkownik chce zmienić kolor granatu/złotego w jakimś innym tonie — na kolor można przykleić jakąś prostą alternatywę (np. szary, brąz) i nawet jeszcze podbić kontrast wobec zewnętrznego tła
- **Kolory:** Granat (#1a1a2e) + złoto (#f4a460) — profesjonaly, premium, nie korporacyjny.

## 7. Schema / AEO Implementation (Engineering)
- **Gap:** JSON-LD zdefiniowany (docs/plans/tech-stack.md, docs/plans/structure.md) — ale nie zaimplementowany.
- **Next:** Wbudować w HTML (inline <script type="application/ld+json">) — 4 schemy: LocalBusiness, FAQPage, HowTo, Review.

## Phase 7 — Hand Off (Pending)
- **Hand Off:** Wszystko zapisane w docs/ (mission.md, mvp-plan.md, roadmap.md, tech-stack.md, structure.md, reviews, session log)
- **Next Step:** CEO decyduje — czy walidować Q0-Q3 + [miasto] przed MVP, czy startować z zakładanymi wartościami (ryzyko: strona może nie trafić)
- **Recommendation:** Wykonać 2 rozmowy (Q0, Q3) + ustalić [miasto] — 1 tydzień; potem MVP build — 2-3 tygodnie.
