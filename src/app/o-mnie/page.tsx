import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import { personSchema, howToSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { persona, processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "O mnie",
  description:
    "Kim jest Marek Barański: buduję strony dla rzemieślników z wyszukiwaniem w standardzie. Praca 100% zdalna, osobisty kontakt, bez zewnętrznej obsługi.",
  alternates: { canonical: "/o-mnie/" },
};

const values = [
  {
    title: "Zero gotowych szablonów",
    text: "Każdą stronę buduję od zera — kod, struktura i teksty są projektowane pod Twoją branżę, nie wycinane z gotowego wzoru.",
  },
  {
    title: "Rozmowa z człowiekiem",
    text: "Pracujesz ze mną, nie z „zespołem projektowym”. Poprzedni projekt nie trafia do kolegi — ja prowadzę Twój projekt.",
  },
  {
    title: "Uczciwie o tym, czego nie wiem",
    text: "Nie udaję weterana budowlanki. Wiem za to, jak działają Google i AI, jak klienci szukają usług i jak strona zamienia wizyty w telefony.",
  },
  {
    title: "Praca 100% zdalna",
    text: "Widok ekranu, e-mail, telefon — wystarczają do zrobienia solidnej strony. Nie płacisz za moje biuro w Twoim mieście.",
  },
];

const faq = [
  {
    q: "Skąd jesteś, jeśli pracujesz zdalnie?",
    a: "Współpracę prowadzę zdalnie z dowolnym regionem Polski — ustalenia zrobimy telefonicznie lub wideorozmową, a postępy projektu dostajesz na bieżąco mailem.",
  },
  {
    q: "Czy zdalna budowa strony nie jest ryzykowna?",
    a: "Nie. Strona jest zbudowana krok po kroku: najpierw odpowiadasz na kilka pytań, potem widzisz strukturę i teksty, na końcu gotowy serwis w wersji testowej. Zmiany na każdym etapie.",
  },
  {
    q: "Co jeśli plan się rozjedzie w trakcie?",
    a: "Wiesz o tym zanim strona powstanie — ustalenia, struktura i teksty są zatwierdzane etapowo, więc nie ma niespodzianek przy odbiorze.",
  },
];

export default function OMniePage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "O mnie", path: "/o-mnie/" }]} />
      <JsonLd data={personSchema} />
      <JsonLd data={howToSchema(processSteps)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${SITE_URL}/o-mnie/`,
          inLanguage: "pl-PL",
          mainEntity: { "@id": personSchema["@id"] },
        }}
      />
      {/* Hero — pytanie, które klient zadaje sam sobie */}
      <Section
        eyebrow="Kim jestem"
        title="Marek Barański — buduję strony dla rzemieślników"
        lead={persona.tagline}
        titleAs="h1"
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="measure text-ink-soft leading-relaxed">
            <p>
              Buduję strony internetowe dla rzemieślników — elektryków, hydraulików, stolarzy, blacharzy — którym
              konkurencja odbiera klientów internetem, a sami liczą na „polecenia i Facebook”.
            </p>
            <p>
              Nie jestem z branży budowlanej i tego nie ukrywam. Znam drugą stronę: wiem, jak klienci szukają usług
              w internecie, jak Google i narzędzia AI (np. ChatGPT) wybierają strony,
              które pokazują w odpowiedziach — i jak zamienić to w realne telefony.
            </p>
            <p>
              Idzie to w parze z ręczną pracą: każdy projekt robię sam, a teksty piszę tak, by odpowiadały na
              pytania klienta, zanim je zada. Efekt: szybka, czytelna strona, która pracuje 24/7, zamiast leżeć
              martwa w sieci.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/photo-me.webp"
              alt="Marek Barański — web developer, buduje strony dla rzemieślników"
              width={384}
              height={384}
              loading="lazy"
              decoding="async"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-line/50 object-cover shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/uslugi/" variant="primary">
            Zobacz, co buduję
          </Button>
          <Button href={persona.phoneHref} variant="secondary">
            {persona.phone}
          </Button>
        </div>
      </Section>

      {/* Zasady pracy */}
      <Section eyebrow="Zasady pracy" title="Na jakich zasadach współpracuję">
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <Reveal key={v.title}>
              <div className="h-full">
                <div className="card-industrial h-full p-6">
                  <h3 className="font-heading text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Proces pracy */}
      <Section eyebrow="Jak pracuję" title="Od rozmowy do publikacji" dark>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <div className="h-full">
                <div className="card-industrial card-industrial--dark h-full p-6">
                  <p className="font-heading text-3xl text-accent-light">{i + 1}</p>
                  <h3 className="mt-3 font-heading text-lg">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ O stronie */}
      <Section eyebrow="FAQ — współpraca" title="Najczęstsze pytania o współpracę">
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
            Zadzwoń — rozmowa nic nie kosztuje
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Powiedz, czym się zajmujesz i co nie działa teraz. W 30 minutach wiesz więcej niż po tygodniu
            dokumentów.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={persona.phoneHref} variant="primary">
              {persona.phone}
            </Button>
            <Button href="/kontakt/" variant="secondary">
              Wyślij wiadomość
            </Button>
          </div>
        </div>
      </Section>

      {/* Social — profile (R8: stopka + O mnie) */}
      <Section eyebrow="Gdzie mnie znaleźć" title="Profile w sieci">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {persona.linkedin && (
            <Link
              href={persona.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink-soft hover:border-accent-dark hover:text-ink transition-colors"
            >
              <span aria-hidden="true">in</span> LinkedIn
            </Link>
          )}
          {persona.github && (
            <Link
              href={persona.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink-soft hover:border-accent-dark hover:text-ink transition-colors"
            >
              <span aria-hidden="true">⌘</span> GitHub
            </Link>
          )}
        </div>
      </Section>
    </>
  );
}
