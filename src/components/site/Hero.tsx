import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile-new.jpg";
import { SpiderWebBackground } from "./SpiderWebBackground";
import { motion } from "framer-motion";
import reactLogo from "@/assets/icons/react.svg";
import nodeLogo from "@/assets/icons/node.svg";
import dockerLogo from "@/assets/icons/docker.svg";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

export const Hero = () => {
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Interactive web background - theme-aware styling */}
      <div className="absolute inset-0" aria-hidden style={{ zIndex: 0 }}>
        <SpiderWebBackground />
        {theme === "spiderman" && <div className="web-overlay" />}
        {/* Additional web pattern overlay - theme-aware */}
        <div
          className={`absolute inset-0 ${
            theme === "spiderman" ? "opacity-[0.12]" : "opacity-[0.06]"
          }`}
          style={{
            backgroundImage:
              theme === "spiderman"
                ? `
                radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px)
              `
                : `
                radial-gradient(circle at 25% 25%, hsl(var(--muted-foreground)) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, hsl(var(--muted-foreground)) 0.5px, transparent 0.5px)
              `,
            backgroundSize:
              theme === "spiderman"
                ? "60px 60px, 40px 40px"
                : "80px 80px, 60px 60px",
          }}
        />
      </div>

      <div
        className="container grid gap-10 py-16 md:grid-cols-[auto,1fr] md:gap-16 md:py-24 relative"
        style={{ zIndex: 10 }}
      >
        <div className="mx-auto flex flex-col items-center md:items-start">
          <div className="relative mb-6">
            {/* Loading placeholder */}
            {!imageLoaded && !imageError && (
              <div className="size-36 rounded-full border-2 border-primary bg-muted flex items-center justify-center md:size-44 animate-pulse">
                <span className="text-2xl font-bold text-muted-foreground">
                  MS
                </span>
              </div>
            )}
            {/* Fallback placeholder for when image fails to load */}
            {imageError && (
              <div className="size-36 rounded-full border-2 border-primary bg-muted flex items-center justify-center md:size-44">
                <span className="text-2xl font-bold text-muted-foreground">
                  MS
                </span>
              </div>
            )}
            {!imageError && (
              <motion.img
                src={profileImg}
                alt="Portrait of Mohammed Moid Sufiyan"
                className={`size-36 rounded-full border-2 border-primary object-cover md:size-44 bg-muted transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ boxShadow: "var(--shadow-glow)" }}
                onLoad={() => {
                  setImageLoaded(true);
                  setImageError(false);
                }}
                onError={(e) => {
                  console.error("Profile image failed to load:", e);
                  setImageError(true);
                  setImageLoaded(false);
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            )}
            <motion.span
              className="absolute -inset-1 -z-10 rounded-full bg-primary/10 blur-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </div>

          <motion.h1
            className="font-heading text-4xl font-extrabold leading-tight md:text-6xl"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            Mohammed Moid Sufiyan
          </motion.h1>
          <motion.p
            className="mt-2 text-lg text-foreground/80 md:text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Full-Stack Developer & Cybersecurity and Game Designing Enthusiast
          </motion.p>
          <motion.p
            className="mt-4 max-w-xl text-foreground/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Turning ideas into digital realities — from secure, scalable web
            apps to immersive game worlds.
          </motion.p>

          <motion.div
            className="mt-6 p-4 border-l-4 border-primary/30 bg-primary/5 rounded-r-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p className="text-lg font-medium text-primary/90 italic">
              "With great power comes great responsibility — and great code."
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="hero"
              onClick={scrollToProjects}
              className="btn-glow"
            >
              View My Work
            </Button>
            <a href="/resume.pdf" download>
              <Button variant="outline" className="btn-glow">
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Floating tech icons swinging in */}
        <div className="relative hidden md:block">
          <div className="pointer-events-none absolute inset-0">
            <motion.span
              className="absolute left-8 top-10 h-10 w-px bg-foreground/20 dark:bg-white/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            />
            <motion.img
              src={reactLogo}
              alt="React logo"
              className="absolute left-6 top-20 size-8 opacity-90 drop-shadow gentle-swing"
              initial={{ rotate: -20, y: -20, opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.3,
              }}
            />

            <motion.span
              className="absolute left-1/2 top-4 h-12 w-px bg-foreground/20 dark:bg-white/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            />
            <motion.img
              src={nodeLogo}
              alt="Node.js logo"
              className="absolute left-[calc(50%-16px)] top-16 size-8 opacity-90 drop-shadow gentle-swing"
              style={{ animationDelay: "1s" }}
              initial={{ rotate: 15, y: -20, opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.4,
              }}
            />

            <motion.span
              className="absolute right-8 top-8 h-12 w-px bg-foreground/20 dark:bg-white/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            />
            <motion.img
              src={dockerLogo}
              alt="Docker logo"
              className="absolute right-6 top-20 size-8 opacity-90 drop-shadow gentle-swing"
              style={{ animationDelay: "2s" }}
              initial={{ rotate: -10, y: -20, opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.5,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
