import React, { useRef } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { GrainyBackground } from './GrainyBackground';
import { useScroll, useTransform } from 'framer-motion';


interface LegalSection {
  title: string;
  content: string;
  level?: 2 | 3; // Add level for heading hierarchy
}

interface LegalLayoutProps {
  title: string;
  date: string;
  sections: LegalSection[];
  backgroundImage?: string; // Add backgroundImage prop
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, date, sections, backgroundImage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire page content
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transition to black quickly as user scrolls down
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const highlightText = (text: string) => {
    const parts = text.split(/(<strong>.*?<\/strong>)/g);
    return parts.map((part, index) => {
      if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
        return (
          <span key={index} style={{ color: 'var(--electricMain)', fontWeight: 'bold' }}>
            {part.replace(/<\/?strong>/g, '')}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div ref={containerRef} style={{ minHeight: '100vh', position: 'relative' }}>
      <GrainyBackground overlayOpacity={overlayOpacity} backgroundImage={backgroundImage} />
      <Navbar />
      <main style={{ 
        paddingTop: '120px', 
        paddingBottom: '4rem', 
        color: 'white', 
        maxWidth: '900px', 
        margin: '0 auto', 
        paddingLeft: '24px', 
        paddingRight: '24px',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '0.5rem',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #AAAAAA 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center'
        }}>{title}</h1>
        
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          marginBottom: '3rem',
          fontFamily: 'monospace'
        }}>{date}</p>
        
        <div style={{ 
          background: 'rgba(20, 20, 25, 0.4)', 
          backdropFilter: 'blur(10px)', 
          padding: '3rem', 
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
          {sections.map((section, index) => (
            <div key={index} style={{ marginBottom: '2.5rem' }}>
              {section.level === 3 ? (
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--white)',
                  marginBottom: '1rem',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  paddingBottom: '0.5rem',
                }}>
                  {section.title}
                </h3>
              ) : (
                <h2 style={{ 
                  fontSize: '1.25rem', 
                  color: 'var(--white)',
                  marginBottom: '1rem',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '0.5rem',
                  display: 'inline-block'
                }}>
                  {section.title}
                </h2>
              )}
              <p style={{ 
                fontSize: '1.05rem', 
                lineHeight: '1.7', 
                color: '#ddd',
                whiteSpace: 'pre-line' // Important for respecting newlines in the JSON content
              }}>
                {highlightText(section.content)}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
