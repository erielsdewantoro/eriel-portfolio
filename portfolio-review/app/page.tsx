import { Hero } from "@/components/home/Hero";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { EducationSection } from "@/components/home/EducationSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
