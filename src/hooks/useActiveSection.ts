import { useEffect, useState, useCallback } from "react";

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const updateActiveSection = useCallback(
    (newActive: SectionId) => {
      if (newActive !== active) {
        setIsTransitioning(true);
        setActive(newActive);
        // Smooth transition delay
        setTimeout(() => setIsTransitioning(false), 150);
      }
    },
    [active]
  );

  useEffect(() => {
    let ticking = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (ticking) return;

        requestAnimationFrame(() => {
          // Find the section with the highest intersection ratio
          let maxRatio = 0;
          let activeSection: SectionId = "hero";

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              const id = entry.target.getAttribute("id") as SectionId | null;
              if (id) {
                maxRatio = entry.intersectionRatio;
                activeSection = id;
              }
            }
          });

          // Only update if we found a section with significant visibility
          if (maxRatio > 0.1) {
            updateActiveSection(activeSection);
          }

          ticking = false;
        });

        ticking = true;
      },
      {
        rootMargin: "-10% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      }
    );

    // Enhanced section detection with retry mechanism
    const observeSections = () => {
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    };

    // Initial observation
    observeSections();

    // Fallback: Re-observe after a short delay in case DOM isn't fully ready
    const fallbackTimeout = setTimeout(observeSections, 100);

    // Handle scroll-based detection as backup
    const handleScroll = () => {
      if (ticking) return;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Check each section's position
        for (const sectionId of SECTION_IDS) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const elementHeight = rect.height;

            // Section is considered active if it's in the viewport center area
            if (
              scrollY >= elementTop - windowHeight * 0.3 &&
              scrollY < elementTop + elementHeight - windowHeight * 0.3
            ) {
              updateActiveSection(sectionId);
              break;
            }
          }
        }

        ticking = false;
      });

      ticking = true;
    };

    // Add scroll listener as backup
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fallbackTimeout);
    };
  }, [updateActiveSection]);

  return { active, isTransitioning };
}
