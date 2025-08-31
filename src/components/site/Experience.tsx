export const Experience = () => (
  <section id="experience" className="container py-16 md:py-24">
    <h2 className="mb-6 font-heading text-2xl font-bold md:text-3xl">Work Experience</h2>
    <div className="space-y-4">
      <div className="surface-card p-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <h3 className="font-semibold">Web Developer Intern — XYZ Agency</h3>
          <span className="text-sm text-foreground/60">Jan–Apr 2025</span>
        </div>
        <p className="mt-2 text-sm text-foreground/80">Contributed to building landing pages and integrating APIs.</p>
      </div>
      <div className="surface-card p-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <h3 className="font-semibold">Freelance Landing Page Project</h3>
          <span className="text-sm text-foreground/60">2024</span>
        </div>
        <p className="mt-2 text-sm text-foreground/80">Designed and developed a high-converting marketing page.</p>
      </div>
      <div className="surface-card p-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <h3 className="font-semibold">Open-Source Contributor</h3>
          <span className="text-sm text-foreground/60">Ongoing</span>
        </div>
        <p className="mt-2 text-sm text-foreground/80">Helping fix bugs and improve docs on community projects.</p>
      </div>
    </div>
  </section>
);
