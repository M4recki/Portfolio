"use client";

import { useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
};

/**
 * Suwak „przed / po” — czysty CSS + natywny <input type="range">.
 * Bez bibliotek, dostępny z klawiatury (strzałki), zero kosztu wydajności.
 */
export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Przed",
  afterLabel = "Po",
}: Props) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative select-none overflow-hidden rounded-2xl border border-line bg-paper">
      <div className="relative aspect-[16/10]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={afterSrc} alt={afterAlt} width={1200} height={750} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={beforeSrc} alt={beforeAlt} width={1200} height={750} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        </div>

        {/* linia podziału + uchwyt */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-accent-light/90" style={{ left: `${value}%` }}>
          <span className="absolute top-1/2 left-1/2 flex h-[36px] w-[36px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent-light/70 bg-ground/90 text-accent-light backdrop-blur sm:h-[44px] sm:w-[44px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <span className="pointer-events-none absolute left-2 top-2 rounded-full border border-line bg-ground/85 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-soft backdrop-blur sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[0.65rem] sm:tracking-[0.16em]">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-2 top-2 rounded-full border border-accent/40 bg-ground/85 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-accent-light backdrop-blur sm:right-3 sm:top-3 sm:px-3 sm:py-1 sm:text-[0.65rem] sm:tracking-[0.16em]">
          {afterLabel}
        </span>

        <label className="absolute inset-0 cursor-col-resize">
          <span className="sr-only">Porównanie: przeciągnij, aby zobaczyć przed i po</span>
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="h-full w-full cursor-col-resize opacity-0"
            aria-label="Suwak porównania przed i po"
          />
        </label>
      </div>
    </div>
  );
}
