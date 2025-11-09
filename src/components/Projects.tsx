import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";


const projects = [
  {
    category: "SENTIMENT ANALYSIS",
    title: "Yelp Business Sentiment Analysis",
    subtitle: "SQL | Snowflake | AWS | BigQuery",
    highlights: [
      "Processed 5GB+ Yelp data with scalable ingestion pipelines",
      "Complex SQL/BigQuery queries for data analysis",
      "Validated data quality and modeled sentiment insights",
      "Comprehensive reporting for business intelligence"
    ],
    tech: ["SQL", "Snowflake", "AWS", "BigQuery"],
    github: "https://github.com/saumyaprasad07/Yelp-Business-Reviews-Analysis",
    imageText: "Yelp Sentiment\nAnalysis"
  },
  {
    category: "EQUITY ANALYSIS",
    title: "Gender based Wage Gap Analysis",
    subtitle: "Python | Data Analysis | Statistical Modeling",
    highlights: [
      "Comprehensive analysis of wage disparities across gender",
      "Statistical methods and data visualization techniques",
      "Identified key factors contributing to pay gaps",
      "Provided actionable insights for equity improvement"
    ],
    tech: ["Python", "Data Analysis", "Statistical Modeling", "Visualization"],
    github: "https://github.com/saumyaprasad07/Gender-Based-Wage-Gap-Analysis",
    imageText: "Wage Gap\nAnalysis"
  },
  {
    category: "RECOMMENDATION SYSTEM",
    title: "Netflix Recommendation System",
    subtitle: "Streamlit | Python | MS Project | Azure Boards",
    highlights: [
      "Interactive dashboard analyzing Netflix user engagement",
      "Used survey data and Kaggle movie dataset",
      "Created project charter and planner with MS Project",
      "Managed tasks using Agile methodologies on MS Azure Boards"
    ],
    tech: ["Streamlit", "Python", "MS Project", "Azure Boards"],
    github: "https://github.com/saumyaprasad07/streamlit-app-netflix-recommendation-system",
    live: "https://netflix-movie-recommendation-system.streamlit.app/",
    imageText: "Netflix\nRecommendations"
  },
  {
    category: "DATABASE MANAGEMENT",
    title: "Database Management System for UPS",
    subtitle: "MySQL | Business Analysis | SQL Optimization",
    highlights: [
      "Designed and implemented logistics database using EERD and 3NF principles",
      "Optimized SQL queries with indexing and window functions",
      "Authored BRD, TRD, and project charter",
      "Cross-functional alignment for database implementation"
    ],
    tech: ["MySQL", "Business Analysis", "SQL Optimization"],
    github: "https://github.com/saumyaprasad07/Database-Management-System---UPS-Deliveries",
    imageText: "UPS Database\nSystem"
  },
  {
    category: "BUSINESS OPTIMIZATION",
    title: "Business Analysis on Aggregate Planning",
    subtitle: "Excel | Optimization | Business Analysis",
    highlights: [
      "Developed Excel-based optimization model for Green Mills Inc.",
      "Analyzed Chase, Level, and Optimal strategies",
      "Minimized total production costs through workforce management",
      "Identified most cost-effective aggregate plan"
    ],
    tech: ["Excel", "Optimization", "Business Analysis"],
    github: "https://github.com/saumyaprasad07/Business-Analysis-on-Aggregate-Planning-at-Green-Mills",
    imageText: "Aggregate\nPlanning"
  },
  {
    category: "DEEP LEARNING",
    title: "Brain Tumor MRI Image Segmentation",
    subtitle: "Deep Learning | Python | TensorFlow",
    highlights: [
      "Implemented deep learning models for MRI image segmentation",
      "Developed notebook-based solution with comprehensive dataset processing",
      "Advanced image processing and analysis techniques",
      "Documented research findings in academic paper format"
    ],
    tech: ["Deep Learning", "Python", "Image Processing", "TensorFlow"],
    github: "https://github.com/saumyaprasad07/Brain-Tumor-MRI-Image-Segmentation-using-Deep-Learning",
    imageText: "Brain Tumor\nSegmentation"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my data analytics and business intelligence expertise.
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side - Image with overlay text */}
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 min-h-[400px] flex items-center justify-center p-8" role="img" aria-label={`Project visualization: ${project.title}`}>
                  <div className="absolute inset-0 bg-card/50 backdrop-blur-sm"></div>
                  <h3 className="relative text-4xl md:text-5xl font-bold text-center whitespace-pre-line z-10">
                    {project.imageText}
                  </h3>
                </div>

                {/* Right side - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-bold tracking-wider text-muted-foreground mb-4">
                      {project.category}
                    </p>
                    
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">
                      {project.title}
                    </h4>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {project.subtitle}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">■</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        VIEW CODE
                      </a>
                    </Button>
                    {project.live && (
                      <Button asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          LIVE DEMO
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
