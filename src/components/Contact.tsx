import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-1 mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            Open to data analyst, BI analyst, and product analyst opportunities. Let's discuss how I can add value to your team.
          </p>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="soft-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:saumya.prasad460@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  saumya.prasad460@gmail.com
                </a>
              </div>
            </div>

            <div className="soft-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">New York, NY</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-4">
            <a
              href="https://github.com/saumyaprasad07"
              target="_blank"
              rel="noopener noreferrer"
              className="soft-card p-4 flex items-center gap-3 hover:text-primary transition-all hover-lift"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
              <ExternalLink className="h-4 w-4 ml-auto" />
            </a>

            <a
              href="https://linkedin.com/in/saumyaprasad07"
              target="_blank"
              rel="noopener noreferrer"
              className="soft-card p-4 flex items-center gap-3 hover:text-primary transition-all hover-lift"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
              <ExternalLink className="h-4 w-4 ml-auto" />
            </a>

            <a
              href="https://saumyaprasad.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="soft-card p-4 flex items-center gap-3 hover:text-primary transition-all hover-lift"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="font-medium">Portfolio</span>
              <ExternalLink className="h-4 w-4 ml-auto" />
            </a>
          </div>

          <div className="text-center pt-6">
            <Button size="lg" className="button-primary" asChild>
              <a href="mailto:saumya.prasad460@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;