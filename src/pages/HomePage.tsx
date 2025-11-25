import React from 'react';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import Carousel3D from '@/components/ui/3d-carousel';
import { TrustedUsers } from '@/components/ui/trusted-users';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our Homepage</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Featured Carousel</h2>
        <div className="relative w-full max-w-5xl mx-auto h-[400px] flex items-center justify-center">
          <Carousel3D />
          <BorderBeam />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Trusted by Many</h2>
        <Card className="p-6 max-w-3xl mx-auto">
          <TrustedUsers />
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-center">More Content</h2>
        <Card className="p-6 max-w-2xl mx-auto text-center">
          <p>This is a placeholder for more content on the home page.</p>
          <p>Feel free to explore our site!</p>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
