import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import { servicesCatalogSchema, personSchema } from "@/lib/schema";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Usługi — strony dla rzemieślników",
  description:
    "Strony internetowe od zera i WordPress. Ceny: od 1000 zł (wizytówka), od 2500 zł (z blogiem), audyt 300 zł, opieka 150 zł/mies. Dołącz do pilotażu.",
  alternates: { canonical: "/uslugi/" },
};

/** FAQ dla strony usług — konkretne pytania klientów o zakres, cenę i proces */
const faq = [
  {
    q: "Co dokładnie zawiera cena strony od zera?",
    a: "Własna strona zbudowana od podstaw: wygląd dopasowany do Twojej branży, treść pod wyszukiwanie Google, szybkie ładowanie, gotowa do wyświetlania na telefonie. Bez szablonów agencji, bez ukrytych kosztów.",
  },
  {
    q: "Co wchodzi w Stronę WordPress?",
    a: "Własny wygląd (nie gotowy szablon), szybkie ładowanie, poprawne wyświetlanie w Google, pełna kontrola nad treścią i wyglądem. Wersja testowa przed uruchomieniem.",
  },
  {
    q: "Jak sprawić, żeby strona była widoczna w Google?",
    a: "Strona pokazuje się wyżej w wynikach wyszukiwania. Dbam o to na każdym etapie budowy: szybkość ładowania, przejrzysta struktura, opisy stron i treść, która odpowiada na pytania klientów.",
  },
  {
    q: "Co to są teksty, które sprzedają?",
    a: "Teksty, które odpowiadają na pytania klienta, zanim je zada — w treści strony i FAQ. Dzięki nim więcej osób dzwoni i pisze.",
  },
  {
    q: "Czym jest audyt widoczności?",
    a: "Analiza istniejącej strony: struktura, szybkość ładowania, widoczność w Google i AI. Raport + 30 min rozmowy — bez zobowiązań.",
  },
  {
    q: "Na czym polega opieka nad stroną?",
    a: "Aktualizacje, kopia zapasowa i sprawdzanie widoczności co miesiąc. Dostajesz raport: co działa, co poprawić — poprawki wdrażam sam.",
  },
];

export default function UslugiPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Usługi", path: "/uslugi/" }]} />
      <JsonLd data={personSchema} />
      <JsonLd data={servicesCatalogSchema} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />

      {/* Hero — zwarty, bez powtórzenia leada; od razu przechodzi w katalog */}
      <section>
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-6 sm:pt-14 sm:pb-8">
          <p className="eyebrow text-accent-dark">Usługi</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Co buduję dla rzemieślników
          </h1>
          <p className="measure mt-4 text-lg leading-relaxed text-ink-soft">
            Od strony wizytówki po opiekę nad witryną — ceny od 1000 zł, wycena w ciągu 24 godzin, 100% zdalnie.
            Dołącz do pilotażu.
          </p>
        </div>
      </section>

      {/* Karty usług */}
      <Section id="katalog-uslug" title="Katalog usług" dark>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="card-industrial h-full flex flex-col p-6 sm:p-7">
                <h2 className="font-heading text-xl">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                <p className="mt-4 font-semibold text-accent-dark">{s.price}</p>
                <a
                  href={s.href}
                  className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                >
                  Dowiedz się więcej →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ — AEO signals (question-based) */}
      <Section eyebrow="FAQ — usługi" title="Pytania, które zadajesz najczęściej">
        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {faq.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer min-h-14 list-none items-center justify-between gap-4 py-4 text-left font-medium">
                <span>{f.q}</span>
                <span className="text-xl text-accent transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="!py-0">
        <div className="py-12 text-center sm:py-16">
          <h2 className="font-heading text-3xl sm:text-4xl">
            Potrzebujesz strony, która pracuje?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Opowiedz mi o swojej robocie — zwykle odpowiadam w ciągu 24 godzin, z wyceną i terminem na papierze.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/kontakt/" variant="primary">Zacznij rozmowę</Button>
            <Button href="/cennik/" variant="secondary">Zobacz pełny cennik</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
