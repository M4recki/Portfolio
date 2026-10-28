import Link from "next/link";
import type { ReactNode } from "react";

/* ============================================================
 * Button (U2) — warianty spójne z design systemem.
 * Primary: bg steel blue (accent) + dark text #08131c (contrast ~5:1);
 * Secondary: outline, hover lodowy błękit.
 * ============================================================ */

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold " +
  "transition-transform duration-200 motion-safe:hover:-translate-y-0.5 " +
  "cursor-pointer select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#08131c] shadow-[0_10px_30px_-12px_rgba(47,143,214,0.55)] hover:brightness-110",
  secondary: "border-2 border-line text-ink hover:border-accent hover:text-accent-light",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-base", /* 44px wysokości = touch target */
  lg: "px-6 py-3.5 text-base",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
  external = false,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
