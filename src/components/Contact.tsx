import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Globe, ExternalLink } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="section-spacing bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-1 mb-4">Let's Work Together</h2>
          
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="soft-card p-8 bg-gradient-to-br from-background to-muted/30">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <a href="mailto:saumya.prasad460@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium truncate block">
                    saumya.prasad460@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">New York, USA</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-4">Connect with me</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://linkedin.com/in/saumyaprasad07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group">
                  <Linkedin className="h-4 w-4 text-[#0077B5]" />
                  <span className="font-medium text-sm">LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a href="https://github.com/saumyaprasad07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group">
                  <Github className="h-4 w-4" />
                  <span className="font-medium text-sm">GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a href="https://saumyaprasad.lovable.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="font-medium text-sm">Portfolio</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="button-primary px-8" asChild>
              <a href="mailto:saumya.prasad460@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;