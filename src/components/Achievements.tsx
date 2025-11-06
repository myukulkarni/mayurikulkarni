import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Miss Sinhgad 2025",
      description: "1st Rank in Personality Development Contest 2K25, Pandharpur",
      color: "text-yellow-500",
    },
    {
      icon: Award,
      title: "Sinhgad Hackathon Winner",
      description: "1st Rank in Sinhgad Hackathon 2K24 for innovation and technical excellence",
      color: "text-purple-500",
    },
    {
      icon: Medal,
      title: "HackerRank Gold Badge",
      description: "Gold Badge on HackerRank for problem-solving proficiency",
      color: "text-amber-500",
    },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-muted/30">
      <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Achievements</span> & Awards
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4">Recognition and milestones</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={idx} 
                className="glass-card p-4 sm:p-6 lg:p-8 text-center hover:scale-105 transition-all cursor-pointer group"
              >
                <div className="mb-4 sm:mb-5 lg:mb-6 flex justify-center">
                  <div className="p-3 sm:p-3.5 lg:p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${achievement.color}`} />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm lg:text-base">
                  {achievement.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Leadership Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Leadership & <span className="gradient-text">Extracurriculars</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card className="glass-card p-4 sm:p-6 lg:p-8">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-primary">President - Cultural Club</h4>
              <p className="text-foreground/80 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                Leading cultural initiatives at Sinhgad Institute, Pandharpur. Successfully hosted multiple 
                Annual flagship events showcasing strong anchoring and coordination skills.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <Badge className="text-[10px] sm:text-xs">Event Management</Badge>
                <Badge className="text-[10px] sm:text-xs">Team Leadership</Badge>
                <Badge className="text-[10px] sm:text-xs">Public Speaking</Badge>
              </div>
            </Card>

            <Card className="glass-card p-4 sm:p-6 lg:p-8">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-secondary">Vice-President - Hackbreakers Coding Club</h4>
              <p className="text-foreground/80 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                Driving technical innovation and coding culture at Sinhgad Institute. Organizing hackathons, 
                workshops, and collaborative coding sessions.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <Badge className="text-[10px] sm:text-xs">Technical Leadership</Badge>
                <Badge className="text-[10px] sm:text-xs">Mentorship</Badge>
                <Badge className="text-[10px] sm:text-xs">Community Building</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Achievements;
