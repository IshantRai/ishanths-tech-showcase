
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

// Animation wrapper component
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0 
}: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          window.scrollTo({
            top: rect.top + scrollTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Check for hash in URL and scroll to that section on load
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          const rect = targetElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          window.scrollTo({
            top: rect.top + scrollTop - 80,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        
        <AnimatedSection>
          <About />
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <Projects />
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <Skills />
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <Certifications />
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <Achievements />
        </AnimatedSection>
        
        <AnimatedSection delay={500}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
