import { Code as Code2, Database, ChartBar as BarChart3, ClipboardCheck, GitBranch, TrendingUp, CircleCheck as CheckCircle2, Award, Target, Lightbulb } from "lucide-react";
import googleCertIcon from "@/assets/cert-google.png";
import awsCertIcon from "@/assets/cert-aws.svg";
import tableauCertIcon from "@/assets/cert-tableau.svg";
import hackerrankCertIcon from "@/assets/cert-hackerrank.png";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "SQL", "HTML/CSS"]
    },
    {
      icon: Database,
      title: "Databases & Data Warehouses",
      skills: ["MySQL", "PostgreSQL", "Snowflake", "BigQuery", "MongoDB", "SQL Server", "Oracle"]
    },
    {
      icon: TrendingUp,
      title: "Cloud & Infrastructure",
      skills: ["AWS (S3, Redshift, Lambda, EC2)", "Google Cloud Platform", "Microsoft Azure"]
    },
    {
      icon: BarChart3,
      title: "BI & Visualization",
      skills: ["Tableau", "Power BI", "Looker", "Google Data Studio", "Oracle Analytics Cloud", "Matplotlib", "Seaborn"]
    },
    {
      icon: GitBranch,
      title: "ETL & Data Engineering",
      skills: ["Apache Spark", "Apache Airflow", "dbt", "Data Pipeline Development", "ETL Workflows", "Data Integration"]
    },
    {
      icon: ClipboardCheck,
      title: "Analytics & Frameworks",
      skills: ["Python (Pandas, NumPy, Scikit-learn)", "Advanced Excel (Power Query, Pivot Tables, VBA)", "Statistical Analysis", "Predictive Modeling"]
    },
    {
      icon: Lightbulb,
      title: "AI & ML Tools",
      skills: ["Scikit-learn", "TensorFlow", "Machine Learning Models", "Predictive Analytics", "NLP", "Data Mining Algorithms"]
    },
    {
      icon: Target,
      title: "Product & Business Analytics",
      skills: ["KPI Development", "Funnel Analysis", "A/B Testing", "Cohort Analysis", "User Behavior Analytics", "Market Research", "Statistical Hypothesis Testing"]
    }
  ];

  const certifications = [
    {
      title: "Oracle Analytics Cloud 2025 Certified Professional",
      provider: "Oracle",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1D743272F69487A1E287924BF22D0C5F638E9DAB20AE2868D9570F333DD8E9FA",
      year: "2025",
      icon: null
    },
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
      year: "2025",
      icon: hackerrankCertIcon
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
            {/* Photo Placeholder */}
            <div className="flex justify-center items-start">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30">
                <img
                  src={profilePhoto}
                  alt="Saumya Prasad - Product Data Analyst portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm Saumya Prasad, a Data & Business Analyst who enjoys turning messy, complex data into insights that actually help people make better decisions. My interest in analytics comes from wanting to understand the why behind numbers—why users drop off, why processes slow down, and how data can be used to improve outcomes. I earned my Master's in Information Systems from California State University, Long Beach, where I strengthened my skills in SQL, Python, Tableau, and Power BI while working on real-world projects that improved reporting efficiency and business performance.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I value clarity, impact, and collaboration in my work. I enjoy partnering with stakeholders, asking the right questions, and translating business problems into analytical solutions that are easy to understand and act on. Whether it's building dashboards, defining KPIs, or analyzing user behavior through funnel and retention analysis, my goal is always to create insights that drive meaningful change. I'm currently seeking opportunities in data analytics, business intelligence, and product analytics, where I can continue learning, contribute value, and grow as a data professional.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Technical Skills</h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
                    <category.icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm leading-tight">{category.title}</h4>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-gray-700 flex items-start">
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Professional Certifications</h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Logo */}
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon ? (
                    <img
                      src={cert.icon}
                      alt={`${cert.provider} certification`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Award className="w-7 h-7 text-blue-600" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-gray-900 mb-1.5 leading-tight group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="space-y-0.5">
                    <p className="text-xs font-medium text-gray-600">{cert.provider}</p>
                    <p className="text-xs text-gray-500">{cert.year}</p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="mt-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium">
                  View Credential →
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