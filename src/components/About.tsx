import { Code as Code2, Database, ChartBar as BarChart3, ClipboardCheck, GitBranch, TrendingUp, CircleCheck as CheckCircle2, Award, Target, Lightbulb } from "lucide-react";
import googleCertIcon from "@/assets/cert-google.png";
import awsCertIcon from "@/assets/cert-aws.svg";
import tableauCertIcon from "@/assets/cert-tableau.svg";
import hackerrankCertIcon from "@/assets/cert-hackerrank.png";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Programming & Tools",
      description: "Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn), SQL (MySQL, PostgreSQL), R, Excel (Advanced Analytics)",
      level: 95
    },
    {
      icon: Database,
      title: "Databases",
      description: "MySQL, PostgreSQL, Snowflake, BigQuery, MongoDB, SQL Server",
      level: 90
    },
    {
      icon: TrendingUp,
      title: "Cloud Platforms",
      description: "AWS (S3, Redshift, Lambda, EC2), Google Cloud Platform (BigQuery, Cloud Storage), Microsoft Azure",
      level: 85
    },
    {
      icon: BarChart3,
      title: "BI & Visualization Tools",
      description: "Tableau, Power BI, Looker, Google Data Studio, Oracle Analytics Cloud, D3.js",
      level: 92
    },
    {
      icon: GitBranch,
      title: "ETL & Data Processing",
      description: "Apache Spark, Airflow, dbt, Data Pipeline Development, ETL Workflows",
      level: 85
    },
    {
      icon: ClipboardCheck,
      title: "Product & Business Analytics",
      description: "Product KPIs, Funnel Analysis, A/B Testing, Cohort Analysis, Market Research, Statistical Modeling",
      level: 93
    }
  ];

  const certifications = [
    {
      title: "Google Advanced Data Analytics",
      provider: "Google",
      url: "https://www.coursera.org/account/accomplishments/specialization/L1UFPKLC27OQ",
      year: "2024",
      icon: googleCertIcon
    },
    {
      title: "Google Business Intelligence",
      provider: "Google",
      url: "https://www.coursera.org/account/accomplishments/specialization/COZ84CYGX9W4",
      year: "2024",
      icon: googleCertIcon
    },
    {
      title: "Tableau Fundamentals",
      provider: "Tableau",
      url: "https://verify.skilljar.com/c/ait3fsck8x6t",
      year: "2024",
      icon: tableauCertIcon
    },
    {
      title: "AWS Academy Cloud Foundations",
      provider: "AWS",
      url: "https://www.credly.com/badges/2a5cd426-8544-46bb-a440-db9e454266ee/linked_in_profile",
      year: "2023",
      icon: awsCertIcon
    },
    {
      title: "HackerRank SQL Intermediate",
      provider: "HackerRank",
      url: "https://www.hackerrank.com/certificates/646ec66e4b25",
      year: "2023",
      icon: hackerrankCertIcon
    },
    {
      title: "Oracle Analytics Cloud 2025 Certified Professional",
      provider: "Oracle",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1D743272F69487A1E287924BF22D0C5F638E9DAB20AE2868D9570F333DD8E9FA",
      year: "2025",
      icon: null
    }
  ];

  const highlights = [
    {
      icon: Target,
      title: "Product Analytics Excellence",
      description: "Expert in defining KPIs, building event-tracking schemas, and conducting funnel, cohort, and segmentation analyses to optimize product performance and user retention"
    },
    {
      icon: Lightbulb,
      title: "Proven Business Impact",
      description: "Delivered 10% enrollment increase through market research analytics; reduced query time by 65% and manual analysis time by 80% through optimization and automation"
    },
    {
      icon: Award,
      title: "Industry-Certified Expertise",
      description: "6 professional certifications: Google Advanced Data Analytics, Google Business Intelligence, AWS Cloud Foundations, Tableau, Oracle Analytics Cloud, HackerRank SQL"
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
                  I'm a results-driven <span className="font-semibold text-primary">Data Analyst</span> and <span className="font-semibold text-primary">Product Analyst</span> specializing in transforming complex datasets into strategic business insights. With a Master of Science in Information Systems from California State University Long Beach, I bring a strong technical foundation combined with business acumen.
                </p>
                <p className="text-lg leading-relaxed">
                  I excel at <span className="font-semibold text-accent">SQL</span> and
                  <span className="font-semibold text-primary mx-1">Python</span> for data modeling,
                  <span className="font-semibold text-secondary mx-1">Tableau</span> and
                  <span className="font-semibold text-accent">Power BI</span> for visualization, plus cloud platforms like
                  <span className="font-semibold text-primary mx-1">AWS</span>,
                  <span className="font-semibold text-secondary mx-1">Snowflake</span>, and
                  <span className="font-semibold text-accent">BigQuery</span> for scalable data solutions.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Currently a Product Analyst at ServiceNow, I've delivered impactful analytics solutions including product KPI tracking, A/B testing, funnel analysis, and cross-functional dashboard development. Previously at California State University, I drove 10% enrollment growth through market research and data-driven insights.
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
            <h3 className="heading-2 mb-4">Technical Skills</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive toolkit for end-to-end data analytics and business intelligence
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
                className="soft-card p-6 hover-lift text-center flex flex-col items-center justify-center min-h-[220px]"
              >
                {/* Logo */}
                <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-xl p-3 mb-4">
                  {cert.icon ? (
                    <img src={cert.icon} alt={`${cert.provider} certification`} className="w-full h-full object-contain" />
                  ) : (
                    <Award className="w-8 h-8 text-primary" />
                  )}
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 leading-tight">{cert.title}</h4>
                  <p className="text-muted-foreground mb-1">{cert.provider}</p>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
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