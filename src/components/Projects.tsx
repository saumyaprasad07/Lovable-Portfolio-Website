import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";


const projects = [
  {
    title: "Yelp Business Sentiment Analysis",
    description: "Processed 5GB+ Yelp data with scalable ingestion pipelines and complex SQL/BigQuery queries. Validated data quality and modeled sentiment insights for comprehensive reporting.",
    tech: ["SQL", "Snowflake", "AWS", "BigQuery"],
    github: "https://github.com/saumyaprasad07/Yelp-Business-Reviews-Analysis",
  },
  {
    title: "Gender based Wage Gap Analysis",
    description: "Comprehensive analysis of wage disparities across gender using statistical methods and data visualization. Identified key factors contributing to pay gaps and provided actionable insights for equity improvement.",
    tech: ["Python", "Data Analysis", "Statistical Modeling", "Visualization"],
    github: "https://github.com/saumyaprasad07/Gender-Based-Wage-Gap-Analysis",
  },
  {
    title: "Netflix Recommendation System",
    description: "Interactive dashboard analyzing Netflix user engagement using survey data and Kaggle movie dataset. Created project charter and planner with MS Project, managed tasks using Agile methodologies on MS Azure Boards for efficient tracking and collaboration.",
    tech: ["Streamlit", "Python", "MS Project", "Azure Boards"],
    github: "https://github.com/saumyaprasad07/streamlit-app-netflix-recommendation-system",
    live: "https://netflix-movie-recommendation-system.streamlit.app/",
  },
    {
    title: "Database Management System for UPS",
    description: "Designed and implemented logistics database using EERD and 3NF principles. Optimized SQL queries with indexing and window functions. Authored BRD, TRD, and project charter for cross-functional alignment.",
    tech: ["MySQL", "Business Analysis", "SQL Optimization"],
    github: "https://github.com/saumyaprasad07/Database-Management-System---UPS-Deliveries",
  },
   {
    title: "Business Analysis on Aggregate Planning",
    description: "Developed an Excel-based optimization model to minimize total production costs for Green Mills Inc. using Chase, Level, and Optimal strategies. Analyzes workforce management, inventory control, and spot market purchases to identify the most cost-effective aggregate plan.",
    tech: ["Excel", "Optimization", "Business Analysis"],
    github: "https://github.com/saumyaprasad07/Business-Analysis-on-Aggregate-Planning-at-Green-Mills",
  },
  {
    title: "Brain Tumor MRI Image Segmentation",
    description: "Implemented deep learning models for brain tumor MRI image segmentation. Developed notebook-based solution with comprehensive dataset processing and analysis, including research paper documentation.",
    tech: ["Deep Learning", "Python", "Image Processing", "TensorFlow"],
    github: "https://github.com/saumyaprasad07/Brain-Tumor-MRI-Image-Segmentation-using-Deep-Learning",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
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
