import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
            ) : (
              <button 
                onClick={() => handleNavigation("/")} 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
            )}
            
            <button 
              onClick={() => handleNavigation("/career")} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            
            <button 
              onClick={() => handleNavigation("/projects")} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            
            <button 
              onClick={() => handleNavigation("/achievements")} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Achievements
            </button>
            
            {isHomePage && (
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            )}

            <Button 
              className="button-primary"
              onClick={() => isHomePage ? scrollToSection("contact") : handleNavigation("/")}
            >
              {isHomePage ? "Let's Talk" : "Back Home"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border bg-background/95 backdrop-blur-md">
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection("about")} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
            ) : (
              <button 
                onClick={() => handleNavigation("/")} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
            )}
            
            <button 
              onClick={() => handleNavigation("/career")} 
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            
            <button 
              onClick={() => handleNavigation("/projects")} 
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            
            <button 
              onClick={() => handleNavigation("/achievements")} 
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Achievements
            </button>
            
            {isHomePage && (
              <button 
                onClick={() => scrollToSection("contact")} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;