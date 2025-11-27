import { Download, FileText, ExternalLink, BookOpen, BarChart3, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-1 mb-6">
            Resume & Links
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume or connect through my professional profiles
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
              <Button className="w-full button-primary" size="lg" asChild>
                <a href="https://drive.google.com/file/d/1JVH3S6MtrlNB7Gq-RNhBLnowYmHIPeJD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Resume
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Last updated: November 2024
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
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                asChild
              >
                <a href="https://medium.com/@saumya.prasad07" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Medium Blog
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                asChild
              >
                <a href="https://public.tableau.com/app/profile/saumya.prasad/vizzes" target="_blank" rel="noopener noreferrer">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Tableau Public
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                asChild
              >
                <a href="https://www.notion.so/saumyaprasad/Saumya-C-Prasad-275a7b9cbe00802ebf0fe4a418620b45" target="_blank" rel="noopener noreferrer">
                  <FileStack className="mr-2 h-4 w-4" />
                  Notion Portfolio
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
                <p className="text-3xl font-bold text-primary mb-1">6</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">15+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;