import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download, ChartBar as BarChart3, Database, TrendingUp, Award } from "lucide-react";
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
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className={`container-wide mx-auto px-4 py-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-medium text-muted-foreground">Welcome to my portfolio</span>
        </div>

        {/* Main Heading */}
        <div className="mb-8 space-y-4">
          <h1 className="heading-display gradient-text leading-tight">
            Hi, I'm Saumya Prasad
          </h1>
          
          {/* Animated Role Switcher */}
          <div className="h-16 flex items-center justify-center">
            <p className="body-large text-muted-foreground">
              Transforming data into insights as a{" "}
              <span className="inline-block min-w-[280px] text-left">
                <span 
                  key={currentRole}
                  className="font-bold text-primary text-xl md:text-2xl"
                >
                  {roles[currentRole]}
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            I specialize in turning complex data into actionable business insights using 
            <span className="font-semibold text-primary mx-1">SQL</span>, 
            <span className="font-semibold text-secondary mx-1">Python</span>, and 
            <span className="font-semibold text-accent mx-1">advanced analytics tools</span>.
          </p>
          <p className="text-lg text-muted-foreground">
            Let's unlock the power of your data together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 max-w-2xl mx-auto">
          <Button 
            size="lg" 
            className="button-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <BarChart3 className="mr-2 h-5 w-5" />
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="button-secondary"
            asChild
          >
            <a href="https://drive.google.com/file/d/1JVH3S6MtrlNB7Gq-RNhBLnowYmHIPeJD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-16">
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
              className="p-3 rounded-xl soft-card hover:text-primary transition-all duration-300"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { number: "3+", label: "Years Experience", icon: Award },
            { number: "15+", label: "Projects Completed", icon: TrendingUp },
            { number: "6", label: "Certifications", icon: Award },
            { number: "100%", label: "Client Satisfaction", icon: Database }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center p-4 soft-card hover-lift-subtle"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-3">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
          </div>
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;