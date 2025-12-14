import React from 'react';
import { useTranslation } from 'react-i18next';
import { LegalLayout } from '../components/LegalLayout';
import { SEO } from '../components/SEO';

export const Privacy: React.FC = () => {
  const { t } = useTranslation();

  // We need to cast the sections because i18next types can be tricky with arrays of objects
  const sections = t('legal.privacy.sections', { returnObjects: true }) as Array<{ title: string, content: string }>;

  return (
    <>
      <SEO
        title={t('seo.privacy.title', 'Privacy Policy')}
        description={t('seo.privacy.description', 'Read our Privacy Policy.')}
      />
      <LegalLayout
        title={t('legal.privacy.title')}
        date={t('legal.privacy.effectiveDate')}
        sections={sections}
      />
    </>
  );
};
