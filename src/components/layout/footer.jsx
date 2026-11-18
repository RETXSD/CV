import { content } from "@/data/content";
import { messages, useLocale } from "@/lib/locale";

export function Footer() {
  const { language } = useLocale();
  return (
    <footer className="site-footer border-ink bg-primary border-t-4 py-6">
      <div className="page-shell footer-content font-body text-md text-ink leading-normal">
        <span>© 2026 {content.name}</span>
        <a className="back-to-top" href="#top">{messages[language].footer.backToTop}</a>
      </div>
    </footer>
  );
}
