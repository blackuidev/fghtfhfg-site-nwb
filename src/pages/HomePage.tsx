import React from 'react';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import Carousel3D from '@/components/ui/3d-carousel';
import { TrustedUsers } from '@/components/ui/trusted-users';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <Card className="p-6 text-center relative overflow-hidden">
          <BorderBeam size={200} duration={12} delay={9} />
          <h2 className="text-2xl font-semibold mb-2">Feature Card 1</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Showcase some amazing content here.
          </p>
        </Card>

        <Card className="p-6 text-center relative overflow-hidden">
          <BorderBeam size={200} duration={12} delay={0} />
          <h2 className="text-2xl font-semibold mb-2">Feature Card 2</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Another great feature to highlight.
          </p>
        </Card>

        <Card className="p-6 text-center relative overflow-hidden">
          <BorderBeam size={200} duration={12} delay={6} />
          <h2 className="text-2xl font-semibold mb-2">Feature Card 3</h2>
          <p className="text-gray-600 dark:text-gray-300">
            And a third one, equally impressive.
          </p>
        </Card>
      </div>

      <section className="my-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">Our 3D Carousel</h2>
        <div className="flex justify-center">
            <Carousel3D />
        </div>
      </section>

      <section className="my-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">Trusted by Many</h2>
        <TrustedUsers />
      </section>
    </div>
  );
};

export default HomePage;
