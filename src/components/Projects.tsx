import React from 'react';
import { Github, ExternalLink, TrendingUp, Award, Database, Brain, ChartBar as BarChart3, Zap } from 'lucide-react';

const projects = [
  {
    category: "SENTIMENT ANALYSIS",
    title: "Yelp Business Sentiment Analysis",
    subtitle: "SQL | Snowflake | AWS | BigQuery",
    outcome: "Engineered scalable data pipeline processing 5GB+ Yelp dataset across 100K+ reviews. Built sentiment classification model and cloud-based analytics infrastructure, reducing manual review analysis time by 80%.",
    impact: "80% faster analysis",
    tech: ["SQL", "Snowflake", "AWS", "BigQuery"],
    github: "https://github.com/saumyaprasad07/Yelp-Business-Reviews-Analysis",
    icon: TrendingUp,
    featured: true
  },
  {
    category: "EQUITY ANALYSIS",
    title: "Gender based Wage Gap Analysis",
    subtitle: "Python | Data Analysis | Statistical Modeling",
    outcome: "Conducted comprehensive statistical analysis on compensation data using Python. Applied regression modeling, hypothesis testing, and data visualization to identify 3 primary drivers of wage disparity. Delivered actionable recommendations for organizational equity improvements.",
    impact: "3 key factors identified",
    tech: ["Python", "Data Analysis", "Statistics"],
    github: "https://github.com/saumyaprasad07/Gender-Based-Wage-Gap-Analysis",
    icon: Award
  },
  {
    category: "RECOMMENDATION SYSTEM",
    title: "Netflix Recommendation System",
    subtitle: "Streamlit | Python | MS Project",
    outcome: "Developed ML-powered recommendation engine processing 10K+ movies using collaborative filtering and content-based algorithms. Built interactive web application with Streamlit, improving content discovery accuracy by 45%. Deployed on cloud infrastructure for real-time recommendations.",
    impact: "45% accuracy boost",
    tech: ["Streamlit", "Python", "Azure"],
    github: "https://github.com/saumyaprasad07/streamlit-app-netflix-recommendation-system",
    live: "https://netflix-movie-recommendation-system.streamlit.app/",
    icon: Zap,
    featured: true
  },
  {
    category: "DATABASE MANAGEMENT",
    title: "Database Management System for UPS",
    subtitle: "MySQL | Business Analysis | SQL Optimization",
    outcome: "Designed and optimized relational database architecture for logistics operations handling 50K+ daily deliveries. Implemented indexing strategies, query optimization, and stored procedures, reducing query execution time by 65%. Enabled real-time package tracking and operational reporting.",
    impact: "65% query optimization",
    tech: ["MySQL", "SQL", "Optimization"],
    github: "https://github.com/saumyaprasad07/Database-Management-System---UPS-Deliveries",
    icon: Database
  },
  {
    category: "BUSINESS OPTIMIZATION",
    title: "Aggregate Planning Analysis",
    subtitle: "Excel | Optimization | Business Analysis",
    outcome: "Performed operations research analysis using linear programming and optimization techniques. Built Excel-based decision support model analyzing production scenarios, inventory costs, and workforce planning. Achieved 22% cost reduction translating to $340K in annual savings.",
    impact: "$340K annual savings",
    tech: ["Excel", "Optimization", "Analytics"],
    github: "https://github.com/saumyaprasad07/Business-Analysis-on-Aggregate-Planning-at-Green-Mills",
    icon: BarChart3
  },
  {
    category: "DEEP LEARNING",
    title: "Brain Tumor MRI Segmentation",
    subtitle: "Deep Learning | Python | TensorFlow",
    outcome: "Built deep learning model using convolutional neural networks for automated medical image segmentation. Trained on MRI dataset with data augmentation techniques, achieving 92% segmentation accuracy. Reduced manual radiology analysis time by 70%, demonstrating AI application in healthcare diagnostics.",
    impact: "92% segmentation accuracy",
    tech: ["TensorFlow", "Python", "Deep Learning"],
    github: "https://github.com/saumyaprasad07/Brain-Tumor-MRI-Image-Segmentation-using-Deep-Learning",
    icon: Brain,
    featured: true
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-spacing bg-background">
      <div className="container-wide px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-1 mb-6">Data Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world analytics solutions delivering measurable business value through data-driven insights
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => {
              const IconComponent = project.icon;
              
              return (
                <div key={index} className="premium-card p-6 hover-lift">
                  {/* Featured Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase px-2 py-1 bg-muted rounded-full">
                      {project.category}
                    </span>
                    <div className="px-2 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      FEATURED
                    </div>
                  </div>
                  
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">{project.subtitle}</p>
                  </div>

                  {/* Impact Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm font-semibold text-primary">{project.impact}</span>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="p-4 rounded-xl bg-muted/50 border border-border mb-4">
                    <p className="text-sm text-muted-foreground">{project.outcome}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs font-medium rounded-full bg-muted border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
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
                <div key={index} className="soft-card p-6 hover-lift-subtle">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        {project.category}
                      </span>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-foreground leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>

                  {/* Impact Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-xs font-semibold text-primary">{project.impact}</span>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="p-3 rounded-lg bg-muted/50 mb-4">
                    <p className="text-sm text-muted-foreground">{project.outcome}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs font-medium rounded-full bg-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="soft-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to discuss new opportunities and challenging data problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/saumyaprasad07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary inline-flex items-center justify-center"
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