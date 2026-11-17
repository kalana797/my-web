import type { ComponentType, ReactNode, SVGProps } from "react";
import { profile } from "../_data/profile";
import { emailLinks } from "./contact-links";
import { CopyButton } from "./copy-button";
import { EmailMenu } from "./email-menu";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MessageIcon,
  PhoneIcon,
} from "./icons";
import { buttonSecondary } from "./ui";

const action =
  "inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent active:scale-[0.98]";
const actionPrimary =
  "inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground px-3.5 text-sm font-medium text-background transition hover:opacity-90 active:scale-[0.98]";
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

function ChannelHeader({
  Icon,
  label,
  value,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-strong">
        <Icon className="size-4.5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-muted">{label}</span>
        <span className="block truncate font-medium">{value}</span>
      </span>
    </div>
  );
}

function ActionCard({ children }: { children: ReactNode }) {
  return (
    <li className="flex flex-col justify-between gap-5 rounded-2xl border border-border bg-background p-5">
      {children}
    </li>
  );
}

function ProfileCard({
  href,
  Icon,
  label,
  value,
}: {
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}) {
  return (
    <li>
      <a
        href={href}
        {...external}
        className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-background p-5 transition hover:border-accent/60"
      >
        <ChannelHeader Icon={Icon} label={label} value={value} />
        <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted transition group-hover:text-accent">
          View profile
          <ArrowUpRightIcon className="size-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </a>
    </li>
  );
}

export function Contact() {
  const mail = emailLinks(profile.email, profile.emailSubject);

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 sm:px-12 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative z-10 max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              07 — Contact
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
              <EmailMenu email={profile.email} subject={profile.emailSubject} />
              <a href={profile.cvHref} download className={buttonSecondary}>
                <DownloadIcon className="size-4" />
                Download CV
              </a>
            </div>
          </div>

          <ul className="relative mt-12 grid gap-3 sm:grid-cols-2">
            <ActionCard>
              <ChannelHeader Icon={MailIcon} label="Email" value={profile.email} />
              <div className="flex flex-wrap gap-2">
                <a href={mail.gmail} {...external} className={actionPrimary}>
                  <MailIcon className="size-4" />
                  Gmail
                </a>
                <a href={mail.outlook} {...external} className={action}>
                  Outlook
                </a>
                <a href={mail.mailto} className={action}>
                  Mail app
                </a>
                <CopyButton value={profile.email} className={action} />
              </div>
            </ActionCard>

            <ActionCard>
              <ChannelHeader Icon={PhoneIcon} label="Phone" value={profile.phone} />
              <div className="flex flex-wrap gap-2">
                <a href={profile.phoneHref} className={actionPrimary}>
                  <PhoneIcon className="size-4" />
                  Call
                </a>
                {"whatsappHref" in profile ? (
                  <a href={profile.whatsappHref} {...external} className={action}>
                    <MessageIcon className="size-4" />
                    WhatsApp
                  </a>
                ) : null}
                <CopyButton value={profile.phone} className={action} />
              </div>
            </ActionCard>

            <ProfileCard
              href={profile.linkedin}
              Icon={LinkedInIcon}
              label="LinkedIn"
              value={profile.shortName}
            />
            <ProfileCard
              href={profile.github}
              Icon={GitHubIcon}
              label="GitHub"
              value={`@${profile.githubHandle}`}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
