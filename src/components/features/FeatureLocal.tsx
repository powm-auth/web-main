import React from 'react';
import styles from './Features.module.css';
import { motion } from 'framer-motion';
import { Smartphone, Shield, Cloud } from 'lucide-react';

export const FeatureLocal: React.FC = () => {
  return (
    <div className={styles.featureCard}>
      {/* Visual Top */}
      <div className={styles.visualContainer}>
        {/* Cloud Server */}
        <div className={styles.cloudServer}>
          <Cloud size={24} color="rgba(255,255,255,0.5)" />
        </div>

        {/* The "Vacuum" Effect ID Card */}
        <motion.div 
          className={styles.idCard}
          initial={{ top: '45px', right: '50px', opacity: 1, scale: 1 }}
          animate={{ 
            top: ['45px', '140px'], // Move down
            right: ['50px', '220px'], // Move left to phone
            scale: [1, 0.5],
            opacity: [1, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 1, 
            ease: "easeInOut" 
          }}
        >
          <div style={{ width: '100%', height: '4px', background: '#333', marginTop: '4px', borderRadius: '2px' }}/>
          <div style={{ width: '60%', height: '4px', background: '#333', marginTop: '2px', borderRadius: '2px' }}/>
        </motion.div>

        {/* Shield Effect */}
        <motion.div 
          className={styles.shield}
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.6, 0.7, 0.9, 1] }}
        >
             <Shield size={120} color="var(--electric-purple)" strokeWidth={1} style={{ opacity: 0.3 }} />
        </motion.div>

        {/* Phone */}
        <div className={styles.phoneVault}>
           <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Smartphone color="var(--electric-purple)" size={32} />
           </div>
        </div>
      </div>

      {/* Content Bottom */}
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>User First / Local-First</h3>
        <p className={styles.caption}>Your data stays on your phone.</p>
      </div>
    </div>
  );
};