export const Experience = () => (
  <section id="experience" className="container py-16 md:py-24">
    <h2 className="mb-6 font-heading text-2xl font-bold md:text-3xl">Projects & Learning Experience</h2>
    <div className="space-y-4">
      <div className="surface-card p-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <h3 className="font-semibold">WollyWay E-commerce Platform</h3>
          <span className="text-sm text-foreground/60">2024</span>
        </div>
        <ul className="mt-3 space-y-2 text-sm text-foreground/80">
          <li>• Built a full-stack e-commerce site using React, Node.js, and MongoDB</li>
          <li>• Implemented product catalog with filtering and shopping cart functionality</li>
          <li>• Learned state management patterns and component architecture</li>
          <li>• Deployed to Vercel for live demonstration</li>
        </ul>
      </div>
      <div className="surface-card p-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <h3 className="font-semibold">Elevate X Mentorship Platform</h3>
          <span className="text-sm text-foreground/60">2024</span>
        </div>
        <ul className="mt-3 space-y-2 text-sm text-foreground/80">
          <li>• Developed a web app connecting mentors and mentees using Next.js and TypeScript</li>
          <li>• Implemented user authentication with Firebase</li>
          <li>• Created responsive UI components and routing system</li>
          <li>• Gained experience with database relationships and real-time features</li>
        </ul>
      </div>
      <div className="surface-card p-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <h3 className="font-semibold">Academic & Personal Projects</h3>
          <span className="text-sm text-foreground/60">2023-Present</span>
        </div>
        <ul className="mt-3 space-y-2 text-sm text-foreground/80">
          <li>• Built a 2D platformer game exploring physics and collision detection with JavaScript</li>
          <li>• Created a Library Management System using Java and MySQL for coursework</li>
          <li>• Practicing competitive programming with data structures and algorithms</li>
          <li>• Self-learning through online courses on React, Node.js, and cybersecurity</li>
        </ul>
      </div>
    </div>
  </section>
);
