export function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="content-section scroll-mt-24" data-reveal>
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
