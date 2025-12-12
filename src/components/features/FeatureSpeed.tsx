import React from 'react';
import styles from './Features.module.css';
import { motion } from 'framer-motion';
import { Check, Fingerprint } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FeatureSpeed: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.featureCard}>
      {/* Visual Top */}
      <div className={styles.visualContainer}>
        
        {/* The Button Container */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Ripple Effects */}
            <motion.div 
                style={{ 
                    position: 'absolute', 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    border: '2px solid #00D155',
                    top: '50%', left: '50%', x: '-50%', y: '-50%' 
                }}
                animate={{ scale: [1, 2], opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
            />

            {/* The Fingerprint Scanner Button */}
            <motion.div 
                style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: 'rgba(0, 209, 85, 0.1)', 
                    border: '1px solid #00D155',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer'
                }}
                animate={{ scale: [1, 0.95, 1] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2.3 }}
            >
                {/* Icons Switching */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0, 0, 1] }}
                    transition={{ duration: 2.5, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 0 }}
                    style={{ position: 'absolute' }}
                >
                    <Fingerprint size={40} color="#00D155" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.5] }}
                    transition={{ duration: 2.5, times: [0, 0.1, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
                    style={{ position: 'absolute' }}
                >
                    <Check size={48} color="#fff" strokeWidth={4} />
                </motion.div>
                
                {/* Thumb Press Overlay */}
                <motion.div 
                     style={{ 
                         position: 'absolute', 
                         width: '100%', 
                         height: '100%', 
                         borderRadius: '50%', 
                         background: 'rgba(255,255,255,0.2)' 
                     }}
                     animate={{ opacity: [0, 1, 0] }}
                     transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2.2 }}
                />
            </motion.div>

            {/* Success Badge */}
            <motion.div
                style={{
                    marginTop: '1.5rem',
                    background: '#00D155',
                    padding: '0.4rem 1rem',
                    borderRadius: '20px',
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
                animate={{ y: [10, 0], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.5, times: [0.1, 0.2, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
            >
                <Check size={14} strokeWidth={4} /> {t('features.speed.verified')}
            </motion.div>

        </div>

      </div>

      {/* Content Bottom */}
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{t('features.speed.title')}</h3>
        <p className={styles.caption}>{t('features.speed.caption')}</p>
      </div>
    </div>
  );
};