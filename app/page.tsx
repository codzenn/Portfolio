import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Project } from "@/components/project";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Project />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
