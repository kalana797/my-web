import { profile } from "../_data/profile";
import { ArrowUpIcon, GitHubIcon, LinkedInIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-foreground"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-foreground"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a href="#top" className="inline-flex items-center gap-1.5 transition hover:text-foreground">
            Back to top
            <ArrowUpIcon className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
