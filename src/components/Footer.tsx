import { Github, Linkedin, Mail, Heart, BookOpen, BarChart3, FileStack } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Saumya Prasad
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/saumyaprasad07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/saumyaprasad07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:saumya.prasad460@gmail.com"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://medium.com/@saumya.prasad07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Medium"
            >
              <BookOpen className="h-5 w-5" />
            </a>
            <a 
              href="https://public.tableau.com/app/profile/saumya.prasad/vizzes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Tableau Public"
            >
              <BarChart3 className="h-5 w-5" />
            </a>
            <a 
              href="https://www.notion.so/saumyaprasad/Saumya-C-Prasad-275a7b9cbe00802ebf0fe4a418620b45" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Notion Portfolio"
            >
              <FileStack className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
