import React, { createContext, useState } from 'react';

import { SectionName } from '@/components/Section';

interface ActiveSectionContextInterface {
  activeSection: SectionName | null;
  setActiveSection: (activeSection: SectionName) => void;
}

export const ActiveSectionContext = createContext<ActiveSectionContextInterface>({
  activeSection: null,
  setActiveSection: () => null
});

export const ActiveSectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionName | null>(null);
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
