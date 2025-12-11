import React from 'react';
import styles from './Features.module.css';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';

export const FeatureRelay: React.FC = () => {
  return (
    <div className={styles.featureCard}>
      {/* Visual Top */}
      <div className={styles.visualContainer}>
        <div className={styles.relayLine} />
        
        {/* Relay Node Middle */}
        <div className={styles.relayNode}>
          <Network size={20} color="var(--electric-purple)" />
        </div>

        {/* Moving Packet */}
        <motion.div 
          className={styles.packet}
          animate={{ 
            left: ['10%', '50%', '90%'],
            backgroundColor: ['#A06BFF', '#fff', '#00D155'], // Purple -> White -> Green
            borderRadius: ['50%', '0%', '50%'] // Circle -> Square (stripping) -> Circle
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "linear"
          }}
        />
        
        {/* Labels (Absolute positioning relative to visualContainer) */}
        <div style={{ position: 'absolute', left: '10%', top: '30%', fontSize: '0.7rem', color: '#aaa' }}>User</div>
        <div style={{ position: 'absolute', left: '50%', top: '20%', transform: 'translateX(-50%)', fontSize: '0.7rem', color: 'var(--electric-purple)' }}>Relay</div>
        <div style={{ position: 'absolute', right: '10%', top: '30%', fontSize: '0.7rem', color: '#aaa' }}>Merchant</div>

      </div>

      {/* Content Bottom */}
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Double-Blind Relay</h3>
        <p className={styles.caption}>We don't know where you go.</p>
      </div>
    </div>
  );
};