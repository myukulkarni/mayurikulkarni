import { Home, User, Code2, Award, GraduationCap, Mail, Wrench } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const items = [
  { title: "Home", icon: Home, section: 0 },
  { title: "About", icon: User, section: 1 },
  { title: "Skills", icon: Wrench, section: 2 },
  { title: "Projects", icon: Code2, section: 3 },
  { title: "Achievements", icon: Award, section: 4 },
  { title: "Education", icon: GraduationCap, section: 5 },
  { title: "Contact", icon: Mail, section: 6 },
];

export function MobileNav() {
  const scrollToSection = (sectionIndex: number) => {
    const container = document.querySelector('.horizontal-scroll');
    if (container) {
      container.scrollTo({
        left: sectionIndex * window.innerWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-center justify-around px-2 py-2 overflow-x-auto">
        {items.map((item) => (
          <button
            key={item.title}
            onClick={() => scrollToSection(item.section)}
            className="flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label={item.title}
          >
            <item.icon className="h-5 w-5 text-primary" />
            <span className="text-[10px] mt-1 text-muted-foreground">{item.title}</span>
          </button>
        ))}
        <div className="flex flex-col items-center justify-center min-w-[60px] p-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
