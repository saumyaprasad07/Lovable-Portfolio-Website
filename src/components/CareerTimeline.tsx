import { GraduationCap, Briefcase } from "lucide-react";

const CareerTimeline = () => {
  const timelineItems = [
    {
      type: "experience",
      icon: Briefcase,
      title: "Product Analyst",
      organization: "ServiceNow",
      location: "Remote",
      date: "Nov 2024 - Present",
      responsibilities: [
        "Defined key product KPIs and success metrics—including feature activation, time-to-value, workflow completion, and retention rate - for a simulated SaaS platform to measure feature adoption and overall product performance.",
        "Designed a complete event-tracking and instrumentation schema, mapping end-to-end workflow steps to measurable behavioral events, enabling accurate product analytics and usage attribution.",
        "Extracted, cleaned, and modeled product-usage datasets using SQL and Python, creating funnel, cohort, and segmentation analyses to identify user drop-off points and behavioral patterns.",
        "Conducted A/B testing and experimentation analysis, measuring conversion lift, running statistical significance tests, and determining the optimal feature variant for rollout.",
        "Built interactive dashboards in Power BI visualizing adoption trends, workflow efficiency, retention cohorts, and segment-level performance for stakeholder visibility.",
        "Delivered actionable insights through root-cause analysis, identifying workflow friction and low-adoption segments, and recommending product optimizations that informed roadmap prioritization."
      ]
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Master of Science in Information Systems",
      organization: "California State University Long Beach",
      location: "Long Beach, CA",
      date: "May 2025",
      gpa: "3.5",
      coursework: ["Business Data Analytics (Statistics)", "Project Management", "DBMS", "System Design and Analysis", "Information Systems", "Tech Startups & AI"]
    },
    {
      type: "experience",
      icon: Briefcase,
      title: "Data Analyst",
      organization: "California State University Long Beach",
      location: "Long Beach, CA",
      date: "Mar 2024 - May 2024",
      responsibilities: [
        "Conducted market research on CSU PACE programs, performing data analytics on 25K+ rows to identify trends and stakeholder needs",
        "Developed business cases with actionable insights that increased student enrollment by 10%",
        "Built interactive Excel dashboards with slicers and KPIs, providing leadership with real-time visibility for strategic pivots"
      ]
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "B.E. in Information Technology",
      organization: "University of Mumbai",
      location: "Mumbai, India",
      date: "May 2023",
      gpa: "3.5",
      coursework: ["Business Intelligence", "Machine Learning & Deep Learning", "Data Science & AI", "Cloud Computing", "Computer Networks"]
    },{
      type: "experience",
      icon: Briefcase,
      title: "Product Analyst",
      organization: "Orion Technolab",
      location: "India",
      date: "Mar 2024 - May 2024",
      responsibilities: [
        "Led end-to-end conversion and retention analysis for a high-volume grocery delivery app, identifying key friction points—including a 35% drop-off from checkout to payment—and uncovering segment-specific issues across cities, devices, and payment methods.",
        "Designed, analyzed, and optimized A/B experiments (homepage banners, checkout flows, delivery threshold tests), achieving a 7% lift in add-to-cart → order conversions and reducing COD-related drop-offs through targeted UX improvements.",
        "Built SQL-based product and operations dashboards, diagnosing delivery inefficiencies and identifying dark-store locations causing 20–25% slower deliveries, enabling faster data-driven decisions across product, engineering, and ops teams."
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return {
          border: "border-primary",
          bg: "bg-primary/10",
          text: "text-primary",
          glow: "shadow-primary/20",
          hoverGlow: "group-hover:shadow-primary/40"
        };
      case "experience":
        return {
          border: "border-secondary",
          bg: "bg-secondary/10",
          text: "text-secondary",
          glow: "shadow-secondary/20",
          hoverGlow: "group-hover:shadow-secondary/40"
        };
      default:
        return {
          border: "border-accent",
          bg: "bg-accent/10",
          text: "text-accent",
          glow: "shadow-accent/20",
          hoverGlow: "group-hover:shadow-accent/40"
        };
    }
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background pointer-events-none" />

      <div className="container-wide relative px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="heading-2 mb-4">
            My Journey
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and academic achievements
          </p>
        </div>

        {/* Desktop alternating timeline */}
        <div className="hidden md:block max-w-6xl mx-auto relative">
          {/* Center glowing line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-20" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent animate-pulse" />

          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const colors = getTypeColor(item.type);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animation: `fade-in 0.8s ease-out ${index * 0.15}s both, ${isLeft ? 'slide-in-left' : 'slide-in-right'} 0.8s ease-out ${index * 0.15}s both`
                  }}
                >
                  {/* Glowing center node */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 z-20">
                    <div className={`relative p-4 rounded-full border-4 ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-500 group-hover:scale-125 shadow-lg ${colors.glow} ${colors.hoverGlow}`}>
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                      <div className={`absolute inset-0 rounded-full ${colors.bg} animate-ping opacity-20`} />
                    </div>
                  </div>

                  {/* Content card - alternating sides */}
                  <div className={`flex items-start ${isLeft ? 'justify-start pr-[52%]' : 'justify-end pl-[52%]'}`}>
                    <div className={`w-full glass-card p-6 rounded-2xl border-2 ${colors.border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${colors.hoverGlow} relative`}>
                      {/* Accent highlight bar */}
                      <div className={`absolute ${isLeft ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full'} top-0 bottom-0 w-1.5 ${colors.bg} ${colors.border} border-2`} />

                      {/* Date pill */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} ${colors.border} border-2 mb-4 shadow-md`}>
                        <div className={`w-2 h-2 rounded-full ${colors.text} bg-current animate-pulse`} />
                        <span className={`text-sm font-bold ${colors.text}`}>{item.date}</span>
                      </div>

                      {/* Content */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className={`text-base font-semibold ${colors.text} mb-1`}>
                          {item.organization}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.location}
                        </p>
                      </div>

                      {/* Details */}
                      {item.responsibilities && (
                        <ul className="space-y-2 mb-4">
                          {item.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                              <span className={`${colors.text} mt-1 font-bold flex-shrink-0`}>•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.gpa && (
                        <div className="space-y-3">
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border`}>
                            <span className="font-semibold text-sm">GPA:</span>
                            <span className={`text-sm font-bold ${colors.text}`}>{item.gpa}</span>
                          </div>
                          {item.coursework && (
                            <div>
                              <p className="font-semibold text-sm mb-2">Key Coursework:</p>
                              <div className="flex flex-wrap gap-2">
                                {item.coursework.map((course, i) => (
                                  <span
                                    key={i}
                                    className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} ${colors.border} border hover:scale-105 transition-transform`}
                                  >
                                    {course}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Connecting line to center */}
                      <div className={`absolute top-10 ${isLeft ? 'left-full' : 'right-full'} w-8 h-0.5 ${colors.bg} hidden group-hover:block transition-all`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden max-w-2xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const colors = getTypeColor(item.type);

              return (
                <div
                  key={index}
                  className="relative pl-16 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`absolute left-0 p-3 rounded-full border-2 ${colors.border} ${colors.bg} transition-all duration-300 group-hover:scale-110 ${colors.glow} z-10`}>
                    <Icon className={`h-5 w-5 ${colors.text}`} />
                  </div>

                  <div className={`glass-card p-5 rounded-xl border-2 ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border mb-3`}>
                      <span className={`text-xs font-bold ${colors.text}`}>{item.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className={`text-sm font-semibold ${colors.text} mb-1`}>
                      {item.organization}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {item.location}
                    </p>

                    {item.responsibilities && (
                      <ul className="space-y-2 mb-3">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                            <span className={`${colors.text} mt-0.5 font-bold flex-shrink-0`}>•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.gpa && (
                      <div className="space-y-2">
                        <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full ${colors.bg} ${colors.border} border`}>
                          <span className="font-semibold text-xs">GPA:</span>
                          <span className={`text-xs font-bold ${colors.text}`}>{item.gpa}</span>
                        </div>
                        {item.coursework && (
                          <div>
                            <p className="font-semibold text-xs mb-2">Key Coursework:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {item.coursework.map((course, i) => (
                                <span
                                  key={i}
                                  className={`text-[10px] px-2 py-1 rounded-full ${colors.bg} ${colors.text} ${colors.border} border`}
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;