import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useMobile } from '@/components/hooks/use-mobile'; // Corrected import: Changed from default to named import
import { cn } from '@/components/lib/utils';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { isMobile } = useMobile();

  return (
    <nav className={cn('flex items-center justify-between p-4 bg-background shadow-sm', className)}>
      <div className="text-xl font-bold text-foreground">
        <a href="/">MySite</a>
      </div>
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Toggle mobile menu">
              <Menu className="h-6 w-6 text-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <div className="flex flex-col gap-4 p-4">
              <a href="/" className="text-lg font-medium hover:text-primary transition-colors">Home</a>
              <a href="/about" className="text-lg font-medium hover:text-primary transition-colors">About</a>
              <a href="/portfolio" className="text-lg font-medium hover:text-primary transition-colors">Portfolio</a>
              <a href="/contact" className="text-lg font-medium hover:text-primary transition-colors">Contact</a>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <div className="flex gap-6">
          <a href="/" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Home</a>
          <a href="/about" className="text-lg font-medium text-foreground hover:text-primary transition-colors">About</a>
          <a href="/portfolio" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="/contact" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
