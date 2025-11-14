import { Code2, Database, BarChart3, ClipboardCheck, GitBranch, TrendingUp, CheckCircle2 } from "lucide-react";
import googleLogo from "@/assets/cert-google.png";
import tableauLogo from "@/assets/cert-tableau.svg";
import awsLogo from "@/assets/cert-aws.svg";
import hackerrankLogo from "@/assets/cert-hackerrank.png";

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
      title: "Google Advanced Data Analytics",
      provider: "Google",
      logo: googleLogo,
      url: "https://www.coursera.org/account/accomplishments/specialization/L1UFPKLC27OQ"
    },
    {
      title: "Google Business Intelligence",
      provider: "Google",
      logo: googleLogo,
      url: "https://www.coursera.org/account/accomplishments/specialization/COZ84CYGX9W4"
    },
    {
      title: "Tableau Fundamentals",
      provider: "Tableau",
      logo: tableauLogo,
      url: "https://verify.skilljar.com/c/ait3fsck8x6t"
    },
    {
      title: "AWS Academy Cloud Foundations",
      provider: "AWS",
      logo: awsLogo,
      url: "https://www.credly.com/badges/2a5cd426-8544-46bb-a440-db9e454266ee/linked_in_profile"
    },
    {
      title: "HackerRank SQL Intermediate",
      provider: "HackerRank",
      logo: hackerrankLogo,
      url: "https://www.hackerrank.com/certificates/646ec66e4b25"
    },
  ];
  return <section id="about" className="section-spacing bg-gradient-to-b from-background to-muted/20">
      <div className="container-wide px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="heading-2 mb-4">
            About Me
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="glass-card p-6 md:p-8 lg:p-10 mb-12 md:mb-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Left column - Avatar/Photo */}
            <div className="flex justify-center md:justify-start animate-fade-in">
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-full lg:h-auto lg:aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl md:text-7xl lg:text-8xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                    👨‍💼
                  </div>
                </div>
                {/* Replace the emoji above with an actual image when available:
                <img 
                  src="/path-to-your-photo.jpg" 
                  alt="Saumya Prasad" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>

            {/* Right column - Text content */}
            <div className="space-y-5 md:space-y-6 animate-fade-in" style={{ animationDelay: "150ms" }}>
              <p className="body-large leading-relaxed text-muted-foreground">
                I'm a <span className="font-bold text-primary">Data Analyst</span> with expertise in business analytics, data visualization, and database management. 
                I have graduated from California State University Long Beach with a Master of Science in Information Systems, 
                where I combined technical proficiency with business acumen to deliver <span className="font-bold text-secondary">data-driven insights</span>.
              </p>
              <p className="body-large leading-relaxed text-muted-foreground">
                I specialize in <span className="font-bold text-accent">SQL</span>, <span className="font-bold text-accent">Python</span>, <span className="font-bold text-accent">Tableau</span>, and <span className="font-bold text-accent">Power BI</span>, creating automated dashboards and conducting 
                comprehensive analyses that drive strategic decision-making. My background includes roles at 
                California State University and experience in market research and project management, focused on turning complex <span className="font-bold text-primary">Data Analytics</span> into actionable business strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-center mb-6 md:mb-8 px-4">
            Skills & Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill, index) => <div key={index} className="glass-card p-4 md:p-6 group hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0" aria-hidden="true">
                    <skill.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{skill.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-center mb-6 md:mb-8 px-4">
            Professional Certifications
          </h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 group hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col items-center text-center gap-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Logo */}
                <div className="w-16 h-16 flex items-center justify-center bg-background/50 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.provider} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Title */}
                <div className="flex-1">
                  <h4 className="text-sm md:text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{cert.provider}</p>
                </div>
                
                {/* Verified Badge */}
                <div className="flex items-center gap-1.5 text-accent">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-xs font-medium">Verified</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default About;