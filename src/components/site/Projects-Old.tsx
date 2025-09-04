import type React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Users, Calendar, Zap, Target, TrendingUp } from "lucide-react";
import wollywayImg from "@/assets/project-wollyway.jpeg";
import elevateXImg from "@/assets/project-elevate-x.png";
import { GamePreview } from "./GamePreview";

interface ProjectMetrics {
  users?: string;
  performance?: string;
  codeQuality?: string;
  timeline?: string;
}

interface TechnicalDetails {
  architecture: string[];
  challenges: string[];
  solutions: string[];
  learnings: string[];
}

interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image?: string;
  preview?: React.ReactNode;
  stack: string[];
  category: string;
  status: "Live" | "In Development" | "Completed";
  timeline: string;
  links: {
    live?: string;
    github: string;
    demo?: string;
  };
  metrics: ProjectMetrics;
  technical: TechnicalDetails;
  highlights: string[];
}

const projectsData: ProjectData[] = [
  {
    id: "wollyway",
    title: "WollyWay",
    tagline: "E-commerce Revolution for Handcrafted Products",
    description: "Full-stack e-commerce platform for handcrafted products with advanced filtering and secure backend integration.",
    longDescription: "WollyWay is a comprehensive e-commerce solution designed specifically for artisans and creators of handcrafted products. The platform addresses the unique challenges faced by small-scale creators in selling their products online.",
    image: wollywayImg,
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Stripe API"],
    category: "E-commerce",
    status: "Live",
    timeline: "3 months",
    links: {
      live: "https://wollyway.vercel.app/",
      github: "https://github.com/moidsufiyan/wollyway-wonders",
    },
    metrics: {
      users: "500+ registered users",
      performance: "< 2s load time",
      codeQuality: "95% test coverage",
      timeline: "Delivered 2 weeks ahead"
    },
    technical: {
      architecture: [
        "RESTful API with Express.js",
        "MongoDB with Mongoose ODM",
        "JWT-based authentication",
        "Responsive React frontend",
        "Stripe payment integration"
      ],
      challenges: [
        "Complex product filtering system",
        "Secure payment processing",
        "Inventory management",
        "Image optimization for fast loading"
      ],
      solutions: [
        "Implemented advanced MongoDB aggregation pipelines",
        "Used Stripe's secure payment APIs with webhook validation",
        "Built real-time inventory tracking with Socket.io",
        "Optimized images with lazy loading and WebP format"
      ],
      learnings: [
        "Advanced database optimization techniques",
        "Payment gateway integration best practices",
        "User experience design for e-commerce",
        "Performance optimization strategies"
      ]
    },
    highlights: [
      "Featured product recommendation engine",
      "Real-time inventory management",
      "Secure payment processing",
      "Mobile-responsive design"
    ]
  },
  {
    id: "elevate-x",
    title: "Elevate X",
    tagline: "Bridging Entrepreneurs with Industry Experts",
    description: "Startup mentorship platform connecting entrepreneurs with industry experts for guidance and venture acceleration.",
    longDescription: "Elevate X transforms the traditional mentorship model by creating a structured platform where startup founders can connect with experienced industry professionals, access resources, and accelerate their business growth.",
    image: elevateXImg,
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Firebase", "Tailwind CSS", "NextAuth.js"],
    category: "Platform",
    status: "Live",
    timeline: "4 months",
    links: {
      live: "https://elevate-x-gules.vercel.app/",
      github: "https://github.com/moidsufiyan/Elevate-X",
    },
    metrics: {
      users: "200+ entrepreneurs",
      performance: "99.9% uptime",
      codeQuality: "TypeScript for type safety",
      timeline: "Launched successfully"
    },
    technical: {
      architecture: [
        "Next.js with App Router",
        "PostgreSQL with Prisma ORM",
        "Firebase for real-time features",
        "NextAuth.js for authentication",
        "Vercel for deployment"
      ],
      challenges: [
        "Complex matching algorithm for mentors/mentees",
        "Real-time communication system",
        "Scalable database design",
        "User onboarding flow optimization"
      ],
      solutions: [
        "Developed sophisticated matching algorithm based on industry, experience, and goals",
        "Integrated Firebase for real-time messaging and notifications",
        "Designed normalized database schema with efficient indexing",
        "Created multi-step onboarding with progress tracking"
      ],
      learnings: [
        "Advanced Next.js patterns and optimization",
        "Database design for complex relationships",
        "Real-time system architecture",
        "User experience research and testing"
      ]
    },
    highlights: [
      "AI-powered mentor matching",
      "Real-time messaging system",
      "Progress tracking dashboard",
      "Resource library and tools"
    ]
  },
  {
    id: "platformer-game",
    title: "2D Platformer Game",
    tagline: "Physics-Based Gaming Experience",
    description: "A fun prototype exploring physics and level design with smooth character controls and engaging gameplay mechanics.",
    longDescription: "This 2D platformer game showcases custom physics engine implementation, level design principles, and game development fundamentals using vanilla JavaScript and HTML5 Canvas.",
    preview: <GamePreview />,
    stack: ["JavaScript", "HTML5 Canvas", "Game Physics", "Animation"],
    category: "Game Development",
    status: "Completed",
    timeline: "2 months",
    links: {
      github: "https://github.com/moidsufiyan/2d-platformer-game",
      demo: "#",
    },
    metrics: {
      performance: "60 FPS gameplay",
      codeQuality: "Modular architecture",
      timeline: "Personal project"
    },
    technical: {
      architecture: [
        "Custom physics engine",
        "Component-based entity system",
        "Canvas rendering pipeline",
        "Input handling system"
      ],
      challenges: [
        "Smooth collision detection",
        "Consistent frame rate",
        "Level design tools",
        "Character animation system"
      ],
      solutions: [
        "Implemented AABB collision detection with spatial partitioning",
        "Used requestAnimationFrame with delta time for smooth animation",
        "Built level editor with JSON export/import",
        "Created sprite-based animation system with tweening"
      ],
      learnings: [
        "Game physics and mathematics",
        "Performance optimization for games",
        "Animation and visual design",
        "Game development workflows"
      ]
    },
    highlights: [
      "Custom physics engine",
      "Smooth character controls",
      "Multiple game levels",
      "Particle effects system"
    ]
  }
];
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
