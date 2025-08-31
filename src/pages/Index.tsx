import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { TechStack } from "@/components/site/TechStack";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { Education } from "@/components/site/Education";
import { Achievements } from "@/components/site/Achievements";
import { Certifications } from "@/components/site/Certifications";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
        <CTA />
        <Contact />
      </main>
      <footer className="border-t py-8 text-center">
        <div className="container flex flex-col items-center gap-4">
          <a href="/resume.pdf" download>
            <Button variant="hero" size="sm">
              Download Resume
            </Button>
          </a>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Mohammed Moid Sufiyan — Built with
            React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
