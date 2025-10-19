import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "California State University",
      location: "Long Beach, CA",
      duration: "Aug 2024 – Apr 2025",
      responsibilities: [
        "Designed automated dashboards using SQL, Python, Tableau, and Power BI, improving reporting efficiency by 25%",
        "Conducted business analysis on large datasets to identify trends and ensure data accuracy",
        "Collaborated with Agile teams to optimize queries, reducing report generation time by 30%"
      ]
    },
    {
      title: "Market Research Data Analyst",
      company: "California State University - PACE Programs",
      location: "Long Beach, CA",
      duration: "Mar 2024 - May 2024",
      responsibilities: [
        "Performed business analytics for CSU PACE programs, translating stakeholder needs into insights",
        "Developed Excel dashboards with KPIs and regression analysis, increasing enrollment by 10%",
        "Conducted data audits to ensure quality and stakeholder confidence"
      ]
    },
    {
      title: "Project Manager (Volunteer)",
      company: "Saayam for All",
      location: "San Jose, CA",
      duration: "Mar 2024 - May 2024",
      responsibilities: [
        "Coordinated cross-functional project activities using Asana and Jira, improving visibility with real-time dashboards and reports; Supported onboarding and configuration tasks, maintaining documentation for end-to-end processes",
        "Partnered with leads to enhance workflows, ensuring responsiveness to project needs and issue escalation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world impact through data analytics and business intelligence
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all animate-fade-in">
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
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;