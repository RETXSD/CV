import { ExternalLink } from "@/components/ui/external-link";
import { Section } from "@/components/ui/section";
import { content } from "@/data/content";

export function Contact() {
  const entries = [
    content.contact.phone && {
      kind: "Telepon",
      value: content.contact.phone,
      href: `tel:${content.contact.phone}`,
    },
    content.contact.email && {
      kind: "Email",
      value: content.contact.email,
      href: `mailto:${content.contact.email}`,
    },
    content.contact.linkedin && { kind: "LinkedIn", value: "Lihat profil", href: content.contact.linkedin, external: true },
    content.contact.github && { kind: "GitHub", value: "Lihat profil", href: content.contact.github, external: true },
  ].filter(Boolean);
  if (entries.length === 0) return null;
  return (
    <Section id="contact" title="Kontak">
      <div className="contact-panel" data-reveal>
        <ul className="contact-grid">
          {entries.map((entry) => (
            <li className="contact-item" key={entry.href}>
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
