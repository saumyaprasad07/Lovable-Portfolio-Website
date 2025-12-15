import { GraduationCap, Briefcase } from "lucide-react";
const CareerTimeline = () => {
  const timelineItems = [{
    type: "education",
    icon: GraduationCap,
    title: "Master of Science in Information Systems",
    organization: "California State University Long Beach",
    location: "Long Beach, CA",
    date: "May 2025",
    gpa: "3.5",
    coursework: ["Business Data Analytics", "Project Management", "DBMS", "System Design", "Information Systems"]
  }, {
    type: "experience",
    icon: Briefcase,
    title: "Data Analyst",
    organization: "California State University Long Beach",
    location: "Long Beach, CA",
    date: "Mar 2024 - May 2024",
    responsibilities: ["Conducted market research on CSU PACE programs, analyzing 25K+ rows of data", "Developed business cases with actionable insights that increased student enrollment by 10%", "Built interactive Excel dashboards providing leadership with real-time visibility"]
  }, {
    type: "education",
    icon: GraduationCap,
    title: "B.E. in Information Technology",
    organization: "University of Mumbai",
    location: "Mumbai, India",
    date: "May 2023",
    gpa: "3.5",
    coursework: ["Business Intelligence", "Machine Learning", "Data Science", "Cloud Computing"]
  }];
  return <section className="section-spacing bg-background">
      <div className="container-wide px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-1 mb-6">Career Timeline</h2>
          
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;
            return <div key={index} className="relative">
                  {/* Center Icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10">
                    <div className={`p-3 rounded-full border-4 ${item.type === 'education' ? 'border-primary bg-primary/10' : 'border-secondary bg-secondary/10'}`}>
                      <Icon className={`h-5 w-5 ${item.type === 'education' ? 'text-primary' : 'text-secondary'}`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex items-start ${isLeft ? 'justify-start pr-[52%]' : 'justify-end pl-[52%]'}`}>
                    <div className="w-full soft-card p-6 hover-lift-subtle">
                      {/* Date Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${item.type === 'education' ? 'bg-primary/10 border border-primary/20' : 'bg-secondary/10 border border-secondary/20'}`}>
                        <div className={`w-2 h-2 rounded-full ${item.type === 'education' ? 'bg-primary' : 'bg-secondary'}`} />
                        <span className={`text-sm font-semibold ${item.type === 'education' ? 'text-primary' : 'text-secondary'}`}>{item.date}</span>
                      </div>

                      {/* Content */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className={`font-semibold mb-1 ${item.type === 'education' ? 'text-primary' : 'text-secondary'}`}>{item.organization}</p>
                        <p className="text-sm text-muted-foreground">{item.location}</p>
                      </div>

                      {/* Details */}
                      {item.responsibilities && <ul className="space-y-2">
                          {item.responsibilities.map((resp, idx) => <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                              <span className={`mt-1 font-bold flex-shrink-0 ${item.type === 'education' ? 'text-primary' : 'text-secondary'}`}>•</span>
                              <span>{resp}</span>
                            </li>)}
                        </ul>}

                      {item.gpa && <div className="space-y-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="font-semibold text-sm">GPA:</span>
                            <span className="text-sm font-bold text-primary">{item.gpa}</span>
                          </div>
                          {item.coursework && <div>
                              <p className="font-semibold text-sm mb-2">Key Coursework:</p>
                              <div className="flex flex-wrap gap-2">
                                {item.coursework.map((course, i) => <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted border border-border">
                                    {course}
                                  </span>)}
                              </div>
                            </div>}
                        </div>}
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden max-w-2xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return <div key={index} className="relative pl-16">
                  <div className={`absolute left-0 p-3 rounded-full border-2 ${item.type === 'education' ? 'border-primary bg-primary/10' : 'border-secondary bg-secondary/10'} z-10`}>
                    <Icon className={`h-4 w-4 ${item.type === 'education' ? 'text-primary' : 'text-secondary'}`} />
                  </div>

                  <div className="soft-card p-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 ${item.type === 'education' ? 'bg-primary/10 border border-primary/20' : 'bg-secondary/10 border border-secondary/20'}`}>
                      <span className={`text-xs font-semibold ${item.type === 'education' ? 'text-primary' : 'text-secondary'}`}>{item.date}</span>
                    </div>

                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className={`text-sm font-semibold mb-1 ${item.type === 'education' ? 'text-primary' : 'text-secondary'}`}>{item.organization}</p>
                    <p className="text-xs text-muted-foreground mb-3">{item.location}</p>

                    {item.responsibilities && <ul className="space-y-2 mb-3">
                        {item.responsibilities.map((resp, idx) => <li key={idx} className="flex gap-2 text-xs text-muted-foreground">
                            <span className={`mt-0.5 font-bold flex-shrink-0 ${item.type === 'education' ? 'text-primary' : 'text-secondary'}`}>•</span>
                            <span>{resp}</span>
                          </li>)}
                      </ul>}

                    {item.gpa && <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                          <span className="font-semibold text-xs">GPA:</span>
                          <span className="text-xs font-bold text-primary">{item.gpa}</span>
                        </div>
                        {item.coursework && <div>
                            <p className="font-semibold text-xs mb-2">Key Coursework:</p>
                            <div className="flex flex-wrap gap-1">
                              {item.coursework.map((course, i) => <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-muted">
                                  {course}
                                </span>)}
                            </div>
                          </div>}
                      </div>}
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default CareerTimeline;