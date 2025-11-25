import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useMobile } from '@/components/hooks/use-mobile';
import { cn } from '@/components/lib/utils';

interface NavItem {
  title: string;
  href: string;
}

// Ensure navItems is always an initialized array to prevent 'map' errors.
// If these items were fetched dynamically, you would initialize them as `[]`
// and update them, or use conditional rendering: `navItems && navItems.map(...)`
const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <NavLink to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">MySite</span>
        </NavLink>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 pt-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex flex-1 items-center justify-end space-x-6">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium transition-colors hover:text-primary',
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    )
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
            {/* Add other desktop navbar elements here, e.g., theme toggle, user avatar */}
          </div>
        )}
      </div>
    </nav>
  );
}
