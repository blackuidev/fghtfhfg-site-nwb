import React from 'react';
import { Card } from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import { Carousel3D } from '@/components/ui/3d-carousel';
import { TrustedUsers } from '@/components/ui/trusted-users';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to HomePage</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Carousel</h2>
        <div className="flex justify-center">
          <Carousel3D />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 text-center relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={9} />
            <h3 className="text-xl font-bold mb-2">Service One</h3>
            <p className="text-muted-foreground">Description for service one.</p>
          </Card>
          <Card className="p-6 text-center relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={9} />
            <h3 className="text-xl font-bold mb-2">Service Two</h3>
            <p className="text-muted-foreground">Description for service two.</p>
          </Card>
          <Card className="p-6 text-center relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={9} />
            <h3 className="text-xl font-bold mb-2">Service Three</h3>
            <p className="text-muted-foreground">Description for service three.</p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">Trusted By</h2>
        <TrustedUsers />
      </section>
    </div>
  );
};

export default HomePage;
