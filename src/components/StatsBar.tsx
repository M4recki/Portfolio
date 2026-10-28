import { stats } from "@/lib/data";

/* ============================================================
 * StatsBar — trzy konkrety pod hero. Każda liczba jest
 * sprawdzalna, żadna nie jest wymyślonym wynikiem klienta.
 * ============================================================ */

export default function StatsBar() {
  return (
    <section aria-labelledby="stats-title" className="border-b border-line bg-paper">
      <h2 id="stats-title" className="sr-only">
        Najważniejsze liczby
      </h2>
      <ul className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
        {stats.map((s) => (
          <li key={s.value} className="border-l-2 border-accent/40 pl-4">
            <p className="font-heading text-3xl leading-none text-ink sm:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm font-semibold text-ink">{s.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-faint">{s.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
