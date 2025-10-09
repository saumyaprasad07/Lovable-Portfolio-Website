import { Code2, Database, Layout, Smartphone, Server, Palette } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Express, Python, RESTful APIs",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "PostgreSQL, MongoDB, Redis, Supabase",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Cross-platform solutions",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Figma, Responsive Design, Accessibility",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Component Libraries, Design Tokens",
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
