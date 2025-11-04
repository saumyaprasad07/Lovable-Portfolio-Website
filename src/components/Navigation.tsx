import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail, BookOpen, BarChart3, FileStack } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold">SP</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {isHomePage ? (
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
                About
              </button>
            ) : (
              <button onClick={() => handleNavigation("/")} className="text-foreground hover:text-primary transition-colors">
                Home
              </button>
            )}
            <button onClick={() => handleNavigation("/career")} className="text-foreground hover:text-primary transition-colors">
              Career
            </button>
            <button onClick={() => handleNavigation("/projects")} className="text-foreground hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => handleNavigation("/achievements")} className="text-foreground hover:text-primary transition-colors">
              Achievements
            </button>
            {isHomePage && (
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
                Contact
              </button>
            )}
            
            {/* Social Links */}
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
              <a 
                href="https://github.com/saumyaprasad07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/in/saumyaprasad07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="mailto:saumya.prasad460@gmail.com"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a 
                href="https://medium.com/@saumya.prasad07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Medium"
              >
                <BookOpen className="h-4 w-4" />
              </a>
              <a 
                href="https://public.tableau.com/app/profile/saumya.prasad/vizzes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Tableau Public"
              >
                <BarChart3 className="h-4 w-4" />
              </a>
              <a 
                href="https://www.notion.so/saumyaprasad/Saumya-C-Prasad-275a7b9cbe00802ebf0fe4a418620b45" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Notion Portfolio"
              >
                <FileStack className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden py-4 space-y-4 border-t border-border">
            {isHomePage ? (
              <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
                About
              </button>
            ) : (
              <button onClick={() => handleNavigation("/")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
                Home
              </button>
            )}
            <button onClick={() => handleNavigation("/career")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Career
            </button>
            <button onClick={() => handleNavigation("/projects")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => handleNavigation("/achievements")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Achievements
            </button>
            {isHomePage && (
              <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </button>
            )}
            
            {/* Social Links */}
            <div className="flex gap-2 pt-4 border-t border-border">
              <a 
                href="https://github.com/saumyaprasad07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/in/saumyaprasad07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="mailto:saumya.prasad460@gmail.com"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a 
                href="https://medium.com/@saumya.prasad07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Medium"
              >
                <BookOpen className="h-4 w-4" />
              </a>
              <a 
                href="https://public.tableau.com/app/profile/saumya.prasad/vizzes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Tableau Public"
              >
                <BarChart3 className="h-4 w-4" />
              </a>
              <a 
                href="https://www.notion.so/saumyaprasad/Saumya-C-Prasad-275a7b9cbe00802ebf0fe4a418620b45" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Notion Portfolio"
              >
                <FileStack className="h-4 w-4" />
              </a>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;