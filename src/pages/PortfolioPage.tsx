import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Placeholder image for projects
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/400x300?text=Project+Image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'featured' | 'other';
  longDescription: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Redesign',
    description: 'A complete UI/UX overhaul for an existing e-commerce platform.',
    image: PLACEHOLDER_IMAGE,
    tags: ['UI Design', 'UX Research', 'Web', 'Figma'],
    category: 'featured',
    longDescription: 'This project involved extensive user research, competitive analysis, wireframing, prototyping, and high-fidelity UI design to improve the usability and aesthetic appeal of a large e-commerce website. Key outcomes included a significant increase in conversion rates and user satisfaction scores.',
    technologies: ['Figma', 'User Testing', 'Adobe XD', 'Sketch'],
    link: '#',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Designed a secure and intuitive mobile banking experience for a startup.',
    image: PLACEHOLDER_IMAGE,
    tags: ['Mobile UI', 'UX Design', 'iOS', 'Android'],
    category: 'featured',
    longDescription: 'Developed a user-centric design for a new mobile banking application, focusing on ease of use, security, and accessibility. The process included user flows, information architecture, interactive prototypes, and usability testing with target users.',
    technologies: ['Sketch', 'InVision', 'Principle', 'User Interviews'],
    link: '#',
  },
  {
    id: '3',
    title: 'SaaS Dashboard',
    description: 'Crafted a powerful and user-friendly dashboard for a B2B SaaS product.',
    image: PLACEHOLDER_IMAGE,
    tags: ['Dashboard', 'Enterprise UI', 'Data Visualization'],
    category: 'other',
    longDescription: 'Designed a comprehensive analytics dashboard for a B2B SaaS platform, allowing users to monitor key metrics and manage their operations efficiently. Focused on clear data visualization, customizability, and a scalable design system.',
    technologies: ['Figma', 'Tableau', 'React', 'Storybook'],
    link: '#',
  },
  {
    id: '4',
    title: 'Healthcare Platform',
    description: 'Improved patient and doctor experience for a telehealth platform.',
    image: PLACEHOLDER_IMAGE,
    tags: ['Healthcare', 'UX Research', 'Web App'],
    category: 'other',
    longDescription: 'Conducted a deep dive into the existing healthcare platform to identify pain points for both patients and medical professionals. Redesigned key workflows and interfaces to streamline appointment booking, virtual consultations, and medical record management.',
    technologies: ['Adobe XD', 'Miro', 'User Surveys', 'HIPAA Compliance'],
    link: '#',
  },
  {
    id: '5',
    title: 'Educational Game UI',
    description: 'Designed engaging UI elements for an interactive learning game.',
    image: PLACEHOLDER_IMAGE,
    tags: ['Game UI', 'Interactive', 'EdTech'],
    category: 'other',
    longDescription: 'Created a playful and intuitive user interface for an educational mobile game aimed at young children. Focused on bright colors, clear iconography, and rewarding animations to enhance the learning experience.',
    technologies: ['Unity UI', 'Photoshop', 'Illustrator', 'Prototyping'],
    link: '#',
  },
  {
    id: '6',
    title: 'Travel Booking Website',
    description: 'Developed a modern and seamless travel booking user interface.',
    image: PLACEHOLDER_IMAGE,
    tags: ['Travel', 'Web UI', 'Booking Flow'],
    category: 'other',
    longDescription: 'Focused on creating a delightful and efficient travel booking experience. This included designing responsive layouts, intuitive search filters, and a clear checkout process. Emphasized visual hierarchy and information clarity.',
    technologies: ['Figma', 'Sketch', 'User Journeys', 'A/B Testing'],
    link: '#',
  },
];

const PortfolioPage: React.FC = () => {
  const featuredProjects = projects.filter(p => p.category === 'featured');
  const otherProjects = projects.filter(p => p.category === 'other');

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        My UI/UX Portfolio
      </h1>

      {/* Featured Projects Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-200">Featured Projects</h2>
        <BentoGrid className="mx-auto max-w-4xl">
          {featuredProjects.map((project, i) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <BentoGridItem
                  title={project.title}
                  description={project.description}
                  header={
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  }
                  className={i === 0 ? "md:col-span-2" : ""} // Example: make first item span 2 columns
                  icon={
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  }
                />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-6">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
                  <DialogDescription className="mt-2 text-lg">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  <div>
                    <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-md" />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <Badge key={tech} className="px-3 py-1 text-sm font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.link && (
                      <Button asChild className="mt-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Live Project
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </BentoGrid>
      </section>

      {/* Other Projects Section */}
      <section>
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-200">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map(project => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col">
                  <CardHeader>
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="px-2 py-0.5 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-6">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
                  <DialogDescription className="mt-2 text-lg">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  <div>
                    <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-md" />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <Badge key={tech} className="px-3 py-1 text-sm font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.link && (
                      <Button asChild className="mt-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Live Project
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
