export const About = () => (
    <section id="about" className="section-container">
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center section-header">
          <h2 className="heading-secondary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a passionate Computer Science undergraduate with a love for building
            innovative solutions. While my primary focus is on web development and
            software engineering, I also dive into cybersecurity challenges and game
            designing experiments. Always learning, always coding.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Education
            </h3>
            <p className="text-muted-foreground">B.Tech CSE (2023–2027)</p>
            <p className="text-sm text-muted-foreground/80 mt-1">Vardhaman College of Engineering</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">Hobbies</h3>
            <p className="text-muted-foreground">Gaming, exploring tech, Spidey fan</p>
            <p className="text-sm text-muted-foreground/80 mt-1">Always curious, always creating</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Interests
            </h3>
            <p className="text-muted-foreground">
              Cybersecurity, Web Engineering, Game Dev
            </p>
            <p className="text-sm text-muted-foreground/80 mt-1">Multi-disciplinary approach</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
