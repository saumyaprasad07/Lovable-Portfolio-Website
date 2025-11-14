import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" aria-hidden="true" />
      {/* Background image alt text for accessibility */}
      <span className="sr-only">Background: Abstract data visualization and analytics workspace</span>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 max-w-5xl mx-auto leading-tight px-4">
          Hi, I'm Saumya Prasad — Data & Business Analyst | BI | SQL | Python | Tableau
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/90 mb-3 md:mb-4 max-w-2xl mx-auto font-medium px-4">
          Transforming data into strategic insights
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4 max-w-2xl mx-auto">
          <Button size="lg" className="group bg-primary hover:bg-primary/90 w-full sm:w-auto text-base" onClick={() => document.getElementById('projects')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto text-base font-semibold shadow-lg hover:shadow-xl transition-all" asChild>
            <a href="https://drive.google.com/file/d/14hNBWWwp_tZwPdrzwQJcGAJ2LT4-r9Qz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 md:gap-4 justify-center px-4">
          <a href="https://github.com/saumyaprasad07" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300">
            <Github className="h-4 w-4 md:h-5 md:w-5" />
          </a>
          <a href="https://linkedin.com/in/saumyaprasad07" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300">
            <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
          </a>
          <a href="mailto:saumya.prasad460@gmail.com" className="p-2.5 md:p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300">
            <Mail className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;