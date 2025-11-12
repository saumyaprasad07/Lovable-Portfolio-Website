import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Experience = () => {
  const experiences = [{
    title: "Project Manager",
    company: "Saayam for All",
    location: "Remote",
    duration: "Aug 2025 - Present",
    responsibilities: ["Supported project planning with timelines, resource allocation, and documentation, improving delivery efficiency by 20%", "Coordinate project activities by scheduling and facilitating meetings, preparing agendas and minutes, and managing related documentation across various platforms such as MS Project, Asana, and Trello"]
  }, {
    title: "Market Research Data Analyst",
    company: "California State University Long Beach",
    location: "Long Beach, CA",
    duration: "Mar 2024 - May 2024",
    responsibilities: ["Conducted market research on CSU PACE programs, performing data analytics on 25K+ rows to identify trends and stakeholder needs", "Developed business cases with actionable insights that increased student enrollment by 10%", "Built interactive Excel dashboards with slicers and KPIs, providing leadership with real-time visibility for strategic pivots"]
  }];
  return <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Briefcase className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary">Career Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering data-driven solutions and driving business impact through analytics
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => <Card key={index} 
              className="glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-secondary/20 group"
              style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2.5 rounded-lg bg-secondary/10 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                        <Briefcase className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1 text-white">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-semibold text-secondary">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <span>{exp.location}</span>
                    </CardDescription>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border whitespace-nowrap">
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => <li key={idx} className="flex gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <span className="text-secondary mt-1 font-bold">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Experience;