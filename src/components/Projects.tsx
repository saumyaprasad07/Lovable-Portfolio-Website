import React from 'react';
import { Github, ExternalLink, Sparkles, TrendingUp, Award, Zap, Database, Brain, BarChart3 } from 'lucide-react';

const projects = [
  {
    category: "SENTIMENT ANALYSIS",
    title: "Yelp Business Sentiment Analysis",
    subtitle: "SQL | Snowflake | AWS | BigQuery",
    outcome: "Processed 5GB+ Yelp data, reducing manual analysis time by 80% across 100K+ reviews",
    impact: "80% faster analysis",
    tech: ["SQL", "Snowflake", "AWS", "BigQuery"],
    github: "https://github.com/saumyaprasad07/Yelp-Business-Reviews-Analysis",
    gradient: "from-blue-500 to-cyan-500",
    icon: TrendingUp,
    featured: true
  },
  {
    category: "EQUITY ANALYSIS", 
    title: "Gender based Wage Gap Analysis",
    subtitle: "Python | Data Analysis | Statistical Modeling",
    outcome: "Identified 3 key factors contributing to wage gaps with strategic equity recommendations",
    impact: "3 key factors identified",
    tech: ["Python", "Data Analysis", "Statistics"],
    github: "https://github.com/saumyaprasad07/Gender-Based-Wage-Gap-Analysis",
    gradient: "from-purple-500 to-pink-500",
    icon: Award
  },
  {
    category: "RECOMMENDATION SYSTEM",
    title: "Netflix Recommendation System", 
    subtitle: "Streamlit | Python | MS Project",
    outcome: "Built personalized engine analyzing 10K+ movies, improving discovery accuracy by 45%",
    impact: "45% accuracy boost",
    tech: ["Streamlit", "Python", "Azure"],
    github: "https://github.com/saumyaprasad07/streamlit-app-netflix-recommendation-system",
    live: "https://netflix-movie-recommendation-system.streamlit.app/",
    gradient: "from-red-500 to-orange-500",
    icon: Sparkles,
    featured: true
  },
  {
    category: "DATABASE MANAGEMENT",
    title: "Database Management System for UPS",
    subtitle: "MySQL | Business Analysis | SQL Optimization", 
    outcome: "Reduced query time by 65%, enabling real-time tracking of 50K+ daily deliveries",
    impact: "65% query optimization",
    tech: ["MySQL", "SQL", "Optimization"],
    github: "https://github.com/saumyaprasad07/Database-Management-System---UPS-Deliveries",
    gradient: "from-green-500 to-emerald-500",
    icon: Database
  },
  {
    category: "BUSINESS OPTIMIZATION",
    title: "Aggregate Planning Analysis",
    subtitle: "Excel | Optimization | Business Analysis",
    outcome: "Reduced production costs by 22% annually ($340K savings) through optimal planning",
    impact: "$340K annual savings", 
    tech: ["Excel", "Optimization", "Analytics"],
    github: "https://github.com/saumyaprasad07/Business-Analysis-on-Aggregate-Planning-at-Green-Mills",
    gradient: "from-yellow-500 to-amber-500",
    icon: BarChart3
  },
  {
    category: "DEEP LEARNING",
    title: "Brain Tumor MRI Segmentation",
    subtitle: "Deep Learning | Python | TensorFlow",
    outcome: "Achieved 92% accuracy, reducing manual MRI analysis time by 70%",
    impact: "92% segmentation accuracy",
    tech: ["TensorFlow", "Python", "Deep Learning"],
    github: "https://github.com/saumyaprasad07/Brain-Tumor-MRI-Image-Segmentation-using-Deep-Learning",
    gradient: "from-indigo-500 to-violet-500",
    icon: Brain,
    featured: true
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-spacing relative overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/3 to-primary/3 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-5" />
      </div>

      <div className="container-wide relative z-10 px-4 md:px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold gradient-text">My Portfolio</span>
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
          </div>
          <h2 className="heading-1 mb-8">Featured Projects</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore my portfolio of data-driven solutions that have delivered measurable business impact and driven strategic decision-making
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => {
              const IconComponent = project.icon;
              
              return (
                <div 
                  key={index} 
                  className="group relative animate-slide-up hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative rounded-3xl overflow-hidden premium-card h-full">
                    {/* Enhanced Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full border border-white/20 backdrop-blur-sm">
                        FEATURED
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 relative flex flex-col h-full">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold tracking-wider text-muted-foreground/80 uppercase px-3 py-1 bg-muted/30 rounded-full">
                            {project.category}
                          </span>
                          <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-500 border border-current border-opacity-20`}>
                            <IconComponent className="w-6 h-6 text-white" style={{ filter: 'drop-shadow(0 0 8px currentColor)' }} />
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-500 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Impact Badge */}
                      <div className="mb-6">
                        <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current border-opacity-20 group-hover:scale-105 transition-transform duration-300`}>
                          <Sparkles className="w-4 h-4" />
                          <span className="text-sm font-bold">{project.impact}</span>
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border/50 mb-6 flex-grow group-hover:shadow-lg transition-shadow duration-500">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted/50 border border-border/50 hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-background to-muted/30 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 text-sm font-semibold group/btn"
                        >
                          <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          <span>View Code</span>
                        </a>
                        
                        {project.live && (
                          <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-sm font-semibold group/btn border border-white/20`}
                          >
                            <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">Additional Projects</h3>
            <p className="text-lg text-muted-foreground">
              More examples of my data analysis and business intelligence work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => {
              const IconComponent = project.icon;
              
              return (
                <div 
                  key={index} 
                  className="group relative animate-slide-up hover-lift-subtle"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="relative rounded-2xl overflow-hidden modern-card h-full">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="p-6 relative flex flex-col h-full">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold tracking-wider text-muted-foreground/80 uppercase">
                            {project.category}
                          </span>
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                            <IconComponent className="w-4 h-4 text-white" style={{ filter: 'drop-shadow(0 0 4px currentColor)' }} />
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Impact Badge */}
                      <div className="mb-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current border-opacity-20`}>
                          <Sparkles className="w-3 h-3" />
                          <span className="text-xs font-semibold">{project.impact}</span>
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border/50 mb-4 flex-grow">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 text-xs font-medium rounded-full bg-muted/50 border border-border/50 hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-auto">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-background to-muted/30 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 text-sm font-medium group/btn"
                        >
                          <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          <span>Code</span>
                        </a>
                        
                        {project.live && (
                          <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg transition-all duration-300 text-sm font-medium group/btn`}
                          >
                            <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="premium-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always excited to discuss new opportunities and challenging data problems. 
              Let's connect and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/saumyaprasad07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;