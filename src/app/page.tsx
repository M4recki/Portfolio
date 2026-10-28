import Button from "@/components/Button";
import BeforeAfter from "@/components/BeforeAfter";
import JsonLd from "@/components/JsonLd";
import Magnetic from "@/components/Magnetic";
import QuoteWizard from "@/components/QuoteWizard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import StatsBar from "@/components/StatsBar";
import {
  fitFor,
  homeFaq,
  notFitFor,
  persona,
  pilotOffer,
  prices,
  processSteps,
  services,
  whyMe,
} from "@/lib/data";

/** Tagi w dekoracyjnym podglądzie strony — korzyści zrozumiałe dla rzemieślnika (bez żargonu) */
const mockupTags = ["Szybki dojazd", "Gwarancja", "Wycena 0 zł"] as const;
import type { Metadata } from "next";

/* ============================================================
 * Home (U3) — Hero USP → WhyMe (5 real elementów, Q0-honest) →
 * Usługi teaser → Proces → Oferta pilotażowa → FAQ mini → CTA.
 * Jezyk: pl. Animacje: motion-safe (Reveal). Schematy:
 * ProfessionalService + FAQPage (U3 zakres; WebSite/T.Organization w U9).
 * ============================================================ */

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Marek Barański — strony internetowe dla rzemieślników",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: FAQPage (home FAQ — AEO deklaratywne odpowiedzi) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* ---- Hero ---- */}
      <section className="glow-accent bg-blueprint border-b border-line relative overflow-hidden">
        <div aria-hidden="true" className="hero-blob hero-blob--a" />
        <div aria-hidden="true" className="hero-blob hero-blob--b" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div aria-hidden="true" className="rule-accent rule-accent--shimmer" />
          <div className="relative py-7 sm:py-9">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
              <div className="min-w-0">
                <p className="mb-4 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-accent/35 bg-accent/10 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-wide text-accent-light sm:text-xs">
                  <span aria-hidden="true" className="relative flex h-[7px] w-[7px] shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-accent-light" />
                  </span>
                  <span>Przyjmuję 2 projekty na listopad</span>
                  <span aria-hidden="true" className="hidden text-ink-faint sm:inline">·</span>
                  <span className="hidden font-normal text-ink-soft sm:inline">100% zdalnie</span>
                </p>
                <p className="eyebrow text-accent-dark">Strony internetowe dla rzemieślników</p>
                <Reveal>
                  <h1 className="mt-4 text-balance text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-[2.9rem] xl:text-[3.1rem]">
                    Strony internetowe, które{" "}
                    <span className="bg-gradient-to-r from-accent via-accent-dark to-accent-light bg-clip-text text-transparent">
                      zdobywają klientów
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="measure mt-5 text-lg leading-relaxed text-ink-soft sm:text-xl">
                    Dla rzemieślników — bez wydawania majątku na agencje. Strona, która wygląda
                    profesjonalnie, pracuje przez całą dobę i pokazuje Twoją ofertę dokładnie wtedy,
                    gdy ktoś szuka fachowca.
                  </p>
                </Reveal>
                <Reveal delay={0.2} className="mt-7 flex flex-wrap items-center gap-4">
                  <Magnetic>
                    <Button href={persona.phoneHref} variant="primary" size="lg">
                      Zadzwoń teraz
                    </Button>
                  </Magnetic>
                  <Button href="/cennik/#oferta-pilotazowa" variant="secondary" size="lg">
                    Zobacz pełny cennik
                  </Button>
                </Reveal>
                <Reveal delay={0.3}>
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
                    {["Bez pośredników", "Stała cena z góry", "Kontakt wprost ze mną"].map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span aria-hidden="true" className="text-accent-dark">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {/* dekoracyjny podgląd strony rzemieślnika — czysty CSS, bez fikcyjnych metryk */}
              <div aria-hidden="true" className="relative hidden min-w-0 lg:block">
                <div className="rounded-2xl border border-line bg-paper/70 p-2.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
                  <div className="flex items-center gap-1.5 px-2 pb-2.5">
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="ml-3 h-4 flex-1 rounded bg-ground/80" />
                  </div>
                  <div className="rounded-xl border border-line/60 bg-ground p-5">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
                      Elektryk · Kraków
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {mockupTags.map((tag) => (
                        <span
                          key={tag}
                          className="whitespace-nowrap rounded-full border border-accent/40 bg-paper px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.06em] text-accent-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 font-heading text-2xl leading-tight text-ink">
                      Awarie 24h.<br />Montaże. Pomiary.
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                      Dojazd w ciągu godziny. Wycena przed pracą, faktura po.
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-line/60 pt-4">
                      <span className="font-heading text-xl text-ink">od 120 zł</span>
                      <span className="inline-flex min-h-9 items-center rounded-lg bg-accent px-4 text-sm font-semibold text-[#08131c]">
                        Zadzwoń
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* pasek branż — ruchomy, czysto dekoracyjny (aria-hidden) */}
        <div aria-hidden="true" className="marquee border-t border-line/60 py-3">
          <div className="marquee__track items-center gap-6 text-xs uppercase tracking-[0.25em] text-ink-faint">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-6">
                {["elektryk", "hydraulik", "stolarz", "malarz", "blacharz", "dekarz", "glazurnik"].map((trade) => (
                  <span key={`${copy}-${trade}`} className="flex items-center gap-6 whitespace-nowrap">
                    {trade}
                    <span className="text-accent">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      {/* ---- Dlaczego ja? — 5 rzeczy, których nie znajdziesz w szablonie ---- */}
      <Section id="dlaczego-ja" eyebrow="Dlaczego ja" title="Pięć rzeczy, których nie znajdziesz w szablonie">
        {/* 6-kolumnowa siatka: 3 karty po 2 kolumny, dolne 2 startują od kolumny 2 — wyśrodkowane */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {whyMe.map((w, i) => (
            <Reveal
              key={w.title}
              delay={i * 0.05}
              className={`h-full sm:col-span-1 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
            >
              <div className="card-industrial flex h-full flex-col p-6">
                <span
                  aria-hidden="true"
                  className="font-heading text-3xl text-accent-dark"
                >
                  {i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Usługi ---- */}
      <Section
        id="uslugi-teaser"
        eyebrow="Usługi"
        title="Strony internetowe od wizytówki po opiekę nad stroną"
        lead="Bez ukrytych opłat — wyceniasz swoją stronę po cenniku, dostajesz widoczność w Google w standardzie, opiekę w opcjach."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} className="h-full">
              <div className="card-industrial flex h-full flex-col p-6">
                <h3 className="font-heading text-lg">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                <p className="mt-4 font-semibold text-accent-dark">{s.price}</p>
                <a
                  href={s.href}
                  className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                >
                  Zobacz więcej →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Proces (4 kroki) ---- */}
      <Section
        id="proces"
        eyebrow="Proces"
        title="Od rozmowy do strony, która pracuje"
        lead="Cztery kroki, zero wysyłania papierów i czekania miesiącami na odpowiedź."
        dark
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05} className="h-full">
              <div className="h-full rounded-xl border border-line bg-[#060912] p-6 transition-colors duration-200 motion-safe:hover:border-[rgba(59,130,246,0.45)]">
                <span
                  aria-hidden="true"
                  className="font-heading text-2xl text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-lg text-ink">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- Przed / po: ta sama strona, dwa różne pierwsze wrażenia ---- */}
      <Section
        id="przed-po"
        eyebrow="Przed / po"
        title="Ta sama strona, dwa różne pierwsze wrażenia"
        lead="Pierwsza wersja tej strony była poprawna technicznie, ale wyglądała jak szablon. Poniżej ta sama treść — przed i po przebudowie. Przeciągnij suwak."
      >
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <Reveal>
            <BeforeAfter
              beforeSrc="/portfolio/przed.jpg"
              afterSrc="/portfolio/po.jpg"
              beforeAlt="Pierwsza wersja portfolio Marka Barańskiego — prosty granatowy layout"
              afterAlt="Obecna wersja portfolio Marka Barańskiego — granatowy layout z niebieskimi akcentami i siatką sekcji"
              beforeLabel="Wersja 1"
              afterLabel="Teraz"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-4">
              {[
                ["Hierarchia", "Jedna myśl na ekran: najpierw obietnica, potem dowód, na końcu kontakt."],
                ["Rytm", "Sekcje mają stały rytm i cienkie linie zamiast przypadkowych marginesów."],
                ["Kontrast", "Jaśniejszy tekst i wyraźniejsze akcenty — czytelne także na telefonie w słońcu."],
                ["Animacje", "Animacje tylko tam, gdzie coś tłumaczą. Wszystkie bez wyjątku redukują animacje."],
              ].map(([title, text]) => (
                <li key={title} className="border-l-2 border-accent/40 pl-4">
                  <p className="font-heading text-sm text-ink">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ---- Oferta pilotażowa (honest, Q0) ---- */}
      <Section id="oferta-pilotazowa" dark className="!py-0" >
        <div className="rounded-2xl border-2 border-accent bg-paper p-8 sm:p-10">
          <p className="eyebrow text-accent-dark">{pilotOffer.title}</p>
          <p className="measure mt-3 text-lg leading-relaxed text-ink">{pilotOffer.text}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/kontakt/" variant="primary" size="md">
              Zgłoś się do pilotażu
            </Button>
          </div>
        </div>
      </Section>

      {/* ---- Zanim napiszesz — uczciwe odsianie ---- */}
      <Section
        id="dla-kogo"
        eyebrow="Zanim napiszesz"
        title="Sprawdź, czy to dobry układ"
        lead="Wolę powiedzieć wprost, niż tracić Twój czas i swój."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-industrial p-6">
            <h3 className="font-heading text-lg text-ink">To jest dla Ciebie, jeśli…</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {fitFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-accent-dark">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-industrial p-6">
            <h3 className="font-heading text-lg text-ink">To nie jest dla Ciebie, jeśli…</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {notFitFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-ink-faint">
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---- Kalkulator wyceny (3 kroki) ---- */}
      <Section
        id="wycena"
        eyebrow="Wycena"
        title="Policz wstępnie, ile to kosztuje"
        lead="Trzy kliknięcia, bez podawania danych po drodze. Konkretną kwotę potwierdzam w rozmowie."
        dark
      >
        <QuoteWizard />
      </Section>

      {/* ---- FAQ mini (3 pytania, deklaratywne odpowiedzi AEO) ---- */}
      <Section id="faq" eyebrow="FAQ" title="Pytania, które zadajesz najczęściej">
        <div className="measure mx-auto divide-y divide-line rounded-xl border border-line bg-paper">
          {homeFaq.map((f) => (
            <details key={f.q} className="group px-5">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl font-bold text-accent-dark transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ---- CTA band ---- */}
      <Section
        className="!py-0"
        dark
      >
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Twoja konkurencja już ma stronę. Twoi klienci szukają teraz.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-soft">
              Zadzwoń albo napisz — odpowiadam w ciągu 24 godzin z wyceną i planem.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={persona.phoneHref} variant="primary" size="lg">
                Zadzwoń teraz
              </Button>
              <Button href="/kontakt/" variant="secondary" size="lg">
                Wyślij wiadomość
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---- Cennik mini teaser (link banda) ---- */}
      <section className="bg-paper py-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-sm text-ink-soft">
            Ceny orientacyjne:{" "}
            {prices.map((p) => p.name).join(" • ")} —{" "}
            <a
              href="/cennik/"
              className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
            >
              pełny cennik
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
