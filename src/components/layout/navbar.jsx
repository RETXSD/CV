import { Button } from "@/components/ui/button";
import { content } from "@/data/content";

const links = [
  { id: "about", label: "Tentang" },
  { id: "education", label: "Pendidikan" },
  { id: "projects", label: "Proyek" },
  { id: "skills", label: "Keahlian" },
];

export function Navbar() {
  const navLinks = content.contact.email || content.contact.linkedin || content.contact.github ? [...links, { id: "contact", label: "Kontak" }] : links;

  return (
    <header className="site-header border-ink bg-secondary sticky top-0 z-10 border-b-4">
      <div className="page-shell flex min-h-16 flex-wrap items-center justify-between gap-x-2 gap-y-2 py-2">
        <a
          className="font-body text-ink focus-visible:outline-tertiary duration-fast hover:bg-tertiary order-1 px-2 text-lg leading-normal transition-colors focus-visible:outline-4 focus-visible:outline-offset-2"
          href="#top"
        >
          Cornelius
        </a>
        {content.cvFile && (
          <Button className="order-2 md:order-3" href={`${import.meta.env.BASE_URL}${content.cvFile}`} download variant="primary">
            Unduh CV
          </Button>
        )}
        <nav aria-label="Navigasi utama" className="order-3 w-full overflow-x-auto md:order-2 md:w-auto">
          <ul className="font-body text-md flex min-w-max items-center gap-4 pr-6 leading-normal">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a className="nav-link" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
