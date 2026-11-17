import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Education } from "@/sections/education";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";

export default function App() {
  return (
    <>
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
    </>
  );
}
