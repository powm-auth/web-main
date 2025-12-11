import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { PhoneDemo } from './components/PhoneDemo';
import { ScreenshotCarousel } from './components/ScreenshotCarousel';
import { Footer } from './components/Footer';
import { GrainyBackground } from './components/GrainyBackground';
import { useScroll, useTransform } from 'framer-motion';

const App: React.FC = () => {
  const bentoRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to the Bento Grid section
  const { scrollYProgress } = useScroll({
    target: bentoRef,
    offset: ["start center", "end start"]
  });

  // Map scroll progress to opacity (0 to 1)
  // 0% opacity when Bento top is at viewport center
  // 100% opacity when Bento bottom is at viewport center (just before "How it works")
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <GrainyBackground overlayOpacity={overlayOpacity} />
      <Navbar />
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
            Privacy is back on internet
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

        <ScreenshotCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default App;
