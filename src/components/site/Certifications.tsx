import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Target: 2025",
    status: "Currently Pursuing",
    description: "Learning AWS cloud fundamentals through hands-on practice and online courses"
  },
  {
    title: "Google Analytics Fundamentals",
    issuer: "Google",
    date: "2024",
    status: "Completed",
    description: "Basic understanding of web analytics and tracking"
  }
];

const learningPaths = [
  {
    title: "React & Modern JavaScript",
    platform: "Online Courses & Documentation",
    description: "Self-directed learning through official docs, tutorials, and building projects"
  },
  {
    title: "Cybersecurity Basics",
    platform: "Academic Coursework & Self-Study",
    description: "Learning ethical hacking concepts through college courses and online resources"
  },
  {
    title: "Game Development",
    platform: "Personal Projects & Tutorials",
    description: "Exploring game physics and design through JavaScript canvas projects"
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-muted/20">
      <div className="container">
        <SectionHeader>Learning & Certifications</SectionHeader>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Certifications I'm pursuing and self-directed learning paths
        </p>

        <h3 className="font-heading text-xl font-bold text-center mb-6">Certifications</h3>
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className="surface-card p-6 hover-glow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {cert.title}
                </h3>
                <Badge 
                  variant={cert.status === "Completed" ? "default" : "secondary"} 
                  className="ml-2"
                >
                  {cert.status}
                </Badge>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-primary font-medium">{cert.issuer}</p>
                <p className="text-sm text-foreground/60">{cert.date}</p>
              </div>
              
              <p className="text-foreground/80 text-sm">{cert.description}</p>
            </Card>
          ))}
        </div>

        <h3 className="font-heading text-xl font-bold text-center mb-6">Self-Directed Learning</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {learningPaths.map((path, index) => (
            <Card key={path.title} className="surface-card p-6">
              <h4 className="font-semibold text-foreground mb-2">
                {path.title}
              </h4>
              <p className="text-sm text-primary mb-2">{path.platform}</p>
              <p className="text-foreground/70 text-sm">{path.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
