export const Achievements = () => (
  <section id="achievements" className="container py-16 md:py-24">
    <h2 className="mb-6 font-heading text-2xl font-bold md:text-3xl">Achievements & Extras</h2>
    <div className="grid gap-6 md:grid-cols-2">
      <div className="surface-card p-6">
        <h3 className="font-semibold">Certifications</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground/80">
          <li>AWS Cloud Practitioner</li>
          <li>Google Analytics Fundamentals</li>
        </ul>
      </div>
      <div className="surface-card p-6">
        <h3 className="font-semibold">Blog Preview (Coming Soon)</h3>
        <p className="mt-3 text-sm text-foreground/80">Thoughts on cybersecurity, development, and game dev experiments.</p>
      </div>
    </div>
  </section>
);
