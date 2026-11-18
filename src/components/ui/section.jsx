import mapleLeaf from "@/assets/Daun Maple Musim Gugur Piksel.png";
import technologyArt from "@/assets/Ikon Teknologi Pixel Retro.png";

export function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="content-section scroll-mt-24" data-reveal>
      <div className="section-leaf-field" aria-hidden="true">
        <img className="section-leaf section-leaf-one" src={mapleLeaf} alt="" />
        <img className="section-leaf section-leaf-two" src={mapleLeaf} alt="" />
        {id === "skills" && <img className="section-tech-art" src={technologyArt} alt="" />}
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
