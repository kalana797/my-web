import { skillGroups } from "../_data/profile";
import { Section, TagList } from "./ui";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="A full-stack toolkit, end to end."
      intro="From database schema and REST APIs to web and mobile interfaces — plus the enterprise and third-party integrations in between."
      className="border-y border-border bg-surface/60"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <li
            key={group.title}
            className="reveal flex flex-col rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-accent/50"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-semibold">{group.title}</h3>
              <span className="font-mono text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <TagList items={group.items} className="mt-4" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
