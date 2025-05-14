
import { Briefcase, Download, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tl from-tech-blue/5 via-transparent to-tech-purple/5" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-right">
            <div className="glass-card p-6">
              <p className="text-lg leading-relaxed">
                I'm a B.Tech student in Computer Science at Lovely Professional University with a passion for full-stack development, scalable systems, and real-world problem-solving. My journey includes working with modern web technologies like React, Node.js, Spring Boot, and MongoDB. I also enjoy contributing to community projects and refining my skills through hands-on development.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-primary" size={20} />
                  <h3 className="font-semibold text-lg">Location</h3>
                </div>
                <p>Varanasi, Uttar Pradesh, India</p>
              </div>
              
              <div className="flex-1 glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="text-primary" size={20} />
                  <h3 className="font-semibold text-lg">Study</h3>
                </div>
                <p>Computer Science at Lovely Professional University</p>
              </div>
            </div>
            
            <div className="flex justify-center sm:justify-start">
              <a 
                href="/Ishant_Rai_Resume.pdf" 
                download
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in-left">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 blur-xl"></div>
            <div className="relative glass-card p-6 rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-blue to-tech-purple"></div>
              
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary font-mono">&lt;</span>
                My Tech Journey
                <span className="text-primary font-mono">/&gt;</span>
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-border">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-medium">B.Tech in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">2020 - Present</p>
                  <p className="mt-2">Lovely Professional University, Punjab</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-border">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-medium">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">2021 - Present</p>
                  <p className="mt-2">Building web applications with modern technologies</p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-medium">Problem Solving & Algorithms</h4>
                  <p className="text-sm text-muted-foreground">2020 - Present</p>
                  <p className="mt-2">Data structures and algorithms practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
