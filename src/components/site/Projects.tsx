import type React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import wollywayImg from "@/assets/project-wollyway.jpeg";
import elevateXImg from "@/assets/project-elevate-x.png";
import { GamePreview } from "./GamePreview";

const ProjectCard = ({
  img,
  title,
  desc,
  stack,
  preview,
  links,
}: {
  img?: string;
  title: string;
  desc: string;
  stack: string[];
  preview?: React.ReactNode;
  links: { live?: string; github?: string };
}) => {
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
      className="project-card group"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-muted/30 to-muted/60">
        {preview ? (
          preview
        ) : (
          <img
            src={img}
            alt={`${title} thumbnail`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-semibold text-white drop-shadow-lg">
            {title}
          </p>
        </div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="heading-tertiary text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-3 pt-2">
        <a href={links.live || "#"} target="_blank" rel="noreferrer" className="flex-1">
          <Button variant="outline" className="w-full">
            Live Demo
          </Button>
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button className="w-full">
            GitHub
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};
export const Projects = () => (
  <section id="projects" className="section-container">
    <div className="container">
      <div className="section-header text-center">
        <h2 className="heading-secondary mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent work, from full-stack web applications to creative game prototypes.
          Each project demonstrates different technical skills and problem-solving approaches.
        </p>
      </div>
      <div className="card-grid">
        <ProjectCard
          img={wollywayImg}
          title="WollyWay"
          desc="Full-stack e-commerce platform for handcrafted products with advanced filtering and secure backend integration."
          stack={["React", "Node.js", "MongoDB", "Tailwind CSS"]}
          links={{
            live: "https://wollyway.vercel.app/",
            github: "https://github.com/moidsufiyan/wollyway-wonders",
          }}
        />
        <ProjectCard
          img={elevateXImg}
          title="Elevate X"
          desc="Startup mentorship platform connecting entrepreneurs with industry experts for guidance and venture acceleration."
          stack={["Next.js", "TypeScript", "PostgreSQL", "Firebase"]}
          links={{
            live: "https://elevate-x-gules.vercel.app/",
            github: "https://github.com/moidsufiyan/Elevate-X",
          }}
        />
        <ProjectCard
          title="2D Platformer Game"
          desc="A fun prototype exploring physics and level design."
          stack={["JavaScript", "Canvas", "Game Loop"]}
          preview={<GamePreview />}
          links={{
            live: "#",
            github: "https://github.com/myusername/2d-platformer",
          }}
        />
      </div>
    </div>
  </section>
);
