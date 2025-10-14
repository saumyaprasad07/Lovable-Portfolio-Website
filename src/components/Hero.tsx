import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Saumya Prasad</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">Data / BI Analytics & Product Analytics Enthusiast</p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Crafting beautiful, functional digital experiences with modern technologies.
          Passionate about clean code and elegant design.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="group bg-primary hover:bg-primary/90" onClick={() => document.getElementById('projects')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:contact@example.com" className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;