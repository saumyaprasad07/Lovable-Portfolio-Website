import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Information Systems",
      institution: "California State University Long Beach",
      location: "Long Beach, CA",
      graduation: "May 2025",
      gpa: "3.5",
      coursework: ["Business Analytics", "Project Management", "Database Management", "Statistics"]
    },
    {
      degree: "B.E. in Information Technology",
      institution: "University of Mumbai",
      location: "Mumbai, India",
      graduation: "May 2023",
      gpa: "3.5",
      coursework: ["Data Mining", "Machine Learning", "Data Science", "Cloud Computing"]
    }
  ];

  const certifications = [
    "Google Data Analytics Professional Certificate",
    "Tableau Desktop Specialist",
    "AWS Cloud Practitioner",
    "Microsoft Power BI Data Analyst",
    "SQL for Data Science"
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic qualifications and professional certifications
          </p>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {educationData.map((edu, index) => (
              <Card key={index} className="glass-card hover:shadow-lg transition-shadow">
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
                      {edu.coursework.map((course, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <ul className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;