import React from 'react';

import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { ActiveSectionProvider } from './context/ActiveSection';

export const App = () => {
  return (
    <ActiveSectionProvider>
      <Navbar />
      <main className="h-screen overflow-scroll scroll-smooth pt-16">
        <About />
        <Skills />
      </main>
    </ActiveSectionProvider>
  );
};
