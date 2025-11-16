import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Experience = () => {
  const experiences = [{
    title: "Product Analyst",
    company: "ServiceNow",
    location: "New York",
    duration: "Nov 2024 - Present",
    responsibilities: ["• Defined key product KPIs and success metrics—including feature activation, time-to-value, workflow completion, and retention rate—for a simulated SaaS platform to measure feature adoption and overall product performance. • Designed a complete event-tracking and instrumentation schema, mapping end-to-end workflow steps to measurable behavioral events, enabling accurate product analytics and usage attribution. • Extracted, cleaned, and modeled product-usage datasets using SQL and Python, creating funnel, cohort, and segmentation analyses to identify user drop-off points and behavioral patterns.• Conducted A/B testing and experimentation analysis, measuring conversion lift, running statistical significance tests, and determining the optimal feature variant for rollout.• Built interactive dashboards in Power BI visualizing adoption trends, workflow efficiency, retention cohorts, and segment-level performance for stakeholder visibility.• Delivered actionable insights through root-cause analysis, identifying workflow friction and low-adoption segments, and recommending product optimizations that informed roadmap prioritization."]
  }, {
    title: "Market Research Data Analyst",
    company: "California State University Long Beach",
    location: "Long Beach, CA",
    duration: "Mar 2024 - May 2024",
    responsibilities: ["Conducted market research on CSU PACE programs, performing data analytics on 25K+ rows to identify trends and stakeholder needs", "Developed business cases with actionable insights that increased student enrollment by 10%", "Built interactive Excel dashboards with slicers and KPIs, providing leadership with real-time visibility for strategic pivots"]
  }];
  return <section id="experience" className="section-spacing relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container-wide relative px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4 md:mb-6">
            <Briefcase className="w-4 h-4 text-secondary" />
            <span className="text-xs font-semibold text-secondary uppercase tracking-wide">Career Path</span>
          </div>
          <h2 className="mb-3 md:mb-4 text-white px-4">
            Professional Experience
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Delivering data-driven solutions and driving business impact through analytics
          </p>
        </div>
        <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => <Card key={index} 
              className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-secondary/20 group"
              style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="p-2 md:p-2.5 rounded-lg bg-secondary/10 border border-secondary/20 group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                        <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base md:text-xl mb-1 text-white leading-tight">{exp.title}</CardTitle>
                        <CardDescription className="text-sm md:text-base font-semibold text-secondary">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <CardDescription className="flex items-center gap-2 text-xs md:text-sm">
                      <span>{exp.location}</span>
                    </CardDescription>
                  </div>
                  <div className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-muted/50 border border-border whitespace-nowrap self-start">
                    <span className="text-xs md:text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <ul className="space-y-2 md:space-y-3">
                  {exp.responsibilities.map((resp, idx) => <li key={idx} className="flex gap-2 md:gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <span className="text-secondary mt-0.5 md:mt-1 font-bold flex-shrink-0">•</span>
                      <span className="leading-relaxed text-xs md:text-sm">{resp}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Experience;