import { Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate developer with a love for creating exceptional digital experiences.
          </p>
        </div>

        <div className="glass-card p-8 mb-8 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a full-stack developer with over 5 years of experience building web and mobile applications. 
            My journey in tech started with a curiosity about how things work, and it has evolved into a 
            passion for crafting elegant solutions to complex problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in modern JavaScript frameworks and have a keen eye for design. When I'm not coding, 
            you'll find me exploring new technologies, contributing to open-source projects, or sharing 
            knowledge with the developer community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">5+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>

          <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>

          <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">B.S.</h3>
            <p className="text-muted-foreground">Computer Science</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
