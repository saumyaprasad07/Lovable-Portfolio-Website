import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold gradient-text">SP</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("education")} className="text-foreground hover:text-primary transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-foreground hover:text-primary transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("achievements")} className="text-foreground hover:text-primary transition-colors">
              Achievements
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("education")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection("experience")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection("projects")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("achievements")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Achievements
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;