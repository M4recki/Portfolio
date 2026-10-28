import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import { persona } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Zadzwoń, napisz maila albo wypełnij formularz — odpowiadam osobiście, zwykle w ciągu 24 godzin.",
  alternates: { canonical: "/kontakt/" },
};

const steps = [
  {
    title: "1. krótka rozmowa",
    text: "30 minut na telefon: co robisz, gdzie działasz, jaka konkurencja ma stronę. Odpowiadam też na pytania o proces i ceny.",
  },
  {
    title: "2. lista materiałów i oferta",
    text: "Przechodzimy przez listę materiałów (zdjęcia, usługi, opinie). Potem dostajesz konkretną ofertę na maila — bez gwiazdek drobnym drukiem.",
  },
  {
    title: "3. budowa",
    text: "Struktura, teksty i przygotowanie pod wyszukiwarki. Widzisz postępy na wersji testowej i komentujesz na bieżąco.",
  },
  {
    title: "4. publikacja i opieka",
    text: "Podpięcie domeny, zgłoszenie do Google, statystyki. Sprawdzam wyniki po 2 tygodniach i poprawiam, co trzeba.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Kontakt", path: "/kontakt/" }]} />
      <Section
        eyebrow="Kontakt"
        titleAs="h1"
        title="Porozmawiajmy o Twojej stronie"
        lead="Zadzwoń, napisz albo wypełnij formularz — odpowiadam osobiście, zwykle w ciągu 24 godzin."
      >
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl text-ink">
              Formularz — najszybsza droga na start
            </h2>
            <p className="measure mt-2 text-ink-soft">
              Napisz jedno–dwa zdania o tym, co robisz i czego potrzebujesz. Wystarczy na pierwszą
              rozmowę.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h2 className="font-heading text-lg text-ink">Bezpośrednio</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink-faint">
                    Telefon
                  </span>
                  <a href={persona.phoneHref} className="font-semibold text-ink underline decoration-accent underline-offset-4">
                    {persona.phone}
                  </a>{/* TODO(user: batch danych): podmień numer w src/lib/data.ts */}
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink-faint">
                    E-mail
                  </span>
                  <a href={persona.emailHref} className="font-semibold text-ink underline decoration-accent underline-offset-4">
                    {persona.email}
                  </a>{/* TODO(user: batch danych): podmień e-mail w src/lib/data.ts */}
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink-faint">
                    Praca
                  </span>
                  <span className="text-ink-soft">100% zdalnie — cały obszar Polski</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6">
              <h2 className="font-heading text-lg text-ink">Co dalej po Twojej wiadomości</h2>
              <ol className="mt-3 flex flex-col gap-3 text-sm text-ink-soft">
                {steps.map((s) => (
                  <li key={s.title}>
                    <span className="font-semibold text-ink">{s.title}</span> — {s.text}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border-2 border-accent bg-paper p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                Nie wiesz jeszcze, czego potrzebujesz?
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Zacznij od audytu — sprawdzę, co przeszkadza Twojej obecnej stronie być widoczną w
                Google i AI.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="/cennik/">Cena audytu — 300 zł</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section dark title="Lepiej nie zaczynać — ale gdyby konkurencja zaczęła">
        <p className="measure text-ink-soft">
          Strona działa 24/7: o 22:58 pokazuje ceny, opinie i telefon, kiedy Ty domykasz zlecenie.
          Ten, kto ma stronę dziś, zbierze zapytania, którego Ty nie dasz rady odebrać.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/cennik/">Poznaj ceny</Button>
          <Button href={persona.phoneHref} variant="secondary">
            Zadzwoń teraz
          </Button>
        </div>
      </Section>
    </>
  );
}
