export function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={`external-link ${className}`} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
