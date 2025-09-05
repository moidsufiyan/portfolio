import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Code, Gamepad2, GraduationCap, Target, Zap } from "lucide-react";

export const About = () => (
    <section id="about" className="section-container">
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center section-header">
          <h2 className="heading-secondary mb-6">About Me</h2>
          
          {/* Main Introduction */}
          <div className="text-left max-w-3xl mx-auto space-y-6 leading-relaxed">
            <p className="text-lg text-muted-foreground">
              I'm <strong className="text-foreground">Mohammed Moid Sufiyan</strong>, a Computer Science undergraduate 
              (B.Tech CSE, 2023–2027) driven by a passion for <span className="text-primary font-medium">full-stack development</span>, 
              <span className="text-primary font-medium"> cybersecurity</span>, and <span className="text-primary font-medium">game design</span>. 
              I specialize in building secure, scalable web platforms while actively exploring AI/ML applications to create 
              impactful, future-ready solutions.
            </p>

            <p className="text-muted-foreground">
              My development journey began in 2023 with front-end experimentation, which quickly evolved into comprehensive 
              software engineering expertise. Today, I've independently designed and developed platforms like 
              <strong className="text-foreground"> WollyWay</strong>, a feature-rich e-commerce site for handcrafted products, 
              and <strong className="text-foreground"> Elevate X</strong>, a mentorship platform connecting entrepreneurs 
              with industry experts. These projects reflect my commitment to blending creativity, functionality, and security 
              to deliver real-world value.
            </p>

            <p className="text-muted-foreground">
              My competitive advantage lies in <span className="text-primary font-medium">multi-domain expertise</span>—from 
              mastering frameworks like React, Node.js, and TypeScript to practicing ethical hacking with Kali Linux, 
              Burp Suite, and Wireshark. I'm also building a strong foundation in AI/ML and deep learning while maintaining 
              a security-first mindset, supported by certifications including AWS Cloud Practitioner and Certified Ethical Hacker (CEH).
            </p>

            <p className="text-muted-foreground">
              When I'm not developing products or solving security challenges, I enjoy analyzing Spider-Man tech, competing 
              in coding contests, and exploring game development physics. My goal is combining technical expertise with 
              innovation to build meaningful, future-ready solutions that solve real-world problems.
            </p>
          </div>
        </div>
        
        {/* Key Highlights */}
        <div className="card-grid mt-16">
          <Card className="info-card text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <h3 className="heading-tertiary font-semibold text-foreground mb-2">Education</h3>
              <p className="text-muted-foreground font-medium">B.Tech CSE (2023–2027)</p>
              <p className="text-sm text-muted-foreground/80 mt-1">Vardhaman College of Engineering</p>
              <div className="mt-3 flex justify-center">
                <Badge variant="secondary" className="text-xs">Current Student</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="info-card text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="heading-tertiary font-semibold text-foreground mb-2">Expertise</h3>
              <p className="text-muted-foreground">Full-Stack Development</p>
              <p className="text-muted-foreground">Cybersecurity & Ethical Hacking</p>
              <p className="text-muted-foreground">AI/ML Applications</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                <Badge variant="outline" className="text-xs">AWS Certified</Badge>
                <Badge variant="outline" className="text-xs">CEH</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="info-card text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <Gamepad2 className="text-purple-600" size={32} />
              </div>
              <h3 className="heading-tertiary font-semibold text-foreground mb-2">Interests</h3>
              <p className="text-muted-foreground">Game Development Physics</p>
              <p className="text-muted-foreground">Spider-Man Tech Analysis</p>
              <p className="text-muted-foreground">Competitive Programming</p>
              <div className="mt-3 flex justify-center">
                <Badge variant="secondary" className="text-xs">Always Learning</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="visual-separator"></div>

        {/* Core Values */}
        <div className="mt-16">
          <div className="section-header">
            <h3 className="heading-tertiary mb-6">What Drives Me</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles and values that guide my approach to development and problem-solving.
            </p>
          </div>
          <div className="card-grid-2">
            <Card className="achievement-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-primary" size={24} />
                  <h4 className="font-semibold">Problem-Solving Focus</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building meaningful solutions that address real-world challenges, from e-commerce platforms 
                  for small businesses to mentorship systems for entrepreneurs.
                </p>
              </CardContent>
            </Card>

            <Card className="achievement-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-primary" size={24} />
                  <h4 className="font-semibold">Innovation & Security</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Combining cutting-edge technology with security-first principles to create future-ready 
                  applications that users can trust and businesses can rely on.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="stats-section">
          <div className="stats-highlight">
            <h3>Development Journey</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones and achievements that define my technical growth and impact.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="font-semibold text-foreground mb-1">Years Coding</div>
              <div className="text-sm text-muted-foreground">Continuous learning</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="font-semibold text-foreground mb-1">Major Projects</div>
              <div className="text-sm text-muted-foreground">Live applications</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="font-semibold text-foreground mb-1">Technologies</div>
              <div className="text-sm text-muted-foreground">Across domains</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="font-semibold text-foreground mb-1">Core Domains</div>
              <div className="text-sm text-muted-foreground">Web, Security, Games</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
