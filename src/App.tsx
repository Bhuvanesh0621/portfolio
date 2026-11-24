import React, { useState } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import GithubSection from './sections/GithubSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';
import ResumeModal from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div
      style={{ overflowX: 'clip' }}
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-sans selection:bg-[#B600A8] selection:text-white"
    >
      {/* 1. Hero Section */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Technical Expertise Section */}
      <SkillsSection />

      {/* 5. Services / Solutions Section */}
      <ServicesSection />

      {/* 6. Selected Works / Projects Section */}
      <ProjectsSection />

      {/* 7. Live GitHub Activity & Repository Stats */}
      <GithubSection />

      {/* 8. Education Section */}
      <EducationSection />

      {/* 9. Certifications Section */}
      <CertificationsSection />

      {/* 10. Contact Section / Footer with Interactive Direct Messaging */}
      <ContactSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Themed Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;
