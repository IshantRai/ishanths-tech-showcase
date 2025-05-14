import { ArrowRight, Download, Github, Linkedin, Mail, Instagram, X } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 via-tech-purple/10 to-tech-indigo/10 dark:from-tech-blue/5 dark:via-tech-purple/5 dark:to-tech-indigo/5" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-tech-purple/20 dark:bg-tech-purple/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-tech-blue/20 dark:bg-tech-blue/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="block">Hello, I'm</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tech-blue via-tech-purple to-tech-indigo mt-2">
              Ishant Rai
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl mb-6 text-muted-foreground font-medium">
            Full-Stack Developer | Tech Enthusiast | Problem Solver
          </h2>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex justify-center lg:justify-start gap-4">
            <a 
              href="https://github.com/IshantRai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/50 hover:bg-secondary transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ishant-rai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/50 hover:bg-secondary transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:ishantrai880@gmail.com" 
              className="p-2 rounded-full border border-border/50 hover:bg-secondary transition-colors duration-300"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.instagram.com/ishant_rai_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/50 hover:bg-secondary transition-colors duration-300"
              aria-label="Instagram Profile"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://x.com/ishantrai_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/50 hover:bg-secondary transition-colors duration-300"
              aria-label="X Profile"
            >
              <X size={20} />
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tech-blue to-tech-purple opacity-20 blur-3xl" />
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-xl relative">
              {/* Replace with your actual profile image */}
              {/* <div className="w-full h-full bg-gradient-to-br from-tech-blue via-tech-purple to-tech-indigo flex items-center justify-center text-white text-6xl font-bold">
                IR
              </div> */}
              <img


              src="/ishant.png"
              alt="Ishant Rai"a
              className="w-full h-full object-cover"
              />

            </div>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass-card px-4 py-2 animate-bounce-light">
              <a 
                href="/Ishant_Rai_Resume.pdf" 
                download
                className="inline-flex items-center gap-2 text-sm font-medium"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <a href="#about" aria-label="Scroll down" className="inline-block p-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
