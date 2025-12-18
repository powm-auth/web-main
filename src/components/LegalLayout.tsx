import React, { useRef } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { GrainyBackground } from './GrainyBackground';
import { useScroll, useTransform } from 'framer-motion';
import styles from './LegalLayout.module.css';

interface LegalSection {
  title: string;
  content: string;
  level?: 2 | 3;
}

interface LegalLayoutProps {
  title: string;
  date: string;
  sections: LegalSection[];
  backgroundImage?: string;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, date, sections, backgroundImage }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const highlightText = (text: string) => {
    const parts = text.split(/(<strong>.*?<\/strong>)/g);
    return parts.map((part, index) => {
      if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
        return (
          <span key={index} className={styles.highlight}>
            {part.replace(/<\/?strong>/g, '')}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <GrainyBackground overlayOpacity={overlayOpacity} backgroundImage={backgroundImage} />
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.date}>{date}</p>

        <div className={styles.contentBox}>
          {sections.map((section, index) => (
            <div key={index} className={styles.section}>
              {section.level === 3 ? (
                <h3 className={styles.subSectionTitle}>
                  {section.title}
                </h3>
              ) : (
                <h2 className={styles.sectionTitle}>
                  {section.title}
                </h2>
              )}
              <p className={styles.content}>
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
