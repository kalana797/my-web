import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { Education } from "./_components/education";
import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { Skills } from "./_components/skills";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
