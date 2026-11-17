"use client";

import { useEffect, useId, useRef, useState } from "react";
import { emailLinks } from "./contact-links";
import { CopyButton } from "./copy-button";
import { ArrowUpRightIcon, ChevronDownIcon, MailIcon } from "./icons";
import { buttonPrimary } from "./ui";

const itemClass =
  "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-foreground transition hover:bg-foreground/5";

export function EmailMenu({ email, subject }: { email: string; subject: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const links = emailLinks(email, subject);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const options = [
    { label: "Open in Gmail", href: links.gmail, external: true },
    { label: "Open in Outlook", href: links.outlook, external: true },
    { label: "Use my mail app", href: links.mailto, external: false },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={buttonPrimary}
      >
        <MailIcon className="size-4" />
        Email me
        <ChevronDownIcon className={`size-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute left-0 top-full z-30 mt-2 w-64 rounded-2xl border border-border bg-surface p-1.5 shadow-xl shadow-black/10"
        >
          <p className="truncate px-3 pb-1 pt-2 text-xs text-muted">Write to {email}</p>
          <ul>
            {options.map((option) => (
              <li key={option.label}>
                <a
                  href={option.href}
                  {...(option.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setOpen(false)}
                  className={itemClass}
                >
                  {option.label}
                  <ArrowUpRightIcon className="size-3.5 text-muted" />
                </a>
              </li>
            ))}
            <li className="mt-1 border-t border-border pt-1">
              <CopyButton value={email} label="Copy email address" className={`${itemClass} justify-start`} />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
