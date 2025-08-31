import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Mohammed delivered an exceptional web application that exceeded our expectations. His attention to security details and clean code structure made the project a huge success.",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    name: "David Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Working with Mohammed was a fantastic experience. His expertise in both development and cybersecurity helped us build a robust and secure platform.",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Game Designer",
    company: "Indie Studios",
    content: "Mohammed's game development skills are impressive. He brought our vision to life with smooth gameplay and engaging mechanics.",
    avatar: "/placeholder.svg",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader>Client Testimonials</SectionHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-foreground/60">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};