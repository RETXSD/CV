import { content } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-ink bg-primary border-t-4 py-6">
      <div className="page-shell font-body text-md text-ink leading-normal">© 2026 {content.name}</div>
    </footer>
  );
}
