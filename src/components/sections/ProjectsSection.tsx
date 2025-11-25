import React from 'react';
import { ThreeDCarousel } from '@/components/ui/3d-carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection: React.FC = () => {
  // Dummy data for projects
  const projects = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A brief description of Project Alpha.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Project+Alpha',
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'A brief description of Project Beta.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Project+Beta',
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: 'A brief description of Project Gamma.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Project+Gamma',
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="flex justify-center">
          {/* Assuming ThreeDCarousel takes children or an items prop */}
          <ThreeDCarousel>
            {projects.map((project) => (
              <Card key={project.id} className="w-[300px] mx-4">
                <CardHeader>
                  <img src={project.image} alt={project.title} className="rounded-md mb-4" />
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Additional content if needed */}
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href={project.link}>View Project</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </ThreeDCarousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
