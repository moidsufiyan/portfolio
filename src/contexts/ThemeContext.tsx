import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "professional" | "spiderman";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("professional");

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    if (
      savedTheme &&
      (savedTheme === "professional" || savedTheme === "spiderman")
    ) {
      setThemeState(savedTheme);
    } else {
      // Default to professional theme
      setThemeState("professional");
    }
  }, []);

  useEffect(() => {
    // Update document data attribute and localStorage when theme changes
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);

    // Force a repaint to ensure smooth transition
    document.documentElement.style.colorScheme =
      theme === "spiderman" ? "dark" : "light";
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) =>
      prev === "professional" ? "spiderman" : "professional"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
