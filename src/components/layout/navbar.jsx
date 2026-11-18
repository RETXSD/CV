import { contentByLanguage } from "@/data/content-translations";
import { messages, useLocale } from "@/lib/locale";

export function Navbar() {
  const { language, toggleLanguage } = useLocale();
  const content = contentByLanguage[language];
  const text = messages[language];
  const links = [
    { id: "about", label: text.nav.about },
    { id: "education", label: text.nav.education },
    { id: "projects", label: text.nav.projects },
    { id: "skills", label: text.nav.skills },
  ];
  const navLinks = content.contact.phone || content.contact.email || content.contact.linkedin || content.contact.github ? [...links, { id: "contact", label: text.nav.contact }] : links;

  return (
    <header className="site-header border-ink bg-secondary sticky top-0 z-10 border-b-4">
      <div className="page-shell flex min-h-16 flex-wrap items-center justify-between gap-x-2 gap-y-2 py-2">
        <a
          className="font-body text-ink focus-visible:outline-tertiary duration-fast hover:bg-tertiary order-1 px-2 text-lg leading-normal transition-colors focus-visible:outline-4 focus-visible:outline-offset-2"
          href="#top"
        >
          Cornelius
        </a>
        <nav aria-label={text.nav.label} className="site-navigation order-3 w-full md:order-2 md:w-auto">
          <ul className="site-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a className="nav-link" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          aria-label={text.switchLanguage}
          className="language-toggle font-body text-md text-ink focus-visible:outline-tertiary order-2 min-h-11 border-2 border-ink bg-secondary px-3 leading-normal shadow-sm transition-colors hover:bg-tertiary focus-visible:outline-4 focus-visible:outline-offset-2 md:order-3"
          onClick={toggleLanguage}
          title={text.switchLanguage}
          type="button"
        >
          {text.languageCode}
        </button>
      </div>
    </header>
  );
}
