import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Layout, Rocket } from "lucide-react";

export const DevelopmentProcess = () => {
  const processSteps = [
    {
      icon: <Lightbulb className="text-yellow-500" size={24} />,
      title: "Plan",
      description: "Define project goals and features",
    },
    {
      icon: <Layout className="text-blue-500" size={24} />,
      title: "Design",
      description: "Create wireframes and component structure",
    },
    {
      icon: <Code className="text-green-500" size={24} />,
      title: "Build",
      description: "Write clean, maintainable code",
    },
    {
      icon: <Rocket className="text-purple-500" size={24} />,
      title: "Deploy",
      description: "Launch on Vercel or Netlify",
    },
  ];



  return (
    <section className="section-container bg-muted/20">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-secondary mb-4">My Development Approach</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            As a student developer, I focus on planning my projects carefully, building with modern tools like React and Node.js,
            creating responsive designs that work on all devices, and continuously learning through hands-on practice.
            I use Git for version control and deploy my projects on platforms like Vercel to share them with others.
          </p>
        </div>

        {/* Simple Development Process */}
        <div className="mb-16">
          <h3 className="heading-tertiary text-center mb-8">
            How I Build Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4">{step.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools I Use */}
        <div className="text-center">
          <h3 className="heading-tertiary mb-8">Tools & Technologies</h3>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p className="font-semibold">Frontend</p>
                  <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind CSS</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p className="font-semibold">Backend</p>
                  <p className="text-sm text-muted-foreground">Node.js, Express, MongoDB</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p className="font-semibold">Tools</p>
                  <p className="text-sm text-muted-foreground">Git, VS Code, Postman</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p className="font-semibold">Deployment</p>
                  <p className="text-sm text-muted-foreground">Vercel, Netlify</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p className="font-semibold">Design</p>
                  <p className="text-sm text-muted-foreground">Figma, Responsive Design</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p className="font-semibold">Learning</p>
                  <p className="text-sm text-muted-foreground">Documentation, Tutorials, Practice</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
