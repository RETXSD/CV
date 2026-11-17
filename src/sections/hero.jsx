import portrait from "@/assets/foto-profil.jpg";
import { Badge } from "@/components/ui/badge";
import { content } from "@/data/content";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="border-ink bg-primary border-b-4 py-12 md:py-16">
      <div className="page-shell hero-layout grid items-center gap-8 py-16 md:gap-12 md:py-24">
        <div className="portrait-frame">
          <img src={portrait} width="600" height="800" fetchPriority="high" alt="Foto formal Cornelius Adrian Putra" className="portrait-image pixel-corners" />
        </div>
        <div className="hero-copy flex flex-col items-start gap-6">
          <h1 id="hero-title" className="hero-name font-display leading-display text-ink md:text-display-1 text-lg">
            {content.name}
          </h1>
          <p className="hero-role font-body text-ink leading-body text-lg">{content.headline}</p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-body text-md text-ink leading-body">Ketertarikan:</span>
            {content.interests.map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
