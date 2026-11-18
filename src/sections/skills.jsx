import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { content } from "@/data/content";

const skillGroups = [
  { key: "technical", title: "Teknis" },
  { key: "tools", title: "Tools" },
  { key: "soft", title: "Soft skills" },
];

export function Skills() {
  const languages = content.skills.languages.filter((language) => language.level || language.test);
  return (
    <Section id="skills" title="Keahlian">
      <div className="grid gap-8 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroup key={group.key} title={group.title} values={content.skills[group.key]} />
        ))}
        <SkillGroup
          title="Bahasa"
          values={languages.map((language) => (language.level ? `${language.name} · ${language.level}` : `${language.name} · ${language.test} ${language.score}`))}
        />
      </div>
    </Section>
  );
}

function SkillGroup({ title, values }) {
  if (!values || values.length === 0) return null;
  return (
    <div className="skill-group flex flex-col gap-3" data-reveal>
      <h3 className="font-body text-ink text-lg leading-normal">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <Badge key={value}>{value}</Badge>
        ))}
      </div>
    </div>
  );
}
