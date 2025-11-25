import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col items-center text-center mb-12">
        <Avatar className="w-32 h-32 mb-6 border-4 border-primary shadow-lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="Your Name" />
          <AvatarFallback className="text-5xl font-bold">YN</AvatarFallback>
        </Avatar>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Your Name
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Passionate UI/UX Designer with over 7 years of experience crafting intuitive, user-centric digital experiences. 
          I specialize in transforming complex problems into elegant solutions, focusing on accessibility, usability, 
          and visual appeal across various platforms. My goal is to create designs that not only look great but also 
          drive engagement and achieve business objectives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="default" className="text-base px-3 py-1">UI Design</Badge>
            <Badge variant="default" className="text-base px-3 py-1">UX Research</Badge>
            <Badge variant="default" className="text-base px-3 py-1">Wireframing</Badge>
            <Badge variant="default" className="text-base px-3 py-1">Prototyping</Badge>
            <Badge variant="default" className="text-base px-3 py-1">Figma</Badge>
            <Badge variant="default" className="text-base px-3 py-1">Sketch</Badge>
            <Badge variant="default" className="text-base px-3 py-1">Adobe XD</Badge>
            <Badge variant="default" className="text-base px-3 py-1">User Testing</Badge>
            <Badge variant="default" className="text-base px-3 py-1">Interaction Design</Badge>
            <Badge variant="default" className="text-base px-3 py-1">Responsive Design</Badge>
            <Badge variant="default" className="text-base px-3 py-1">Design Systems</Badge>
            <Badge variant="default" className="text-base px-3 py-1">Accessibility</Badge>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Senior UI/UX Designer</h3>
              <p className="text-md text-muted-foreground">Tech Innovators Inc. | 2020 - Present</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Led design efforts for key product features, increasing user engagement by 25%.</li>
                <li>Mentored junior designers and established best practices for design documentation.</li>
                <li>Collaborated with product managers and engineers to deliver high-quality user experiences.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">UI/UX Designer</h3>
              <p className="text-md text-muted-foreground">Creative Solutions Agency | 2017 - 2020</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Designed responsive interfaces for various client websites and mobile applications.</li>
                <li>Conducted user research, competitive analysis, and usability testing.</li>
                <li>Developed interactive prototypes to communicate design concepts.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">M.A. in Human-Computer Interaction</h3>
              <p className="text-md text-muted-foreground">University of Design | 2015 - 2017</p>
              <p className="text-sm mt-1">Focused on user-centered design principles, cognitive psychology, and interaction design.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">B.S. in Graphic Design</h3>
              <p className="text-md text-muted-foreground">Art & Technology Institute | 2011 - 2015</p>
              <p className="text-sm mt-1">Specialized in visual communication, typography, and digital media production.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
