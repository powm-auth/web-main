import React from 'react';
import styles from './HeroSection.module.css';
import { motion } from 'framer-motion';
import { Apple, FileText } from 'lucide-react';
import { HeroLogo } from './HeroLogo';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.glowBg} />
      
      <HeroLogo />

      <motion.h1 
        className={styles.headline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ whiteSpace: 'pre-line' }}
      >
        {t('hero.headline')}
      </motion.h1>

      <motion.p 
        className={styles.subheadline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {t('hero.subheadline')}
      </motion.p>

      <motion.div 
        className={styles.ctaGroup}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button className={styles.primaryBtn} onClick={() => navigate('/wip')}>
          <Apple size={20} />
          {t('hero.downloadIOS')}
        </button>
        <button className={styles.secondaryBtn} onClick={() => navigate('/whitepaper')}>
          <FileText size={20} style={{ marginRight: '8px'}} />
          {t('hero.readWhitepaper')}
        </button>
      </motion.div>
    </section>
  );
};