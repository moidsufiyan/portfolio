import React, { useEffect, useRef } from "react";

export const SpiderWebBackground: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const webTLRef = useRef<SVGSVGElement>(null);
  const webBRRef = useRef<SVGSVGElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const tx = x * 12; // max px shift
      const ty = y * 12;
      webTLRef.current &&
        (webTLRef.current.style.transform = `translate3d(${-tx}px, ${-ty}px, 0)`);
      webBRRef.current &&
        (webBRRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`);
      particlesRef.current &&
        (particlesRef.current.style.transform = `translate3d(${tx * 0.4}px, ${
          ty * 0.4
        }px, 0)`);
    };

    const handleScroll = () => {
      const y = window.scrollY;
      const p = -(y * 0.06);
      particlesRef.current &&
        (particlesRef.current.style.transform = `translate3d(0, ${p}px, 0)`);
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll as any);
    };
  }, []);

  return (
    <div
      aria-hidden
      ref={rootRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Corner webs with parallax */}
      <svg
        ref={webTLRef}
        className="absolute -top-24 -left-24 w-[480px] h-[480px] opacity-[0.35] text-primary/60 will-change-transform"
        viewBox="0 0 100 100"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="0.8">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx="0" cy="0" r={(i + 1) * 10} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={Math.cos((i / 12) * Math.PI * 2) * 100}
              y2={Math.sin((i / 12) * Math.PI * 2) * 100}
            />
          ))}
        </g>
      </svg>

      <svg
        ref={webBRRef}
        className="absolute -bottom-24 -right-24 w-[520px] h-[520px] opacity-[0.35] text-primary/60 will-change-transform"
        viewBox="0 0 100 100"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="0.8">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx="100" cy="100" r={(i + 1) * 10} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 - Math.cos((i / 12) * Math.PI * 2) * 100}
              y2={100 - Math.sin((i / 12) * Math.PI * 2) * 100}
            />
          ))}
        </g>
      </svg>

      {/* Particles layer with subtle parallax */}
      <div
        ref={particlesRef}
        className="absolute inset-0 will-change-transform"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute block size-1.5 rounded-full bg-primary/60"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animation: `float-${i % 4} 8s ease-in-out ${(i * 0.6).toFixed(
                2
              )}s infinite` as any,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes float-0 { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-8px) } }
        @keyframes float-1 { 0%,100%{ transform: translateX(0) } 50%{ transform: translateX(10px) } }
        @keyframes float-2 { 0%,100%{ transform: translate(0,0) } 50%{ transform: translate(-10px,6px) } }
        @keyframes float-3 { 0%,100%{ transform: translate(0,0) } 50%{ transform: translate(8px,-6px) } }
      `}</style>
    </div>
  );
};
