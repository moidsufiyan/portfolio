export const About = () => (
  <section id="about" className="container py-16 md:py-24">
    <div className="surface-card p-6 md:p-10">
      <h2 className="font-heading text-2xl font-bold md:text-3xl">About</h2>
      <p className="mt-4 text-foreground/80">
        I’m a passionate Computer Science undergraduate with a love for building innovative solutions. While my primary
        focus is on web development and software engineering, I also dive into cybersecurity challenges and game development
        experiments. Always learning, always coding.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-foreground/80">Education</h3>
          <p className="mt-2 text-sm">B.Tech CSE (2023–2027)</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground/80">Hobbies</h3>
          <p className="mt-2 text-sm">Gaming, exploring tech, Spider-Man fan</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground/80">Interests</h3>
          <p className="mt-2 text-sm">Cybersecurity, Web Engineering, Game Dev</p>
        </div>
      </div>
    </div>
  </section>
);
