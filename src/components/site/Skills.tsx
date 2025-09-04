import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Shield, Wrench, LucideIcon } from "lucide-react";

type SkillItem = { name: string; value: number };

const SkillGroup = ({ title, Icon, items, extraClass }: { title: string; Icon: LucideIcon; items: SkillItem[]; extraClass?: string }) => (
  <div className={`project-card p-6 ${extraClass ?? ""}`}>
    <div className="mb-4 flex items-center gap-3">
      <Icon className="text-primary transition-transform duration-200 hover:scale-110" size={20} />
      <h3 className="heading-tertiary">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-2">
      {items.map((s) => (
        <div key={s.name} className="rounded-md p-3 bg-muted/30 hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <p className="text-sm font-medium">{s.name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Skills = () => {
  const frontend: SkillItem[] = [
    { name: "HTML", value: 95 },
    { name: "CSS", value: 92 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 85 },
    { name: "React", value: 88 },
    { name: "Next.js", value: 85 },
    { name: "Tailwind CSS", value: 90 },
  ];
  const backend: SkillItem[] = [
    { name: "Node.js", value: 85 },
    { name: "Express.js", value: 82 },
    { name: "REST APIs", value: 85 },
  ];
  const databases: SkillItem[] = [
    { name: "MongoDB", value: 80 },
    { name: "MySQL", value: 78 },
  ];
  const security: SkillItem[] = [
    { name: "Kali Linux", value: 75 },
    { name: "Burp Suite", value: 72 },
    { name: "Wireshark", value: 70 },
  ];
  const tools: SkillItem[] = [
    { name: "Git", value: 88 },
    { name: "Docker", value: 75 },
    { name: "Postman", value: 80 },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-secondary mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains,
            from frontend development to cybersecurity tools.
          </p>
        </div>
        <div className="card-grid">
          <SkillGroup title="Frontend" Icon={Code} items={frontend} />
          <SkillGroup title="Backend" Icon={Server} items={backend} />
          <SkillGroup title="Databases" Icon={Database} items={databases} />
          <SkillGroup title="Security Tools" Icon={Shield} items={security} />
          <SkillGroup title="Other Tools" Icon={Wrench} items={tools} />
          <div className="project-card p-6">
            <h3 className="mb-4 heading-tertiary">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Problem-solving", "Teamwork", "Adaptability", "Communication"].map((s) => (
                <Badge key={s} variant="secondary" className="transition-transform hover:scale-105">{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
