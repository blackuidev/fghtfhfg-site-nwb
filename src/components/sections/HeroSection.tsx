import React from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { ShinyText } from '@/components/ui/shiny-text';
import { GradientButton } from '@/components/ui/gradient-button';

const HeroSection: React.FC = () => {
  return (
    <AuroraBackground>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center">
        <ShinyText text="Innovate. Create. Inspire." className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4" />
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Crafting exceptional digital experiences with a passion for design and cutting-edge technology.
        </p>
        <GradientButton className="px-8 py-3 text-lg md:text-xl" asChild>
          <a href="#portfolio">View My Work</a>
        </GradientButton>
      </div>
    </AuroraBackground>
  );
};

export default HeroSection;
