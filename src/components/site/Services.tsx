import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Shield, Gamepad2, Database, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies like React, Node.js, and TypeScript."
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Secure application development, vulnerability assessments, and implementation of security best practices."
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Interactive game experiences using modern game engines and web technologies."
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database architecture and optimization for scalable applications."
  },
  {
    icon: Globe,
    title: "API Integration",
    description: "RESTful API development and third-party service integrations."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Application performance tuning and optimization for better user experience."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <SectionHeader>What I Do</SectionHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};