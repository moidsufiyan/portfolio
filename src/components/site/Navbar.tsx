import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

export const Navbar = () => {
  const { active, isTransitioning } = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <nav className="container flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="font-heading text-xl font-bold tracking-tight hover:opacity-90"
        >
          MS
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleScroll(l.id)}
              className={`story-link relative text-sm transition-all duration-300 hover:text-primary hover:scale-105 ${
                active === l.id
                  ? "text-primary font-medium"
                  : "text-foreground/70"
              } ${isTransitioning && active === l.id ? "animate-pulse" : ""}`}
            >
              {l.label}
              <div
                className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out ${
                  active === l.id
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
              />
              {/* Hover indicator */}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/30 rounded-full transition-all duration-200 scale-x-0 hover:scale-x-100" />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur animate-in slide-in-from-top-2 duration-200">
          <nav className="container py-4">
            <div className="flex flex-col gap-4">
              {links.map((l, index) => (
                <button
                  key={l.id}
                  onClick={() => handleScroll(l.id)}
                  className={`text-left py-3 px-4 rounded-lg transition-all duration-300 hover:bg-muted hover:scale-[1.02] relative overflow-hidden ${
                    active === l.id
                      ? "text-primary bg-muted font-medium shadow-sm"
                      : "text-foreground/70"
                  } ${
                    isTransitioning && active === l.id ? "animate-pulse" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen
                      ? `fadeInUp 0.3s ease-out ${index * 50}ms both`
                      : "",
                  }}
                >
                  {l.label}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full transition-all duration-300 ease-out ${
                      active === l.id
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-0"
                    }`}
                  />
                  {/* Mobile hover indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30 rounded-r-full transition-all duration-200 scale-y-0 hover:scale-y-100" />
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
