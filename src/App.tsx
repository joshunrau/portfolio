import React from 'react';

import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ActiveSectionProvider } from './context/ActiveSection';

export const App = () => {
  return (
    <ActiveSectionProvider>
      <header>
        <Navbar />
      </header>
      <main className="h-full overflow-y-scroll">
        <Section name="about">
          <h1>About</h1>
        </Section>
        <Section name="skills">
          <h1>Skills</h1>
        </Section>
      </main>
    </ActiveSectionProvider>
  );
};
