import React from 'react';
import { ThreeDCarousel } from '@/components/ui/3d-carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A cutting-edge web application built with React and Node.js, featuring real-time data synchronization and a robust API.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#',
  },
  {
    id: '2',
    title: 'Design Studio Website',
    description: 'A sleek and modern portfolio website for a design agency, showcasing their latest work with stunning visuals and animations.',
    image: 'https://images.unsplash.com/photo-1549692520-acc6669e2fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#',
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'Developed a scalable e-commerce solution with advanced product filtering, secure payment gateway, and an intuitive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1563906267025-b15359ad332c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#',
  },
  {
    id: '4',
    title: 'Mobile Game Development',
    description: 'Created a captivating mobile game for iOS and Android, focusing on intuitive gameplay, engaging graphics, and competitive features.',
    image: 'https://images.unsplash.com/photo-1596495578065-6f81a798533c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#',
  },
  {
    id: '5',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard to visualize complex datasets, providing actionable insights with dynamic charts and real-time updates.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#',
  },
  {
    id: '6',
    title: 'AI-Powered Chatbot',
    description: 'Designed and implemented an intelligent chatbot using natural language processing to enhance customer support and user engagement.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79d8176063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          My Professional Portfolio
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Explore a selection of my latest projects, showcasing a blend of creativity, technical expertise, and a passion for innovation.
        </p>

        <div className="max-w-7xl mx-auto mt-16">
          {/* The ThreeDCarousel component is assumed to take an array of React elements as its `items` prop */}
          <ThreeDCarousel items={projects.map((project) => (
            <Card key={project.id} className="w-full max-w-sm mx-auto bg-gray-800 border-gray-700 text-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-purple-500">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center" />
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-purple-300 truncate">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 py-2">
                <CardDescription className="text-gray-400 text-sm line-clamp-3">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center p-4 border-t border-gray-700">
                <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
