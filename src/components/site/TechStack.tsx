import { Card, CardContent } from "@/components/ui/card";
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
    <section id="tech-stack" className="section-container">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-secondary mb-6">Technical Journey</h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My technical expertise spans multiple domains, from web development
            to competitive programming. Here's a comprehensive look at my
            development journey, achievements, and the technologies I've
            mastered.
          </p>
        </div>

        {/* Contextual Statistics Section */}
        <div className="stats-section">
          <div className="stats-highlight">
            <h3>Development Achievements</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Over 2 years of dedicated learning and building, these numbers
              represent my technical growth and real-world impact.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <Code2 className="mx-auto mb-4 size-10 text-primary" />
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="font-semibold text-foreground mb-1">
                Technologies
              </div>
              <div className="text-sm text-muted-foreground">
                Frontend, Backend, DevOps & Security
              </div>
            </div>
            <div className="stat-card">
              <Trophy className="mx-auto mb-4 size-10 text-primary" />
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="font-semibold text-foreground mb-1">
                Major Projects
              </div>
              <div className="text-sm text-muted-foreground">
                Live applications with real users
              </div>
            </div>
            <div className="stat-card">
              <Users className="mx-auto mb-4 size-10 text-primary" />
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="font-semibold text-foreground mb-1">
                Years Learning
              </div>
              <div className="text-sm text-muted-foreground">
                Continuous skill development
              </div>
            </div>
            <div className="stat-card">
              <Target className="mx-auto mb-4 size-10 text-primary" />
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="font-semibold text-foreground mb-1">
                Core Domains
              </div>
              <div className="text-sm text-muted-foreground">
                Web Dev, Security & Game Design
              </div>
            </div>
          </div>
        </div>

        <div className="visual-separator"></div>

        <div className="content-grid">
          <div className="section-header">
            <h3 className="heading-tertiary mb-6">Featured Projects</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each project represents a significant milestone in my technical
              journey, showcasing different aspects of my skills and
              problem-solving approach.
            </p>
          </div>

          <div className="project-showcase">
            <div className="card-grid">
              {projects.map((project, index) => (
                <Card key={project.name} className="achievement-card group">
                  <CardContent className="pt-6">
                    <div className="project-meta">
                      <span className="emphasis-accent">
                        {project.category}
                      </span>
                      <span>Featured</span>
                    </div>
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
