import React, { useState } from 'react';

import { HiBars3 } from 'react-icons/hi2';

import { NavbarLanguageToggle } from './NavbarLanguageToggle';
import { NavbarLink } from './NavbarLink';

export const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <header className="absolute h-16 w-full bg-slate-900/50 backdrop-blur-lg">
      <div className="container flex h-full items-center justify-between border">
        <h3 className="text-2xl">Joshua Unrau</h3>
        <button>
          <HiBars3 className="h-6 md:hidden" />
        </button>
        <div className="flex gap-3 text-lg">
          <nav className="flex items-center gap-3">
            <NavbarLink to="about" />
            <NavbarLink to="skills" />
            <NavbarLink to="projects" />
            <NavbarLink to="contact" />
          </nav>
          <NavbarLanguageToggle />
        </div>
      </div>
    </header>
  );
};
