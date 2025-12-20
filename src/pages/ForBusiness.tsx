import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GrainyBackground } from '../components/GrainyBackground';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';
import mainBgImage from '../assets/3rdbackground.png';
import { motion, useScroll, useTransform } from 'framer-motion';

import { BusinessSection } from '../components/BusinessSection';

import { VisualLiability } from '../components/visuals/VisualLiability';
import { VisualCompliance } from '../components/visuals/VisualCompliance';
import { VisualIntegration } from '../components/visuals/VisualIntegration';
import { VisualTeam } from '../components/visuals/VisualTeam';
import { VisualOnboarding } from '../components/visuals/VisualOnboarding';

export const ForBusiness: React.FC = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const overlayOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.5]);

    const features = t('for_business_page.features', { returnObjects: true }) as Record<string, any>;

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div ref={containerRef} style={{ minHeight: '100vh', overflowX: 'hidden' }}>
            <SEO
                title={t('for_business_page.title', 'For Business')}
                description={t('for_business_page.hero.subtitle', 'Boost Conversion. Eliminate Liability.')}
            />

            <GrainyBackground
                overlayOpacity={overlayOpacity}
                backgroundImage={mainBgImage}
            />
            <Navbar />

            <main style={{ paddingTop: '8rem', position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>

                {/* Hero Section */}
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
                            maxWidth: '900px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    >
                        {t('for_business_page.hero.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            color: '#fff',
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            maxWidth: '700px',
                            margin: '0 auto 1rem'
                        }}
                    >
                        {t('for_business_page.hero.subtitle')}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            color: '#888',
                            fontSize: '1.1rem',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}
                    >
                        {t('for_business_page.hero.text')}
                    </motion.p>
                </div>

                {/* Sections Container */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Zero-Friction Onboarding */}
                    <BusinessSection
                        title={features.onboarding.title}
                        description={features.onboarding.description}
                        points={features.onboarding.points}
                        visual={<VisualOnboarding />} // New animated visual with QR + timer
                        align="left"
                    />

                    {/* End Liability */}
                    <BusinessSection
                        title={features.liability.title}
                        description={features.liability.description}
                        points={features.liability.points}
                        visual={<VisualLiability />}
                        align="right"
                    />

                    {/* Compliance */}
                    <BusinessSection
                        title={features.compliance.title}
                        description={features.compliance.description}
                        points={features.compliance.points}
                        visual={<VisualCompliance />}
                        align="left"
                    />

                    {/* Integration */}
                    <BusinessSection
                        title={features.integration.title}
                        description={features.integration.description}
                        points={features.integration.points}
                        visual={<VisualIntegration />}
                        align="right"
                    />

                    {/* Team Extension */}
                    <BusinessSection
                        title={features.team.title}
                        description={features.team.description}
                        points={features.team.points}
                        visual={<VisualTeam />}
                        align="left"
                    />

                </div>

                {/* CTA Section */}
                <div style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '4rem' }}>
                    <motion.h2
                        {...fadeIn}
                        style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}
                    >
                        {t('for_business_page.cta.title')}
                    </motion.h2>
                    <motion.p
                        {...fadeIn}
                        style={{ color: '#888', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}
                    >
                        {t('for_business_page.cta.subtitle')}
                    </motion.p>
                    <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ContactForm buttonText={t('for_business_page.cta.button')} />
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};
