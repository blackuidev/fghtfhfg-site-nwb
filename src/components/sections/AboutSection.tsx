import React from 'react';
import { cn } from "@/components/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AboutSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const AboutSection: React.FC<AboutSectionProps> = ({ className, ...props }) => {
  return (
    <section id="about" className={cn("py-16 md:py-24 bg-background", className)} {...props}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        <Card className="max-w-4xl mx-auto p-6 md:p-10 shadow-lg rounded-xl border-t-4 border-primary/50 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--tw-gradient-stops))', '--tw-gradient-stops': 'var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%', '--tw-gradient-from': 'rgba(var(--color-primary-rgb), 0.1)', '--tw-gradient-to': 'transparent' }}></div>
          <CardHeader className="text-center relative z-10">
            <CardTitle className="text-3xl md:text-4xl font-extrabold mb-2 text-primary">
              Passionate Developer & Creator
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Turning ideas into reality with elegant code and innovative solutions.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://via.placeholder.com/200/4000FF/FFFFFF?text=Profile"
                  alt="Profile Picture"
                  className="rounded-full w-48 h-48 object-cover border-4 border-primary/70 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="text-lg leading-relaxed text-center md:text-left text-foreground">
                <p className="mb-4">
                  Hello! I'm [Your Name], a dedicated [Your Profession] with a strong passion for building captivating web experiences. My journey in development began [X years ago], and since then, I've been committed to crafting high-quality, user-centric applications.
                </p>
                <p className="mb-4">
                  I specialize in <strong className="text-primary">[Key Skill 1]</strong>, <strong className="text-primary">[Key Skill 2]</strong>, and <strong className="text-primary">[Key Skill 3]</strong>, and I love tackling complex challenges to deliver clean, efficient, and scalable solutions. I believe in continuous learning and staying updated with the latest industry trends to bring the best to my projects.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2 text-primary">Key Highlights:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Experienced in full-stack development with a focus on React.js and Node.js.</li>
                  <li>Proficient in cloud platforms like AWS and Vercel for deployment and scaling.</li>
                  <li>Passionate about creating intuitive UI/UX designs and responsive web applications.</li>
                  <li>Strong problem-solving skills and a collaborative team player.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
