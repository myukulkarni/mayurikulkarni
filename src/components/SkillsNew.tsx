import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench, Users } from "lucide-react";
import { 
  SiReact, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiTypescript,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman
} from "react-icons/si";
import { Network, Brain, Zap, Lightbulb, Code } from "lucide-react";

const SkillsNew = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "text-primary",
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "TypeScript", icon: SiTypescript },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      color: "text-primary",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "Django", icon: SiDjango },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "text-primary",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "VSCode", icon: Code },
      ],
    },
  ];

  const additionalSkills = [
    { name: "OOP", icon: Brain },
    { name: "SDLC", icon: Zap },
    { name: "Computer Networks", icon: Network },
    { name: "Problem Solving", icon: Lightbulb },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-background">
      <div className="min-h-screen flex flex-col justify-center px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4">
              Tech <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-muted-foreground text-lg">Tools and technologies I work with daily</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, idx) => (
              <Card 
                key={idx} 
                className="p-6 border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div 
                        key={skill.name}
                        className="group relative flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-primary/10 transition-all"
                      >
                        <SkillIcon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Also Experienced In</h4>
            <div className="flex flex-wrap gap-6 justify-center">
              {additionalSkills.map((tech) => {
                const TechIcon = tech.icon;
                return (
                  <div 
                    key={tech.name}
                    className="group flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <TechIcon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Code decoration */}
          <div className="mt-12 font-mono text-sm text-center text-muted-foreground">
            <code className="text-primary">{'// '}</code>
            <code>Continuously learning and adapting to new technologies</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsNew;
