import React from 'react';
import { useTranslation } from 'react-i18next';
import { LegalLayout } from '../components/LegalLayout';
import bgImage from '../assets/3rdbackground.png';
import { SEO } from '../components/SEO';

export const Whitepaper: React.FC = () => {
  const { t } = useTranslation();

  const sections = t('legal.whitepaper.sections', { returnObjects: true }) as Array<{ title: string, content: string, level?: 2 | 3 }>;

  return (
    <>
      <SEO
        title={t('seo.whitepaper.title', 'Whitepaper')}
        description={t('seo.whitepaper.description', 'Read the Powm Whitepaper.')}
      />
      <LegalLayout
        title={t('legal.whitepaper.title')}
        date={`${t('legal.whitepaper.version')} - ${t('legal.whitepaper.date')}`}
        sections={sections}
        backgroundImage={bgImage}
      />
    </>
  );
};
