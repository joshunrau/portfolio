import React from 'react';

import { NavbarLanguageToggle } from './NavbarLanguageToggle';
import { NavbarLink } from './NavbarLink';

export const Navbar = () => {
  return (
    <div className="container flex justify-between border p-2">
      <h3 className="text-2xl p-2">Joshua Unrau</h3>
      <div className="flex gap-2">
        <nav className="flex items-center gap-2">
          <NavbarLink to="about" />
          <NavbarLink to="skills" />
          <NavbarLink to="projects" />
          <NavbarLink to="contact" />
        </nav>
        <NavbarLanguageToggle />
      </div>
    </div>
  );
};
