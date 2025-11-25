import React from 'react';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import { Carousel3D } from '@/components/ui/3d-carousel'; // Changed from default to named import
import { TrustedUsers } from '@/components/ui/trusted-users';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-8 text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Site!</h1>
        <p className="mt-4 text-xl text-muted-foreground">Discover amazing things with us.</p>
      </header>

      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-semibold text-center mb-10">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 text-center relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={9} />
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Card>
          <Card className="p-6 text-center relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={0} />
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-muted-foreground">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Card>
          <Card className="p-6 text-center relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={6} />
            <h3 className="text-2xl font-bold mb-2">Our Values</h3>
            <p className="text-muted-foreground">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto py-12 text-center">
        <h2 className="text-4xl font-semibold mb-10">Explore Our Carousel</h2>
        <Carousel3D />
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-semibold text-center mb-10">Trusted by Many</h2>
        <TrustedUsers />
      </section>

      <footer className="container mx-auto py-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
