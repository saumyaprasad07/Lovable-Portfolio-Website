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
  return <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education
          </h2>
          
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {educationData.map((edu, index) => <Card key={index} className="glass-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-base font-semibold text-foreground">
                    {edu.institution}
                  </CardDescription>
                  <CardDescription>
                    {edu.location} • {edu.graduation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    <span className="font-semibold">GPA:</span> {edu.gpa}
                  </p>
                  <div>
                    <p className="font-semibold mb-2">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {course}
                        </span>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Education;