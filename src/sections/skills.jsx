import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { contentByLanguage } from "@/data/content-translations";
import { messages, useLocale } from "@/lib/locale";
import css3Icon from "@/assets/tech-icons/css3.png";
import figmaIcon from "@/assets/tech-icons/figma.png";
import html5Icon from "@/assets/tech-icons/html5.png";
import javaIcon from "@/assets/tech-icons/java.png";
import javascriptIcon from "@/assets/tech-icons/javascript.png";
import officeIcon from "@/assets/tech-icons/office-suite.png";
import pythonIcon from "@/assets/tech-icons/python.png";
import sqlIcon from "@/assets/tech-icons/sql.png";
import vscodeIcon from "@/assets/tech-icons/vscode.png";

const skillGroupKeys = ["technical", "tools", "soft"];

const skillIcons = {
  technical: [javaIcon, javascriptIcon, pythonIcon, sqlIcon, html5Icon, css3Icon],
  tools: [figmaIcon, vscodeIcon, officeIcon],
};

export function Skills() {
  const { language } = useLocale();
  const content = contentByLanguage[language];
  const text = messages[language];
  const languages = content.skills.languages.filter((language) => language.level || language.test);
  return (
    <Section id="skills" title={text.sections.skills}>
      <div className="grid gap-8 md:grid-cols-2">
        {skillGroupKeys.map((key) => (
          <SkillGroup key={key} title={text.skills[key]} values={content.skills[key]} icons={skillIcons[key]} />
        ))}
        <SkillGroup
          title={text.skills.languages}
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
