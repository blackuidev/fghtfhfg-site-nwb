import React from 'react';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import { Carousel3D } from '@/components/ui/3d-carousel';
import { TrustedUsers } from '@/components/ui/trusted-users';

const HomePage = () => {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Home Page</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Carousel</h2>
        <Card className="relative p-6 rounded-lg overflow-hidden">
          <BorderBeam />
          <Carousel3D />
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Trusted Users</h2>
        <TrustedUsers />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Another Section</h2>
        <Card className="p-6">
          <p>Some content here.</p>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
