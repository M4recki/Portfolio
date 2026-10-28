import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { prices, pilotOffer, persona } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cennik",
  description:
    "Ceny startowe wprost: wizytówka od 1000 zł, strona z blogiem od 2500 zł, audyt 300 zł, opieka 150 zł/mies. Oferta pilotażowa dla pierwszych 2 klientów.",
  alternates: { canonical: "/cennik/" },
};

const faq = [
  {
    q: "Dlaczego ceny „od”?",
    a: "Bo zakres rządzi ceną: wizytówka z 3 podstronami to nie to samo co serwis z blogiem i kilkunastoma treściami. Po rozmowie dostajesz stałą wycenę na papierze — bez niespodzianek przy odbiorze.",
  },
  {
    q: "Co dokładnie jest w standardzie, a dokupuje się osobno?",
    a: "Wyszukiwarka (struktura, treść, szybkość) i teksty zachęcające do kontaktu są w cenie każdej budowy. Osobno liczone są tylko: funkcje poza standardem (np. rezerwacje), fotografowanie i pisanie dużej ilości treści od zera.",
  },
  {
    q: "Ile trwa zrobienie strony?",
    a: "Wizytówka: 2–3 tygodnie przy sprawnej komunikacji. Strona z blogiem: 3–5 tygodni. Termin ustalamy konkretną datą — nie „okresami”.",
  },
  {
    q: "Co jeśli chcę tylko audyt?",
    a: "Audyt 300 zł to samodzielna usługa: raport + 30-minutowa rozmowa. Nie musisz nic dalej zamawiać — poprawki możesz zrobić własnymi rękami.",
  },
];

export default function CennikPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Cennik", path: "/cennik/" }]} />
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
      <Section
        eyebrow="Cennik"
        titleAs="h1"
        title="Ceny wprost, bez ukrytych haczyków"
        lead="To startowe widełki, nie marketingowe „od 299 zł”. Po krótkiej rozmowie wyceniam stałą kwotą — na papierze."
       
      >
        <div className="grid gap-6 md:grid-cols-2">
          {prices.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article
                className={`h-full rounded-xl border-2 p-6 sm:p-8 ${
                  p.featured ? "border-accent shadow-sm" : "border-line"
                }`}
              >
                {p.featured && (
                  <p className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                    Najczęściej wybierane
                  </p>
                )}
                <h2 className="font-heading text-xl">{p.name}</h2>
                <p className="mt-2 font-heading text-4xl text-accent-dark">{p.price}</p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span aria-hidden="true" className="mt-0.5 font-bold text-accent-dark">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/kontakt/" variant={p.featured ? "primary" : "secondary"}>
                    {p.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Oferta pilotażowa — uczciwa wersja (bez fake case studies) */}
      <Section id="oferta-pilotazowa" eyebrow="Dla pierwszych klientów" title={pilotOffer.title}>
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-accent bg-paper p-6 sm:p-10">
          <p className="leading-relaxed text-ink-soft">{pilotOffer.text}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/kontakt/" variant="primary">
              Zgłoś się do pilotażu
            </Button>
            <Button href={persona.phoneHref} variant="secondary">
              {persona.phone}
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ cennika */}
      <Section eyebrow="FAQ — ceny" title="Pytania, które padają zawsze">
        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {faq.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer min-h-14 list-none items-center justify-between gap-4 py-4 text-left font-medium">
                <span>{f.q}</span>
                <span className="text-xl text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
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
            Widzisz swoją wycenę? Nie zgaduj.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Opisz krótko projekt — otrzymasz stałą cenę, termin i listę tego, co przesyłasz po stronie Twojej.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/kontakt/" variant="primary">
              Wyślij wiadomość
            </Button>
            <Button href={persona.phoneHref} variant="secondary">
              {persona.phone}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
