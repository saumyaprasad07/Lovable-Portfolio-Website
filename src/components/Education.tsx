import { GraduationCap, Award } from "lucide-react";
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
    coursework: ["Business Intelligence", "Machine Learning", "Data Science & AI", "Cloud Computing", "Computer Networks"]
  }];
  const certifications = [
    {
      title: "Google Advanced Data Analytics Professional Certificate",
      url: "https://www.coursera.org/account/accomplishments/specialization/L1UFPKLC27OQ"
    },
    {
      title: "Google Business Intelligence Professional Certificate",
      url: "https://www.coursera.org/account/accomplishments/specialization/COZ84CYGX9W4"
    },
    {
      title: "Tableau Fundamentals",
      url: "https://verify.skilljar.com/c/ait3fsck8x6t"
    },
    {
      title: "AWS Academy Cloud Foundations",
      url: "https://www.credly.com/badges/2a5cd426-8544-46bb-a440-db9e454266ee/linked_in_profile"
    },
    {
      title: "HackerRank SQL Intermediate",
      url: "https://www.hackerrank.com/certificates/646ec66e4b25"
    }
  ];
  return <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          
        </div>

        {/* Education */}
        <div className="mb-12">
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

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <ul className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors underline"
                    >
                      {cert.title}
                    </a>
                  </li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Education;