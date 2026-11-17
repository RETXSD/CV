export function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 py-16 md:py-24">
      <div className="page-shell">
        <h2 id={`${id}-title`} className="font-display leading-display text-ink md:text-display-2 mb-8 text-sm">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
