import { Quote, Star, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Recommendations = () => {
  const recommendations = [
    {
      name: "John Doe",
      title: "Senior Data Scientist",
      company: "Tech Corp",
      avatar: "",
      initials: "JD",
      linkedinUrl: "#",
      recommendation: "Saumya is an exceptional data professional with a keen eye for detail and strong analytical skills. Their work on machine learning projects consistently exceeded expectations.",
      rating: 5,
      relationship: "Worked together on several projects"
    },
    {
      name: "Jane Smith",
      title: "Project Manager",
      company: "Analytics Inc",
      avatar: "",
      initials: "JS",
      linkedinUrl: "#",
      recommendation: "I had the pleasure of working with Saumya on multiple data analysis projects. Their technical expertise and collaborative approach made them an invaluable team member.",
      rating: 5,
      relationship: "Direct colleague"
    },
    {
      name: "Michael Chen",
      title: "ML Engineer",
      company: "AI Solutions",
      avatar: "",
      initials: "MC",
      linkedinUrl: "#",
      recommendation: "Saumya's proficiency in deep learning and computer vision is impressive. They consistently deliver high-quality work and are always eager to learn and share knowledge.",
      rating: 5,
      relationship: "Team member"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Recommendations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials and endorsements from colleagues and collaborators
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((rec, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={rec.avatar} alt={rec.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {rec.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-lg">{rec.name}</h3>
                      <a
                        href={rec.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`View ${rec.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground">{rec.title}</p>
                    <p className="text-sm font-medium text-foreground/80">{rec.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: rec.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-primary text-primary" 
                    />
                  ))}
                </div>

                <p className="text-xs text-muted-foreground italic">
                  {rec.relationship}
                </p>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {rec.recommendation}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="glass-card inline-block p-6">
            <p className="text-muted-foreground mb-4">
              Want to add a recommendation?
            </p>
            <a
              href="https://www.linkedin.com/in/saumyaprasad07/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Linkedin className="w-5 h-5" />
              Recommend me on LinkedIn
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
