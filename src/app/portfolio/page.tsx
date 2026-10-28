import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ProjectGrid from "@/components/ProjectGrid";
import { persona, pilotOffer } from "@/lib/data";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Projekty i wersje demonstracyjne stron dla rzemieślników — warsztat samochodowy, tartak, wykończenia wnętrz. Zobacz strukturę, teksty i detale.",
  alternates: { canonical: "/portfolio/" },
};

/** Lista projektów dla wyszukiwarek — pomaga zrozumieć, co jest na stronie. */
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `${SITE_URL}/portfolio/`,
  name: "Portfolio — strony internetowe dla rzemieślników",
  description:
    "Projekty i wersje demonstracyjne stron dla rzemieślników: warsztat samochodowy, tartak, wykończenia wnętrz i serwis opon.",
  inLanguage: "pl-PL",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: project.description,
      ...(project.link ? { url: project.link } : {}),
    })),
  },
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Portfolio", path: "/portfolio/" }]} />
      <JsonLd data={collectionSchema} />

      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="eyebrow text-accent-dark">Portfolio</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Sprawdź strony, nie obietnice
          </h1>
          <p className="measure mt-5 text-lg leading-relaxed text-ink-soft">
            Moje projekty i wersje demonstracyjne — każda strona działa w Twojej przeglądarce, od pierwszej sekcji po formularz.
          </p>
        </div>
      </section>

      {/* Siatka projektów */}
      <Section
        eyebrow="Projekty"
        title="Cztery strony, cztery branże — w tym dwie motoryzacyjne"
        lead="Każda zbudowana od zera: struktura pod wyszukiwanie, teksty pod zapytania klientów, kontakt widoczny na wyciągnięcie ręki. Kliknij miniaturę — zobaczysz szczegóły bez opuszczania strony."
      >
        <ProjectGrid projects={projects} />
      </Section>

      {/* Pilotaż */}
      <Section eyebrow="Case studies w budowie" title="Pierwsi klienci — pilotaż">
        <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
          <p className="measure text-ink-soft">
            W tej sekcji wkrótce pojawią się wyniki pierwszych klientów z oferty pilotażowej: co
            zbudowałem, co poprawiło się w widoczności w Google i AI, ile kontaktów strona
            wygenerowała. Publikuję je wyłącznie na podstawie realnych danych — dlatego na starcie
            jest ich tu zero.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/cennik/#oferta-pilotazowa" variant="primary">
              Dołącz do pilotażu
            </Button>
            <Button href={persona.phoneHref} variant="secondary">
              {persona.phone}
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="!py-0">
        <div className="py-12 text-center sm:py-16">
          <h2 className="text-3xl tracking-tight sm:text-4xl">Chcesz być pierwszym realnym studium przypadku?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">{pilotOffer.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/kontakt/" variant="primary">
              Wyślij wiadomość
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
