import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { PhoneDemo } from './components/PhoneDemo';
import { GrainyBackground } from './components/GrainyBackground';

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <GrainyBackground />
      <Navbar />
      <main>
        <HeroSection />
        
        <div style={{ margin: '4rem 0' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '2rem',
            background: 'var(--gradient-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            The Future of Privacy
          </h2>
          <BentoGrid />
        </div>

        <div style={{ margin: '4rem 0' }}>
           <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
          }}>
            How it works
          </h2>
          <PhoneDemo />
        </div>
      </main>
    </div>
  );
};

export default App;