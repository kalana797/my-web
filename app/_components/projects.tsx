import { professionalWork, projects } from "../_data/profile";
import { ArrowUpRightIcon } from "./icons";
import { Section, TagList } from "./ui";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title="Things I’ve built."
      intro="A mix of personal and academic projects, followed by the client systems I’ve worked on professionally."
      className="border-y border-border bg-surface/60"
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <li
            key={project.title}
            className={`reveal group flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/50 sm:p-8 ${i < 2 ? "md:min-h-[22rem]" : ""}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {project.kind}
              </span>
              {project.status ? (
                <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                  {project.status}
                </span>
              ) : null}
            </div>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-balance">
              {project.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted text-pretty">{project.description}</p>

            {project.features ? (
              <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-foreground/85 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            ) : null}

            <TagList items={project.tech} className="mt-auto pt-6" />
          </li>
        ))}
      </ul>

      <div className="mt-20">
        <div className="reveal max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight">Professional work</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Client systems I’ve built and maintained — web platforms, admin portals, and the
            mobile apps used by delivery, sales and field teams.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {professionalWork.map((group) => (
            <section
              key={group.title}
              aria-label={`${group.title} at ${group.company}`}
              className="reveal rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-semibold">{group.title}</h4>
                <span className="font-mono text-xs text-muted">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{group.company}</p>

              <ul className="mt-5 divide-y divide-border">
                {group.items.map((item) => (
                  <li key={item.name} className="py-2.5 text-sm">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 font-medium text-foreground transition hover:text-accent"
                      >
                        {item.name}
                        <ArrowUpRightIcon className="size-3.5 transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    ) : (
                      <span className="text-foreground/85">{item.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
}
