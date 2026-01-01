import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Globe, ExternalLink, Copy, Check } from "lucide-react";

export const ContactVariation1Clean = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("saumya.prasad460@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-1 mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to data analyst, BI analyst, and product analyst opportunities.
            Let's discuss how I can help drive data-informed decisions for your team.
          </p>
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
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:saumya.prasad460@gmail.com"
                      className="text-foreground hover:text-primary transition-colors font-medium truncate"
                    >
                      saumya.prasad460@gmail.com
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 hover:bg-muted rounded transition-colors flex-shrink-0"
                      title="Copy email"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
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
                <a
                  href="https://www.linkedin.com/in/saumya-prasad07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <Linkedin className="h-4 w-4 text-[#0077B5]" />
                  <span className="font-medium text-sm">LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://github.com/saumyaprasad07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <Github className="h-4 w-4" />
                  <span className="font-medium text-sm">GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://saumyaprasad.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                >
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
    </section>
  );
};

export const ContactVariation2IconBased = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "saumya.prasad460@gmail.com",
      href: "mailto:saumya.prasad460@gmail.com",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/saumya-prasad07",
      href: "https://www.linkedin.com/in/saumya-prasad07/",
      color: "text-[#0077B5]",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/saumyaprasad07",
      href: "https://github.com/saumyaprasad07",
      color: "text-foreground",
      bgColor: "bg-muted",
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "saumyaprasad.lovable.app",
      href: "https://saumyaprasad.lovable.app",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, USA",
      href: null,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    },
  ];

  return (
    <section id="contact" className="section-spacing bg-muted/20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="heading-1 mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on data-driven projects. Reach out through any of these channels.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="soft-card p-6 hover-lift group"
            >
              <div className={`inline-flex p-4 rounded-2xl ${item.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`h-7 w-7 ${item.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.label}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group/link"
                >
                  <span className="break-all">{item.value}</span>
                  {item.href.startsWith('http') && (
                    <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  )}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="button-primary px-8" asChild>
            <a href="mailto:saumya.prasad460@gmail.com">
              Start a Conversation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export const ContactVariation3Premium = () => {
  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-background pointer-events-none" />

      <div className="container mx-auto max-w-4xl px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Available for Opportunities
          </div>
          <h2 className="heading-1 mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights. Let's connect and explore
            how we can create value together.
          </p>
        </div>

        <div className="premium-card p-10 bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary to-primary/80">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Email</span>
                </div>
                <a
                  href="mailto:saumya.prasad460@gmail.com"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors block"
                >
                  saumya.prasad460@gmail.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Location</span>
                </div>
                <p className="text-lg font-medium text-foreground">New York, USA</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Connect Online
              </p>

              <a
                href="https://www.linkedin.com/in/saumya-prasad07/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary bg-background hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-[#0077B5]" />
                  <span className="font-medium">LinkedIn Profile</span>
                </div>
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://github.com/saumyaprasad07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary bg-background hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5" />
                  <span className="font-medium">GitHub Projects</span>
                </div>
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://saumyaprasad.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary bg-background hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium">Portfolio Website</span>
                </div>
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="button-primary px-8 w-full sm:w-auto" asChild>
                <a href="mailto:saumya.prasad460@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </a>
              </Button>
              <a
                href="https://www.linkedin.com/in/saumya-prasad07/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Response time: Usually within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};
