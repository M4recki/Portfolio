"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

/**
 * Magnetic — delikatne "magnetyczne" przyciąganie elementu do kursora.
 * Wyłączone dla prefers-reduced-motion. Siła w pikselach (domyślnie 4).
 */
export default function Magnetic({
  children,
  strength = 4,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const dx = ((e.clientX - rect.left) / rect.width - 0.5) * strength * 2;
    const dy = ((e.clientY - rect.top) / rect.height - 0.5) * strength * 2;
    el.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0, 0, 0)";
  }

  return (
    <span ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={`magnetic inline-flex ${className}`}>
      {children}
    </span>
  );
}
