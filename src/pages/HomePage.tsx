import React from 'react';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import { Carousel3D } from '@/components/ui/3d-carousel';
import { TrustedUsers } from '@/components/ui/trusted-users';

const HomePage = () => {
  return (
    <div className="home-page p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
        <Card className="p-6 relative overflow-hidden">
          <p className="text-lg mb-4">This is a featured card component demonstrating a border beam effect.</p>
          <BorderBeam size={250} duration={12} delay={9} />
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Interactive Carousel</h2>
        <Carousel3D />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Trusted Users</h2>
        <TrustedUsers />
      </section>

      {/* Add more sections or content as needed */}
    </div>
  );
};

export default HomePage;
