import type React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portfolioImg from "@/assets/project-portfolio.jpg";
import loginImg from "@/assets/project-secure-login.jpg";
import { GamePreview } from "./GamePreview";

const ProjectCard = ({ img, title, desc, stack, preview, links }: { img?: string; title: string; desc: string; stack: string[]; preview?: React.ReactNode; links: { live?: string; github?: string } }) => {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((rect.height / 2 - y) / rect.height) * 8; // tilt max 8deg
    const ry = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <Card
      className="group tilt-card overflow-hidden hover-glow swing-hover clickable"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="relative h-48 w-full overflow-hidden">
        {preview ? (
          preview
        ) : (
          <img src={img} alt={`${title} thumbnail`} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        )}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/60 backdrop-blur-sm">
          <p className="text-sm font-semibold text-white drop-shadow">{title}</p>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">{s}</span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-3">
        <a href={links.live || "#"} target="_blank" rel="noreferrer">
          <Button variant="outline" className="btn-glow">Live Demo</Button>
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          <Button className="btn-glow">GitHub</Button>
        </a>
      </CardFooter>
    </Card>
  );
};
export const Projects = () => (
  <section id="projects" className="container py-16 md:py-24">
    <h2 className="mb-8 font-heading text-2xl font-bold md:text-3xl swing-in">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        img={portfolioImg}
        title="Personal Portfolio Website"
        desc="A fast, responsive portfolio showcasing projects and skills."
        stack={["React","Vite","Tailwind"]}
        links={{ live: "#", github: "https://github.com/myusername/portfolio" }}
      />
      <ProjectCard
        img={loginImg}
        title="Secure Login System"
        desc="Authentication flow with modern security best practices."
        stack={["Node.js","Express","JWT"]}
        links={{ live: "#", github: "https://github.com/myusername/secure-login" }}
      />
      <ProjectCard
        title="2D Platformer Game"
        desc="A fun prototype exploring physics and level design."
        stack={["JavaScript","Canvas","Game Loop"]}
        preview={<GamePreview />}
        links={{ live: "#", github: "https://github.com/myusername/2d-platformer" }}
      />
    </div>
  </section>
);
