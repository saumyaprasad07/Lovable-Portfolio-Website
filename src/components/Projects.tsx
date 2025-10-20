import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";


const projects = [
  {
    title: "Yelp Business Sentiment Analysis",
    description: "Processed 5GB+ Yelp data with scalable ingestion pipelines and complex SQL/BigQuery queries. Validated data quality and modeled sentiment insights for comprehensive reporting.",
    tech: ["SQL", "Snowflake", "AWS", "BigQuery"],
    github: "https://github.com/saumyaprasad07",
    live: "#",
  },
  {
    title: "Database Management System for UPS",
    description: "Designed and implemented logistics database using EERD and 3NF principles. Optimized SQL queries with indexing and window functions. Authored BRD, TRD, and project charter for cross-functional alignment.",
    tech: ["MySQL", "Business Analysis", "SQL Optimization"],
    github: "https://github.com/saumyaprasad07",
    live: "#",
  },
  {
    title: "Interactive BI Dashboards",
    description: "Designed automated end-to-end dashboards using SQL, Python, Tableau, and Power BI for real-time visualization, improving reporting efficiency by 25% across multiple departments.",
    tech: ["Tableau", "Power BI", "Python", "SQL"],
    github: "https://github.com/saumyaprasad07",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
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
              <div className="relative overflow-hidden aspect-video">
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 p-4">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
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
