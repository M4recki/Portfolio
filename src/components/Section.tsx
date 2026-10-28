import type { ReactNode } from "react";

/* ============================================================
 * Section (U2) — kontener sekcji: max-w + padding, opcjonalny
 * nagłówek (eyebrow + tytuł + lead). Tło ciemne = inverse.
 * ============================================================ */

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  dark?: boolean;
  className?: string;
  /** Poziom nagłówka sekcji — "h1" tylko dla pierwszej sekcji strony bez własnego hero. */
  titleAs?: "h1" | "h2";
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  lead,
  dark = false,
  className = "",
  titleAs = "h2",
  children,
}: SectionProps) {
  const Heading = titleAs;
  return (
    <section
      id={id}
      className={`scroll-mt-[120px] py-12 sm:scroll-mt-[140px] sm:py-16 ${dark ? "dark-section border-y border-line bg-[#060912] text-ink" : ""}`}
    >
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>
        {(eyebrow || title || lead) && (
          <header className="mb-8 sm:mb-12">
            {eyebrow && (
              <p className={`eyebrow mb-2 ${dark ? "text-accent-light" : "text-accent-dark"}`}>{eyebrow}</p>
            )}
            {title && (
              <Heading className={`text-3xl sm:text-4xl font-bold ${dark ? "text-ink" : "text-ink"}`}>
                {title}
              </Heading>
            )}
            {lead && (
              <p className={`mt-3 text-lg measure ${dark ? "text-ink-soft" : "text-ink-soft"}`}>
                {lead}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
