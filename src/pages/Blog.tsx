import React from 'react';
import { useTranslation } from 'react-i18next';
import { LegalLayout } from '../components/LegalLayout';
import bgImage from '../assets/3rdbackground.png';
import { SEO } from '../components/SEO';

export const Blog: React.FC = () => {
  const { t } = useTranslation();

  const sections = t('legal.blog.sections', { returnObjects: true }) as Array<{ title: string, content: string, level?: 2 | 3 }>;

  return (
    <>
      <SEO
        title={t('seo.blog.title', 'Blog')}
        description={t('seo.blog.description', 'Latest updates from Powm.')}
      />
      <LegalLayout
        title={t('legal.blog.title')}
        date={`${t('legal.blog.version')} - ${t('legal.blog.date')}`}
        sections={sections}
        backgroundImage={bgImage}
      />
    </>
  );
};
