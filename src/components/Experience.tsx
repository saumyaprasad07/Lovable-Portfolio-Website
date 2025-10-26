import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Experience = () => {
  const experiences = [{
    title: "Project Manager Volunteer",
    company: "Saayam for All",
    location: "Remote",
    duration: "Aug 2025 - Present",
    responsibilities: ["Supported project planning with timelines, resource allocation, and documentation, improving delivery efficiency by 20%", "Coordinate project activities by scheduling and facilitating meetings, preparing agendas and minutes, and managing related documentation across various platforms such as MS Project, Asana, and Trello"]
  }, {
    title: "Data Analyst",
    company: "California State University Long Beach",
    location: "Long Beach, CA",
    duration: "Aug 2024 - Apr 2025",
    responsibilities: ["Partnered with stakeholders to gather requirements and deliver 5+ data visualization dashboards in Tableau/Power BI, improving strategic customer experience for campus services", "Normalized databases and optimized SQL queries, improving performance by 10%+ and enabling faster data analytics reporting; collaborated with product managers and engineers to analyze results of pilot initiatives and shape product design decisions"]
  }, {
    title: "Market Research Data Analyst",
    company: "California State University Long Beach",
    location: "Long Beach, CA",
    duration: "Mar 2024 - May 2024",
    responsibilities: ["Conducted market research on CSU PACE programs, performing data analytics on 25K+ rows to identify trends and stakeholder needs", "Developed business cases with actionable insights that increased student enrollment by 10%", "Built interactive Excel dashboards with slicers and KPIs, providing leadership with real-time visibility for strategic pivots"]
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