import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactCTA from '@/components/sections/ContactCTA';

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* Hero Section */}
      <section id="hero" className="w-full py-20 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <AboutSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <ProjectsSection />
      </section>

      {/* Contact CTA Section */}
      <section id="contact-cta" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <ContactCTA />
      </section>
    </main>
  );
};

export default HomePage;
