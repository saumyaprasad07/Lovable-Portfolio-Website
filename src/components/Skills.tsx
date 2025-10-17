import { Code2, Database, BarChart3, Cloud, GitBranch, TrendingUp } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming & Analytics",
    description: "Python (Pandas, NumPy, Scikit-learn, Matplotlib), SQL",
  },
  {
    icon: BarChart3,
    title: "Data Visualization & BI",
    description: "Tableau, Power BI, Google Data Studio, Excel",
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    description: "MySQL, Snowflake, AWS (S3, Redshift, Lambda), GCP, Azure",
  },
  {
    icon: TrendingUp,
    title: "Business Analysis",
    description: "Market Research, KPI Dashboards, A/B Testing",
  },
  {
    icon: GitBranch,
    title: "Methodologies & Tools",
    description: "Agile/Scrum, Statistical Analysis, Git/GitHub",
  },
  {
    icon: Cloud,
    title: "Certifications",
    description: "Google Data Analytics, Tableau, AWS Cloud, SQL",
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills and tools I leverage to deliver data-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
