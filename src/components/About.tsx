import React from 'react';

import { useTranslation } from 'react-i18next';

import avatar from '@/assets/avatar.png';
import { Section } from '@/components/Section';

export const About = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'sections.about' });

  return (
    <Section name="about">
      <div className="grid grid-cols-2 gap-5 h-full">
        <div className="flex flex-col justify-center">
          <h1>{t('heading')}</h1>
          <h3>{t('subHeading')}</h3>
        </div>
        <div className="flex items-center justify-center">
          <img alt="Joshua Unrau" className="max-h-96" src={avatar} />
        </div>
      </div>
    </Section>
  );
};
