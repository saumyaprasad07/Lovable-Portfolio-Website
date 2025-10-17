import { Award, Briefcase, GraduationCap } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate developer with a love for creating exceptional digital experiences.
          </p>
        </div>

        <div className="glass-card p-8 mb-8 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a Data Analyst with expertise in business analytics, data visualization, and database management. 
            Currently pursuing my Master of Science in Information Systems at California State University Long Beach, 
            I combine technical proficiency with business acumen to deliver data-driven insights.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in SQL, Python, Tableau, and Power BI, creating automated dashboards and conducting 
            comprehensive analyses that drive strategic decision-making. My background includes roles at 
            California State University and experience in market research and project management.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Work Experience
          </h3>
          <div className="space-y-6">
            <div className="glass-card p-6 animate-fade-in">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold">Data Analyst</h4>
                <span className="text-sm text-muted-foreground">Aug 2024 – Apr 2025</span>
              </div>
              <p className="text-primary mb-2">California State University – Long Beach, CA</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Designed automated dashboards using SQL, Python, Tableau, and Power BI, improving reporting efficiency by 25%</li>
                <li>Conducted business analysis on large datasets to identify trends and ensure data accuracy</li>
                <li>Collaborated with Agile teams to optimize queries, reducing report generation time by 30%</li>
              </ul>
            </div>

            <div className="glass-card p-6 animate-fade-in">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold">Market Research Data Analyst</h4>
                <span className="text-sm text-muted-foreground">Mar 2024 - May 2024</span>
              </div>
              <p className="text-primary mb-2">California State University - Long Beach, CA</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Performed business analytics for CSU PACE programs, translating stakeholder needs into insights</li>
                <li>Developed Excel dashboards with KPIs and regression analysis, increasing enrollment by 10%</li>
                <li>Conducted data audits to ensure quality and stakeholder confidence</li>
              </ul>
            </div>

            <div className="glass-card p-6 animate-fade-in">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold">Data Analyst Intern</h4>
                <span className="text-sm text-muted-foreground">Jan 2023 - May 2023</span>
              </div>
              <p className="text-primary mb-2">The Zen Labs – Mumbai, India</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Developed BI dashboards in Power BI and Excel, improving reporting efficiency by 20%</li>
                <li>Executed complex SQL queries and Python workflows on large datasets</li>
                <li>Led QA efforts including regression testing for high data integrity</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          <div className="space-y-6">
            <div className="glass-card p-6 animate-fade-in">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold">Master of Science in Information Systems</h4>
                <span className="text-sm text-muted-foreground">May 2025</span>
              </div>
              <p className="text-primary mb-2">California State University Long Beach</p>
              <p className="text-muted-foreground">GPA: 3.5 | Business Analytics, Project Management, Database Management, Statistics</p>
            </div>

            <div className="glass-card p-6 animate-fade-in">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold">B.E. in Information Technology</h4>
                <span className="text-sm text-muted-foreground">May 2023</span>
              </div>
              <p className="text-primary mb-2">University of Mumbai, India</p>
              <p className="text-muted-foreground">GPA: 3.5 | Data Mining, Machine Learning, Data Science, Cloud Computing</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;