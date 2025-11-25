import React from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SparkleNavbar from '@/components/ui/sparkle-navbar';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  return (
    <SparkleNavbar>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center justify-center">
          <span className="sr-only">blackuidev</span>
          <h1 className="text-xl font-bold">blackuidev</h1>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </SparkleNavbar>
  );
};

export default Navbar;
