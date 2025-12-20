import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GrainyBackground } from '../components/GrainyBackground';
import bgImage from '../assets/wipbackground.png';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '../components/ContactForm';

export const DownloadApp: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO title={t('seo.download.title', 'Download App')} />
      <GrainyBackground backgroundImage={bgImage} />
      <Navbar />
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginBottom: '8rem',
        paddingTop: '10rem', // Reduced padding since we have more content
        gap: '3rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #AAAAAA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Download Powm
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: '#888',
            fontWeight: '300'
          }}>
            Pre alpha coming soon
          </p>
        </div>

        <div style={{ 
          height: '200px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <ContactForm buttonText="I'm interested in using Powm" />
        </div>
      </main>
      <Footer />
    </div>
  );
};
