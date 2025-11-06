import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { MobileNav } from "@/components/MobileNav";
import HeroNew from "@/components/HeroNew";
import AboutNew from "@/components/AboutNew";
import SkillsNew from "@/components/SkillsNew";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const IndexNew = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full overflow-hidden pb-16 sm:pb-0">
        <AppSidebar />
        <MobileNav />
        
        <main className="flex-1 relative overflow-hidden">
          {/* Horizontal scroll container */}
          <div className="horizontal-scroll h-screen w-full overflow-x-auto overflow-y-hidden">
            <HeroNew />
            <AboutNew />
            <SkillsNew />
            <Projects />
            <Achievements />
            <Education />
            <Contact />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default IndexNew;
