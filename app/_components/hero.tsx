import { profile, stats } from "../_data/profile";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./icons";
import { buttonPrimary, buttonSecondary } from "./ui";

const codeLines: [key: string, value: string | string[]][] = [
  ["role", "Full-Stack Software Engineer"],
  ["experience", "5+ years"],
  ["backend", ["PHP", "Laravel", "MySQL"]],
  ["frontend", ["React", "Vue", "TypeScript"]],
  ["mobile", ["Flutter", "Dart"]],
  ["integrations", ["REST", "Business Central"]],
];

function Str({ children }: { children: string }) {
  return <span className="text-[#ecc48d]">&quot;{children}&quot;</span>;
}

function CodeCard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-accent/30 via-accent/5 to-transparent blur-2xl"
      />
      <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1322] shadow-2xl shadow-black/25">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-slate-400">engineer.ts</span>
        </div>
        <figcaption className="sr-only">Profile summary written as code</figcaption>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 text-slate-300 sm:text-sm sm:leading-7">
          <code>
            <span className="text-[#c792ea]">const</span>{" "}
            <span className="text-[#82aaff]">kalana</span>{" "}
            <span className="text-slate-500">=</span> {"{"}
            {"\n"}
            {codeLines.map(([key, value]) => (
              <span key={key}>
                {"  "}
                <span className="text-[#7fdbca]">{key}</span>
                <span className="text-slate-500">: </span>
                {Array.isArray(value) ? (
                  <>
                    <span className="text-slate-500">[</span>
                    {value.map((v, i) => (
                      <span key={v}>
                        <Str>{v}</Str>
                        {i < value.length - 1 ? <span className="text-slate-500">, </span> : null}
                      </span>
                    ))}
                    <span className="text-slate-500">]</span>
                  </>
                ) : (
                  <Str>{value}</Str>
                )}
                <span className="text-slate-500">,</span>
                {"\n"}
              </span>
            ))}
            {"};"}
          </code>
        </pre>
      </figure>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-16 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:pb-24">
        <div className="hero-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.role}
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-foreground/85 text-pretty sm:text-2xl">
            I build web platforms, mobile apps, and the{" "}
            <span className="text-accent">APIs & ERP integrations</span> that connect them.
          </p>

          <p className="mt-4 max-w-xl leading-relaxed text-muted text-pretty">
            5+ years shipping production systems with Laravel, React, Vue, TypeScript and
            Flutter — for clients in Sri Lanka and Singapore.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={buttonPrimary}>
              <MailIcon className="size-4" />
              Get in touch
            </a>
            <a href={profile.cvHref} download className={buttonSecondary}>
              <DownloadIcon className="size-4" />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="size-4" />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-foreground"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-foreground"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-in [animation-delay:120ms]">
          <CodeCard />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 p-5 sm:p-6 ${i % 2 === 1 ? "border-l border-border" : ""} ${i >= 2 ? "border-t border-border md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
            >
              <dt className="order-2 text-sm leading-snug text-muted">{stat.label}</dt>
              <dd className="order-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
