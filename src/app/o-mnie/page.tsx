import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import { personSchema, howToSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
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

      {/* Kontakt — krótki formularz */}
      <Section
        id="napisz"
        eyebrow="Napisz do mnie"
        title="Opowiedz o swojej robocie — resztę ustalimy w rozmowie"
        lead="Dwa–trzy zdania wystarczą na start. Odpowiadam osobiście, zwykle w ciągu 24 godzin."
      >
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-heading text-lg text-ink">Wolisz porozmawiać?</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Zadzwoń — w 30 minut powiem Ci, czy strona ma sens i od czego zacząć. Rozmowa nic
                nie kosztuje.
              </p>
              <div className="mt-4">
                <Button href={persona.phoneHref}>{persona.phone}</Button>
              </div>
              <p className="mt-3 text-sm">
                <a
                  href={persona.emailHref}
                  className="text-ink-soft underline decoration-accent underline-offset-4 hover:text-ink"
                >
                  {persona.email}
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-heading text-lg text-ink">Co dalej po wiadomości</h3>
              <ol className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-ink-soft">
                <li>
                  <span className="font-semibold text-ink">1. Odpowiedź w 24 h</span> — konkretnie:
                  co ma sens, a co nie.
                </li>
                <li>
                  <span className="font-semibold text-ink">2. Krótka rozmowa</span> — 30 minut o
                  Twojej robocie i klientach.
                </li>
                <li>
                  <span className="font-semibold text-ink">3. Oferta z ceną startową</span> — bez
                  gwiazdek i ukrytych kosztów.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
