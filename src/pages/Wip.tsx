import React from 'react';
import { Footer } from '../components/Footer';
import { GrainyBackground } from '../components/GrainyBackground';
import bgImage from '../assets/wipbackground.png';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/PageTransition';

export const Wip: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title={t('seo.wip.title', 'Work in Progress')} />
      <GrainyBackground backgroundImage={bgImage} />

      <PageTransition>
        <main style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          marginBottom: '8rem',
          paddingTop: '20rem'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #AAAAAA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center'
          }}>
            {t('wip_page.title')}
          </h1>
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};
