import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code2, Users, Target } from "lucide-react";

const projects = [
  {
    name: "WollyWay",
    description:
      "Full-stack e-commerce platform for handcrafted products with advanced filtering and secure backend integration",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "E-commerce",
  },
  {
    name: "Elevate X",
    description:
      "Startup mentorship platform connecting entrepreneurs with industry experts for guidance and venture acceleration",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Firebase"],
    category: "Platform",
  },
  {
    name: "Competitive Programming",
    description:
      "Active participant in DSA challenges and coding competitions, focusing on algorithmic problem-solving",
    tech: ["Java", "Python", "C", "Data Structures", "Algorithms"],
    category: "Programming",
  },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="section-container bg-muted/20">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-secondary mb-4">Technical Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical expertise spans multiple domains, from web development to competitive programming.
            Here's a glimpse into my development journey and achievements.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="stats-grid mb-16">
          <div className="stat-card">
            <Code2 className="mx-auto mb-3 size-8 text-primary" />
            <div className="heading-tertiary font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
            <div className="text-xs text-muted-foreground mt-1">Mastered</div>
          </div>
          <div className="stat-card">
            <Trophy className="mx-auto mb-3 size-8 text-primary" />
            <div className="heading-tertiary font-bold text-primary mb-1">3+</div>
            <div className="text-sm text-muted-foreground">Major Projects</div>
            <div className="text-xs text-muted-foreground mt-1">Deployed Live</div>
          </div>
          <div className="stat-card">
            <Users className="mx-auto mb-3 size-8 text-primary" />
            <div className="heading-tertiary font-bold text-primary mb-1">2</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
            <div className="text-xs text-muted-foreground mt-1">Earned</div>
          </div>
          <div className="stat-card">
            <Target className="mx-auto mb-3 size-8 text-primary" />
            <div className="heading-tertiary font-bold text-primary mb-1">2027</div>
            <div className="text-sm text-muted-foreground">Graduation</div>
            <div className="text-xs text-muted-foreground mt-1">Expected</div>
          </div>
        </div>

        <div className="content-grid">
          <h3 className="heading-tertiary text-center mb-8">Project Highlights</h3>
          <div className="card-grid">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className="project-card group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="heading-tertiary text-primary">
                      {project.name}
                    </h4>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
