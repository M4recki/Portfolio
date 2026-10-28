import Link from "next/link";
import type { ReactNode } from "react";
import { navItems, persona } from "@/lib/data";

/* ============================================================
 * Footer (U2) — kontakt (placeholder TODO z data.ts), nav, social.
 * Social: pusty URL w data.ts = ikona bez linku (honest placeholder).
 * ============================================================ */

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const svg = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {children}
    </svg>
  );
  const base =
    "inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-2.5 text-xs font-medium transition-colors";
  if (!href) {
    return (
      <span
        role="img"
        aria-label={`${label} — profil w przygotowaniu`}
        className={`${base} text-ink-faint`}
        title={`${label} — profil w przygotowaniu`}
      >
        {svg}
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} text-ink-soft hover:border-accent-dark hover:text-ink`}
    >
      {svg}
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#060912] text-ink-soft">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-heading text-lg text-ink">Marek Barański</p>
            <p className="mt-2 text-sm">
              Strony internetowe dla rzemieślników — z widocznością w Google i tekstami, które sprzedają.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <SocialIcon href={persona.linkedin} label="LinkedIn">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </SocialIcon>
              <SocialIcon href={persona.github} label="GitHub">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </SocialIcon>
            </div>
          </div>

          {/* Kontakt */}
          <nav aria-label="Kontakt stopka">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Kontakt</p>
            <ul className="mt-3 space-y-2 text-sm">
              {/* TODO(user: batch) — podmiana numeru w data.ts */}
              <li>
                <a className="hover:text-ink" href={persona.phoneHref}>
                  {persona.phone}
                </a>
              </li>
              {/* TODO(user: batch) — podmiana e-maila w data.ts */}
              <li>
                <a className="hover:text-ink" href={persona.emailHref}>
                  {persona.email}
                </a>
              </li>
              <li>Praca zdalna — cała Polska</li>
            </ul>
          </nav>

          {/* Na skróty */}
          <nav aria-label="Strony stopka">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Na skróty</p>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs text-ink-faint sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Marek Barański. Wszystkie prawa zastrzeżone.</p>
          <p className="mt-2 sm:mt-0">
            <Link href="/polityka-prywatnosci/" className="hover:text-ink">
              Polityka prywatności
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
