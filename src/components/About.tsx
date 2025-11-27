import { Code2, Database, BarChart3, ClipboardCheck, GitBranch, TrendingUp, CheckCircle2, Award, Target, Lightbulb } from "lucide-react";
import googleLogo from "@/assets/cert-google.png";
import tableauLogo from "@/assets/cert-tableau.svg";
import awsLogo from "@/assets/cert-aws.svg";
import hackerrankLogo from "@/assets/cert-hackerrank.png";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Programming & Analytics",
      description: "Python (Pandas, NumPy, Scikit-learn, Matplotlib), SQL",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Data Visualization & BI",
      description: "Tableau, Power BI, Google Data Studio, Excel",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      description: "MySQL, Snowflake, AWS (S3, Redshift, Lambda), GCP, Azure",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Business Analysis",
      description: "Market Research, KPI Dashboards, A/B Testing",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: GitBranch,
      title: "Methodologies & Tools",
      description: "Agile/Scrum, Statistical Analysis, Git/GitHub",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Agile/Scrum, JIRA, Stakeholder Management, Requirements Gathering",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const certifications = [
    {
      title: "Google Advanced Data Analytics",
      provider: "Google",
      logo: googleLogo,
      url: "https://www.coursera.org/account/accomplishments/specialization/L1UFPKLC27OQ",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Google Business Intelligence",
      provider: "Google", 
      logo: googleLogo,
      url: "https://www.coursera.org/account/accomplishments/specialization/COZ84CYGX9W4",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Tableau Fundamentals",
      provider: "Tableau",
      logo: tableauLogo,
      url: "https://verify.skilljar.com/c/ait3fsck8x6t",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "AWS Academy Cloud Foundations",
      provider: "AWS",
      logo: awsLogo,
      url: "https://www.credly.com/badges/2a5cd426-8544-46bb-a440-db9e454266ee/linked_in_profile",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "HackerRank SQL Intermediate",
      provider: "HackerRank",
      logo: hackerrankLogo,
      url: "https://www.hackerrank.com/certificates/646ec66e4b25",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Oracle Analytics Cloud 2025 Certified Professional",
      provider: "Oracle",
      logo: hackerrankLogo,
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1D743272F69487A1E287924BF22D0C5F638E9DAB20AE2868D9570F333DD8E9FA",
      color: "from-red-500 to-red-600"
    }
  ];

  const highlights = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Delivered 10% increase in student enrollment through data-driven insights"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Built automated dashboards reducing manual analysis time by 80%"
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "6+ professional certifications from industry leaders"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container-wide px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get to know me</span>
          </div>
          <h2 className="heading-1 mb-6">About Me</h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming complex data into actionable business insights
          </p>
        </div>

        {/* Main About Section */}
        <div className="modern-card p-8 md:p-12 mb-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[350px_1fr] gap-12 items-start">
            {/* Profile Image/Avatar */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="w-64 h-64 md:w-full md:aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30 overflow-hidden group-hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-60 group-hover:scale-110 transition-transform duration-500">
                      👨‍💼
                    </div>
                  </div>
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="body-base leading-relaxed">
                  I'm a <span className="font-bold text-primary">Data Analyst</span> with expertise in business analytics, 
                  data visualization, and database management. I graduated from California State University Long Beach 
                  with a Master of Science in Information Systems, where I combined technical proficiency with business 
                  acumen to deliver <span className="font-bold text-secondary">data-driven insights</span>.
                </p>
                <p className="body-base leading-relaxed">
                  I specialize in <span className="font-bold text-accent">SQL</span>, <span className="font-bold text-accent">Python</span>, 
                  <span className="font-bold text-accent"> Tableau</span>, and <span className="font-bold text-accent">Power BI</span>, 
                  creating automated dashboards and conducting comprehensive analyses that drive strategic decision-making. 
                  My background includes roles at California State University and experience in market research and project management.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border/50 hover:shadow-md transition-all duration-300">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
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
            <p className="body-base text-muted-foreground">Technologies and methodologies I use to solve complex problems</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group modern-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="h-6 w-6 text-white" style={{ filter: 'drop-shadow(0 0 8px currentColor)' }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
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
            <p className="body-base text-muted-foreground">Validated expertise from industry-leading organizations</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group modern-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Logo */}
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-background to-muted/30 rounded-xl p-3 mb-4 group-hover:scale-110 transition-transform duration-300 border border-border/50">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.provider} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 mb-4">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </div>
                
                {/* Verified Badge */}
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${cert.color} bg-opacity-10 border border-current border-opacity-20`}>
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-xs font-medium text-green-600">Verified</span>
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