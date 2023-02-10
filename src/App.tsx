import React from 'react';

import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ActiveSectionProvider } from './context/ActiveSection';

export const App = () => {
  return (
    <ActiveSectionProvider>
      <Navbar />
      <main className="h-screen overflow-scroll scroll-smooth pt-16">
        <About />
        <Section name="skills">
          <h1>Skills</h1>
        </Section>
      </main>
    </ActiveSectionProvider>
  );
};
