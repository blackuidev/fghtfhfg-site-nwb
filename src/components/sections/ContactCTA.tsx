import React from 'react';
import { NavLink } from 'react-router-dom';
import RippleButton from '@/components/ui/ripple-button'; // Corrected import

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300">
          Let's build something amazing together. Reach out and tell us about your vision.
        </p>
        <NavLink to="/contact" className="inline-block">
          <RippleButton className="px-8 py-4 text-lg md:text-xl font-semibold rounded-full shadow-lg transition-all duration-300">
            Get in Touch
          </RippleButton>
        </NavLink>
      </div>
      {/* Optional: Add some background elements for visual appeal */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default ContactCTA;
