import React from 'react';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import { Carousel3D } from '@/components/ui/3d-carousel';
import { TrustedUsers } from '@/components/ui/trusted-users';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-8 text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Site!</h1>
        <p className="mt-4 text-xl text-muted-foreground">Explore our amazing features.</p>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">Our Showcase</h2>
          <div className="relative flex justify-center items-center">
            <Carousel3D />
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center relative overflow-hidden">
              <BorderBeam className="absolute inset-0" />
              <h3 className="text-2xl font-bold mb-2">Feature One</h3>
              <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
            <Card className="p-6 text-center relative overflow-hidden">
              <BorderBeam className="absolute inset-0" />
              <h3 className="text-2xl font-bold mb-2">Feature Two</h3>
              <p className="text-muted-foreground">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Card>
            <Card className="p-6 text-center relative overflow-hidden">
              <BorderBeam className="absolute inset-0" />
              <h3 className="text-2xl font-bold mb-2">Feature Three</h3>
              <p className="text-muted-foreground">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">Trusted By</h2>
          <TrustedUsers />
        </div>
      </section>

      <footer className="py-8 text-center text-muted-foreground">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
