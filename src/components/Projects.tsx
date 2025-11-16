import React from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
const projects = [{
  category: "SENTIMENT ANALYSIS",
  title: "Yelp Business Sentiment Analysis",
  subtitle: "SQL | Snowflake | AWS | BigQuery",
  outcome: "Processed 5GB+ Yelp data, reducing manual analysis time by 80% across 100K+ reviews",
  impact: "80% faster analysis",
  tech: ["SQL", "Snowflake", "AWS", "BigQuery"],
  github: "https://github.com/saumyaprasad07/Yelp-Business-Reviews-Analysis",
  gradient: "from-blue-500 to-cyan-500"
}, {
  category: "EQUITY ANALYSIS",
  title: "Gender based Wage Gap Analysis",
  subtitle: "Python | Data Analysis | Statistical Modeling",
  outcome: "Identified 3 key factors contributing to wage gaps with strategic equity recommendations",
  impact: "3 key factors identified",
  tech: ["Python", "Data Analysis", "Statistics"],
  github: "https://github.com/saumyaprasad07/Gender-Based-Wage-Gap-Analysis",
  gradient: "from-purple-500 to-pink-500"
}, {
  category: "RECOMMENDATION SYSTEM",
  title: "Netflix Recommendation System",
  subtitle: "Streamlit | Python | MS Project",
  outcome: "Built personalized engine analyzing 10K+ movies, improving discovery accuracy by 45%",
  impact: "45% accuracy boost",
  tech: ["Streamlit", "Python", "Azure"],
  github: "https://github.com/saumyaprasad07/streamlit-app-netflix-recommendation-system",
  live: "https://netflix-movie-recommendation-system.streamlit.app/",
  gradient: "from-red-500 to-orange-500"
}, {
  category: "DATABASE MANAGEMENT",
  title: "Database Management System for UPS",
  subtitle: "MySQL | Business Analysis | SQL Optimization",
  outcome: "Reduced query time by 65%, enabling real-time tracking of 50K+ daily deliveries",
  impact: "65% query optimization",
  tech: ["MySQL", "SQL", "Optimization"],
  github: "https://github.com/saumyaprasad07/Database-Management-System---UPS-Deliveries",
  gradient: "from-green-500 to-emerald-500"
}, {
  category: "BUSINESS OPTIMIZATION",
  title: "Aggregate Planning Analysis",
  subtitle: "Excel | Optimization | Business Analysis",
  outcome: "Reduced production costs by 22% annually ($340K savings) through optimal planning",
  impact: "$340K annual savings",
  tech: ["Excel", "Optimization", "Analytics"],
  github: "https://github.com/saumyaprasad07/Business-Analysis-on-Aggregate-Planning-at-Green-Mills",
  gradient: "from-yellow-500 to-amber-500"
}, {
  category: "DEEP LEARNING",
  title: "Brain Tumor MRI Segmentation",
  subtitle: "Deep Learning | Python | TensorFlow",
  outcome: "Achieved 92% accuracy, reducing manual MRI analysis time by 70%",
  impact: "92% segmentation accuracy",
  tech: ["TensorFlow", "Python", "Deep Learning"],
  github: "https://github.com/saumyaprasad07/Brain-Tumor-MRI-Image-Segmentation-using-Deep-Learning",
  gradient: "from-indigo-500 to-violet-500"
}];
const CompactProjects = () => {
  return <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="container-wide relative z-10 px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          
          <h2 className="mb-4 px-4">Featured Projects</h2>
          
          
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => <div key={index} className="group relative animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full">
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="p-4 md:p-6 relative flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-3 md:mb-4">
                    <span className="text-[10px] md:text-xs font-bold tracking-wider text-muted-foreground mb-1.5 md:mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-base md:text-xl font-bold mb-1.5 md:mb-2 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Impact badge */}
                  <div className="mb-3 md:mb-4">
                    <div className={`inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current border-opacity-20`}>
                      <Sparkles className="w-3 h-3" />
                      <span className="text-[10px] md:text-xs font-semibold">{project.impact}</span>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-muted/30 border border-border/50 mb-3 md:mb-4 flex-grow">
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {project.tech.map((tech, i) => <span key={i} className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium rounded-full bg-muted/50 border border-border/50">
                        {tech}
                      </span>)}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 text-xs md:text-sm">
                      <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="font-medium">Code</span>
                    </a>
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className={`flex-1 inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-xs md:text-sm`}>
                        <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span className="font-medium">Demo</span>
                      </a>}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default CompactProjects;