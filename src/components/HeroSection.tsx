import React from 'react';
import styles from './HeroSection.module.css';
import { motion } from 'framer-motion';
import { Apple, FileText } from 'lucide-react';
import { HeroLogo } from './HeroLogo';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.glowBg} />
      
      <HeroLogo />

      <motion.h1 
        className={styles.headline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Identity for <br /> the Shadows.
      </motion.h1>

      <motion.p 
        className={styles.subheadline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Prove who you are without revealing everything. 
        The first double-blind identity wallet for the digital age.
      </motion.p>

      <motion.div 
        className={styles.ctaGroup}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button className={styles.primaryBtn}>
          <Apple size={20} />
          Download for iOS
        </button>
        <button className={styles.secondaryBtn}>
          <FileText size={20} style={{ marginRight: '8px' }} />
          Read Whitepaper
        </button>
      </motion.div>
    </section>
  );
};