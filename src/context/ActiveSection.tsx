import React, { createContext, useState } from 'react';

type ActiveSectionType = 'home' | 'about';

interface ActiveSectionContextInterface {
  activeSection: ActiveSectionType | null;
  setActiveSection: (activeSection: ActiveSectionType) => void;
}

export const ActiveSectionContext = createContext<ActiveSectionContextInterface>({
  activeSection: null,
  setActiveSection: () => null
});

export const ActiveSectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<ActiveSectionType | null>(null);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
