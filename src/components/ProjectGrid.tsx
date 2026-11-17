"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";

const kindStyles: Record<Project["kind"], string> = {
  "Własny projekt": "border-accent/50 bg-accent/10 text-accent-light",
  Demo: "border-line bg-ground text-ink-soft",
  "Case study klienta": "border-transparent bg-accent text-[#08131c]",
};

function isExternal(link?: string) {
  return Boolean(link && /^https?:\/\//.test(link));
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = (project: Project) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setActive(project);
  };

  const close = () => {
    setActive(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!nodes?.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="card-industrial group flex h-full flex-col overflow-hidden touch-manipulation">
            {p.image ? (
              <button
                type="button"
                onClick={() => open(p)}
                className="relative block w-full overflow-hidden border-b border-line text-left"
                aria-label={`Szczegóły projektu: ${p.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.imageAlt ?? p.title}
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition duration-500 motion-safe:group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ground/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full border border-line bg-ground/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur">
                  Szczegóły
                </span>
              </button>
            ) : null}

            <div className="flex flex-1 flex-col gap-3 p-6">
              <span
                className={`w-fit rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] ${kindStyles[p.kind]}`}
              >
                {p.kind}
              </span>
              <h2 className="font-heading text-lg leading-snug text-ink">{p.title}</h2>
              {p.trade ? (
                <span className="inline-block mt-2 rounded-full bg-paper border border-line/60 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink-faint">
                  {p.trade}
                </span>
              ) : null}
              <p className="text-sm leading-relaxed text-ink-soft">{p.description}</p>

              {p.note ? (
                <p className="border-l-2 border-accent/30 pl-3 text-xs italic text-ink-faint">{p.note}</p>
              ) : null}

              <div className="mt-1 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line/70 bg-ground px-2.5 py-0.5 text-[0.7rem] text-ink-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => open(p)}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-accent-light underline decoration-accent/50 underline-offset-4 hover:text-ink"
                >
                  Szczegóły →
                </button>
                {p.link ? (
                  <a
                    href={p.link}
                    {...(isExternal(p.link) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex min-h-11 items-center text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-ink"
                  >
                    Otwórz stronę ↗
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ground/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={close}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-line bg-paper shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-line p-5">
              <div>
                <span
                  className={`inline-block rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] ${kindStyles[active.kind]}`}
                >
                  {active.kind}
                </span>
                <h2 id="project-modal-title" className="mt-2 font-heading text-xl leading-snug text-ink">
                  {active.title}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Zamknij szczegóły projektu"
                className="inline-flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-line text-ink-soft hover:border-accent hover:text-ink"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {active.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={active.image}
                alt={active.imageAlt ?? active.title}
                width={1200}
                height={750}
                className="aspect-[16/10] w-full border-b border-line object-cover"
              />
            ) : null}

            <div className="flex flex-col gap-5 p-5 sm:p-6">
              <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{active.description}</p>

              {active.highlights?.length ? (
                <ul className="flex flex-col gap-2.5">
                  {active.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3.5 text-[0.9375rem] leading-[1.65] text-ink-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="flex flex-wrap gap-1.5">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line/70 bg-ground px-2.5 py-0.5 text-[0.7rem] text-ink-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {active.note ? (
                <p className="rounded-lg border border-line bg-ground/60 p-3 text-xs italic text-ink-faint">
                  {active.note}
                </p>
              ) : null}

              <div className="flex flex-wrap gap-3">
                {active.link ? (
                  <a
                    href={active.link}
                    {...(isExternal(active.link) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-2.5 font-semibold text-[#08131c] motion-safe:transition-transform motion-safe:hover:-translate-y-0.5"
                  >
                    Otwórz stronę ↗
                  </a>
                ) : null}
                <a
                  href="/kontakt/"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-line px-5 py-2.5 font-semibold text-ink hover:border-accent"
                >
                  Chcę podobną stronę
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
