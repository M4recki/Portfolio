"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, persona } from "@/lib/data";

/* ============================================================
 * Header (U2) — sticky, 7 pozycji nav, mobile hamburger (a11y).
 * ============================================================ */

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Zamykaj menu przy zmianie trasy
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Shrink-on-scroll: pasek robi się niższy i dostaje cień po przewinięciu
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-ground/90 backdrop-blur transition-all duration-300 ${
        scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.45)]" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex items-center gap-8 transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 font-heading text-xl text-ink whitespace-nowrap"
          >
            <span className="inline">Marek Barański</span>
          </Link>

          {/* Nav desktop — obok logo, nie wyśrodkowany */}
          <nav aria-label="Nawigacja główna" className="hidden shrink-0 xl:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`inline-flex min-h-[44px] items-center whitespace-nowrap rounded-lg px-2.5 text-sm font-medium transition-colors xl:px-3 xl:text-[15px] ${
                      isActive(item.href)
                        ? "text-accent-dark"
                        : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + hamburger (mobile) */}
          <div className="ml-auto flex shrink-0 items-center gap-1">
            <a
              href={persona.phoneHref}
              className="hidden md:inline-flex min-h-[44px] min-w-fit items-center rounded-xl bg-accent py-2 px-3 text-sm font-semibold text-[#08131c] motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 whitespace-nowrap xl:px-4"
            >
              {persona.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink xl:hidden"
            >
              {/* hamburger / close */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobilne */}
      {open && (
        <nav aria-label="Nawigacja mobilna" id="mobile-menu" className="border-t border-line bg-ground xl:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-[44px] items-center border-b border-line/60 px-2 font-medium ${
                    isActive(item.href) ? "text-accent-dark" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <a
                href={persona.phoneHref}
                className="flex min-h-[44px] min-w-fit items-center justify-center rounded-xl bg-accent px-4 font-semibold text-[#08131c] whitespace-nowrap"
              >
                Zadzwoń: {persona.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
