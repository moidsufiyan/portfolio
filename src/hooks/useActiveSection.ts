import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "achievements",
  "blog",
  "quotes",
  "contact",
] as const;
export type SectionId = typeof SECTION_IDS[number];

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
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { active };
}
