
import { FileText } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export function Certifications() {
  const certifications: Certification[] = [
    {
      title: "Full-Stack Web Development",
      issuer: "Coursera",
      date: "2022",
      url: "#",
    },
    {
      title: "Generative AI & Deep Learning",
      issuer: "Certified Program",
      date: "2023",
      url: "#",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Abdul Bari",
      date: "2021",
      url: "#",
    },
    {
      title: "Programming in Java and C",
      issuer: "Certified Program",
      date: "2020",
      url: "#",
    },
    {
      title: "HCI Design",
      issuer: "NPTEL",
      date: "2022",
      url: "#",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FileText className="text-primary" size={24} />
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                  <p className="text-sm">{cert.date}</p>
                  
                  {cert.url && (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block mt-3 text-sm text-primary hover:underline"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block glass-card py-3 px-6 rounded-xl">
            <h3 className="font-semibold mb-2">Volunteer Work</h3>
            <p className="text-muted-foreground">
              Community Development Intern – Led youth empowerment events, improved engagement by 35%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
