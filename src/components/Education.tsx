import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Education = () => {
  const educationData = [{
    degree: "Master of Science in Information Systems",
    institution: "California State University Long Beach",
    location: "Long Beach, CA",
    graduation: "May 2025",
    gpa: "3.5",
    coursework: ["Business Data Analytics (Statistics)", "Project Management", "DBMS", "System Design and Analysis", "Information Systems", "Tech Startups & AI"]
  }, {
    degree: "B.E. in Information Technology",
    institution: "University of Mumbai",
    location: "Mumbai, India",
    graduation: "May 2023",
    gpa: "3.5",
    coursework: ["Business Intelligence", "Machine Learning & Deep Learning", "Data Science & AI", "Cloud Computing", "Computer Networks"]
  }];
  return <section id="education" className="section-spacing relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="container-wide relative px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Academic Background</span>
          </div>
          <h2 className="mb-3 md:mb-4 text-white px-4">
            Education
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Building a strong foundation in information systems, data analytics, and business intelligence
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {educationData.map((edu, index) => <Card key={index} 
                className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-primary/20"
                style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-start justify-between gap-3 md:gap-4 mb-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base md:text-xl mb-2 text-white leading-tight">{edu.degree}</CardTitle>
                      <CardDescription className="text-sm md:text-base font-semibold text-primary">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                      <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                  </div>
                  <CardDescription className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
                    <span>{edu.location}</span>
                    <span className="text-primary">•</span>
                    <span>{edu.graduation}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6 pt-0">
                  <div className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-secondary/20 border border-secondary/30">
                    <span className="font-semibold text-xs md:text-sm">GPA:</span>
                    <span className="text-xs md:text-sm font-bold text-primary">{edu.gpa}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">Key Coursework:</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {edu.coursework.map((course, i) => <span key={i} 
                          className="text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                          {course}
                        </span>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
      </div>
    </section>;
};
export default Education;