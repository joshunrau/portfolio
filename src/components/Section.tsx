import React, { useContext, useEffect, useRef } from 'react';

import { ActiveSectionContext } from '@/context/ActiveSection';
import { useVisible } from '@/hooks/useVisible';

export type SectionName = 'about' | 'skills' | 'projects' | 'contact';

export interface SectionProps extends Omit<React.ComponentPropsWithoutRef<'section'>, 'id'> {
  name: SectionName;
}

export const Section = ({ name, children, ...props }: SectionProps) => {
  const { setActiveSection } = useContext(ActiveSectionContext);
  const ref = useRef(null);
  const isVisible = useVisible(ref, {
    threshold: 0.5
  });

  useEffect(() => {
    if (isVisible) {
      setActiveSection(name);
    }
  }, [isVisible]);

  return (
    <section className="container h-full" id={name} ref={ref} {...props}>
      {children}
    </section>
  );
};
