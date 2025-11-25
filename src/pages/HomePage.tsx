import React from 'react';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import Carousel3D from '@/components/ui/3d-carousel';
import { TrustedUsers } from '@/components/ui/trusted-users';

const HomePage = () => {
  return (
    <div className="min-h-screen p-4">
      <h1>Welcome to the Home Page</h1>
      <Card className="p-6">
        <p>This is a card component.</p>
        <BorderBeam />
      </Card>
      <section className="my-8">
        <h2>Our Showcase</h2>
        <Carousel3D />
      </section>
      <section className="my-8">
        <h2>Trusted By</h2>
        <TrustedUsers />
      </section>
    </div>
  );
};

export default HomePage;
