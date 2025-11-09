import { Code2, Database, BarChart3, ClipboardCheck, GitBranch, TrendingUp } from "lucide-react";
const About = () => {
  const skills = [{
    icon: Code2,
    title: "Programming & Analytics",
    description: "Python (Pandas, NumPy, Scikit-learn, Matplotlib), SQL"
  }, {
    icon: BarChart3,
    title: "Data Visualization & BI",
    description: "Tableau, Power BI, Google Data Studio, Excel"
  }, {
    icon: Database,
    title: "Databases & Cloud",
    description: "MySQL, Snowflake, AWS (S3, Redshift, Lambda), GCP, Azure"
  }, {
    icon: TrendingUp,
    title: "Business Analysis",
    description: "Market Research, KPI Dashboards, A/B Testing"
  }, {
    icon: GitBranch,
    title: "Methodologies & Tools",
    description: "Agile/Scrum, Statistical Analysis, Git/GitHub"
  }, {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Agile/Scrum Methodology, JIRA, Stakeholder Management, Requirements Gathering, Project Documentation (BRD, TRD), Cross-functional Collaboration"
  }];

  const certifications = [
    {
      title: "Google Advanced Data Analytics Professional Certificate",
      url: "https://www.coursera.org/account/accomplishments/specialization/L1UFPKLC27OQ"
    },
    {
      title: "Google Business Intelligence Professional Certificate",
      url: "https://www.coursera.org/account/accomplishments/specialization/COZ84CYGX9W4"
    },
    {
      title: "Tableau Fundamentals",
      url: "https://verify.skilljar.com/c/ait3fsck8x6t"
    },
    {
      title: "AWS Academy Cloud Foundations",
      url: "https://www.credly.com/badges/2a5cd426-8544-46bb-a440-db9e454266ee/linked_in_profile"
    },
    {
      title: "HackerRank SQL Intermediate",
      url: "https://www.hackerrank.com/certificates/646ec66e4b25"
    }
  ];
  return <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
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
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => <div key={index} className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Professional Certifications
          </h2>
          <div className="glass-card p-6">
            <ul className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors underline"
                  >
                    {cert.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default About;