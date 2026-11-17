import type { ReactNode } from "react";

export const buttonPrimary =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition hover:opacity-90 active:scale-[0.98]";

export const buttonSecondary =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent active:scale-[0.98]";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-16 py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="reveal max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 leading-relaxed text-muted text-pretty">{intro}</p>
          ) : null}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function TagList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
