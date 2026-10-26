# Marek Barański — portfolio v2 (Next.js, statyczny export)

Strona portfolio: HTML deklaratywny (AEO-safe), Tailwind v4, Next.js 15 + static export.

## Uruchomienie lokalne

```bash
npm install
npm run dev            # tryb dev
npm run build:export   # budowa produkcyjna → out/
```

## Podgląd zbudowanej wersji (bez servera Next)

```bash
cd out && python3 -m http.server 4173
# → http://localhost:4173/
```

## Deploy na Vercel (kroki)

1. Wrzuć repo na GitHub.
2. Vercel → Add Project → wybierz repo.
3. Framework Preset: Next.js (autodetect). Build: `npm run build:export` (Next ustawi sam — output: 'export').
4. **Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL` = finalna domena (np. `https://marekbaranski.pl`) — po podpięciu domeny, może być pusta przez parę dni (*.vercel.app działa od razu).
   - `NEXT_PUBLIC_FORM_ENDPOINT` = endpoint formularza (formspree.io → Forms → kopiuj endpoint).
5. Deploy → strona na `*.vercel.app`.
6. Podpięcie domeny: Vercel → Settings → Domains → dodaj domenę, zmień DNS (rekord A/CNAME wg instrukcji Vercel).
7. Po domenie uzupełnij `NEXT_PUBLIC_SITE_URL` i redeploy (sitemap/robots/OG chwyta pełne URL-e).
8. Google Search Console: dodaj domenę, wyślij `sitemap.xml`.

## Podmiana danych przed/na starcie (TODO batch)

| Plik | Co podmienić |
|------|--------------|
| `src/lib/data.ts` | telefon (persona.phone/phoneHref), e-mail (persona.email/emailHref), LinkedIn/GitHub (linkedin/github — dopóki puste, ikonki nieklikalne), cena usługi |
| `public/*.jpg` | zdjęcie Marek (używane w przyszłych sekcjach) |
| `.env.local` / Vercel | NEXT_PUBLIC_FORM_ENDPOINT, NEXT_PUBLIC_SITE_URL |

## Struktura

```
src/
  app/           # route'y: /, /o-mnie/, /uslugi/, /cennik/, /portfolio/, /blog/, /blog/[slug]/, /kontakt/
  app/sitemap.ts # generowany sitemap
  app/robots.txt # generowany robots
  components/    # Header, Footer, Button, Section, JsonLd, BreadcrumbJsonLd, ContactForm
  content/       # 3 x .mdx (blog)
  lib/           # data.ts (JEDYNE źródło treści i cen), site.ts, projects.ts, blog.ts
legacy/          # MVP v1 (inną architekturą, HTML statyczny — historyczna)
```

## AEO/GEO / SEO

- JSON-LD: WebSite (global), ProfessionalService + FAQPage (Home), BreadcrumbList (każda podstrona), Article + FAQPage (każdy post).
- Blog posty: frontmatter `faq` → schema FAQPage + treść "odpowiedź w pierwszych 2 zdaniach sekcji" (AEO-friendly).
- sitemap.xml + robots.txt generowane automatycznie; pełne URL-e biorą z `NEXT_PUBLIC_SITE_URL`.

## Placeholder-y przed "batchem danych"

- Telefon/e-mail = placeholder (+48000000000 / twoj-email@example.pl) — wyróżnione komentarzami TODO w `src/lib/data.ts`.
- Formularz: dopóki brak `NEXT_PUBLIC_FORM_ENDPOINT` → na submit pokazuje komunikat „zadzwoń / mail” zamiast wysyłać.
- Deploy można zrobić niezależnie od podmiany endpointu — endpoint podmieniasz potem w Vercel (Env Vars) i redeploy.
# Portfolio
