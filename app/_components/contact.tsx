import type { ComponentType, SVGProps } from "react";
import { profile } from "../_data/profile";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";
import { buttonPrimary, buttonSecondary } from "./ui";

type Channel = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const channels: Channel[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, Icon: PhoneIcon },
  {
    label: "LinkedIn",
    value: profile.shortName,
    href: profile.linkedin,
    external: true,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: `@${profile.githubHandle}`,
    href: profile.github,
    external: true,
    Icon: GitHubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 sm:px-12 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              06 — Contact
            </p>
            <h2
              id="contact-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              Let’s build something useful together.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">
              Have a role, a project, or an integration problem you’re working through? I’d be
              glad to hear about it — the fastest way to reach me is by email.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className={buttonPrimary}>
                <MailIcon className="size-4" />
                Email me
              </a>
              <a href={profile.cvHref} download className={buttonSecondary}>
                <DownloadIcon className="size-4" />
                Download CV
              </a>
            </div>
          </div>

          <ul className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map(({ label, value, href, external, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-full items-center gap-4 rounded-2xl border border-border bg-background p-4 transition hover:border-accent/60"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-strong">
                    <Icon className="size-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block truncate text-sm font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
