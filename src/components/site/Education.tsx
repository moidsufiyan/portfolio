export const Education = () => (
  <section id="education" className="container py-16 md:py-24">
    <h2 className="mb-6 font-heading text-2xl font-bold md:text-3xl">
      Education
    </h2>
    <div className="surface-card p-6">
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <div>
          <h3 className="font-semibold">Bachelor of Technology - Computer Science Engineering</h3>
          <p className="text-sm text-primary mt-1">Vardhaman College of Engineering</p>
        </div>
        <span className="text-sm text-foreground/60">2023 - 2027</span>
      </div>
      
      <div className="mt-4">
        <h4 className="font-semibold mb-3">Relevant Coursework</h4>
        
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-foreground/90">Programming & Development:</p>
            <p className="text-sm text-foreground/70 mt-1">
              • Object-Oriented Programming with Java
              • Data Structures and Algorithms
              • Web Technologies
              • Software Engineering
              • Database Management Systems
            </p>
          </div>
          
          <div>
            <p className="text-sm font-medium text-foreground/90">Systems & Security:</p>
            <p className="text-sm text-foreground/70 mt-1">
              • Computer Networks
              • Information Security
              • Operating Systems
              • Computer Architecture
            </p>
          </div>
          
          <div>
            <p className="text-sm font-medium text-foreground/90">Advanced Topics:</p>
            <p className="text-sm text-foreground/70 mt-1">
              • Deep Learning
              • Natural Language Processing
              • Artificial Intelligence
              • Machine Learning Fundamentals
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-semibold mb-3">Notable Academic Projects</h4>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>• <strong>Library Management System:</strong> Built with Java and MySQL for database course, implementing CRUD operations and user authentication</li>
          <li>• <strong>Network Security Analysis:</strong> Studied common vulnerabilities and implemented basic encryption algorithms in Python</li>
          <li>• <strong>Web Application Project:</strong> Created a student portal using HTML, CSS, and JavaScript as part of web technologies course</li>
        </ul>
      </div>
    </div>
  </section>
);
