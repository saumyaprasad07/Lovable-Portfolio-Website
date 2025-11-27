import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, BarChart3, Database, TrendingUp, Zap, Award } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = [
    "Data Analyst",
    "Business Intelligence Expert", 
    "Product Analyst",
    "Data Storyteller",
    "Analytics Consultant"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-mesh opacity-40" />
        
        {/* Floating geometric shapes with enhanced animations */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-2xl animate-float-delayed" />
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Data visualization inspired elements */}
        <div className="absolute top-1/4 right-1/4 opacity-5">
          <BarChart3 className="w-72 h-72 text-primary animate-pulse-slow" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-5">
          <Database className="w-56 h-56 text-secondary animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-1/3 left-1/5 opacity-5">
          <TrendingUp className="w-64 h-64 text-accent animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Interactive cursor effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 container-wide mx-auto px-4 py-20 md:py-24 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Enhanced Greeting Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 mb-8 animate-scale-in backdrop-blur-sm">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-sm font-semibold gradient-text">Welcome to my data-driven world</span>
          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
        </div>

        {/* Enhanced Main Heading */}
        <div className="mb-8 space-y-6">
          <h1 className="heading-display gradient-text animate-slide-up leading-none">
            Hi, I'm Saumya Prasad
          </h1>
          
          {/* Enhanced Animated Role Switcher */}
          <div className="h-20 flex items-center justify-center">
            <p className="body-large text-muted-foreground max-w-4xl">
              Transforming complex data into actionable insights as a{" "}
              <span className="inline-block min-w-[320px] text-left">
                <span 
                  key={currentRole}
                  className="font-bold gradient-text-secondary animate-slide-up inline-block text-2xl md:text-3xl"
                >
                  {roles[currentRole]}
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Enhanced Value Proposition */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            I specialize in turning complex data into actionable business insights using 
            <span className="font-bold text-primary mx-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">SQL</span>, 
            <span className="font-bold text-secondary mx-2 px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">Python</span>, and 
            <span className="font-bold text-accent mx-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">advanced analytics tools</span>.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Let's unlock the power of your data together and drive meaningful business outcomes.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 max-w-3xl mx-auto">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 px-8 py-4 text-lg font-semibold rounded-2xl border border-white/20"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <BarChart3 className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
            Explore My Work
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="group border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-500 hover:-translate-y-2 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm"
            asChild
          >
            <a href="https://drive.google.com/file/d/1JVH3S6MtrlNB7Gq-RNhBLnowYmHIPeJD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="ghost"
            className="group hover:bg-accent/10 hover:text-accent transition-all duration-500 hover:-translate-y-2 px-8 py-4 text-lg font-semibold rounded-2xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex gap-6 justify-center mb-16">
          {[
            { icon: Github, href: "https://github.com/saumyaprasad07", label: "GitHub", color: "hover:text-primary hover:shadow-glow" },
            { icon: Linkedin, href: "https://linkedin.com/in/saumyaprasad07", label: "LinkedIn", color: "hover:text-secondary hover:shadow-glow-secondary" },
            { icon: Mail, href: "mailto:saumya.prasad460@gmail.com", label: "Email", color: "hover:text-accent hover:shadow-glow-accent" }
          ].map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : "_blank"}
              rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
              className={`group p-5 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border/50 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm ${color}`}
              aria-label={label}
            >
              <Icon className="h-6 w-6 text-muted-foreground group-hover:scale-125 transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* Enhanced Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "3+", label: "Years Experience", icon: Award, color: "from-primary to-secondary" },
            { number: "15+", label: "Projects Completed", icon: Zap, color: "from-secondary to-accent" },
            { number: "6", label: "Certifications", icon: Award, color: "from-accent to-primary" },
            { number: "100%", label: "Client Satisfaction", icon: TrendingUp, color: "from-primary to-accent" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="group text-center p-6 rounded-2xl premium-card hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-12 border-2 border-primary/40 rounded-full flex justify-center p-2 backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-gradient-to-b from-primary to-secondary rounded-full animate-pulse" />
          </div>
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;