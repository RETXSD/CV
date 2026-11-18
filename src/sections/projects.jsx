import { Section } from "@/components/ui/section";
import { contentByLanguage } from "@/data/content-translations";
import { ProjectCard } from "@/sections/project-card";
import { messages, useLocale } from "@/lib/locale";

export function Projects() {
  const { language } = useLocale();
  const content = contentByLanguage[language];
  if (content.projects.length === 0) return null;
  return (
    <Section id="projects" title={messages[language].sections.projects}>
      <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
