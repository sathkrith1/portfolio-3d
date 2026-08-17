"use client";

import dynamic from "next/dynamic";
import { IntroductionSection } from "@/components/hero/IntroductionSection";
import { PhilosophySection } from "@/components/hero/PhilosophySection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { FooterSection } from "@/components/footer/FooterSection";

const HeroSection = dynamic(() => import("@/components/hero/HeroSection"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/cursor/CustomCursor"), { ssr: false });
const LenisProvider = dynamic(() => import("@/components/providers/LenisProvider"), { ssr: false });

export default function Home() {
  return (
    <LenisProvider>
      <CustomCursor />
      <main id="main-content" className="relative">
        <HeroSection />
        <IntroductionSection />
        <PhilosophySection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <FooterSection />
      </main>
    </LenisProvider>
  );
}