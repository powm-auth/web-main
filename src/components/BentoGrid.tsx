import React from 'react';
import styles from './BentoGrid.module.css';
import { motion } from 'framer-motion';
import { EyeOff, FileKey, Database, ShieldCheck } from 'lucide-react';

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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export const BentoGrid: React.FC = () => {
  return (
    <motion.div 
      className={styles.gridContainer}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* 1. Double Anonymity (Wide) */}
      <motion.div className={`${styles.glassCard} ${styles.wideCard}`} variants={item}>
        <div className={styles.iconWrapper}>
          <EyeOff size={24} />
        </div>
        <h3 className={styles.cardTitle}>Double-Blind Anonymity</h3>
        <p className={styles.cardDesc}>
          Our protocol ensures zero correlation between issuer and verifier. 
          You are the only one who holds the keys to link them.
        </p>
        
        {/* Abstract Visual */}
        <div className={styles.abstractVisual} style={{ 
          background: 'radial-gradient(circle at 80% 80%, rgba(160, 107, 255, 0.15), transparent 60%)' 
        }} />
      </motion.div>

      {/* 2. Zero Knowledge (Square) */}
      <motion.div className={`${styles.glassCard} ${styles.squareCard}`} variants={item}>
        <div className={styles.iconWrapper} style={{ color: 'var(--active-cyan)' }}>
          <ShieldCheck size={24} />
        </div>
        <h3 className={styles.cardTitle}>Zero Knowledge</h3>
        <p className={styles.cardDesc}>
          Prove predicates (e.g., "Over 18") without revealing raw data.
        </p>
      </motion.div>

      {/* 3. Local Storage (Tall) */}
      <motion.div className={`${styles.glassCard} ${styles.tallCard}`} variants={item}>
        <div className={styles.iconWrapper} style={{ color: 'var(--safety-orange)' }}>
          <Database size={24} />
        </div>
        <h3 className={styles.cardTitle}>Local-First Vault</h3>
        <p className={styles.cardDesc}>
          Your identity data never leaves your device unencrypted. Stored in the Secure Enclave.
        </p>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
           <FileKey size={80} />
        </div>
      </motion.div>

    </motion.div>
  );
};