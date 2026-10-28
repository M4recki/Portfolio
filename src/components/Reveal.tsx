type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Opóźnienie animacji w sekundach (stagger). */
  delay?: number;
};

/**
 * Serwerowy reveal — czysty CSS (keyframes w globals.css), odpalany na load.
 * Bez JS treść jest widoczna (animation fill: both kończy na opacity 1,
 * a prefers-reduced-motion wyłącza animację → treść widoczna od razu).
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <div
      className={`reveal ${className}`}
      style={delay > 0 ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
