import React, { useContext } from 'react';

import { useTranslation } from 'react-i18next';

import { ActiveSectionContext } from '@/context/ActiveSection';

export const Navbar = () => {
  const { activeSection, setActiveSection } = useContext(ActiveSectionContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.resolvedLanguage === 'en' ? 'fr' : 'en';
    void i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="container flex justify-between border">
      <h3 className="text-2xl">Joshua Unrau</h3>
      <div className="flex">
        <nav className="flex items-center gap-2">
          <a href="#about">{t('sectionNames.about')}</a>
          <a href="#skills">{t('sectionNames.skills')}</a>
          <a href="#projects">{t('sectionNames.projects')}</a>
          <a href="#contact">{t('sectionNames.contact')}</a>
        </nav>
        <button className="p-2" onClick={changeLanguage}>
          Change Language
        </button>
      </div>
    </div>
  );
};
