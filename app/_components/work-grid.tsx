"use client";

import { useState } from "react";
import type { CaseStudy, WorkCategory } from "../_data/profile";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { TagList, buttonSecondary } from "./ui";

const INITIAL_COUNT = 6;

type Filter = WorkCategory | "all";

export function WorkGrid({
  items,
  categories,
}: {
  items: CaseStudy[];
  categories: { id: WorkCategory; label: string }[];
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);

  const matches = (item: CaseStudy) => filter === "all" || item.categories.includes(filter);
  const matching = items.filter(matches);
  const collapsed = filter === "all" && !expanded;
  const visibleCount = collapsed ? Math.min(INITIAL_COUNT, matching.length) : matching.length;

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: items.length },
    ...categories.map((c) => ({
      id: c.id,
      label: c.label,
      count: items.filter((item) => item.categories.includes(c.id)).length,
    })),
  ];

  // Every card stays in the HTML (good for SEO); filtered-out cards are hidden.
  const visibleTitles = new Set(matching.slice(0, visibleCount).map((item) => item.title));

  return (
    <div>
      <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-surface text-muted hover:border-accent/60 hover:text-foreground"
              }`}
            >
              {f.label}
              <span className="font-mono text-xs opacity-70">{f.count}</span>
            </button>
          );
        })}
      </div>
      <p aria-live="polite" className="sr-only">
        Showing {visibleCount} of {matching.length} projects
      </p>

      <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const visible = visibleTitles.has(item.title);
          return (
            <li key={item.title} className={visible ? "reveal flex" : "hidden"}>
              <article className="flex w-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/50">
                <div className="flex items-start justify-between gap-3 text-xs">
                  <span className="font-medium text-accent">{item.client}</span>
                  <span className="shrink-0 font-mono text-muted">{item.period}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-balance">
                  {item.title}
                </h3>

                <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                  {item.region ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent-strong">
                      <span className="size-1.5 rounded-full bg-accent" />
                      {item.region}
                    </span>
                  ) : null}
                  {item.status ? (
                    <span className="rounded-full border border-border px-2 py-0.5">
                      {item.status}
                    </span>
                  ) : null}
                  <span>{item.parts.join(" · ")}</span>
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted text-pretty">
                  {item.summary}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-snug text-foreground/85">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="text-pretty">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <TagList items={item.tech} />
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition hover:text-accent"
                    >
                      {item.href.replace(/^https?:\/\//, "")}
                      <ArrowUpRightIcon className="size-3.5 transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  ) : null}
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {filter === "all" && matching.length > INITIAL_COUNT ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
            className={buttonSecondary}
          >
            {expanded ? "Show fewer projects" : `Show all ${matching.length} projects`}
          </button>
        </div>
      ) : null}
    </div>
  );
}
