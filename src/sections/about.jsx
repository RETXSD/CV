import { Section } from "@/components/ui/section";
import { content } from "@/data/content";

export function About() {
  return (
    <Section id="about" title="Tentang">
      <p className="about-note max-w-copy font-body text-md leading-body text-ink">{content.summary}</p>
    </Section>
  );
}
