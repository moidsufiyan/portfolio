import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    sections.forEach((el, i) => {
      el.classList.add("reveal-section");
      el.style.transitionDelay = `${i * 80}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
};
