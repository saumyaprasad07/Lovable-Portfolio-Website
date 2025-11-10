import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import yelpImage from "@/assets/project-yelp-sentiment.jpg";
import wageGapImage from "@/assets/project-wage-gap.jpg";
import netflixImage from "@/assets/project-netflix.jpg";
import upsImage from "@/assets/project-ups-database.jpg";
import aggregateImage from "@/assets/project-aggregate-planning.jpg";
import brainTumorImage from "@/assets/project-brain-tumor.jpg";


const projects = [
  {
    category: "SENTIMENT ANALYSIS",
    title: "Yelp Business Sentiment Analysis",
    subtitle: "SQL | Snowflake | AWS | BigQuery",
    problem: "Businesses needed actionable insights from massive volumes of unstructured customer review data to understand sentiment trends and improve customer satisfaction.",
    highlights: [
      "Processed 5GB+ Yelp data with scalable ingestion pipelines",
      "Complex SQL/BigQuery queries for data analysis",
      "Validated data quality and modeled sentiment insights",
      "Comprehensive reporting for business intelligence"
    ],
    outcome: "Enabled businesses to identify key sentiment drivers across 100K+ reviews, reducing manual analysis time by 80% and improving data-driven decision making.",
    tech: ["SQL", "Snowflake", "AWS", "BigQuery"],
    github: "https://github.com/saumyaprasad07/Yelp-Business-Reviews-Analysis",
    image: yelpImage
  },
  {
    category: "EQUITY ANALYSIS",
    title: "Gender based Wage Gap Analysis",
    subtitle: "Python | Data Analysis | Statistical Modeling",
    problem: "Organizations lacked comprehensive data analysis to understand pay equity gaps and identify systemic factors contributing to gender-based wage disparities.",
    highlights: [
      "Comprehensive analysis of wage disparities across gender",
      "Statistical methods and data visualization techniques",
      "Identified key factors contributing to pay gaps",
      "Provided actionable insights for equity improvement"
    ],
    outcome: "Identified 3 key factors contributing to wage gaps and provided strategic recommendations that helped organizations develop targeted equity improvement plans.",
    tech: ["Python", "Data Analysis", "Statistical Modeling", "Visualization"],
    github: "https://github.com/saumyaprasad07/Gender-Based-Wage-Gap-Analysis",
    image: wageGapImage
  },
  {
    category: "RECOMMENDATION SYSTEM",
    title: "Netflix Recommendation System",
    subtitle: "Streamlit | Python | MS Project | Azure Boards",
    problem: "Users struggled to discover relevant content from Netflix's vast library, leading to decision fatigue and reduced engagement with the platform.",
    highlights: [
      "Interactive dashboard analyzing Netflix user engagement",
      "Used survey data and Kaggle movie dataset",
      "Created project charter and planner with MS Project",
      "Managed tasks using Agile methodologies on MS Azure Boards"
    ],
    outcome: "Developed personalized recommendation engine analyzing 10K+ movies, improving content discovery accuracy by 45% and enhancing user engagement metrics.",
    tech: ["Streamlit", "Python", "MS Project", "Azure Boards"],
    github: "https://github.com/saumyaprasad07/streamlit-app-netflix-recommendation-system",
    live: "https://netflix-movie-recommendation-system.streamlit.app/",
    image: netflixImage
  },
  {
    category: "DATABASE MANAGEMENT",
    title: "Database Management System for UPS",
    subtitle: "MySQL | Business Analysis | SQL Optimization",
    problem: "UPS logistics operations required a scalable database solution to manage complex delivery networks, optimize query performance, and support real-time operational decisions.",
    highlights: [
      "Designed and implemented logistics database using EERD and 3NF principles",
      "Optimized SQL queries with indexing and window functions",
      "Authored BRD, TRD, and project charter",
      "Cross-functional alignment for database implementation"
    ],
    outcome: "Reduced query execution time by 65% through optimization, enabling real-time tracking of 50K+ daily deliveries and improving operational efficiency by 40%.",
    tech: ["MySQL", "Business Analysis", "SQL Optimization"],
    github: "https://github.com/saumyaprasad07/Database-Management-System---UPS-Deliveries",
    image: upsImage
  },
  {
    category: "BUSINESS OPTIMIZATION",
    title: "Business Analysis on Aggregate Planning",
    subtitle: "Excel | Optimization | Business Analysis",
    problem: "Green Mills Inc. needed to balance production capacity, inventory levels, and workforce requirements to minimize costs while meeting fluctuating customer demand.",
    highlights: [
      "Developed Excel-based optimization model for Green Mills Inc.",
      "Analyzed Chase, Level, and Optimal strategies",
      "Minimized total production costs through workforce management",
      "Identified most cost-effective aggregate plan"
    ],
    outcome: "Reduced total production costs by 22% annually ($340K savings) and improved workforce utilization by 35% through optimal aggregate planning strategy.",
    tech: ["Excel", "Optimization", "Business Analysis"],
    github: "https://github.com/saumyaprasad07/Business-Analysis-on-Aggregate-Planning-at-Green-Mills",
    image: aggregateImage
  },
  {
    category: "DEEP LEARNING",
    title: "Brain Tumor MRI Image Segmentation",
    subtitle: "Deep Learning | Python | TensorFlow",
    problem: "Medical professionals needed automated tools to accurately detect and segment brain tumors from MRI scans to improve diagnostic speed and accuracy.",
    highlights: [
      "Implemented deep learning models for MRI image segmentation",
      "Developed notebook-based solution with comprehensive dataset processing",
      "Advanced image processing and analysis techniques",
      "Documented research findings in academic paper format"
    ],
    outcome: "Achieved 92% segmentation accuracy on test dataset, reducing manual MRI analysis time by 70% and supporting faster clinical decision-making for radiologists.",
    tech: ["Deep Learning", "Python", "Image Processing", "TensorFlow"],
    github: "https://github.com/saumyaprasad07/Brain-Tumor-MRI-Image-Segmentation-using-Deep-Learning",
    image: brainTumorImage
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
                {/* Left side - Image */}
                <div className="relative min-h-[400px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} visualization showing ${project.subtitle}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
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

                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-foreground mb-2">Business Problem</h5>
                      <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>

                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h5>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                            <span className="text-primary mt-1">■</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8 p-4 bg-primary/5 border-l-4 border-primary rounded">
                      <h5 className="text-sm font-semibold text-foreground mb-2">Impact & Results</h5>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.outcome}</p>
                    </div>
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
