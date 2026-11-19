import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Education } from "@/sections/education";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { LocaleProvider } from "@/lib/locale";

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => {
        target.dataset.revealed = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.dataset.revealed = "true";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-delay", `${(index % 3) * 80}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LocaleProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </LocaleProvider>
  );
}
