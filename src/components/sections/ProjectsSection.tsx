import React from 'react';
import { ThreeDCarousel } from '@/components/ui/3d-carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="container mx-auto">
        <ThreeDCarousel>
          {/* Example project cards - replace with actual project data */}
          <Card className="w-full max-w-sm mx-auto">
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>A brief description of Project Alpha.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about the project...</p>
            </CardContent>
            <CardFooter>
              <Button>View Project</Button>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-sm mx-auto">
            <CardHeader>
              <CardTitle>Project Beta</CardTitle>
              <CardDescription>A brief description of Project Beta.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about the project...</p>
            </CardContent>
            <CardFooter>
              <Button>View Project</Button>
            </CardFooter>
          </Card>
          {/* Add more project cards as needed */}
        </ThreeDCarousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
