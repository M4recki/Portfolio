import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Nie ma tu takiej strony (404)",
  description:
    "Ta strona nie istnieje albo zmieniła adres. Wróć na stronę główną, zobacz usługi i cennik albo napisz — podpowiem, gdzie szukać.",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/uslugi/", label: "Usługi", text: "Co robię i w jakiej kolejności." },
  { href: "/cennik/", label: "Cennik", text: "Ceny startowe bez ukrytych kosztów." },
  { href: "/portfolio/", label: "Portfolio", text: "Sześć stron, w tym pięć demo." },
  { href: "/kontakt/", label: "Kontakt", text: "Telefon, e-mail, formularz." },
];

export default function NotFound() {
  return (
    <section className="bg-blueprint relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="hero-blob hero-blob--a" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="eyebrow text-accent-dark">Błąd 404</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] tracking-tight sm:text-5xl">
          Tej strony tu nie ma
        </h1>
        <p className="measure mt-4 text-lg leading-relaxed text-ink-soft">
          Adres mógł się zmienić albo w linku wkradła się literówka. Nic straconego — poniżej masz
          wszystko, czego szukają tu najczęściej klienci.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="card-industrial group flex h-full flex-col gap-2 p-5 transition-colors hover:border-accent/60"
            >
              <span className="font-heading text-lg text-ink group-hover:text-accent-light">
                {link.label} →
              </span>
              <span className="text-sm leading-relaxed text-ink-soft">{link.text}</span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/" variant="primary">
            Wróć na stronę główną
          </Button>
          <Button href="/kontakt/" variant="secondary">
            Napisz, czego szukasz
          </Button>
        </div>
      </div>
    </section>
  );
}
