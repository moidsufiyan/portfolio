import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Briefcase, Zap } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative p-2 hover:bg-muted/50 transition-all duration-300 group"
      aria-label={`Switch to ${
        theme === "professional" ? "Spider-Man" : "Professional"
      } theme`}
    >
      <div className="relative w-5 h-5 transition-transform duration-300 group-hover:scale-110">
        {theme === "professional" ? (
          <Zap className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
        ) : (
          <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
        )}
      </div>
      <span className="sr-only">
        {theme === "professional"
          ? "Switch to Spider-Man theme"
          : "Switch to Professional theme"}
      </span>
    </Button>
  );
};
