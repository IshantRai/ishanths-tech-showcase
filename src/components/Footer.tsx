
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Ishant Rai. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart size={14} className="mx-1 text-tech-pink" /> using React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
