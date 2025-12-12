import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GrainyBackground } from '../components/GrainyBackground';
import bgImage from '../assets/wipbackground.png';

export const NotFound: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <GrainyBackground backgroundImage={bgImage} />
      <Navbar />
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
          404 - Page not found
        </h1>
      </main>
      <Footer />
    </div>
  );
};
