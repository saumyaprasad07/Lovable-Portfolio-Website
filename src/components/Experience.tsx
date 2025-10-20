import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Experience = () => {
  const experiences = [{
    title: "Data Analyst",
    company: "California State University",
    location: "Long Beach, CA",
    duration: "Aug 2024 – Apr 2025",
    responsibilities: ["Designed and automated end-to-end dashboards using SQL, Python, Tableau, and Power BI, enabling real-time data visualization and supporting data-driven decisions across multiple departments, improving reporting efficiency by 25%", "Conducted business analysis on large datasets to identify trends and insights, performing quality assurance checks to ensure data accuracy and integrity for stakeholders", "Collaborated with cross-functional teams in Agile sprints, optimizing SQL queries and Python scripts for faster database performance, reducing report generation time by 30%"]
  }, {
    title: "Market Research Data Analyst",
    company: "California State University",
    location: "Long Beach, CA",
    duration: "Mar 2024 - May 2024",
    responsibilities: ["Performed business analytics and requirements gathering for CSU PACE programs, translating stakeholder needs into actionable insights", "Developed interactive Excel dashboards with KPIs and regression analysis to monitor enrollment trends, enabling strategic decision-making and increasing student enrollment by 10%", "Conducted detailed data audits and validation to ensure quality assurance, enhancing the reliability of reports and stakeholder confidence"]
  }, {
    title: "Project Manager Volunteer",
    company: "Saayam for All",
    location: "San Jose, CA",
    duration: "Mar 2024 - May 2024",
    responsibilities: ["Coordinated cross-functional project activities using Asana and Jira, improving visibility with real-time dashboards and reports; Supported onboarding and configuration tasks, maintaining documentation for end-to-end processes", "Assist in project planning by contributing to timelines, resource allocation, task assignments, and maintaining organized documentation", "Coordinate project activities by scheduling/facilitating meetings, preparing agendas and minutes, and updating dashboards for real-time visibility and track project progress using tools - Microsoft Project, Asana, and Trello"]
  }];
  return <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => <Card key={index} className="glass-card hover:shadow-lg transition-all animate-fade-in">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-primary mt-1">
                      {exp.company}
                    </CardDescription>
                    <CardDescription className="text-sm mt-1">
                      {exp.location}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{resp}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Experience;