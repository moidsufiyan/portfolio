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
    longDescription: "WollyWay is a comprehensive e-commerce solution designed specifically for artisans and creators of handcrafted products. The platform addresses the unique challenges faced by small-scale creators in selling their products online, featuring advanced product filtering, secure payment processing, and inventory management.",
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
    longDescription: "Elevate X transforms the traditional mentorship model by creating a structured platform where startup founders can connect with experienced industry professionals, access resources, and accelerate their business growth through AI-powered matching and real-time collaboration tools.",
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
    longDescription: "This 2D platformer game showcases custom physics engine implementation, level design principles, and game development fundamentals using vanilla JavaScript and HTML5 Canvas. Features include collision detection, particle systems, and smooth animations.",
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
      case "Live": return "bg-green-100 text-green-800 border-green-200";
      case "In Development": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Completed": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
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
          <Badge className={`text-xs font-medium border ${getStatusColor(project.status)}`}>
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
          <CardTitle className="heading-tertiary text-foreground">{project.title}</CardTitle>
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
            {project.metrics.users && (
              <div className="flex items-center gap-2 text-xs">
                <Users size={12} className="text-primary" />
                <span>{project.metrics.users}</span>
              </div>
            )}
            {project.metrics.performance && (
              <div className="flex items-center gap-2 text-xs">
                <Zap size={12} className="text-primary" />
                <span>{project.metrics.performance}</span>
              </div>
            )}
            {project.metrics.timeline && (
              <div className="flex items-center gap-2 text-xs">
                <Calendar size={12} className="text-primary" />
                <span>{project.timeline}</span>
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
                <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Technical Details */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Technical Implementation</h4>
              <div className="space-y-2">
                <div>
                  <h5 className="text-xs font-medium text-muted-foreground mb-1">Architecture</h5>
                  <ul className="space-y-1">
                    {project.technical.architecture.slice(0, 3).map((item, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-medium text-muted-foreground mb-1">Key Challenges Solved</h5>
                  <ul className="space-y-1">
                    {project.technical.challenges.slice(0, 2).map((challenge, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
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
            <a href={project.links.live} target="_blank" rel="noreferrer" className="flex-1">
              <Button variant="outline" className="w-full text-xs" size="sm">
                <ExternalLink size={14} />
                Live Demo
              </Button>
            </a>
          )}
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex-1">
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
      <div className="section-header text-center">
        <h2 className="heading-secondary mb-4">Project Case Studies</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Comprehensive showcases of my development journey, featuring detailed technical implementations, 
          challenges overcome, and measurable outcomes. Each project tells a complete story from conception to deployment.
        </p>
      </div>
      
      {/* Project Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="text-center p-4 bg-card border border-border rounded-lg">
          <TrendingUp className="mx-auto mb-2 size-6 text-primary" />
          <div className="font-bold text-lg">700+</div>
          <div className="text-xs text-muted-foreground">Total Users Reached</div>
        </div>
        <div className="text-center p-4 bg-card border border-border rounded-lg">
          <Code className="mx-auto mb-2 size-6 text-primary" />
          <div className="font-bold text-lg">10,000+</div>
          <div className="text-xs text-muted-foreground">Lines of Code</div>
        </div>
        <div className="text-center p-4 bg-card border border-border rounded-lg">
          <Github className="mx-auto mb-2 size-6 text-primary" />
          <div className="font-bold text-lg">3</div>
          <div className="text-xs text-muted-foreground">Open Source Projects</div>
        </div>
        <div className="text-center p-4 bg-card border border-border rounded-lg">
          <Target className="mx-auto mb-2 size-6 text-primary" />
          <div className="font-bold text-lg">99%</div>
          <div className="text-xs text-muted-foreground">Project Success Rate</div>
        </div>
      </div>

      <div className="card-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);
