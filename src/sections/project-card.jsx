import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "@/components/ui/external-link";

export function ProjectCard({ project }) {
  return (
    <div className={project.links.length > 0 ? "project-frame project-frame-linked" : "project-frame"}>
      <Card title={project.title}>
        <p className="font-body text-ink text-sm leading-normal">
          {project.kind} · {project.year}
        </p>
        <p className="project-description font-body text-md leading-body text-ink">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Badge key={tool}>{tool}</Badge>
          ))}
          {project.badge && <Badge tone="alert">{project.badge}</Badge>}
        </div>
        <p className="font-body text-ink text-sm leading-normal">{project.role}</p>
        {project.links.length > 0 && (
          <ul className="flex flex-col gap-2 pt-3">
            {project.links.map((link) => (
              <li key={link.url}>
                <ExternalLink href={link.url}>{link.label}</ExternalLink>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
