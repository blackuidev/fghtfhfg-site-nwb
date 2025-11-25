import React from 'react';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import { ThreeDCarousel } from '@/components/ui/3d-carousel'; // Corrected import name
import { TrustedUsers } from '@/components/ui/trusted-users'; // Assuming this export name

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to Our Homepage</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Carousel</h2>
        <div className="flex justify-center">
          <ThreeDCarousel items={[
            { id: 1, content: <Card className="p-4">Item 1</Card> },
            { id: 2, content: <Card className="p-4">Item 2</Card> },
            { id: 3, content: <Card className="p-4">Item 3</Card> },
          ]} />
        </div>
        <p className="text-center mt-4">Experience our amazing 3D carousel.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
        <Card className="p-6 max-w-2xl mx-auto bg-gray-800 border border-gray-700">
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Users</h2>
        <TrustedUsers />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Another Carousel Usage</h2>
        <div className="flex justify-center">
          <ThreeDCarousel items={[
            { id: 4, content: <Card className="p-4">Another Item A</Card> },
            { id: 5, content: <Card className="p-4">Another Item B</Card> },
          ]} />
        </div>
      </section>

      <BorderBeam />
    </div>
  );
};

export default HomePage;
