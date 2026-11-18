import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { content } from "@/data/content";

function TransferArrow() {
  return (
    <svg className="education-arrow" viewBox="0 0 64 32" aria-hidden="true">
      <path d="M0 12h40V4h8v8h8v8h-8v8h-8v-8H0z" fill="currentColor" />
    </svg>
  );
}

export function Education() {
  return (
    <Section id="education" title="Pendidikan">
      <div className="education-flow">
        {content.education.map((item, index) => (
          <div className="education-fragment" key={item.school}>
            <article className="education-card border-ink bg-secondary flex h-full flex-col gap-3 border-4 p-6 shadow-md">
              <h3 className="font-body text-ink text-lg leading-normal">{item.school}</h3>
              <p className="font-body text-ink text-sm leading-normal">
                {item.place} · {item.period}
              </p>
              <p className="font-body text-md leading-body text-ink">{item.degree}</p>
              <p className="font-body text-ink text-sm leading-normal">{item.note}</p>
            </article>
            {index < content.education.length - 1 && <TransferArrow />}
          </div>
        ))}
      </div>
      <div className="font-body text-md text-ink mt-6 flex flex-wrap items-center gap-4 leading-normal">
        {content.gpa && <p>IPK {content.gpa}</p>}
        {content.relevantCourses.length > 0 && <Badge>{content.relevantCourses[0]}</Badge>}
      </div>
    </Section>
  );
}
