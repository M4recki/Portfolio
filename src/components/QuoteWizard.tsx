"use client";

import { useState } from "react";
import { persona } from "@/lib/data";

/* ============================================================
 * QuoteWizard — 3-krokowa wycena bez zbierania danych w próżnię.
 * Krok 3 nie prosi o e-mail (nie ma gdzie go wysłać): od razu
 * składa gotową wiadomość, którą klient wysyła ze swojej skrzynki.
 * ============================================================ */

type NeedId = "wizytowka" | "blog" | "audyt" | "nie-wiem";
type AssetsId = "wszystko" | "czesciowo" | "nic";

const NEEDS: { id: NeedId; label: string; desc: string; price: string }[] = [
  {
    id: "wizytowka",
    label: "Wizytówka",
    desc: "Jedna strona: oferta, kontakt, mapa dojazdu.",
    price: "od 1 000 zł",
  },
  {
    id: "blog",
    label: "Strona z blogiem",
    desc: "Kilka podstron i wpisy, które odpowiadają na pytania klientów.",
    price: "od 2 500 zł",
  },
  {
    id: "audyt",
    label: "Audyt widoczności",
    desc: "Masz stronę, ale nie przynosi telefonów. Sprawdzam, co poprawić.",
    price: "300 zł",
  },
  {
    id: "nie-wiem",
    label: "Jeszcze nie wiem",
    desc: "Opowiesz mi o swojej robocie, a ja podpowiem, co ma sens.",
    price: "od 1 000 zł",
  },
];

const ASSETS: { id: AssetsId; label: string; desc: string }[] = [
  {
    id: "wszystko",
    label: "Mam zdjęcia i teksty",
    desc: "Wiem, co chcę pokazać i jak to opisać.",
  },
  {
    id: "czesciowo",
    label: "Mam część",
    desc: "Zdjęcia są, tekstów brak — albo odwrotnie.",
  },
  {
    id: "nic",
    label: "Nie mam nic",
    desc: "Potrzebuję pomocy także przy zdjęciach i tekstach.",
  },
];

export default function QuoteWizard() {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [need, setNeed] = useState<NeedId | null>(null);
  const [assets, setAssets] = useState<AssetsId | null>(null);

  const needData = NEEDS.find((n) => n.id === need);
  const assetsData = ASSETS.find((a) => a.id === assets);

  function reset() {
    setStep(0);
    setNeed(null);
    setAssets(null);
  }

  const mailtoHref =
    needData && assetsData
      ? `mailto:${persona.email}?subject=${encodeURIComponent(
          `Zapytanie o wycenę — ${needData.label}`
        )}&body=${encodeURIComponent(
          [
            "Dzień dobry,",
            "",
            `potrzebuję: ${needData.label.toLowerCase()}.`,
            needData.id === "audyt"
              ? "Audyt dotyczy strony, którą już mam."
              : `Zdjęcia i teksty: ${assetsData.label.toLowerCase()}.`,
            "",
            "Proszę o wycenę i termin. Pozdrawiam,",
          ].join("\n")
        )}`
      : persona.emailHref;

  const optionClass =
    "group flex h-full w-full flex-col items-start gap-1 rounded-xl border border-line bg-paper p-5 text-left transition-colors hover:border-accent/60 hover:bg-paper/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <div className="rounded-2xl border border-line bg-paper/60 p-6 sm:p-8">
      {/* Postęp */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-ink">
          Krok {step + 1} z 3
        </p>
        <div aria-hidden="true" className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1.5 w-10 rounded-full ${i <= step ? "bg-accent" : "bg-line"}`}
            />
          ))}
        </div>
      </div>

      <div aria-live="polite">
        {step === 0 && (
          <div className="mt-5">
            <h3 className="font-heading text-xl text-ink">Czego potrzebujesz?</h3>
            <p className="mt-1 text-sm text-ink-soft">Wybierz jedną odpowiedź — przejdę dalej.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {NEEDS.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => {
                    setNeed(n.id);
                    // Audyt dotyczy istniejącej strony — pytanie o materiały nie ma sensu
                    if (n.id === "audyt") {
                      setAssets("wszystko");
                      setStep(2);
                    } else {
                      setStep(1);
                    }
                  }}
                  className={optionClass}
                >
                  <span className="font-semibold text-ink">{n.label}</span>
                  <span className="text-sm leading-relaxed text-ink-soft">{n.desc}</span>
                  <span className="mt-1 text-sm font-semibold text-accent-dark">{n.price}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="mt-5">
            <h3 className="font-heading text-xl text-ink">Masz już zdjęcia i teksty?</h3>
            <p className="mt-1 text-sm text-ink-soft">
              To zmienia zakres pracy, ale nie zniechęca — po prostu wiem, od czego zacząć.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {ASSETS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => {
                    setAssets(a.id);
                    setStep(2);
                  }}
                  className={optionClass}
                >
                  <span className="font-semibold text-ink">{a.label}</span>
                  <span className="text-sm leading-relaxed text-ink-soft">{a.desc}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
            >
              ← Wróć
            </button>
          </div>
        )}

        {step === 2 && needData && assetsData && (
          <div className="mt-5">
            <h3 className="font-heading text-xl text-ink">To wychodzi mniej więcej tak</h3>
            <dl className="mt-4 divide-y divide-line rounded-xl border border-line bg-paper">
              <div className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-3">
                <dt className="text-sm text-ink-soft">Usługa</dt>
                <dd className="font-semibold text-ink">{needData.label}</dd>
              </div>
              {needData.id !== "audyt" && (
                <div className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-3">
                  <dt className="text-sm text-ink-soft">Zdjęcia i teksty</dt>
                  <dd className="font-semibold text-ink">{assetsData.label}</dd>
                </div>
              )}
              <div className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-3">
                <dt className="text-sm text-ink-soft">Cena startowa</dt>
                <dd className="font-heading text-xl text-accent-dark">{needData.price}</dd>
              </div>
            </dl>

            {needData.id === "audyt" && (
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Audyt obejmuje stronę, którą już masz — zdjęć ani tekstów nie trzeba przygotowywać.
                Dostajesz raport i listę poprawek, które wdrażam na życzenie.
              </p>
            )}
            {needData.id !== "audyt" && assetsData.id !== "wszystko" && (
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Skoro nie masz jeszcze wszystkich materiałów — w wycenie uwzględnię pomoc przy
                zdjęciach i tekstach. Kwotę podaję z góry, bez niespodzianek.
              </p>
            )}
            {needData.id === "nie-wiem" && (
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Nie musisz wiedzieć dokładnie. Napisz, co robisz i gdzie działasz — resztę ustalimy
                w rozmowie.
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={mailtoHref}
                className="inline-flex min-h-[44px] items-center rounded-lg bg-accent px-5 text-sm font-semibold text-[#08131c] transition-colors hover:bg-accent-light"
              >
                Wyślij zapytanie z tą wyceną
              </a>
              <a
                href="/kontakt/"
                className="inline-flex min-h-[44px] items-center rounded-lg border border-line px-5 text-sm font-semibold text-ink transition-colors hover:border-accent/60"
              >
                Wolę formularz
              </a>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-faint">
              Przycisk otworzy Twoją skrzynkę z gotową wiadomością. Nic nie zapisuję po drodze.
            </p>

            <button
              type="button"
              onClick={reset}
              className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
            >
              ← Zacznij od nowa
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
