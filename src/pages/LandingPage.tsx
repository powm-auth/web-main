import React, { useRef } from 'react';
import { HeroSection } from '../components/HeroSection';
import { BentoGrid } from '../components/BentoGrid';
import { PhoneDemo } from '../components/PhoneDemo';
import { ScreenshotCarousel } from '../components/ScreenshotCarousel';
import { Footer } from '../components/Footer';
import { GrainyBackground } from '../components/GrainyBackground';
import { useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import bgImage from '../assets/background.png';
import { SEO } from '../components/SEO';
import { PageTransition } from '../components/PageTransition';

export const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  const bentoRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bentoRef,
    offset: ["start center", "end start"]
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <SEO
        title={t('seo.home.title', 'Home')}
        description={t('seo.home.description', 'Powm is the first double-blind identity wallet for the digital age.')}
      />
      <GrainyBackground overlayOpacity={overlayOpacity} backgroundImage={bgImage} />

      {/* Disable Render Gate for Landing Page to ensure useScroll refs initialize correctly */}
      <PageTransition disableGate>
        <main>
          <HeroSection />

          <div ref={bentoRef} style={{ margin: '4rem 0' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              marginBottom: '2rem',
              background: 'var(--gradient-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'var(--white)',
            }}>
              {t('sections.privacyBack')}
            </h2>
            <BentoGrid />
          </div>

          <div style={{ margin: '4rem 0' }}>
            <PhoneDemo />
          </div>

          <ScreenshotCarousel />
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};
