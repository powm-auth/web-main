import React from 'react';
import styles from './Features.module.css';
import { motion } from 'framer-motion';
import { EyeOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FeatureRelay: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.featureCard}>
      <div className={styles.visualContainer}>
        {/* Track Line */}
        <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '2px', background: 'rgba(255, 255, 255, 0.1)', transform: 'translateY(-50%)' }} />
        
        {/* Central Relay Node (Static) */}
        <div 
          className={styles.relayNode} 
          style={{ 
            borderColor: 'var(--text-secondary)',
            background: 'var(--bg-main)',
            zIndex: 2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Use CSS transform for static centering
            position: 'absolute'
          }}
        >
          <EyeOff size={20} color="var(--text-secondary)" />
        </div>

        {/* Pulsating Gradient Background */}
        <motion.div
          style={{
            position: 'absolute',
            width: '80px', 
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'var(--electric-purple)',
            opacity: 0,
            filter: 'blur(15px)',
            zIndex: 1, // Behind the RelayNode but above the line
            left: '49%',
            right: '51%', 
            x: '-50%',   
            y: '-50%',
            top: '50%',
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1] 
          }}
        />

        {/* Moving Packet */}
        <motion.div 
          className={styles.packet}
          style={{ 
            borderRadius: '50%',
            top: '50%', 
            y: '-50%',
            x: '-50%',
            width: '12px',
            height: '12px'
          }} 
          animate={{ 
            left: ['10%', '90%', '10%'], // Animate Left -> Right -> Left
            backgroundColor: ['#A06BFF', '#A06BFF', '#FF9A2E', '#FF9A2E', '#A06BFF', '#A06BFF'], // Color changes from Purple to Orange at middle (L->R), then Orange to Purple at middle (R->L)
          }}
          transition={{ 
            duration: 3, // Duration for one full cycle (L->R->L)
            repeat: Infinity, 
            ease: "linear",
            left: { 
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1] // Keyframes at start, middle, end of the full cycle
            },
            backgroundColor: { 
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              // Sharp color switches at midpoints of each leg (L->R and R->L)
              times: [0, 0.24, 0.26, 0.74, 0.76, 1] 
            }
          }}
        />
        
        {/* Labels */}
        <div style={{ position: 'absolute', left: '10%', top: '30%', fontSize: '0.7rem', color: '#aaa' }}>{t('features.relay.user')}</div>
        <div style={{ position: 'absolute', left: '50%', top: '20%', transform: 'translateX(-50%)', fontSize: '0.7rem', color: 'var(--white)', fontWeight: 'bold' }}>Powm</div>
        <div style={{ position: 'absolute', right: '10%', top: '30%', fontSize: '0.7rem', color: '#aaa' }}>{t('features.relay.merchant')}</div>
      </div>

      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{t('features.relay.title')}</h3>
        <p className={styles.caption}>{t('features.relay.caption')}</p>
      </div>
    </div>
  );
};