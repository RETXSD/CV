import { content } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-footer border-ink bg-primary border-t-4 py-6">
      <div className="page-shell footer-content font-body text-md text-ink leading-normal">
        <span>© 2026 {content.name}</span>
        <a className="back-to-top" href="#top">
          Kembali ke atas ↑
        </a>
      </div>
    </footer>
  );
}
