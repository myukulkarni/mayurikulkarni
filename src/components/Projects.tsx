import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "संवाद - Mentorship Platform",
      description: "Smart mentorship platform connecting mentees and mentors seamlessly with booking, chat, and analytics.",
      tech: ["React.js", "Django", "DRF", "PostgreSQL", "REST API"],
      date: "2025",
      highlights: [
        "Mentor discovery with verified profiles & session booking",
        "Private chat system with automatic meeting notes",
        "Analytics dashboard for mentors to track growth & connections",
      ],
    },
    {
      title: "DivyaDarshan - Digital Darshan Platform",
      description: "Slot booking and virtual darshan platform with smooth UX and JWT authentication.",
      tech: ["React.js", "Django", "DRF", "PostgreSQL", "Tailwind CSS"],
      date: "March 2025",
      highlights: [
        "RESTful APIs for slot management",
        "JWT-based authentication",
        "Role-based access control",
      ],
    },
    {
      title: "HackathonSite - College Hackathon Website",
      description: "Complete hackathon management platform with separate user and admin dashboards.",
      tech: ["React.js", "PHP", "MySQL", "REST API", "Tailwind CSS"],
      date: "February 2025",
      highlights: [
        "User registration & event tracking",
        "Admin dashboard with management tools",
        "JWT authentication for secure routes",
      ],
    },
    {
      title: "AlgoSys – Interactive DSA Platform",
      description: "Learning platform with real-time visualizations, coding exercises, and performance tracking.",
      tech: ["React.js", "Django", "PostgreSQL", "Ace Editor", "REST API"],
      date: "November 2024",
      highlights: [
        "Real-time algorithm visualizations",
        "Professor dashboard for progress tracking",
        "Coding exercises with Ace Editor",
      ],
    },
    {
      title: "Kiddokorner - E-Commerce Platform",
      description: "Scalable backend for e-commerce with product management and order processing.",
      tech: ["Django", "DRF", "PostgreSQL", "REST API"],
      date: "August 2024",
      highlights: [
        "Scalable RESTful APIs",
        "JWT authentication",
        "Cart & order management",
      ],
    },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-background">
      <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4">A showcase of my best work</p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <Card 
              key={idx} 
              className="glass-card p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{project.date}</span>
                  </div>
                  
                  <p className="text-foreground/80 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs sm:text-sm text-foreground/70 flex items-start">
                          <span className="text-primary mr-2 flex-shrink-0">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <Button size="lg" variant="outline" className="group w-full sm:w-auto">
            <a 
              href="https://github.com/myukulkarni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">View More on GitHub</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
