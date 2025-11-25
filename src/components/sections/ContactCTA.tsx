import React from 'react';
import { NavLink } from 'react-router-dom';
import { RippleButton } from '@/components/ui/ripple-button';

const ContactCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gray-950 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Ready to collaborate?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Whether you have a project in mind, a question, or just want to say hi, feel free to reach out.
          I'm always eager to connect and explore new opportunities.
        </p>
        <NavLink to="/contact" className="inline-block">
          <RippleButton className="px-8 py-3 text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            Get in Touch
          </RippleButton>
        </NavLink>
      </div>
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Optional: Add a subtle background pattern or animation here */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3352,transparent)]"></div>
      </div>
    </section>
  );
};

export default ContactCTA;
