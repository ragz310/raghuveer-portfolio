import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { PageContainer } from "./components/PageContainer";
import { profile } from "./data/profile";

export default function ResumeWebsiteStarter() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.10),_transparent_28%),linear-gradient(to_bottom,_#f8fafc,_#eef2ff_45%,_#ffffff)] text-slate-900">
      <PageContainer>
        <Navbar profile={profile} />
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <ExperienceSection profile={profile} />
        <SkillsSection profile={profile} />
        <ProjectsSection profile={profile} />
      </PageContainer>
    </div>
  );
}
