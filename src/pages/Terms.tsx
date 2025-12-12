import React from 'react';
import { useTranslation } from 'react-i18next';
import { LegalLayout } from '../components/LegalLayout';

export const Terms: React.FC = () => {
  const { t } = useTranslation();

  const sections = t('legal.terms.sections', { returnObjects: true }) as Array<{title: string, content: string}>;

  return (
    <LegalLayout 
      title={t('legal.terms.title')}
      date={t('legal.terms.lastUpdated')}
      sections={sections}
    />
  );
};
