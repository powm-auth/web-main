import React, { useRef } from 'react';
import styles from './ScreenshotCarousel.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Lock } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: "Identity Verified",
    description: "Instant verification using advanced cryptography without sharing personal data.",
    icon: <ShieldCheck size={32} />
  },
  {
    id: 2,
    title: "Lightning Fast",
    description: "Optimized for speed. Get verified in milliseconds, not days.",
    icon: <Zap size={32} />
  },
  {
    id: 3,
    title: "Global Reach",
    description: "Works across borders. One identity for the entire internet.",
    icon: <Globe size={32} />
  },
  {
    id: 4,
    title: "Bank-Grade Security",
    description: "Your data is encrypted locally. We never see your private keys.",
    icon: <Lock size={32} />
  }
];

export const ScreenshotCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [targetX, setTargetX] = React.useState("-1000px");

  React.useEffect(() => {
    const updateScrollDistance = () => {
      if (typeof window !== 'undefined') {
        // Calculate the distance needed to move the last card to the center
        // Initial Position of Last Card Center:
        // Start (70vw) + (3 * (300 card + 200 gap)) + 150 (half card)
        // = 0.70w + 1500 + 150 = 0.7w + 1650
        
        // Target Position: 0.6w
        
        // TranslateX = Target - Initial
        // = 0.6w - (0.7w + 1650)
        // = -0.1w - 1650
        
        const w = window.innerWidth;
        const distance = -0.1 * w - 1650;
        setTargetX(`${distance}px`);
      }
    };

    updateScrollDistance();
    window.addEventListener('resize', updateScrollDistance);
    return () => window.removeEventListener('resize', updateScrollDistance);
  }, []);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0px", targetX]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.stickyWrapper}>
        <div className={styles.topGradientOverlay} />
        <div className={styles.bottomGradientOverlay} />
        <motion.div 
          className={styles.titleWrapper}
          style={{ opacity, scale }}
        >
          <h2 className={styles.title}>Experience the Future</h2>
          <p className={styles.subtitle}>
            A seamless interface designed for privacy, speed, and ease of use.
          </p>
        </motion.div>

        <motion.div 
          className={styles.carousel}
          style={{ x }}
        >
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardHeader}>
                POWM App
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardIcon}>
                  {card.icon}
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.description}</p>
                
                {/* Visual filler for "app UI" look */}
                <div style={{ marginTop: '2rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div className={styles.mockContent} style={{ width: '80%' }} />
                    <div className={styles.mockContent} style={{ width: '90%' }} />
                    <div className={styles.mockContent} style={{ width: '60%' }} />
                    <div className={styles.mockContent} style={{ width: '85%' }} />
                </div>
                 <div style={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                 </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
