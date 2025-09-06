import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code2, Users, Target } from "lucide-react";

const projects = [
  {
    name: "WollyWay",
    description:
      "Frontend e-commerce demo with product catalog, filtering, and shopping cart built with React",
    tech: ["React", "TypeScript", "Tailwind CSS", "Context API"],
    category: "Web App",
  },
  {
    name: "Elevate X",
    description:
      "Mentorship web app with user authentication and mentor discovery UI built with Next.js",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    category: "Web App",
  },
  {
    name: "2D Platformer",
    description:
      "JavaScript game prototype exploring collision detection and character movement",
    tech: ["JavaScript", "HTML5 Canvas", "Game Physics"],
    category: "Game Dev",
  },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="section-container">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-secondary mb-6">Projects & Skills</h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are the projects I've built and the technologies I've learned
            through hands-on practice and continuous learning.
          </p>
        </div>

        {/* Simple Highlights */}
        <div className="stats-section">
          <div className="stats-highlight">
            <h3>Learning Highlights</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Key areas of focus in my development journey
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <Code2 className="mx-auto mb-4 size-10 text-primary" />
              <div className="text-2xl font-bold text-primary mb-2">2+ Years</div>
              <div className="font-semibold text-foreground mb-1">
                Learning & Building
              </div>
            </div>
            <div className="stat-card">
              <Trophy className="mx-auto mb-4 size-10 text-primary" />
              <div className="text-2xl font-bold text-primary mb-2">Live Projects</div>
              <div className="font-semibold text-foreground mb-1">
                Deployed on Vercel
              </div>
            </div>
            <div className="stat-card">
              <Users className="mx-auto mb-4 size-10 text-primary" />
              <div className="text-2xl font-bold text-primary mb-2">Modern Stack</div>
              <div className="font-semibold text-foreground mb-1">
                React, Node.js, TypeScript
              </div>
            </div>
            <div className="stat-card">
              <Target className="mx-auto mb-4 size-10 text-primary" />
              <div className="text-2xl font-bold text-primary mb-2">Multi-Domain</div>
              <div className="font-semibold text-foreground mb-1">
                Web, Security, Games
              </div>
            </div>
          </div>
        </div>

        <div className="visual-separator"></div>

        <div className="content-grid">
          <div className="section-header">
            <h3 className="heading-tertiary mb-6">My Projects</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Projects I've built to learn and practice different technologies
            </p>
          </div>

          <div className="project-showcase">
            <div className="card-grid">
              {projects.map((project, index) => (
                <Card key={project.name} className="achievement-card group">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="heading-tertiary emphasis-primary">
                        {project.name}
                      </h4>
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="project-tags">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
