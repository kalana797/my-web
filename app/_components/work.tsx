import { caseStudies, workCategories } from "../_data/profile";
import { Section } from "./ui";
import { WorkGrid } from "./work-grid";

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="04 — Work"
      title="Systems I’ve worked on."
      intro="Client and product systems from my time at GUI Solutions Lanka, for clients in Singapore and Sri Lanka — from Navision- and Business Central-integrated ordering, warehouse and delivery platforms to headless e-commerce and a multi-tenant learning platform."
      className="border-y border-border bg-surface/60"
    >
      <WorkGrid items={caseStudies} categories={workCategories} />
    </Section>
  );
}
