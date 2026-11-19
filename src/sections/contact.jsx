import { ExternalLink } from "@/components/ui/external-link";
import { Section } from "@/components/ui/section";
import { contentByLanguage } from "@/data/content-translations";
import { messages, useLocale } from "@/lib/locale";

export function Contact() {
  const { language } = useLocale();
  const content = contentByLanguage[language];
  const text = messages[language];
  const entries = [
    content.contact.phone && {
      kind: text.contact.phone,
      value: content.contact.phone,
      href: `tel:${content.contact.phone}`,
    },
    content.contact.email && {
      kind: "Email",
      value: content.contact.email,
      href: `mailto:${content.contact.email}`,
    },
    content.contact.linkedin && { kind: "LinkedIn", value: text.contact.profile, href: content.contact.linkedin, external: true },
    content.contact.github && { kind: "GitHub", value: text.contact.profile, href: content.contact.github, external: true },
  ].filter(Boolean);
  if (entries.length === 0) return null;
  return (
    <Section id="contact" title={text.sections.contact}>
      <div className="contact-panel" data-reveal>
        <ul className="contact-grid">
          {entries.map((entry) => (
            <li className="contact-item" key={entry.href} data-reveal>
              <span className="contact-kind">{entry.kind}</span>
              {entry.external ? (
                <ExternalLink className="contact-link" href={entry.href}>
                  {entry.value}
                </ExternalLink>
              ) : (
                <a className="contact-link" href={entry.href}>
                  {entry.value}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
