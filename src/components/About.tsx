import { Code2, Database, BarChart3, ClipboardCheck, GitBranch, TrendingUp, CheckCircle2, Award, Target, Lightbulb, Sparkles, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Programming & Analytics",
      description: "Python (Pandas, NumPy, Scikit-learn, Matplotlib), SQL, R",
      color: "from-blue-500 to-cyan-500",
      level: 95
    },
    {
      icon: BarChart3,
      title: "Data Visualization & BI",
      description: "Tableau, Power BI, Google Data Studio, Excel, D3.js",
      color: "from-purple-500 to-pink-500",
      level: 90
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      description: "MySQL, Snowflake, AWS (S3, Redshift, Lambda), GCP, Azure",
      color: "from-green-500 to-emerald-500",
      level: 85
    },
    {
      icon: TrendingUp,
      title: "Business Analysis",
      description: "Market Research, KPI Dashboards, A/B Testing, Statistical Analysis",
      color: "from-orange-500 to-red-500",
      level: 92
    },
    {
      icon: GitBranch,
      title: "Methodologies & Tools",
      description: "Agile/Scrum, Statistical Analysis, Git/GitHub, JIRA",
      color: "from-indigo-500 to-purple-500",
      level: 88
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Stakeholder Management, Requirements Gathering, Process Optimization",
      color: "from-teal-500 to-blue-500",
      level: 87
    }
  ];

  const certifications = [
    {
      title: "Google Advanced Data Analytics",
      provider: "Google",
      logo: "/src/assets/cert-google.png",
      url: "https://www.coursera.org/account/accomplishments/specialization/L1UFPKLC27OQ",
      color: "from-blue-500 to-blue-600",
      year: "2024"
    },
    {
      title: "Google Business Intelligence",
      provider: "Google", 
      logo: "/src/assets/cert-google.png",
      url: "https://www.coursera.org/account/accomplishments/specialization/COZ84CYGX9W4",
      color: "from-green-500 to-green-600",
      year: "2024"
    },
    {
      title: "Tableau Fundamentals",
      provider: "Tableau",
      logo: "/src/assets/cert-tableau.svg",
      url: "https://verify.skilljar.com/c/ait3fsck8x6t",
      color: "from-orange-500 to-orange-600",
      year: "2024"
    },
    {
      title: "AWS Academy Cloud Foundations",
      provider: "AWS",
      logo: "/src/assets/cert-aws.svg",
      url: "https://www.credly.com/badges/2a5cd426-8544-46bb-a440-db9e454266ee/linked_in_profile",
      color: "from-yellow-500 to-orange-500",
      year: "2023"
    },
    {
      title: "HackerRank SQL Intermediate",
      provider: "HackerRank",
      logo: "/src/assets/cert-hackerrank.png",
      url: "https://www.hackerrank.com/certificates/646ec66e4b25",
      color: "from-purple-500 to-purple-600",
      year: "2023"
    },
    {
      title: "Oracle Analytics Cloud 2025 Certified Professional",
      provider: "Oracle",
      logo: "/src/assets/cert-hackerrank.png",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1D743272F69487A1E287924BF22D0C5F638E9DAB20AE2868D9570F333DD8E9FA",
      color: "from-red-500 to-red-600",
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
    <section id="about" className="section-spacing bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-secondary/3 to-accent/3 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container-wide px-4 md:px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold gradient-text">Get to know me</span>
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
          </div>
          <h2 className="heading-1 mb-8">About Me</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate about transforming complex data into actionable business insights that drive meaningful outcomes
          </p>
        </div>

        {/* Enhanced Main About Section */}
        <div className="premium-card p-8 md:p-16 mb-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">
            {/* Enhanced Profile Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-80 h-80 lg:w-full lg:aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30 overflow-hidden group-hover:scale-105 transition-all duration-700 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl opacity-70 group-hover:scale-110 transition-transform duration-700">
                      👨‍💼
                    </div>
                  </div>
                  {/* Enhanced animated border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-border opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                </div>
                {/* Enhanced floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-float backdrop-blur-sm border border-primary/20" />
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full animate-float-delayed backdrop-blur-sm border border-secondary/20" />
                <div className="absolute top-1/4 -left-4 w-6 h-6 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-float backdrop-blur-sm border border-accent/20" style={{ animationDelay: '3s' }} />
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed">
                  I'm a <span className="font-bold gradient-text">Data Analyst</span> with expertise in business analytics, 
                  data visualization, and database management. I graduated from California State University Long Beach 
                  with a Master of Science in Information Systems, where I combined technical proficiency with business 
                  acumen to deliver <span className="font-bold gradient-text-secondary">data-driven insights</span>.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  I specialize in <span className="font-bold text-accent px-2 py-1 bg-accent/10 rounded-lg">SQL</span>, 
                  <span className="font-bold text-primary px-2 py-1 bg-primary/10 rounded-lg mx-2">Python</span>, 
                  <span className="font-bold text-secondary px-2 py-1 bg-secondary/10 rounded-lg">Tableau</span>, and 
                  <span className="font-bold text-accent px-2 py-1 bg-accent/10 rounded-lg ml-2">Power BI</span>, 
                  creating automated dashboards and conducting comprehensive analyses that drive strategic decision-making.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My background includes roles at California State University and ServiceNow, with extensive experience 
                  in market research, product analytics, and project management. I'm passionate about turning complex 
                  data challenges into clear, actionable business solutions.
                </p>
              </div>

              {/* Enhanced Key Highlights */}
              <div className="grid gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="group flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-muted/30 to-muted/10 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">{highlight.title}</h4>
                        <span className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-sm font-bold text-primary border border-primary/20">
                          {highlight.metric}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="heading-2 mb-6">Skills & Expertise</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and methodologies I use to solve complex data challenges and drive business value
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group premium-card p-8 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-500 border border-current border-opacity-20`}>
                    <skill.icon className="h-8 w-8 text-white" style={{ filter: 'drop-shadow(0 0 8px currentColor)' }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                      {skill.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                {/* Skill Level Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Proficiency</span>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Certifications Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="heading-2 mb-6">Professional Certifications</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Validated expertise from industry-leading organizations, demonstrating commitment to continuous learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group premium-card p-8 hover-lift flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Enhanced Logo */}
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-background to-muted/30 rounded-2xl p-4 mb-6 group-hover:scale-110 transition-transform duration-500 border border-border/50 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Enhanced Content */}
                <div className="flex-1 mb-6">
                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300 leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground mb-2 font-medium">{cert.provider}</p>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
                
                {/* Enhanced Verified Badge */}
                <div className={`flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${cert.color} bg-opacity-10 border border-current border-opacity-20 group-hover:scale-105 transition-transform duration-300`}>
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-bold text-green-600">Verified</span>
                  <Zap className="h-4 w-4 text-green-500" />
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