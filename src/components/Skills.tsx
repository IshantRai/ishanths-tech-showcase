
interface SkillCategory {
  title: string;
  skills: string[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming",
      skills: ["Java", "C", "C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Next.js", "Node.js", "Express", "FastAPI", "Spring Boot"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Socket.io", "React Native"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center relative">
                <span className="relative z-10">{category.title}</span>
                <span className="absolute bottom-0 left-0 right-0 h-3 bg-accent/20 -z-10 transform -rotate-1"></span>
              </h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="bg-secondary/50 px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Proficiency</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Front-end Development", percentage: 90 },
              { name: "Back-end Development", percentage: 85 },
              { name: "Database Management", percentage: 80 },
              { name: "Problem Solving", percentage: 85 },
            ].map((skill, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="mb-3 flex justify-between">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-primary font-medium">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-tech-blue to-tech-purple"
                    style={{ width: `${skill.percentage}%`, transition: "width 1.5s ease-in-out" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
