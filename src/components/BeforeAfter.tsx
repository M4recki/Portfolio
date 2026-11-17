"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
};

/**
 * Suwak „przed / po” — pointer events (mysz + dotyk + rysik).
 * Przeciąganie działa w dowolnym miejscu obrazu i poza jego obszarem
 * (nasłuch na window podczas przeciągania). Bez pointer capture,
 * bez bibliotek. Dostępność: ukryty <input type="range"> obsługuje
 * klawiaturę (strzałki) i czytniki ekranu.
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
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  }, []);

  // Nasłuchy podpinane raz przy montowaniu — łapiemy pointerup nawet przy
  // błyskawicznym kliknięciu (bez wyścigu z renderem Reacta).
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (draggingRef.current) setFromClientX(e.clientX);
    };
    const stop = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };
  }, [setFromClientX]);

  return (
    <div className="relative select-none overflow-hidden rounded-2xl border border-line bg-paper">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] touch-none cursor-col-resize"
        onPointerDown={(e) => {
          e.preventDefault();
          draggingRef.current = true;
          setFromClientX(e.clientX);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={afterSrc} alt={afterAlt} width={1200} height={750} loading="lazy" decoding="async" draggable={false} className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={beforeSrc} alt={beforeAlt} width={1200} height={750} loading="lazy" decoding="async" draggable={false} className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
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

        {/* Dostępność: ukryty range — klawiatura (strzałki) + czytnik ekranu */}
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(value)}
          onChange={(e) => setValue(Number(e.target.value))}
          className="sr-only"
          aria-label="Suwak porównania przed i po"
        />
      </div>
    </div>
  );
}