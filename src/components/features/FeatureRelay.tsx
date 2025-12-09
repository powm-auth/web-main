import React from 'react';
import styles from './Features.module.css';
import { motion } from 'framer-motion';
import { Check, Network } from 'lucide-react';

export const FeatureRelay: React.FC = () => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Double-Blind Relay</h3>
        <p className={styles.caption}>We don't know where you go.</p>
        <p className={styles.description}>
          Like a letter put into a new, blank envelope before delivery.
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}><Check size={16} className={styles.checkIcon}/> OHTTP Relay (No IP tracking)</li>
          <li className={styles.listItem}><Check size={16} className={styles.checkIcon}/> Unlinkable Proofs</li>
        </ul>
      </div>

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
            backgroundColor: ['#00D1FF', '#fff', '#00D155'], // Cyan -> White -> Green
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
    </div>
  );
};
