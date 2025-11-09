import { 
  Code2, 
  Database, 
  BarChart3, 
  LineChart, 
  TrendingUp, 
  Table2, 
  Server,
  Trello,
  Calendar
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skillsTools = [
  {
    name: "Python",
    icon: Code2,
    usage: "Data analysis, statistical modeling, machine learning with Pandas, NumPy, Scikit-learn",
    color: "text-[#3776AB]"
  },
  {
    name: "SQL",
    icon: Database,
    usage: "Complex queries, data extraction, database optimization, and analytics across MySQL, Snowflake, BigQuery",
    color: "text-[#00758F]"
  },
  {
    name: "Power BI",
    icon: BarChart3,
    usage: "Interactive dashboards, business intelligence reports, and KPI tracking for stakeholders",
    color: "text-[#F2C811]"
  },
  {
    name: "Tableau",
    icon: LineChart,
    usage: "Data visualization, executive dashboards, and storytelling with data for business insights",
    color: "text-[#E97627]"
  },
  {
    name: "Looker",
    icon: TrendingUp,
    usage: "Business intelligence, self-service analytics, and metric definition for data-driven decisions",
    color: "text-[#4285F4]"
  },
  {
    name: "Excel",
    icon: Table2,
    usage: "Advanced formulas, pivot tables, data modeling, and business analysis for stakeholder reporting",
    color: "text-[#217346]"
  },
  {
    name: "MySQL",
    icon: Server,
    usage: "Database design, query optimization, stored procedures, and relational data management",
    color: "text-[#00758F]"
  },
  {
    name: "Azure Boards",
    icon: Trello,
    usage: "Agile project management, sprint planning, task tracking, and team collaboration",
    color: "text-[#0078D4]"
  },
  {
    name: "MS Project",
    icon: Calendar,
    usage: "Project planning, timeline management, resource allocation, and Gantt chart creation",
    color: "text-[#31752F]"
  }
];

const SkillsTools = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and platforms I leverage to transform data into actionable insights
          </p>
        </div>

        <TooltipProvider delayDuration={200}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {skillsTools.map((tool, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div
                    className="glass-card p-6 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:shadow-glow transition-all duration-300 cursor-pointer group animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className={`p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors ${tool.color}`}>
                      <tool.icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-semibold text-center">{tool.name}</h3>
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  className="max-w-xs p-4 text-sm"
                  sideOffset={5}
                >
                  <p className="font-semibold mb-1">{tool.name}</p>
                  <p className="text-muted-foreground">{tool.usage}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            + Additional tools: Git/GitHub, Snowflake, AWS, GCP, Agile/Scrum methodologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsTools;
