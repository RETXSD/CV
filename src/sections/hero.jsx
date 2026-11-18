import portraitClear from "@/assets/foto-profil.jpg";
import portraitPixel from "@/assets/foto-profil-pixel.png";
import { Badge } from "@/components/ui/badge";
import { content } from "@/data/content";

function revealPortrait(event) {
  const frame = event.currentTarget;
  const isTouch = event.pointerType === "touch";
  if (isTouch && event.type !== "pointerdown" && !(event.type === "pointermove" && event.buttons === 1 && frame.dataset.touchRevealing === "true")) return;

  const bounds = frame.getBoundingClientRect();
  const x = Math.max(0, Math.min(event.clientX - bounds.left - frame.clientLeft, frame.clientWidth));
  const y = Math.max(0, Math.min(event.clientY - bounds.top - frame.clientTop, frame.clientHeight));

  if (isTouch && event.type === "pointerdown" && frame.dataset.touchRevealing === "true") {
    const previousX = Number.parseFloat(frame.style.getPropertyValue("--reveal-x"));
    const previousY = Number.parseFloat(frame.style.getPropertyValue("--reveal-y"));
    if (Math.hypot(x - previousX, y - previousY) < 36) {
      delete frame.dataset.touchRevealing;
      delete frame.dataset.revealing;
      return;
    }
  }

  frame.style.setProperty("--reveal-x", `${x}px`);
  frame.style.setProperty("--reveal-y", `${y}px`);
  frame.dataset.revealing = "true";
  if (isTouch) frame.dataset.touchRevealing = "true";
}

function hidePortraitReveal(event) {
  if (event.pointerType === "touch") return;
  delete event.currentTarget.dataset.revealing;
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-section">
      <div className="pixel-leaf-field" aria-hidden="true">
        <span className="pixel-leaf leaf-one" />
        <span className="pixel-leaf leaf-two" />
        <span className="pixel-leaf leaf-three" />
        <span className="pixel-leaf leaf-four" />
        <span className="pixel-leaf leaf-five" />
      </div>
      <div className="page-shell hero-layout grid items-center gap-8">
        <div className="portrait-frame" onPointerEnter={revealPortrait} onPointerMove={revealPortrait} onPointerDown={revealPortrait} onPointerLeave={hidePortraitReveal}>
          <img src={portraitPixel} width="600" height="800" fetchPriority="high" alt="Foto formal Cornelius Adrian Putra" className="portrait-image portrait-pixel pixel-corners" />
          <img src={portraitClear} width="600" height="800" alt="" aria-hidden="true" className="portrait-image portrait-clear pixel-corners" />
          <span className="portrait-touch-hint" aria-hidden="true">
            SENTUH FOTO
          </span>
        </div>
        <div className="hero-copy flex flex-col items-start gap-6" data-reveal>
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
