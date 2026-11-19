import { Section } from "@/components/ui/section";
import { contentByLanguage } from "@/data/content-translations";
import { messages, useLocale } from "@/lib/locale";

export function About() {
  const { language } = useLocale();
  const content = contentByLanguage[language];

  return (
    <Section id="about" title={messages[language].sections.about}>
      <p className="about-note font-body text-md leading-body text-ink" data-reveal>
        {content.summary}
      </p>
    </Section>
  );
}
