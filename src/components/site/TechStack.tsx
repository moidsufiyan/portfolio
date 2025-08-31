import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code2, Users, Target } from "lucide-react";

const projects = [
  {
    name: "WollyWay",
    description: "Full-stack e-commerce platform for handcrafted products with advanced filtering and secure backend integration",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "E-commerce"
  },
  {
    name: "Elevate X", 
    description: "Startup mentorship platform connecting entrepreneurs with industry experts for guidance and venture acceleration",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Firebase"],
    category: "Platform"
  },
  {
    name: "Competitive Programming",
    description: "Active participant in DSA challenges and coding competitions, focusing on algorithmic problem-solving",
    tech: ["C++", "Python", "Data Structures", "Algorithms"],
    category: "Programming"
  }
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-16 md:py-24">
      <div className="container">
        <h2 className="mb-6 font-heading text-2xl font-bold md:text-3xl text-center">Featured Projects & Experience</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Showcasing real-world applications and technical achievements
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={project.name} className="surface-card p-6 hover-glow group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-xl font-bold text-primary">
                  {project.name}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid gap-4 text-center md:grid-cols-4">
          <div className="surface-card p-4">
            <Code2 className="mx-auto mb-2 size-6 text-primary" />
            <div className="font-heading text-2xl font-bold">15+</div>
            <div className="text-sm text-foreground/70">Technologies</div>
          </div>
          <div className="surface-card p-4">
            <Trophy className="mx-auto mb-2 size-6 text-primary" />
            <div className="font-heading text-2xl font-bold">3+</div>
            <div className="text-sm text-foreground/70">Major Projects</div>
          </div>
          <div className="surface-card p-4">
            <Users className="mx-auto mb-2 size-6 text-primary" />
            <div className="font-heading text-2xl font-bold">2</div>
            <div className="text-sm text-foreground/70">Certifications</div>
          </div>
          <div className="surface-card p-4">
            <Target className="mx-auto mb-2 size-6 text-primary" />
            <div className="font-heading text-2xl font-bold">2027</div>
            <div className="text-sm text-foreground/70">Graduation</div>
          </div>
        </div>
      </div>
    </section>
  );
};