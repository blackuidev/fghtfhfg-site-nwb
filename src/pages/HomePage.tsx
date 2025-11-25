import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/components/lib/utils';

// UI Components
import { AuroraBackground } from '@/components/ui/aurora-background';
import { ShinyText } from '@/components/ui/shiny-text';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'; // Assuming both are exported
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import { Carousel3D } from '@/components/ui/3d-carousel'; // Assuming this export name
import { TrustedUsers } from '@/components/ui/trusted-users'; // Assuming this export name

const HomePage: React.FC = () => {
  // Dummy data for features and carousel
  const features = [
    {
      title: "Blazing Fast Performance",
      description: "Experience unparalleled speed and responsiveness with our optimized platform.",
      icon: "⚡️",
    },
    {
      title: "Stunning User Interfaces",
      description: "Beautifully designed components that captivate and engage your audience.",
      icon: "✨",
    },
    {
      title: "Seamless Integration",
      description: "Effortlessly integrate with your existing tools and workflows.",
      icon: "🔗",
    },
    {
      title: "Fully Responsive",
      description: "Works flawlessly across all devices, from desktop to mobile.",
      icon: "📱",
    },
  ];

  const carouselItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551434674-bc5be1c13d31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Project Alpha",
      title: "Project Alpha",
      description: "A groundbreaking solution for modern web applications.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Innovation Hub",
      title: "Innovation Hub",
      description: "Driving the future with cutting-edge technology.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1542831371-d2432a225330?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Creative Works",
      title: "Creative Works",
      description: "Where design meets functionality.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1504384308090-c894fd324f47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Digital Solutions",
      title: "Digital Solutions",
      description: "Empowering businesses in the digital age.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <AuroraBackground className="relative flex items-center justify-center p-4 min-h-[calc(100vh-64px)]"> {/* Adjust height to account for Navbar if any */}
        <div className="absolute inset-0 z-0 bg-black/50" /> {/* Overlay for better text readability */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-20">
          <ShinyText className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6" text="Build Your Future with Lightswind" />
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
            Unleash the power of cutting-edge UI components to create stunning and performant web applications.
          </p>
          <div className="flex gap-4">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-3 text-lg">Get Started</Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-gray-500 text-gray-200 hover:bg-gray-800">Learn More</Button>
            </Link>
          </div>
        </div>
      </AuroraBackground>

      {/* Features Section */}
      <section className="py-20 bg-gray-950 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Advanced Features</h2>
        <BentoGrid className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <BentoGridItem
              key={i}
              className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
            >
              <BorderBeam size={200} duration={12} delay={i * 0.2} />
              <div className="text-6xl mb-4 transition-transform duration-300 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-base">{feature.description}</p>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </section>

      {/* Interactive Gallery/Showcase */}
      <section className="py-20 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff33 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Our Showcase</h2>
          <div className="w-full max-w-6xl mx-auto">
            {/* Carousel3D expects specific props, assuming it takes an array of objects with image, alt, title, description */}
            <Carousel3D items={carouselItems.map(item => ({
              src: item.image,
              alt: item.alt,
              title: item.title,
              description: item.description
            }))} />
          </div>
        </div>
      </section>

      {/* Testimonials / Trusted Users */}
      <section className="py-20 bg-gray-950 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Trusted by Many</h2>
        <div className="max-w-4xl mx-auto p-4">
          <TrustedUsers /> {/* Assuming TrustedUsers component handles its own data/layout */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-center">
        <div className="max-w-3xl mx-auto p-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Web Presence?</h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Join the future of web development. Get started with Lightswind today!
          </p>
          <Link to="/contact">
            <GradientButton size="lg" className="px-10 py-4 text-xl">
              Start Your Project Now
            </GradientButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
