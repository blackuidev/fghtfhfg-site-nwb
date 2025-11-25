import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, LucideIcon } from 'lucide-react';

interface NavSection {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

interface FooterProps {
  navSections?: NavSection[];
  socialLinks?: SocialLink[];
  companyName?: string;
}

const defaultNavSections: NavSection[] = [
  {
    title: 'Company',
    items: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
    ],
  },
  {
    title: 'Support',
    items: [
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
];

const Footer: React.FC<FooterProps> = ({
  navSections = defaultNavSections, 
  socialLinks = defaultSocialLinks,
  companyName = 'BlackUI Dev',
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand/Company Info */}
          <div className="col-span-full lg:col-span-1 mb-8 lg:mb-0">
            <Link to="/" className="text-white text-3xl font-extrabold tracking-tight">
              {companyName}
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Crafting innovative digital experiences with precision and passion.
            </p>
            <div className="flex space-x-4 mt-6">
              {(socialLinks || []).map((link) => ( // Ensure socialLinks is an array before mapping
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {(navSections || []).map((section, index) => ( // Ensure navSections is an array before mapping
            <div key={index} className="col-span-1">
              <h3 className="text-white text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {(section.items || []).map((item) => ( // Ensure section.items is an array before mapping
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact or Newsletter (example) */}
          <div className="col-span-full md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm leading-relaxed">
              Have a project in mind? Let's connect and build something amazing together.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          &copy; {currentYear} {companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
