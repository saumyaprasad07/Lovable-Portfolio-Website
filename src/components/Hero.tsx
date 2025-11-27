import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, BarChart3, Database } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Data Analyst",
    "Business Intelligence Expert", 
    "Product Analyst",
    "Data Storyteller"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Data visualization inspired elements */}
        <div className="absolute top-1/4 right-1/4 opacity-5">
          <BarChart3 className="w-64 h-64 text-primary animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-5">
          <Database className="w-48 h-48 text-secondary animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-4 py-16 md:py-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6 animate-scale-in">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Welcome to my portfolio</span>
        </div>

        {/* Main Heading */}
        <div className="mb-6 space-y-4">
          <h1 className="heading-display gradient-text animate-slide-up">
            Hi, I'm Saumya Prasad
          </h1>
          
          {/* Animated Role Switcher */}
          <div className="h-16 flex items-center justify-center">
            <p className="body-large text-muted-foreground">
              Transforming data into insights as a{" "}
              <span className="inline-block min-w-[280px] text-left">
                <span 
                  key={currentRole}
                  className="font-bold text-primary animate-slide-up inline-block"
                >
                  {roles[currentRole]}
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="body-large text-muted-foreground leading-relaxed">
            I specialize in turning complex data into actionable business insights using 
            <span className="font-semibold text-primary"> SQL</span>, 
            <span className="font-semibold text-secondary"> Python</span>, and 
            <span className="font-semibold text-accent"> advanced analytics tools</span>.
            Let's unlock the power of your data together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-2xl mx-auto">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <BarChart3 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="group border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <a href="https://drive.google.com/file/d/1JVH3S6MtrlNB7Gq-RNhBLnowYmHIPeJD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="ghost"
            className="group hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:-translate-y-1"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Social Links with Enhanced Design */}
        <div className="flex gap-4 justify-center">
          {[
            { icon: Github, href: "https://github.com/saumyaprasad07", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/saumyaprasad07", label: "LinkedIn" },
            { icon: Mail, href: "mailto:saumya.prasad460@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : "_blank"}
              rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
              className="group p-4 rounded-full bg-gradient-to-br from-card to-muted/30 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              aria-label={label}
            >
              <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Stats Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "6", label: "Certifications" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-4 rounded-xl bg-gradient-to-br from-card to-muted/30 border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;