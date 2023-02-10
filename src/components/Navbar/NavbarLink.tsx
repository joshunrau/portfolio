import React, { useContext } from 'react';

import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

import { SectionName } from '../Section';

import { ActiveSectionContext } from '@/context/ActiveSection';

export interface NavbarLinkProps {
  to: SectionName;
}

export const NavbarLink = ({ to }: NavbarLinkProps) => {
  const { activeSection } = useContext(ActiveSectionContext);
  const isActive = activeSection === to;
  const { t } = useTranslation();
  return (
    <a className={clsx({ 'border-b': isActive })} href={'#' + to}>
      {t(`sections.${to}.title`)}
    </a>
  );
};
