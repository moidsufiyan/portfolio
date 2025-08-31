import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    status: "Active",
    description: "Foundational understanding of AWS cloud services and architecture"
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    status: "Active", 
    description: "Advanced penetration testing and ethical hacking methodologies"
  },
  {
    title: "Unity Certified Developer",
    issuer: "Unity Technologies",
    date: "2023",
    status: "Active",
    description: "Professional game development using Unity engine and C#"
  },
  {
    title: "React Developer Certificate",
    issuer: "Meta",
    date: "2022",
    status: "Active",
    description: "Advanced React development patterns and best practices"
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-muted/20">
      <div className="container">
        <SectionHeader>Certifications & Training</SectionHeader>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Professional certifications that validate my expertise
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className="surface-card p-6 hover-glow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {cert.title}
                </h3>
                <Badge variant="secondary" className="ml-2">
                  {cert.status}
                </Badge>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-primary font-medium">{cert.issuer}</p>
                <p className="text-sm text-foreground/60">{cert.date}</p>
              </div>
              
              <p className="text-foreground/80">{cert.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};