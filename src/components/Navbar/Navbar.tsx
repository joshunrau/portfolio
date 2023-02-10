import React, { useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/solid';

import { NavbarLanguageToggle } from './NavbarLanguageToggle';
import { NavbarLink } from './NavbarLink';

export const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <header className="absolute bg-slate-900/50 w-full h-16 backdrop-blur-lg">
      <div className="container flex items-center justify-between border h-full">
        <h3 className="text-2xl">Joshua Unrau</h3>
        <button>
          <Bars3Icon className="h-6 md:hidden" />
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
