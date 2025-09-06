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
import {
  ExternalLink,
  Github,
  Code,
  Users,
  Calendar,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
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
    tagline: "E-commerce Frontend Demo",
    description:
      "A frontend e-commerce demo I built to learn React and state management. Features a product catalog, filtering, and shopping cart.",
    longDescription:
      "WollyWay is a frontend e-commerce project I built to practice React, TypeScript, and Tailwind CSS. It includes a product catalog, category filtering, shopping cart functionality, and responsive design. This project helped me learn component architecture, state management, and how to create user-friendly interfaces.",
    image: wollywayImg,
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Stripe API",
    ],
    category: "E-commerce",
    status: "Live",
    timeline: "3 months",
    links: {
      live: "https://wollyway.vercel.app/",
      github: "https://github.com/moidsufiyan/wollyway-wonders",
    },
    metrics: {
      timeline: "3 months learning project",
    },
    technical: {
      architecture: [
        "React with hooks for UI",
        "Context API for state management",
        "Tailwind CSS for styling",
        "Responsive grid layouts",
      ],
      challenges: [
        "Managing cart state across components",
        "Creating reusable product components",
        "Implementing category filtering",
        "Making the design mobile-responsive",
      ],
      solutions: [
        "Used React Context for global cart state",
        "Built reusable component library",
        "Created filter logic with JavaScript array methods",
        "Applied Tailwind's responsive utilities",
      ],
      learnings: [
        "React component composition",
        "State management patterns",
        "Responsive design principles",
        "Modern CSS with Tailwind",
      ],
    },
    highlights: [
      "Product catalog display",
      "Shopping cart functionality",
      "Category filtering",
      "Responsive design",
    ],
  },
  {
    id: "elevate-x",
    title: "Elevate X",
    tagline: "Mentorship Web App UI",
    description:
      "A mentorship web app I built to learn Next.js and TypeScript. Features user authentication and mentor discovery interface.",
    longDescription:
      "Elevate X is a web application I developed to practice Next.js, TypeScript, and Firebase. It includes user authentication, a mentor discovery UI, and responsive design. This project taught me component libraries, routing in Next.js, and working with TypeScript for type safety.",
    image: elevateXImg,
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Firebase",
      "Tailwind CSS",
      "NextAuth.js",
    ],
    category: "Platform",
    status: "Live",
    timeline: "4 months",
    links: {
      live: "https://elevate-x-gules.vercel.app/",
      github: "https://github.com/moidsufiyan/Elevate-X",
    },
    metrics: {
      timeline: "4 months learning project",
    },
    technical: {
      architecture: [
        "Next.js pages and routing",
        "Firebase for user auth",
        "TypeScript for type checking",
        "Tailwind CSS components",
      ],
      challenges: [
        "Learning Next.js routing system",
        "Implementing Firebase authentication",
        "Working with TypeScript types",
        "Creating reusable components",
      ],
      solutions: [
        "Followed Next.js documentation to understand routing",
        "Used Firebase Auth SDK for login system",
        "Gradually added TypeScript types as I learned",
        "Built a component library for consistency",
      ],
      learnings: [
        "Next.js fundamentals",
        "TypeScript basics",
        "Firebase authentication",
        "Component-based architecture",
      ],
    },
    highlights: [
      "User login and registration",
      "Mentor profile display",
      "Responsive navigation",
      "Clean UI design",
    ],
  },
  {
    id: "platformer-game",
    title: "2D Platformer Game",
    tagline: "JavaScript Game Prototype",
    description:
      "A JavaScript/Canvas prototype I built to explore game physics, character movement, and collision detection.",
    longDescription:
      "This 2D platformer is a learning project where I explored game development concepts using JavaScript and HTML5 Canvas. I focused on understanding collision detection, character movement, basic physics, and animation loops. It helped me learn how games handle player input and physics calculations.",
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
      timeline: "2 months learning project",
    },
    technical: {
      architecture: [
        "JavaScript game loop",
        "HTML5 Canvas rendering",
        "Basic physics calculations",
        "Keyboard input handling",
      ],
      challenges: [
        "Understanding collision detection",
        "Making character movement feel smooth",
        "Learning game loop concepts",
        "Handling different screen sizes",
      ],
      solutions: [
        "Researched AABB collision detection basics",
        "Used requestAnimationFrame for smooth updates",
        "Learned about game states and loops",
        "Made canvas responsive with scaling",
      ],
      learnings: [
        "Game loop fundamentals",
        "Basic 2D physics",
        "Canvas API usage",
        "Animation timing",
      ],
    },
    highlights: [
      "Character movement and jumping",
      "Basic collision detection",
      "Simple level design",
      "Smooth animations",
    ],
  },
];

