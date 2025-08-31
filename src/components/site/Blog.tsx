import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Secure Web Applications: Best Practices",
    description: "Learn essential security practices for modern web development, including authentication, data validation, and protection against common vulnerabilities.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Cybersecurity"
  },
  {
    title: "React Performance Optimization Techniques",
    description: "Discover advanced techniques to optimize React applications for better performance, including code splitting, memoization, and bundle optimization.",
    date: "March 8, 2024",
    readTime: "6 min read",
    category: "Development"
  },
  {
    title: "Game Development with Modern Web Technologies",
    description: "Explore how to create engaging browser-based games using HTML5 Canvas, WebGL, and modern JavaScript frameworks.",
    date: "February 28, 2024",
    readTime: "10 min read",
    category: "Game Dev"
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <SectionHeader>Latest Articles</SectionHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex items-center text-sm text-foreground/60 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="inline-block">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 mb-4">
                    {post.description}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="p-0 h-auto group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};