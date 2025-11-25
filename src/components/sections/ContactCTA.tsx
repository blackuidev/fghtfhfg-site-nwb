import React from 'react';
import { NavLink } from 'react-router-dom';
import RippleButton from '@/components/ui/ripple-button';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to build something <span className="text-purple-400">amazing</span>?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Let's connect and discuss your next project. We're excited to help you bring your ideas to life.
        </p>
        <NavLink to="/contact">
          <RippleButton className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg">
            Get in Touch
          </RippleButton>
        </NavLink>
      </div>
    </section>
  );
};

export default ContactCTA;
