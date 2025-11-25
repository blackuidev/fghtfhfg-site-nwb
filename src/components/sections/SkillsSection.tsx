import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { CountUp } from '@/components/ui/count-up';
import {
  Code,       // For general coding
  Laptop,     // For Frontend Dev
  Server,     // For Backend Dev
  Database,   // For Database Management
  Cloud,      // For Cloud Computing
  GitBranch,  // For DevOps & CI/CD
  Palette,    // For UI/UX Design
  Bug,        // For Testing & Debugging
  Lightbulb,  // For Problem Solving
  Shield,     // For Security Practices
  BrainCircuit, // For AI/ML (if applicable)
  Settings,   // For System Design
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType; // Lucide icon component
  description: string;
  yearsOfExperience?: number; // Optional, for CountUp
}

const skills: Skill[] = [
  {
    name: 'Frontend Development',
    icon: Laptop,
    description: 'Building responsive and interactive user interfaces with modern frameworks like React and Next.js.',
    yearsOfExperience: 5,
  },
  {
    name: 'Backend Development',
    icon: Server,
    description: 'Designing and implementing robust server-side applications and APIs using Node.js, Express, and Python.',
    yearsOfExperience: 4,
  },
  {
    name: 'Database Management',
    icon: Database,
    description: 'Proficiency in SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) databases for efficient data storage.',
    yearsOfExperience: 4,
  },
  {
    name: 'Cloud Computing',
    icon: Cloud,
    description: 'Experience with cloud platforms like AWS, Azure, and Google Cloud for scalable and resilient solutions.',
    yearsOfExperience: 3,
  },
  {
    name: 'DevOps & CI/CD',
    icon: GitBranch,
    description: 'Implementing automation for software delivery, deployment, and infrastructure management with Docker and GitHub Actions.',
    yearsOfExperience: 3,
  },
  {
    name: 'UI/UX Design',
    icon: Palette,
    description: 'Creating intuitive and aesthetically pleasing user experiences and interfaces with Figma and design principles.',
    yearsOfExperience: 2,
  },
  {
    name: 'Testing & Debugging',
    icon: Bug,
    description: 'Ensuring code quality and reliability through comprehensive unit, integration, and end-to-end testing.',
    yearsOfExperience: 5,
  },
  {
    name: 'Problem Solving',
    icon: Lightbulb,
    description: 'Analytical approach to identify, analyze, and solve complex technical challenges efficiently.',
  },
  {
    name: 'Security Practices',
    icon: Shield,
    description: 'Implementing secure coding practices and understanding common vulnerabilities to build robust applications.',
    yearsOfExperience: 3,
  },
  {
    name: 'AI/ML Integration',
    icon: BrainCircuit,
    description: 'Integrating AI/ML models and APIs into applications for intelligent features and data processing.',
    yearsOfExperience: 2,
  },
  {
    name: 'System Design',
    icon: Settings,
    description: 'Designing scalable, maintainable, and high-performance system architectures for complex applications.',
    yearsOfExperience: 4,
  },
  {
    name: 'Version Control',
    icon: Code,
    description: 'Expertise in Git and GitHub for collaborative development, code management, and branching strategies.',
    yearsOfExperience: 5,
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 dark:from-purple-300 dark:to-pink-500">
          My Professional Skills
        </h2>
        <BentoGrid className="max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <BentoGridItem
              key={i}
              className="relative rounded-xl border border-white/[0.1] shadow-input bg-white dark:bg-black dark:shadow-none
                         flex flex-col items-center justify-center p-6 text-center transition-all duration-300 ease-in-out
                         transform hover:scale-105 hover:shadow-lg dark:hover:shadow-purple-500/30 group"
            >
              <div className="mb-4 text-purple-500 group-hover:text-pink-600 transition-colors duration-300">
                <skill.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {skill.description}
              </p>
              {skill.yearsOfExperience !== undefined && (
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="mr-1">Experience:</span>
                  <CountUp
                    start={0}
                    end={skill.yearsOfExperience}
                    duration={2.5} // Increased duration for smoother animation
                    suffix=" years"
                    className="font-bold text-purple-600 dark:text-pink-400"
                  />
                </div>
              )}
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default SkillsSection;
