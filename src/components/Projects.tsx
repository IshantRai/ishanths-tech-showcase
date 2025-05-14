
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  liveLink?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "RoomHunt",
      description: "Hotel Management System with Node.js + MongoDB backend, React + Tailwind frontend, streamlined real-time booking.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
      github: "https://github.com/yourusername/roomhunt",
      liveLink: "#",
    },
    {
      title: "DriveDosti",
      description: "A Vercel-hosted React carpooling platform enhancing user experience and navigation.",
      technologies: ["React", "Vercel", "Tailwind CSS", "Firebase"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80",
      github: "https://github.com/yourusername/drivedosti",
      liveLink: "#",
    },
    {
      title: "Inventory Management System",
      description: "A PHP-based system designed for grocery stock automation and reporting.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      github: "https://github.com/yourusername/inventory-system",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-full bg-accent/30 text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-secondary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-secondary transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
