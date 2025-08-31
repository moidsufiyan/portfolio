import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Shield, Wrench } from "lucide-react";

type SkillItem = { name: string; value: number };

const SkillGroup = ({ title, Icon, items, extraClass }: { title: string; Icon: any; items: SkillItem[]; extraClass?: string }) => (
  <div className={`surface-card p-6 border-2 border-border ${extraClass ?? ""}`}>
    <div className="mb-4 flex items-center gap-2">
      <Icon className="text-primary transition-transform duration-200 hover:scale-110" />
      <h3 className="font-semibold">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {items.map((s) => (
        <div key={s.name} className="rounded-lg p-3 skill-card hover:scale-105">
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
    <section id="skills" className="container py-16 md:py-24">
      <h2 className="mb-8 font-heading text-2xl font-bold md:text-3xl swing-in">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SkillGroup title="Frontend" Icon={Code} items={frontend} />
        <SkillGroup title="Backend" Icon={Server} items={backend} />
        <SkillGroup title="Databases" Icon={Database} items={databases} />
        <SkillGroup title="Security Tools" Icon={Shield} items={security} />
        <SkillGroup title="Other Tools" Icon={Wrench} items={tools} />
        <div className="surface-card p-6 border-2 border-border">
          <h3 className="mb-4 font-semibold">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["Problem-solving", "Teamwork", "Adaptability", "Communication"].map((s) => (
              <Badge key={s} variant="secondary" className="transition-transform hover:scale-105 border border-border">{s}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
