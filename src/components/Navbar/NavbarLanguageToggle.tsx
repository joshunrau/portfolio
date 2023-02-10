import React from 'react';

import { useTranslation } from 'react-i18next';

export const NavbarLanguageToggle = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.resolvedLanguage === 'en' ? 'fr' : 'en';
    void i18n.changeLanguage(newLanguage);
  };

  return <button onClick={changeLanguage}>{t('altLanguage')}</button>;
};
