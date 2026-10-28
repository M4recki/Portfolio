import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { persona } from "@/lib/data";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Jakie dane zbiera ta strona, w jakim celu, komu je przekazuję, jak długo je przechowuję i jakie masz prawa.",
  alternates: { canonical: "/polityka-prywatnosci/" },
};

const LAST_UPDATED = "28 października 2026";

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[{ name: "Polityka prywatności", path: "/polityka-prywatnosci/" }]}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="eyebrow text-accent-dark">Dokumenty</p>
          <h1 className="mt-4 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Polityka prywatności
          </h1>
          <p className="mt-4 text-sm text-ink-faint">Ostatnia aktualizacja: {LAST_UPDATED}</p>

          <div className="mt-10 flex flex-col gap-8 text-[0.95rem] leading-relaxed text-ink-soft">
            <div>
              <h2 className="font-heading text-xl text-ink">1. Kto jest administratorem danych</h2>
              <p className="mt-2">
                Administratorem danych osobowych jest Marek Barański — strony internetowe dla
                rzemieślników. Kontakt w sprawach danych osobowych:
              </p>
              <ul className="mt-2 flex flex-col gap-1">
                <li>
                  e-mail:{" "}
                  <a
                    className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                    href={persona.emailHref}
                  >
                    {persona.email}
                  </a>
                </li>
                <li>
                  telefon:{" "}
                  <a
                    className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                    href={persona.phoneHref}
                  >
                    {persona.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink">2. Jakie dane zbieram</h2>
              <p className="mt-2">
                Tylko te, które sam mi podasz przez formularz kontaktowy, e-mail albo telefon:
              </p>
              <ul className="mt-2 flex list-disc flex-col gap-1 pl-5">
                <li>imię lub nazwa firmy,</li>
                <li>adres e-mail,</li>
                <li>numer telefonu — jeśli zdecydujesz się go podać,</li>
                <li>treść wiadomości, czyli informacje o Twojej firmie i projekcie.</li>
              </ul>
              <p className="mt-2">
                Dodatkowo serwer hostingu zapisuje standardowe dane techniczne, takie jak adres IP,
                data i godzina żądania oraz typ przeglądarki. Służą one wyłącznie do utrzymania
                strony i bezpieczeństwa — nie łączę ich z Twoimi danymi kontaktowymi.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink">3. Po co i na jakiej podstawie</h2>
              <p className="mt-2">
                Dane wykorzystuję wyłącznie po to, żeby odpowiedzieć na Twoje zapytanie, przygotować
                wycenę i ustalić szczegóły ewentualnej współpracy. Podstawą prawną jest art. 6 ust. 1
                lit. b RODO — działania niezbędne do zawarcia i wykonania umowy — oraz art. 6 ust. 1
                lit. f RODO, czyli mój uzasadniony interes polegający na obsłudze korespondencji.
              </p>
              <p className="mt-2">
                Nie wysyłam newsletterów, nie profiluję Cię i nie podejmuję wobec Ciebie
                zautomatyzowanych decyzji. Podanie danych jest dobrowolne, ale bez adresu e-mail
                nie będę mógł odpowiedzieć.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink">4. Komu przekazuję dane</h2>
              <p className="mt-2">
                Nie sprzedaję danych i nie udostępniam ich nikomu w celach marketingowych. Korzystam
                z dostawców, którzy przetwarzają dane na moje polecenie:
              </p>
              <ul className="mt-2 flex list-disc flex-col gap-2 pl-5">
                <li>
                  <strong className="text-ink">Formspree, Inc.</strong> — usługa obsługująca
                  formularz kontaktowy. Zgłoszenie trafia na serwery Formspree i stamtąd na moją
                  skrzynkę. Firma ma siedzibę w USA, więc dane mogą być przetwarzane poza EOG;
                  przekazanie odbywa się na podstawie standardowych klauzul umownych zatwierdzonych
                  przez Komisję Europejską. Szczegóły:{" "}
                  <a
                    className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                    href="https://formspree.io/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    polityka prywatności Formspree
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-ink">Dostawca hostingu</strong> — utrzymuje stronę i
                  zapisuje techniczne logi serwera.
                </li>
                <li>
                  <strong className="text-ink">Google (Gmail)</strong> — dostawca mojej poczty
                  elektronicznej, w której przechowuję korespondencję z Tobą.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink">5. Jak długo przechowuję dane</h2>
              <p className="mt-2">
                Korespondencję przechowuję przez czas prowadzenia rozmowy, a potem maksymalnie 12
                miesięcy od ostatniego kontaktu — na wypadek, gdybyś wrócił z pytaniem. Jeśli
                dojdzie do współpracy, dane związane z umową przechowuję przez okres wymagany
                przepisami podatkowymi i księgowymi, czyli 5 lat. Po tym czasie dane usuwam.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink">6. Twoje prawa</h2>
              <p className="mt-2">W każdej chwili możesz:</p>
              <ul className="mt-2 flex list-disc flex-col gap-1 pl-5">
                <li>sprawdzić, jakie dane o Tobie przechowuję, i dostać ich kopię,</li>
                <li>poprosić o sprostowanie błędnych danych,</li>
                <li>poprosić o usunięcie danych,</li>
                <li>ograniczyć ich przetwarzanie,</li>
                <li>wnieść sprzeciw wobec przetwarzania,</li>
                <li>otrzymać dane w formacie, który można przenieść do innej usługi.</li>
              </ul>
              <p className="mt-2">
                Wystarczy napisać na{" "}
                <a
                  className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                  href={persona.emailHref}
                >
                  {persona.email}
                </a>
                . Odpowiem bez zbędnej zwłoki, najpóźniej w ciągu miesiąca. Masz też prawo złożyć
                skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa,{" "}
                <a
                  className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                  href="https://uodo.gov.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uodo.gov.pl
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink">7. Pliki cookies i statystyki</h2>
              <p className="mt-2">
                Ta strona nie używa plików cookies do śledzenia, reklamy ani statystyk. Nie ma tu
                Google Analytics, pikseli reklamowych ani narzędzi profilujących. Nie zapisuję
                niczego w Twojej przeglądarce poza tym, co jest technicznie konieczne do jej
                działania.
              </p>
              <p className="mt-2">
                Jeśli w przyszłości dodam narzędzia analityczne, zaktualizuję ten dokument i — tam
                gdzie prawo tego wymaga — poproszę o zgodę przed ich uruchomieniem.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink">8. Bezpieczeństwo</h2>
              <p className="mt-2">
                Strona działa przez szyfrowane połączenie HTTPS. Dostęp do skrzynki i panelu
                formularza zabezpieczam silnym hasłem i uwierzytelnianiem dwuskładnikowym. Formularz
                ma zabezpieczenie przed automatycznymi zgłoszeniami.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink">9. Zmiany polityki</h2>
              <p className="mt-2">
                Jeśli zmienię zakres przetwarzanych danych albo dodam nowe narzędzie, zaktualizuję
                ten dokument i zmienię datę na górze strony. Historia zmian nie jest archiwizowana —
                obowiązuje wersja aktualna w dniu, w którym czytasz tę stronę.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink">10. Kontakt</h2>
              <p className="mt-2">
                W sprawach związanych z danymi osobowymi napisz na{" "}
                <a
                  className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                  href={persona.emailHref}
                >
                  {persona.email}
                </a>{" "}
                albo zadzwoń: {persona.phone}. Możesz też skorzystać ze{" "}
                <Link
                  className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
                  href="/kontakt/"
                >
                  strony kontaktowej
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
