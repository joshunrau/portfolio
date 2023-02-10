import React from 'react';

import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';
import { ActiveSectionProvider } from './context/ActiveSection';

export const App = () => {
  return (
    <ActiveSectionProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
      </main>
    </ActiveSectionProvider>
  );
};
