import { Code2, Database, BarChart3, Cloud, GitBranch, TrendingUp } from "lucide-react";

const About = () => {
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
      description: "Google Advanced Data Analytics, Google Business Intelligence, Tableau Fundamentals, AWS Cloud Foundations, HackerRank SQL Intermediate, Amazon Redshift Essentials",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data Analyst passionate about transforming data into actionable insights
          </p>
        </div>

        <div className="glass-card p-8 mb-12 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a Data Analyst with expertise in business analytics, data visualization, and database management. 
            I have graduated from California State University Long Beach with a Master of Science in Information Systems, 
            where I combined technical proficiency with business acumen to deliver data-driven insights.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in SQL, Python, Tableau, and Power BI, creating automated dashboards and conducting 
            comprehensive analyses that drive strategic decision-making. My background includes roles at 
            California State University and experience in market research and project management.
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Skills & <span className="gradient-text">Expertise</span>
          </h3>
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
                    <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;