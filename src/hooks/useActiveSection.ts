import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "achievements",
  "contact",
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") as SectionId | null;
            if (id) setActive(id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { active };
}
