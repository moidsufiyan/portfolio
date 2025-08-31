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
  { id: "quotes", label: "Quotes" },
  { id: "contact", label: "Contact" },
] as const;

export const Navbar = () => {
  const { active } = useActiveSection();
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
              className={`story-link relative text-sm transition-colors hover:text-primary ${
                active === l.id ? "text-primary" : "text-foreground/70"
              }`}
            >
              {l.label}
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
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleScroll(l.id)}
                  className={`text-left py-2 px-4 rounded-md transition-colors hover:bg-muted ${
                    active === l.id
                      ? "text-primary bg-muted"
                      : "text-foreground/70"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
