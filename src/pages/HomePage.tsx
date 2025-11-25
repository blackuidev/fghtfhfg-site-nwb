import React from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { TypingText } from '@/components/ui/typing-text';
import { ShinyText } from '@/components/ui/shiny-text';
import { ShineButton } from '@/components/ui/shine-button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <AuroraBackground className="w-full h-full">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <TypingText
            text={[
              "Hello, I'm a UI/UX Designer",
              "Crafting Seamless User Experiences",
              "Bringing Your Digital Visions to Life"
            ]}
            className="text-5xl md:text-7xl font-bold mb-4"
            duration={150}
          />
          <ShinyText
            text="Innovating Interfaces, Elevating Experiences."
            className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl"
          />
          <ShineButton
            text="View My Portfolio"
            className="mt-8 px-8 py-3 text-lg font-semibold"
            onClick={() => console.log('View Portfolio clicked')}
          />
        </div>
      </AuroraBackground>
    </div>
  );
};

export default HomePage;
