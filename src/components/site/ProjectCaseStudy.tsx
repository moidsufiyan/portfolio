import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Zap,
  Target,
  Code,
  CheckCircle,
  AlertCircle,
  Lightbulb,
} from "lucide-react";

interface ProjectCaseStudyProps {
  project: {
    title: string;
    tagline: string;
    description: string;
    image?: string;
    stack: string[];
    timeline: string;
    links: {
      live?: string;
      github: string;
    };
    metrics: {
      users?: string;
      performance?: string;
      codeQuality?: string;
      timeline?: string;
    };
    technical: {
      architecture: string[];
      challenges: string[];
      solutions: string[];
      learnings: string[];
    };
    highlights: string[];
  };
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  project,
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="heading-primary">{project.title}</h1>
        <p className="text-xl text-muted-foreground">{project.tagline}</p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {project.description}
        </p>

        {/* Quick Actions */}
        <div className="flex justify-center gap-4 pt-4">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              <Button className="gap-2">
                <ExternalLink size={16} />
                View Live Demo
              </Button>
            </a>
          )}
          <a href={project.links.github} target="_blank" rel="noreferrer">
            <Button variant="outline" className="gap-2">
              <Github size={16} />
              View Source Code
            </Button>
          </a>
        </div>
      </div>

      {/* Project Image */}
      {project.image && (
        <div className="rounded-lg overflow-hidden border border-border">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-96 object-cover"
          />
        </div>
      )}

      {/* Key Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="text-primary" size={20} />
            Project Impact & Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.metrics.performance && (
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Zap className="mx-auto mb-2 text-primary" size={24} />
                <div className="font-semibold text-lg">
                  {project.metrics.performance}
                </div>
                <div className="text-sm text-muted-foreground">Performance</div>
              </div>
            )}
            {project.metrics.codeQuality && (
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Code className="mx-auto mb-2 text-primary" size={24} />
                <div className="font-semibold text-lg">
                  {project.metrics.codeQuality}
                </div>
                <div className="text-sm text-muted-foreground">
                  Code Quality
                </div>
              </div>
            )}
            {project.timeline && (
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Calendar className="mx-auto mb-2 text-primary" size={24} />
                <div className="font-semibold text-lg">{project.timeline}</div>
                <div className="text-sm text-muted-foreground">
                  Development Time
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Technical Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="text-primary" size={20} />
            Technical Architecture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">System Architecture</h4>
            <ul className="space-y-2">
              {project.technical.architecture.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-primary mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Challenges & Solutions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="text-orange-500" size={20} />
              Key Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.technical.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              Solutions Implemented
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.technical.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Key Features & Learnings */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="text-primary" size={20} />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle
                    className="text-primary flex-shrink-0"
                    size={16}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="text-yellow-500" size={20} />
              Key Learnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.technical.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{learning}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <Card className="text-center">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-lg mb-4">
            Interested in the Technical Details?
          </h3>
          <p className="text-muted-foreground mb-6">
            Explore the complete source code and documentation to see how this
            project was built.
          </p>
          <div className="flex justify-center gap-4">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer">
                <Button className="gap-2">
                  <ExternalLink size={16} />
                  Try Live Demo
                </Button>
              </a>
            )}
            <a href={project.links.github} target="_blank" rel="noreferrer">
              <Button variant="outline" className="gap-2">
                <Github size={16} />
                View on GitHub
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
