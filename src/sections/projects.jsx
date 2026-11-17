import { Section } from "@/components/ui/section";
import { content } from "@/data/content";
import { ProjectCard } from "@/sections/project-card";

export function Projects() {
  if (content.projects.length === 0) return null;
  return (
    <Section id="projects" title="Proyek">
      <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
