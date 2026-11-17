import { about, domains, strengths } from "../_data/profile";
import { Section } from "./ui";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Software that businesses actually run on.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div className="reveal space-y-5 text-lg leading-relaxed text-foreground/85">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="reveal space-y-6 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Domains I’ve worked in
            </h3>
            <ul className="mt-4 space-y-2.5">
              {domains.map((domain) => (
                <li key={domain} className="flex items-center gap-3">
                  <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                  {domain}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Professional strengths
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {strengths.map((strength) => (
                <li
                  key={strength}
                  className="rounded-full bg-accent-soft px-3 py-1 text-sm text-accent-strong"
                >
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
