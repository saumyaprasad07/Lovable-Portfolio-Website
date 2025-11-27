import { Code as Code2, Database, ChartBar as BarChart3, ClipboardCheck, GitBranch, TrendingUp, CircleCheck as CheckCircle2, Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Programming & Analytics",
      description: "Python (Pandas, NumPy, Scikit-learn, Matplotlib), SQL, R",
      level: 95
    },
    {
      icon: BarChart3,
      title: "Data Visualization & BI",
      description: "Tableau, Power BI, Google Data Studio, Excel, D3.js",
      level: 90
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      description: "MySQL, Snowflake, AWS (S3, Redshift, Lambda), GCP, Azure",
      level: 85
    },
    {
      icon: TrendingUp,
      title: "Business Analysis",
      description: "Market Research, KPI Dashboards, A/B Testing, Statistical Analysis",
      level: 92
    },
    {
      icon: GitBranch,
      title: "Methodologies & Tools",
      description: "Agile/Scrum, Statistical Analysis, Git/GitHub, JIRA",
      level: 88
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Stakeholder Management, Requirements Gathering, Process Optimization",
      level: 87
    }
  ];

  const certifications = [
    {
      title: "Google Advanced Data Analytics",
      provider: "Google",
      url: "https://www.coursera.org/account/accomplishments/specialization/L1UFPKLC27OQ",
      year: "2024"
    },
    {
      title: "Google Business Intelligence",
      provider: "Google", 
      url: "https://www.coursera.org/account/accomplishments/specialization/COZ84CYGX9W4",
      year: "2024"
    },
    {
      title: "Tableau Fundamentals",
      provider: "Tableau",
      url: "https://verify.skilljar.com/c/ait3fsck8x6t",
      year: "2024"
    },
    {
      title: "AWS Academy Cloud Foundations",
      provider: "AWS",
      url: "https://www.credly.com/badges/2a5cd426-8544-46bb-a440-db9e454266ee/linked_in_profile",
      year: "2023"
    },
    {
      title: "HackerRank SQL Intermediate",
      provider: "HackerRank",
      url: "https://www.hackerrank.com/certificates/646ec66e4b25",
      year: "2023"
    },
    {
      title: "Oracle Analytics Cloud 2025 Certified Professional",
      provider: "Oracle",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1D743272F69487A1E287924BF22D0C5F638E9DAB20AE2868D9570F333DD8E9FA",
      year: "2025"
    }
  ];

  const highlights = [
    {
      icon: Target,
      title: "Results-Driven Approach",
      description: "Delivered 10% increase in student enrollment through comprehensive data analysis and strategic insights",
      metric: "10% Growth"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Automation",
      description: "Built automated dashboards and analytics pipelines, reducing manual analysis time by 80%",
      metric: "80% Efficiency"
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "6+ professional certifications from industry leaders including Google, AWS, and Tableau",
      metric: "6+ Certs"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-muted/30">
      <div className="container-wide px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-1 mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming complex data into actionable business insights
          </p>
        </div>

        {/* Main About Section */}
        <div className="premium-card p-8 md:p-12 mb-16 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Profile Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 lg:w-full lg:aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-70">👨‍💼</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  I'm a <span className="font-semibold text-primary">Data Analyst</span> with expertise in business analytics, 
                  data visualization, and database management. I graduated from California State University Long Beach 
                  with a Master of Science in Information Systems.
                </p>
                <p className="text-lg leading-relaxed">
                  I specialize in <span className="font-semibold text-accent">SQL</span>, 
                  <span className="font-semibold text-primary mx-1">Python</span>, 
                  <span className="font-semibold text-secondary mx-1">Tableau</span>, and 
                  <span className="font-semibold text-accent">Power BI</span>, 
                  creating automated dashboards and conducting comprehensive analyses.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  My background includes roles at California State University and ServiceNow, with extensive experience 
                  in market research, product analytics, and project management.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="heading-2 mb-4">Skills & Expertise</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and methodologies I use to solve complex data challenges
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="soft-card p-6 hover-lift-subtle">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                  </div>
                </div>
                
                {/* Skill Level */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-muted-foreground">Proficiency</span>
                    <span className="text-xs font-semibold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="heading-2 mb-4">Professional Certifications</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Validated expertise from industry-leading organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-card p-6 hover-lift text-center"
              >
                {/* Logo */}
                <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-xl p-3 mb-4 mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 leading-tight">{cert.title}</h4>
                  <p className="text-muted-foreground mb-1">{cert.provider}</p>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
                
                {/* Verified Badge */}
                <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">Verified</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;