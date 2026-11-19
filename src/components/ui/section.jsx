import { useMemo } from "react";
import mapleLeaf from "@/assets/Daun Maple Musim Gugur Piksel.png";

const pixelColors = ["#2c99d6", "#79a94e", "#e5ac36"];

export function Section({ id, title, children }) {
  const risingPixels = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => ({
        id: index,
        style: {
          "--pixel-left": `${4 + Math.random() * 92}%`,
          "--pixel-size": `${3 + Math.random() * 5}px`,
          "--pixel-duration": `${10 + Math.random() * 9}s`,
          "--pixel-delay": `${-Math.random() * 18}s`,
          "--pixel-drift": `${(Math.random() - 0.5) * 88}px`,
          "--pixel-opacity": (0.2 + Math.random() * 0.24).toFixed(2),
          "--pixel-color": pixelColors[Math.floor(Math.random() * pixelColors.length)],
        },
      })),
    [],
  );

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="content-section scroll-mt-24" data-reveal>
      <div className="section-pixel-field" aria-hidden="true">
        {risingPixels.map((pixel) => (
          <span key={pixel.id} className="section-rising-pixel" style={pixel.style} />
        ))}
      </div>
      <div className="section-leaf-field" aria-hidden="true">
        <img className="section-leaf section-leaf-one" src={mapleLeaf} alt="" />
        <img className="section-leaf section-leaf-two" src={mapleLeaf} alt="" />
      </div>
      <div className="page-shell section-inner">
        <header className="section-heading">
          <span className="section-index" aria-hidden="true" />
          <h2 id={`${id}-title`} className="font-display leading-display text-ink md:text-display-2 text-sm">
            {title}
          </h2>
          <span className="section-heading-rule" aria-hidden="true" />
        </header>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}
