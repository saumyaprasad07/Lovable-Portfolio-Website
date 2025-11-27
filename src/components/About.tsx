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
    <section id="about" className="section-spacing bg-white dark:bg-muted/30">
      <div className="container-wide px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Main About Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate Product Data Analyst with a Master's degree in Information Systems from California State University Long Beach, currently working at ServiceNow in New York. My expertise lies in transforming complex data into actionable product insights that drive business decisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a strong foundation in SQL, Python, and modern BI tools, I specialize in product analytics, experimentation, and building data models that reveal user behavior patterns. I've successfully delivered insights that contributed to a 10% increase in student enrollment and optimized database performance by 40%.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My approach combines technical rigor with business acumen, enabling me to bridge the gap between data and strategy. I'm driven by curiosity and the challenge of uncovering insights that shape product roadmaps and enhance user experiences.
              </p>
            </div>

            {/* Right Content - Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-bold mb-1">Master of Science in Information Systems</h4>
                  <p className="text-gray-600 mb-2">California State University Long Beach</p>
                  <p className="text-sm text-gray-500 mb-2">May 2025 • GPA: 3.5</p>
                  <p className="text-sm text-gray-600">Business Analytics, Project Management, Database Management, Statistics</p>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h4 className="text-lg font-bold mb-1">B.E. in Information Technology</h4>
                  <p className="text-gray-600 mb-2">University of Mumbai, India</p>
                  <p className="text-sm text-gray-500 mb-2">May 2023 • GPA: 3.5</p>
                  <p className="text-sm text-gray-600">Data Mining & BI, Machine Learning, Data Science and AI, Cloud Computing</p>
                </div>
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
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
                    <skill.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
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