import React from 'react';
import styles from './BentoGrid.module.css';
import { GlassCard } from './GlassCard';
import { Shield, Lock, Scan, Zap, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const BentoGrid: React.FC = () => {
  return (
    <motion.div 
      className={styles.gridContainer}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Large Card: Double Anonymity */}
      <GlassCard className={styles.largeCard} variants={item}>
        <div className={styles.iconWrapper}>
          <Layers />
        </div>
        <h3 className={styles.cardTitle}>Double Anonymity</h3>
        <p className={styles.cardDesc}>
          Our proprietary double-blind protocol ensures that neither the issuer nor the verifier can correlate your identity. You remain a ghost in the machine.
        </p>
        <div className={styles.visualAbstract} />
      </GlassCard>

      {/* Small Card: Local Storage */}
      <GlassCard className={styles.smallCard} variants={item}>
        <div className={styles.iconWrapper} style={{ color: 'var(--safety-orange)' }}>
          <Lock />
        </div>
        <h3 className={styles.cardTitle}>Local Storage</h3>
        <p className={styles.cardDesc}>
          Your keys, your data. Encrypted locally on your device's Secure Enclave.
        </p>
      </GlassCard>

      {/* Tall Card: Zero Knowledge */}
      <GlassCard className={styles.tallCard} variants={item}>
        <div className={styles.iconWrapper} style={{ color: 'var(--active-cyan)' }}>
          <Scan />
        </div>
        <h3 className={styles.cardTitle}>Zero Knowledge Proofs</h3>
        <p className={styles.cardDesc}>
          Prove you are over 18 without showing your birthdate. Verify citizenship without revealing your address.
        </p>
        <div style={{ 
          marginTop: '2rem', 
          height: '150px', 
          background: 'rgba(0,0,0,0.3)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px dashed rgba(255,255,255,0.2)'
        }}>
          <Zap size={48} style={{ opacity: 0.5 }} />
        </div>
      </GlassCard>

      {/* Small Card: Instant Sync */}
      <GlassCard className={styles.smallCard} variants={item}>
        <div className={styles.iconWrapper}>
          <Shield />
        </div>
        <h3 className={styles.cardTitle}>Military Grade</h3>
        <p className={styles.cardDesc}>
          AES-256 encryption meeting the highest security standards.
        </p>
      </GlassCard>

    </motion.div>
  );
};
