'use client';

import { AboutHeroSection } from '@/components/about/AboutHeroSection';
import { MissionSection } from '@/components/about/MissionSection';
import { TeamSection } from '@/components/about/TeamSection';
import { ValuesSection } from '@/components/about/ValuesSection';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </div>
  );
}