import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BTech in Computer Science & Engineering",
      institution: "SKNSCOE, Pandharpur",
      period: "2024 - 2027",
      score: "GPA: 9.4/10",
      status: "current",
    },
    {
      degree: "12th Grade",
      institution: "SRPU College, Vijaypura",
      period: "2021 - 2023",
      score: "Percentage: 87/100",
      status: "completed",
    },
    {
      degree: "10th Grade",
      institution: "Jath Highschool, Jath",
      period: "2021",
      score: "Percentage: 87/100",
      status: "completed",
    },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-background">
      <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4">Academic background and qualifications</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {education.map((edu, idx) => (
            <Card 
              key={idx} 
              className={`glass-card p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all ${
                edu.status === 'current' ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-2.5 lg:p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                {edu.status === 'current' && (
                  <span className="px-2 sm:px-2.5 lg:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    Current
                  </span>
                )}
              </div>
              
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2">{edu.degree}</h3>
              <p className="text-primary font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">{edu.institution}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{edu.period}</p>
              <p className="text-base sm:text-lg font-semibold gradient-text">{edu.score}</p>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Education;
