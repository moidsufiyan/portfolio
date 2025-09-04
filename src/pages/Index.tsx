import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { TechStack } from "@/components/site/TechStack";
import { Projects } from "@/components/site/Projects";
import { DevelopmentProcess } from "@/components/site/DevelopmentProcess";
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
      <main className="space-y-0">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <TechStack />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <DevelopmentProcess />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Achievements />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <CTA />
        <div className="section-divider" />
        <Contact />
      </main>
      <footer className="border-t py-8 text-center bg-muted/30">
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
