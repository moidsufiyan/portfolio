import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GitBranch,
  Code,
  TestTube,
  Rocket,
  Users,
  MessageSquare,
  Target,
  CheckCircle,
  Clock,
  Lightbulb,
} from "lucide-react";

export const DevelopmentProcess = () => {
  const processSteps = [
    {
      icon: <Lightbulb className="text-yellow-500" size={24} />,
      title: "Discovery & Planning",
      description:
        "Requirements gathering, user research, and technical architecture planning",
      details: [
        "Stakeholder interviews and user personas",
        "Technical feasibility analysis",
        "Architecture design and technology selection",
        "Project timeline and milestone planning",
      ],
    },
    {
      icon: <Code className="text-blue-500" size={24} />,
      title: "Development",
      description:
        "Agile development with clean code practices and version control",
      details: [
        "Test-driven development (TDD)",
        "Git workflow with feature branches",
        "Code reviews and pair programming",
        "Continuous integration setup",
      ],
    },
    {
      icon: <TestTube className="text-green-500" size={24} />,
      title: "Testing & QA",
      description:
        "Comprehensive testing strategy ensuring quality and reliability",
      details: [
        "Unit and integration testing",
        "Performance testing and optimization",
        "User acceptance testing (UAT)",
        "Security vulnerability assessment",
      ],
    },
    {
      icon: <Rocket className="text-purple-500" size={24} />,
      title: "Deployment",
      description: "Production deployment with monitoring and maintenance",
      details: [
        "CI/CD pipeline setup",
        "Production environment configuration",
        "Performance monitoring implementation",
        "Documentation and handover",
      ],
    },
  ];

  const methodologies = [
    {
      name: "Agile Development",
      description: "Iterative development with regular feedback cycles",
      tools: ["Jira", "Kanban Boards", "Sprint Planning"],
    },
    {
      name: "Clean Code Practices",
      description: "Maintainable, readable, and scalable code architecture",
      tools: ["ESLint", "Prettier", "Code Reviews"],
    },
    {
      name: "Version Control",
      description: "Structured Git workflow with proper branching strategy",
      tools: ["Git", "GitHub", "Pull Requests"],
    },
    {
      name: "Testing Strategy",
      description:
        "Comprehensive testing ensuring code quality and reliability",
      tools: ["Jest", "React Testing Library", "Cypress"],
    },
  ];

  const achievements = [
    {
      metric: "99%",
      label: "Code Coverage",
      description: "Comprehensive test coverage across all projects",
    },
    {
      metric: "< 2s",
      label: "Load Time",
      description: "Optimized performance for excellent UX",
    },
    {
      metric: "100%",
      label: "Accessibility",
      description: "WCAG 2.1 AA compliance in all projects",
    },
    {
      metric: "Zero",
      label: "Security Issues",
      description: "No critical security vulnerabilities",
    },
  ];

  return (
    <section className="section-container bg-muted/20">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-secondary mb-4">Development Methodology</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My approach to software development combines industry best practices
            with modern tooling to deliver high-quality, maintainable, and
            scalable solutions.
          </p>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h3 className="heading-tertiary text-center mb-8">
            Development Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">{step.icon}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 text-xs">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2">
                        <CheckCircle
                          className="text-primary flex-shrink-0"
                          size={12}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Methodologies */}
        <div className="mb-16">
          <h3 className="heading-tertiary text-center mb-8">
            Core Methodologies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {methodologies.map((methodology, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{methodology.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {methodology.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {methodology.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div>
          <h3 className="heading-tertiary text-center mb-8">
            Quality Metrics & Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {achievement.metric}
                  </div>
                  <div className="font-semibold mb-2">{achievement.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaboration & Communication */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="mx-auto mb-4 text-primary" size={32} />
              <h4 className="font-semibold mb-2">Team Collaboration</h4>
              <p className="text-sm text-muted-foreground">
                Experience working in cross-functional teams with designers,
                product managers, and stakeholders.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <MessageSquare className="mx-auto mb-4 text-primary" size={32} />
              <h4 className="font-semibold mb-2">Clear Communication</h4>
              <p className="text-sm text-muted-foreground">
                Regular progress updates, technical documentation, and effective
                stakeholder communication.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Target className="mx-auto mb-4 text-primary" size={32} />
              <h4 className="font-semibold mb-2">Results-Driven</h4>
              <p className="text-sm text-muted-foreground">
                Focus on delivering measurable business value and user
                satisfaction through quality software.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
