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
import { Network, Brain, Lightbulb, Code, Users, Target, Puzzle, Rocket, BookOpen, TrendingUp } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";

const SkillsNew = () => {
  const technicalSkills = [
    { name: "React.js", icon: SiReact, position: "top-0 left-1/2 -translate-x-1/2" },
    { name: "Python", icon: SiPython, position: "top-[15%] right-[10%]" },
    { name: "Django", icon: SiDjango, position: "top-1/2 right-0 -translate-y-1/2" },
    { name: "PostgreSQL", icon: SiPostgresql, position: "bottom-[15%] right-[10%]" },
    { name: "TailwindCSS", icon: SiTailwindcss, position: "bottom-0 left-1/2 -translate-x-1/2" },
    { name: "Git", icon: SiGit, position: "bottom-[15%] left-[10%]" },
    { name: "HTML5", icon: SiHtml5, position: "top-1/2 left-0 -translate-y-1/2" },
    { name: "TypeScript", icon: SiTypescript, position: "top-[15%] left-[10%]" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb, position: "top-0 left-1/2 -translate-x-1/2" },
    { name: "Team Collaboration", icon: Users, position: "top-[20%] right-[8%]" },
    { name: "Strategic Thinking", icon: Target, position: "top-1/2 right-0 -translate-y-1/2" },
    { name: "Continuous Learning", icon: BookOpen, position: "bottom-[20%] right-[8%]" },
    { name: "Adaptability", icon: Puzzle, position: "bottom-0 left-1/2 -translate-x-1/2" },
    { name: "Innovation", icon: Rocket, position: "bottom-[20%] left-[8%]" },
    { name: "Growth Mindset", icon: TrendingUp, position: "top-1/2 left-0 -translate-y-1/2" },
    { name: "System Design", icon: Network, position: "top-[20%] left-[8%]" },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-background">
      <div className="min-h-screen flex flex-col justify-center px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg">My professional toolkit and capabilities</p>
          </div>

          {/* Technical Skills Section */}
          <div className="mb-32">
            <h3 className="text-3xl font-bold text-center mb-16">
              <span className="gradient-text">Technical Skills</span>
            </h3>
            <div className="relative w-full max-w-3xl mx-auto aspect-square">
              {/* Central Computer Illustration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm p-8 rounded-3xl border-2 border-primary/30">
                    <MonitorSmartphone className="w-32 h-32 text-primary animate-float" />
                  </div>
                </div>
              </div>

              {/* Orbiting Technical Skills */}
              {technicalSkills.map((skill, idx) => {
                const SkillIcon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`absolute ${skill.position} animate-fade-in-up`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                      <div className="relative bg-background/80 backdrop-blur-sm p-6 rounded-full border-2 border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 shadow-lg">
                        <SkillIcon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-xs font-semibold text-primary bg-background/90 px-3 py-1 rounded-full border border-primary/30">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills & Interests Section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-16">
              <span className="gradient-text">Soft Skills & Interests</span>
            </h3>
            <div className="relative w-full max-w-3xl mx-auto aspect-square">
              {/* Central Brain/Person Illustration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm p-8 rounded-3xl border-2 border-primary/30">
                    <Brain className="w-32 h-32 text-primary animate-float" />
                  </div>
                </div>
              </div>

              {/* Orbiting Soft Skills */}
              {softSkills.map((skill, idx) => {
                const SkillIcon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`absolute ${skill.position} animate-fade-in-up`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="group relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                      <div className="relative bg-background/80 backdrop-blur-sm p-6 rounded-full border-2 border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 shadow-lg">
                        <SkillIcon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-xs font-semibold text-primary bg-background/90 px-3 py-1 rounded-full border border-primary/30">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Code decoration */}
          <div className="mt-20 font-mono text-sm text-center text-muted-foreground">
            <code className="text-primary">{'// '}</code>
            <code>Continuously evolving with technology and professional growth</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsNew;
