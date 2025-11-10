import React from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    category: "SENTIMENT ANALYSIS",
    title: "Yelp Business Sentiment Analysis",
    subtitle: "SQL | Snowflake | AWS | BigQuery",
    outcome: "Processed 5GB+ Yelp data, reducing manual analysis time by 80% across 100K+ reviews",
    impact: "80% faster analysis",
    tech: ["SQL", "Snowflake", "AWS", "BigQuery"],
    github: "https://github.com/saumyaprasad07/Yelp-Business-Reviews-Analysis",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    category: "EQUITY ANALYSIS",
    title: "Gender based Wage Gap Analysis",
    subtitle: "Python | Data Analysis | Statistical Modeling",
    outcome: "Identified 3 key factors contributing to wage gaps with strategic equity recommendations",
    impact: "3 key factors identified",
    tech: ["Python", "Data Analysis", "Statistics"],
    github: "https://github.com/saumyaprasad07/Gender-Based-Wage-Gap-Analysis",
    gradient: "from-purple-500 to-pink-500"
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
    gradient: "from-red-500 to-orange-500"
  },
  {
    category: "DATABASE MANAGEMENT",
    title: "Database Management System for UPS",
    subtitle: "MySQL | Business Analysis | SQL Optimization",
    outcome: "Reduced query time by 65%, enabling real-time tracking of 50K+ daily deliveries",
    impact: "65% query optimization",
    tech: ["MySQL", "SQL", "Optimization"],
    github: "https://github.com/saumyaprasad07/Database-Management-System---UPS-Deliveries",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    category: "BUSINESS OPTIMIZATION",
    title: "Aggregate Planning Analysis",
    subtitle: "Excel | Optimization | Business Analysis",
    outcome: "Reduced production costs by 22% annually ($340K savings) through optimal planning",
    impact: "$340K annual savings",
    tech: ["Excel", "Optimization", "Analytics"],
    github: "https://github.com/saumyaprasad07/Business-Analysis-on-Aggregate-Planning-at-Green-Mills",
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    category: "DEEP LEARNING",
    title: "Brain Tumor MRI Segmentation",
    subtitle: "Deep Learning | Python | TensorFlow",
    outcome: "Achieved 92% accuracy, reducing manual MRI analysis time by 70%",
    impact: "92% segmentation accuracy",
    tech: ["TensorFlow", "Python", "Deep Learning"],
    github: "https://github.com/saumyaprasad07/Brain-Tumor-MRI-Image-Segmentation-using-Deep-Learning",
    gradient: "from-indigo-500 to-violet-500"
  }
];

const CompactProjects = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Portfolio Showcase</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming data into actionable insights
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full">
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="p-6 relative flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <span className="text-xs font-bold tracking-wider text-muted-foreground mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Impact badge */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current border-opacity-20`}>
                      <Sparkles className="w-3 h-3" />
                      <span className="text-xs font-semibold">{project.impact}</span>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="p-4 rounded-xl bg-muted/30 border border-border/50 mb-4 flex-grow">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-auto">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-medium">Code</span>
                    </a>
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-sm`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompactProjects;