import { education } from "../_data/profile";
import { Section } from "./ui";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="06 — Education"
      title="Always learning."
      className="border-y border-border bg-surface/60"
    >
      <ol className="grid gap-5 lg:grid-cols-3">
        {education.map((entry, i) => (
          <li
            key={entry.degree}
            className={`reveal flex flex-col rounded-2xl border p-6 sm:p-7 ${
              i === 0
                ? "border-accent/40 bg-accent-soft"
                : "border-border bg-surface"
            }`}
          >
            <p className="font-mono text-sm text-accent">{entry.period}</p>
            <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-balance">
              {entry.degree}
            </h3>
            {"honours" in entry ? (
              <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-contrast">
                {entry.honours}
              </p>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-muted">{entry.institution}</p>
            {"note" in entry ? (
              <p className="mt-auto border-t border-border pt-4 text-sm text-foreground/80">
                {entry.note}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
