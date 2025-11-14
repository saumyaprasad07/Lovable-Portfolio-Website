import { GraduationCap, Briefcase, Award } from "lucide-react";

const CareerTimeline = () => {
  const timelineItems = [
    {
      type: "experience",
      icon: Briefcase,
      title: "Project Manager",
      organization: "Saayam for All",
      date: "Aug 2025 - Present",
      description: "Supported project planning with timelines, resource allocation, and documentation, improving delivery efficiency by 20%"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Master of Science in Information Systems",
      organization: "California State University Long Beach",
      date: "May 2025",
      description: "GPA: 3.5 | Focus: Business Data Analytics, Project Management, DBMS"
    },
    {
      type: "experience",
      icon: Briefcase,
      title: "Market Research Data Analyst",
      organization: "California State University Long Beach",
      date: "Mar 2024 - May 2024",
      description: "Conducted market research on CSU PACE programs, performing data analytics on 25K+ rows to identify trends"
    },
    {
      type: "certification",
      icon: Award,
      title: "Google Advanced Data Analytics",
      organization: "Coursera",
      date: "2024",
      description: "Professional Certificate in Advanced Data Analytics"
    },
    {
      type: "certification",
      icon: Award,
      title: "Google Business Intelligence",
      organization: "Coursera",
      date: "2024",
      description: "Professional Certificate in Business Intelligence"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "B.E. in Information Technology",
      organization: "University of Mumbai",
      date: "May 2023",
      description: "GPA: 3.5 | Focus: Business Intelligence, Machine Learning, Data Science & AI"
    },
    {
      type: "certification",
      icon: Award,
      title: "AWS Academy Cloud Foundations",
      organization: "AWS",
      date: "2023",
      description: "Cloud computing fundamentals and AWS services"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "border-primary bg-primary/10 text-primary";
      case "experience":
        return "border-secondary bg-secondary/10 text-secondary";
      case "certification":
        return "border-accent bg-accent/10 text-accent";
      default:
        return "border-muted bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background pointer-events-none" />
      
      <div className="container-wide relative px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-2 mb-4">
            My Journey
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A timeline of continuous learning, growth, and impactful experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative pl-16 md:pl-20 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon node */}
                  <div className={`absolute left-0 p-3 md:p-4 rounded-full border-2 ${getTypeColor(item.type)} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg z-10`}>
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>

                  {/* Content card */}
                  <div className="glass-card p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className={`text-sm md:text-base font-medium ${
                          item.type === "education" ? "text-primary" :
                          item.type === "experience" ? "text-secondary" :
                          "text-accent"
                        }`}>
                          {item.organization}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border text-xs md:text-sm font-medium whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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
