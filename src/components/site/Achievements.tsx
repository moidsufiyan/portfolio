export const Achievements = () => (
  <section id="achievements" className="container py-16 md:py-24">
    <h2 className="mb-6 font-heading text-2xl font-bold md:text-3xl">Achievements & Activities</h2>
    <div className="grid gap-6 md:grid-cols-2">
      <div className="surface-card p-6">
        <h3 className="font-semibold">Learning Milestones</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground/80">
          <li>Built and deployed 3+ web applications</li>
          <li>Learning AWS cloud services (pursuing certification)</li>
          <li>Completed Google Analytics Fundamentals course</li>
          <li>Active participation in college coding activities</li>
        </ul>
      </div>
      <div className="surface-card p-6">
        <h3 className="font-semibold">Technical Interests</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground/80">
          <li>Exploring cybersecurity through coursework</li>
          <li>Building web applications with modern frameworks</li>
          <li>Learning game development with JavaScript</li>
          <li>Practicing data structures and algorithms</li>
        </ul>
      </div>
    </div>
  </section>
);
