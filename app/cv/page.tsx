import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeftIcon, DownloadIcon } from "../_components/icons";
import { buttonPrimary, buttonSecondary } from "../_components/ui";
import { cv } from "../_data/cv";
import { education, profile, strengths } from "../_data/profile";

export const metadata: Metadata = {
  title: "CV — Keshan Kalana Aluvihare",
  description:
    "CV of Keshan Kalana Aluvihare, full-stack software engineer — Laravel, React, Next.js, Vue, Flutter and ERP integrations.",
};

const ink = "text-[#13233d]";

function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-[4.2mm]">
      <h2 className="mb-[2.2mm] flex break-after-avoid items-center gap-[3mm] text-[9pt] font-bold uppercase tracking-[0.14em] text-[#0b7f7c]">
        {title}
        <span aria-hidden="true" className="h-px flex-1 bg-[#d6dce4]" />
      </h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-[1.2mm] list-disc space-y-[0.9mm] pl-[4.5mm] marker:text-[#0b7f7c]">
      {items.map((item) => (
        <li key={item.slice(0, 40)}>{item}</li>
      ))}
    </ul>
  );
}

function ProjectEntry({
  name,
  context,
  tech,
  description,
}: {
  name: string;
  context: string;
  tech: string;
  description?: string;
}) {
  return (
    <div className="break-inside-avoid">
      <p>
        <span className={`font-semibold ${ink}`}>{name}</span>
        <span className="text-[#0b7f7c]"> · {context}</span>
        <span className="text-[8.5pt] italic text-[#6b7280]"> — {tech}</span>
      </p>
      {description ? <p className="mt-[0.3mm]">{description}</p> : null}
    </div>
  );
}

export default function CvPage() {
  const contacts = [
    { label: profile.location },
    { label: profile.phone, href: profile.phoneHref },
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: profile.linkedin.replace("https://www.", ""), href: profile.linkedin },
    { label: profile.github.replace("https://", ""), href: profile.github },
  ];

  return (
    <main className="flex-1 bg-background px-3 py-8 sm:px-6 sm:py-12 print:bg-white print:p-0">
      <div className="mx-auto mb-6 flex max-w-[210mm] flex-wrap items-center justify-between gap-3 print:hidden">
        <Link href="/" className={buttonSecondary}>
          <ArrowLeftIcon className="size-4" />
          Back to portfolio
        </Link>
        <a href={profile.cvHref} download className={buttonPrimary}>
          <DownloadIcon className="size-4" />
          Download PDF
        </a>
      </div>

      <article className="cv-sheet mx-auto max-w-[210mm] bg-white px-5 py-8 text-[9.2pt] leading-[1.42] text-[#374151] shadow-2xl shadow-black/20 sm:px-[14mm] sm:py-[12mm] print:max-w-none print:p-0 print:shadow-none">
        <header className="border-b-2 border-[#0b7f7c] pb-[4mm]">
          <h1 className={`text-[22pt] font-bold leading-none tracking-tight ${ink}`}>
            {profile.name}
          </h1>
          <p className="mt-[2.2mm] text-[10.5pt] font-semibold text-[#0b7f7c]">
            {cv.headline}
            <span className="font-normal text-[#4b5563]"> · {cv.tagline}</span>
          </p>
          <p className="mt-[2.5mm] flex flex-wrap gap-x-[2.5mm] gap-y-[1mm] text-[8.5pt] text-[#4b5563]">
            {contacts.map((c, i) => (
              <span key={c.label} className="inline-flex gap-[2.5mm]">
                {i > 0 ? <span aria-hidden="true" className="text-[#c0c7d1]">|</span> : null}
                {c.href ? (
                  <a href={c.href} className="hover:text-[#0b7f7c]">
                    {c.label}
                  </a>
                ) : (
                  c.label
                )}
              </span>
            ))}
          </p>
        </header>

        <CvSection title="Professional Summary">
          <p>{cv.summary}</p>
        </CvSection>

        <CvSection title="Selected Achievements">
          <Bullets items={cv.achievements} />
        </CvSection>

        <CvSection title="Technical Skills">
          <dl className="grid grid-cols-[33mm_1fr] gap-x-[3mm] gap-y-[0.8mm]">
            {[...cv.skills, { label: "Strengths", value: strengths.join(", ") }].map((s) => (
              <div key={s.label} className="contents">
                <dt className={`font-semibold ${ink}`}>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </CvSection>

        <CvSection title="Professional Experience">
          <div className="space-y-[3mm]">
            {cv.experience.map((job) => (
              <div key={job.company}>
                <div className="flex break-after-avoid flex-wrap items-baseline justify-between gap-x-[4mm]">
                  <p className={`text-[10.5pt] font-semibold ${ink}`}>
                    {job.role} <span className="font-normal text-[#6b7280]">|</span>{" "}
                    {job.company}
                  </p>
                  <p className="text-[8.5pt] text-[#6b7280]">{job.period}</p>
                </div>
                <Bullets items={job.bullets} />
              </div>
            ))}
          </div>
        </CvSection>

        <CvSection title="Selected Professional Projects">
          <div className="space-y-[2mm]">
            {cv.professionalProjects.map((p) => (
              <ProjectEntry key={p.name} {...p} />
            ))}
            <p className="break-inside-avoid">
              <span className={`font-semibold ${ink}`}>Also worked on: </span>
              {cv.otherWork}
            </p>
          </div>
        </CvSection>

        <CvSection title="Personal & Academic Projects">
          <div className="space-y-[2mm]">
            {cv.personalProjects.map((p) => (
              <ProjectEntry key={p.name} {...p} />
            ))}
          </div>
        </CvSection>

        <CvSection title="Education">
          <div className="space-y-[2mm]">
            {education.map((e) => (
              <div key={e.degree} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-[4mm]">
                  <p className={`font-semibold ${ink}`}>
                    {e.degree}
                    {"honours" in e ? (
                      <span className="text-[#0b7f7c]"> — {e.honours}</span>
                    ) : null}
                  </p>
                  <p className="text-[8.5pt] text-[#6b7280]">{e.period}</p>
                </div>
                <p className="text-[#4b5563]">{e.institution}</p>
              </div>
            ))}
          </div>
        </CvSection>
      </article>
    </main>
  );
}
