import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-1 mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="space-y-6 max-w-md mx-auto">
          <div className="soft-card p-6 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a 
                href="mailto:saumya.prasad460@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
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
              <p className="text-muted-foreground">New York</p>
            </div>
          </div>

          <div className="text-center pt-4">
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