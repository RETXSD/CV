import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { content } from "@/data/content";
import css3Icon from "@/assets/tech-icons/css3.png";
import figmaIcon from "@/assets/tech-icons/figma.png";
import html5Icon from "@/assets/tech-icons/html5.png";
import javaIcon from "@/assets/tech-icons/java.png";
import javascriptIcon from "@/assets/tech-icons/javascript.png";
import officeIcon from "@/assets/tech-icons/office-suite.png";
import pythonIcon from "@/assets/tech-icons/python.png";
import sqlIcon from "@/assets/tech-icons/sql.png";
import vscodeIcon from "@/assets/tech-icons/vscode.png";

const skillGroups = [
  { key: "technical", title: "Teknis" },
  { key: "tools", title: "Tools" },
  { key: "soft", title: "Soft skills" },
];

const skillIcons = {
  technical: [javaIcon, javascriptIcon, pythonIcon, sqlIcon, html5Icon, css3Icon],
  tools: [figmaIcon, vscodeIcon, officeIcon],
};

export function Skills() {
  const languages = content.skills.languages.filter((language) => language.level || language.test);
  return (
    <Section id="skills" title="Keahlian">
      <div className="grid gap-8 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroup key={group.key} title={group.title} values={content.skills[group.key]} icons={skillIcons[group.key]} />
        ))}
        <SkillGroup
          title="Bahasa"
          values={languages.map((language) => (language.level ? `${language.name} · ${language.level}` : `${language.name} · ${language.test} ${language.score}`))}
        />
      </div>
    </Section>
  );
}

function SkillGroup({ title, values, icons = [] }) {
  if (!values || values.length === 0) return null;
  return (
    <div className="skill-group flex flex-col gap-3" data-reveal>
      <div className="skill-heading">
        <h3 className="font-body text-ink text-lg leading-normal">{title}</h3>
        {icons.length > 0 && (
          <div className="skill-icon-row" aria-hidden="true">
            {icons.map((icon) => (
              <img key={icon} src={icon} alt="" />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <Badge key={value}>{value}</Badge>
        ))}
      </div>
    </div>
  );
}
