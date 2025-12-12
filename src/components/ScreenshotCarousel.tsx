import React, { useRef } from 'react';
import styles from './ScreenshotCarousel.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import bgImage from '../assets/2ndbackground.png';
import { useTranslation } from 'react-i18next';

// Import screenshot images
import screenshot1 from '../assets/screenshots/simulator_screenshot_0FE7C654-9F5F-44E5-A5EF-8F8AAD204EFD.png';
import screenshot2 from '../assets/screenshots/simulator_screenshot_273D7E79-1A2F-4948-895E-3A69E952982A.png';
import screenshot3 from '../assets/screenshots/simulator_screenshot_5392215D-9EFB-4C24-91BD-825A063A4291.png';
import screenshot4 from '../assets/screenshots/simulator_screenshot_D1996B7E-D082-42B1-88F7-0D98B164ECF4.png';


export const ScreenshotCarousel: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [targetX, setTargetX] = React.useState("-1000px");

  const cards = [
    {
      id: 1,
      imageSrc: screenshot1,
      alt: t('carousel.cards.screenshot1_alt')
    },
    {
      id: 2,
      imageSrc: screenshot2,
      alt: t('carousel.cards.screenshot2_alt')
    },
    {
      id: 3,
      imageSrc: screenshot3,
      alt: t('carousel.cards.screenshot3_alt')
    },
    {
      id: 4,
      imageSrc: screenshot4,
      alt: t('carousel.cards.screenshot4_alt')
    }
  ];

  React.useEffect(() => {
    const updateScrollDistance = () => {
      if (typeof window !== 'undefined') {
        // Calculate the distance needed to move the last card to the center
        // Initial Position of Last Card Center:
        // Start (70vw) + (3 * (300 card + 200 gap)) + 150 (half card)
        
        // Target Position: 0.6w
        
        // TranslateX = Target - Initial
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

  // Track scroll progress of the container for horizontal movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track scroll progress for background entry transition
  const { scrollYProgress: enterProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0px", targetX]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  // Background fades in as the section enters the viewport
  const bgOpacity = useTransform(enterProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.stickyWrapper}>
        <motion.div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 70%', // Shifted downwards by 20% from center (50% + 20% = 70%)
            opacity: bgOpacity,
            zIndex: -1
          }}
        />
        {/* Transition Gradient from previous section */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '20vh', // Adjust height for smoothness
            background: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            zIndex: 0 // Above background image
          }} 
        />
        <div className={styles.topGradientOverlay} />
        <div className={styles.bottomGradientOverlay} />
        <motion.div 
          className={styles.titleWrapper}
          style={{ opacity, scale }}
        >
          <h2 className={styles.title}>{t('carousel.title')}</h2>
          <p className={styles.subtitle}>
            {t('carousel.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className={styles.carousel}
          style={{ x }}
        >
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardBody}>
                <img src={card.imageSrc} alt={card.alt} className={styles.screenshotImage} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
