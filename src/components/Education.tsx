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
      
      <div className="container-wide relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Academic Background</span>
          </div>
          <h2 className="mb-4 text-white">
            Education
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in information systems, data analytics, and business intelligence
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {educationData.map((edu, index) => <Card key={index} 
                className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-primary/20"
                style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 text-white">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-semibold text-primary">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <span>{edu.location}</span>
                    <span className="text-primary">•</span>
                    <span>{edu.graduation}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/30">
                    <span className="font-semibold text-sm">GPA:</span>
                    <span className="text-sm font-bold text-primary">{edu.gpa}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-3">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => <span key={i} 
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
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