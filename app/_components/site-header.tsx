import { navItems, profile } from "../_data/profile";
import { DownloadIcon } from "./icons";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-foreground font-mono text-xs text-background">
            {profile.initials}
          </span>
          <span>{profile.shortName}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-muted transition hover:bg-foreground/5 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvHref}
            download
            className="hidden h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition hover:opacity-90 md:inline-flex"
          >
            <DownloadIcon className="size-4" />
            CV
          </a>
          <MobileMenu cvHref={profile.cvHref} />
        </div>
      </div>
    </header>
  );
}
