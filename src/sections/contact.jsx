import { ExternalLink } from "@/components/ui/external-link";
import { Section } from "@/components/ui/section";
import { content } from "@/data/content";

export function Contact() {
  const entries = [
    content.contact.email && {
      label: content.contact.email,
      href: `mailto:${content.contact.email}`,
    },
    content.contact.linkedin && {
      label: "LinkedIn",
      href: content.contact.linkedin,
    },
    content.contact.github && { label: "GitHub", href: content.contact.github },
  ].filter(Boolean);
  if (entries.length === 0) return null;
  return (
    <Section id="contact" title="Kontak">
      <div className="contact-panel" data-reveal>
        <ul className="flex flex-wrap gap-4">
          {entries.map((entry) => (
            <li key={entry.href}>
              <ExternalLink href={entry.href}>{entry.label}</ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