const ProjectCard = ({ project }: { project: ProjectData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((rect.height / 2 - y) / rect.height) * 8;
    const ry = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Completed":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card
      className="project-card group"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-muted/30 to-muted/60">
        {project.preview ? (
          project.preview
        ) : (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute top-4 right-4">
          <Badge
            className={`text-xs font-medium border ${getStatusColor(
              project.status
            )}`}
          >
            {project.status}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-semibold text-white drop-shadow-lg">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Project Content */}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="heading-tertiary text-foreground">
            {project.title}
          </CardTitle>
          <Badge variant="outline" className="text-xs ml-2">
            {project.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{project.tagline}</p>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {isExpanded ? project.longDescription : project.description}
        </p>

        {/* Key Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-2 gap-2 p-3 bg-muted/20 rounded-lg">
            {project.metrics.performance && (
              <div className="flex items-center gap-2 text-xs">
                <Zap size={12} className="text-primary" />
                <span>{project.metrics.performance}</span>
              </div>
            )}
            {project.metrics.timeline && (
              <div className="flex items-center gap-2 text-xs">
                <Calendar size={12} className="text-primary" />
                <span>{project.metrics.timeline}</span>
              </div>
            )}
            {project.metrics.codeQuality && (
              <div className="flex items-center gap-2 text-xs">
                <Target size={12} className="text-primary" />
                <span>{project.metrics.codeQuality}</span>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Highlights */}
        {isExpanded && (
          <div className="space-y-3 pt-2 border-t border-border/50">
            <h4 className="text-sm font-semibold">Key Features</h4>
            <ul className="space-y-1">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="text-xs text-muted-foreground flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Technical Details */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">
                Technical Implementation
              </h4>
              <div className="space-y-2">
                <div>
                  <h5 className="text-xs font-medium text-muted-foreground mb-1">
                    Architecture
                  </h5>
                  <ul className="space-y-1">
                    {project.technical.architecture
                      .slice(0, 3)
                      .map((item, index) => (
                        <li
                          key={index}
                          className="text-xs text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-medium text-muted-foreground mb-1">
                    Key Challenges Solved
                  </h5>
                  <ul className="space-y-1">
                    {project.technical.challenges
                      .slice(0, 2)
                      .map((challenge, index) => (
                        <li
                          key={index}
                          className="text-xs text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                          {challenge}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="gap-2 pt-2 flex-col">
        {/* Action Buttons */}
        <div className="flex gap-2 w-full">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <Button variant="outline" className="w-full text-xs" size="sm">
                <ExternalLink size={14} />
                Live Demo
              </Button>
            </a>
          )}
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full text-xs" size="sm">
              <Github size={14} />
              Code
            </Button>
          </a>
        </div>

        {/* Expand/Collapse Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-xs text-muted-foreground hover:text-foreground"
        >
          {isExpanded ? "Show Less" : "View Case Study"}
          <Code size={12} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export const Projects = () => (
  <section id="projects" className="section-container">
    <div className="container">
      <div className="section-header">
        <h2 className="heading-secondary mb-6">
          Featured Project Case Studies
        </h2>
        <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          A showcase of my development journey through hands-on projects. Each
          project represents significant learning and growth, demonstrating
          technical skills, problem-solving approaches, and real-world
          application of development concepts.
        </p>
      </div>

      {/* Project Impact Statistics */}
      <div className="stats-section">
        <div className="stats-highlight">
          <h3>Development Journey</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones and technologies that define my growth as a
            full-stack developer and problem solver.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <Code className="mx-auto mb-4 size-10 text-primary" />
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="font-semibold text-foreground mb-1">
              Technologies
            </div>
            <div className="text-sm text-muted-foreground">
              Frontend, Backend, Security
            </div>
          </div>
          <div className="stat-card">
            <Github className="mx-auto mb-4 size-10 text-primary" />
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="font-semibold text-foreground mb-1">
              Live Applications
            </div>
            <div className="text-sm text-muted-foreground">
              Production deployments
            </div>
          </div>
          <div className="stat-card">
            <TrendingUp className="mx-auto mb-4 size-10 text-primary" />
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="font-semibold text-foreground mb-1">
              Years Learning
            </div>
            <div className="text-sm text-muted-foreground">
              Continuous development
            </div>
          </div>
          <div className="stat-card">
            <Target className="mx-auto mb-4 size-10 text-primary" />
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="font-semibold text-foreground mb-1">
              Core Domains
            </div>
            <div className="text-sm text-muted-foreground">
              Web, Security, Games
            </div>
          </div>
        </div>
      </div>

      <div className="visual-separator"></div>

      <div className="project-showcase">
        <div className="section-header">
          <h3 className="heading-tertiary mb-6">Detailed Project Portfolio</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore comprehensive case studies with technical deep-dives,
            challenges faced, solutions implemented, and key learnings from each
            project.
          </p>
        </div>

        <div className="card-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
