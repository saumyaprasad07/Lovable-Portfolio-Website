import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume or view my professional profiles
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Resume Download Card */}
          <Card className="glass-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">Download Resume</CardTitle>
                  <CardDescription>
                    Complete professional resume in PDF format
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download PDF Resume
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Last updated: October 2025
              </p>
            </CardContent>
          </Card>

          {/* Professional Profiles Card */}
          <Card className="glass-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ExternalLink className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">Professional Profiles</CardTitle>
                  <CardDescription>
                    Connect with me on various platforms
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                asChild
              >
                <a href="https://linkedin.com/in/saumyaprasad07" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                asChild
              >
                <a href="https://github.com/saumyaprasad07" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  GitHub Portfolio
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                asChild
              >
                <a href="mailto:saumya.prasad460@gmail.com">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <Card className="glass-card mt-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">3+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">10+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">5+</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">3.5</p>
                <p className="text-sm text-muted-foreground">GPA</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;