import React from 'react';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import { Carousel3D } from '@/components/ui/3d-carousel';
import { TrustedUsers } from '@/components/ui/trusted-users';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        <Card className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Card Component</h2>
          <p>This is an example of a Card component.</p>
        </Card>
        <Card className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Another Card</h2>
          <p>More content for another card.</p>
        </Card>
        <Card className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Yet Another</h2>
          <p>And one more card for good measure.</p>
        </Card>
      </div>

      <div className="my-12 relative w-full max-w-lg h-64 flex items-center justify-center border rounded-lg overflow-hidden">
        <BorderBeam size={250} duration={12} delay={9} />
        <p className="relative z-10 text-lg">BorderBeam Example</p>
      </div>

      <div className="my-12 w-full max-w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center">3D Carousel Showcase</h2>
        <Carousel3D />
      </div>

      <div className="my-12 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Trusted Users</h2>
        <TrustedUsers />
      </div>
    </div>
  );
};

export default HomePage;
