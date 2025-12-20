
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GrainyBackground } from '../components/GrainyBackground';
import { SEO } from '../components/SEO';
import { UseCaseSection } from '../components/UseCaseSection';
import { ContactForm } from '../components/ContactForm';
import { ProofAge } from '../components/proofs/ProofAge';
import { ProofIdentity } from '../components/proofs/ProofIdentity';
import { ProofRetail } from '../components/proofs/ProofRetail';
import { ProofHumanity } from '../components/proofs/ProofHumanity';
import secondaryBgImage from '../assets/2ndbackground.png';
import mainBgImage from '../assets/3rdbackground.png';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Usecases: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Adjust overlayOpacity: keep it 0 initially, maybe slight darken if needed, but here we focus on the bg switch
  // If we want the *switch* to be visible, we shouldn't cover it with black overlay completely.
  // The original code had [0, 0.3] -> [0, 1]. This makes the screen black very quickly!
  // We probably want to remove or reduce this overlay effect for this specific page if we want to see the new background.
  // Or maybe the user WANTS the overlay to fade out at the bottom?
  // Let's assume the overlayOpacity logic was for fading to black, which might conflict with showing a new background.
  // I'll keep it but perhaps make it less aggressive or dependent on the design.
  // Actually, if we want to see the 3rd background at the bottom, we should NOT have a full black overlay at the bottom.
  // Let's change the overlayOpacity to only darken slightly or not at all if that's the intent.
  // OR, maybe the user wants the "Work in Progress" look which MIGHT be just the image without overlay?
  // Wip.tsx does NOT use overlayOpacity.
  
  // Fade out the overlay at the bottom so the secondary background is visible
  // Or just keep it subtle.
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.5]);

  // Make the secondary background appear sooner (starts at 20%, fully visible by 80%)
  const secondaryBgOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const cases = t('usecases_page.cases', { returnObjects: true }) as Record<string, any>;

  return (
    <div ref={containerRef} style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <SEO
        title={t('usecases_page.title', 'Use Cases')}
        description={t('usecases_page.subtitle', 'Real-world problems solved by Zero-Knowledge Proofs.')}
      />

      <GrainyBackground 
        overlayOpacity={overlayOpacity} 
        backgroundImage={mainBgImage} 
        secondaryBackgroundImage={secondaryBgImage}
        secondaryOpacity={secondaryBgOpacity}
      />
      <Navbar />

      <main style={{ paddingTop: '8rem', position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>

        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 1rem' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              background: 'linear-gradient(180deg, #fff 0%, #888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('usecases_page.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              color: '#888',
              fontSize: '1.25rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            {t('usecases_page.subtitle')}
          </motion.p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <UseCaseSection
            index={0}
            title={cases.compliance.title}
            subtitle={cases.compliance.subtitle}
            context={cases.compliance.context}
            challenge={cases.compliance.challenge}
            proofText={cases.compliance.proof}
            hiddenData={cases.compliance.hidden}
            visual={<ProofAge />}
            align="left"
          />

          <UseCaseSection
            index={1}
            title={cases.p2p.title}
            subtitle={cases.p2p.subtitle}
            context={cases.p2p.context}
            challenge={cases.p2p.challenge}
            proofText={cases.p2p.proof}
            hiddenData={cases.p2p.hidden}
            visual={<ProofIdentity />}
            align="right"
          />

          <UseCaseSection
            index={2}
            title={cases.retail.title}
            subtitle={cases.retail.subtitle}
            context={cases.retail.context}
            challenge={cases.retail.challenge}
            proofText={cases.retail.proof}
            hiddenData={cases.retail.hidden}
            visual={<ProofRetail />}
            align="left"
          />

          <UseCaseSection
            index={3}
            title={cases.antibot.title}
            subtitle={cases.antibot.subtitle}
            context={cases.antibot.context}
            challenge={cases.antibot.challenge}
            proofText={cases.antibot.proof}
            hiddenData={cases.antibot.hidden}
            visual={<ProofHumanity />}
            align="right"
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '4rem', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ContactForm buttonText="Start Building" />
        </div>

      </main>

      <Footer />
    </div>
  );
};

