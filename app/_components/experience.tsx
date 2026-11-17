import { experience } from "../_data/profile";
import { Section, TagList } from "./ui";

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Experience" title="Where I’ve worked.">
      <ol className="relative space-y-6">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="reveal grid gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8 md:grid-cols-[13rem_1fr] md:gap-10"
          >
            <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-start">
              <p className="font-mono text-sm text-accent">{job.period}</p>
              {job.current ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent-strong">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Current role
                </span>
              ) : null}
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
              <p className="mt-1 text-muted">{job.company}</p>

              <ul className="mt-5 space-y-3 leading-relaxed text-foreground/85">
                {job.highlights.map((point) => (
                  <li key={point.slice(0, 32)} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-px w-3 shrink-0 bg-accent"
                    />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              {job.domains ? (
                <p className="mt-5 text-sm text-muted">
                  <span className="font-medium text-foreground">Domains: </span>
                  {job.domains.join(" · ")}
                </p>
              ) : null}

              <TagList items={job.stack} className="mt-5" />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
