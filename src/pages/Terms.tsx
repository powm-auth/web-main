import React from 'react';
import { useTranslation } from 'react-i18next';
import { LegalLayout } from '../components/LegalLayout';
import { SEO } from '../components/SEO';

export const Terms: React.FC = () => {
  const { t } = useTranslation();

  const sections = t('legal.terms.sections', { returnObjects: true }) as Array<{ title: string, content: string }>;

  return (
    <>
      <SEO
        title={t('seo.terms.title', 'Terms of Service')}
        description={t('seo.terms.description', 'Read our Terms of Service.')}
      />
      <LegalLayout
        title={t('legal.terms.title')}
        date={t('legal.terms.lastUpdated')}
        sections={sections}
      />
    </>
  );
};
