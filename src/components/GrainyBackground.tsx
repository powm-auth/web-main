import React from 'react';
import styles from './GrainyBackground.module.css';
import { motion, MotionValue } from 'framer-motion';

interface GrainyBackgroundProps {
  overlayOpacity?: MotionValue<number>;
}

export const GrainyBackground: React.FC<GrainyBackgroundProps> = ({ overlayOpacity }) => {
  return (
    <div className={styles.container}>
      {/* Black overlay controlled by scroll */}
      <motion.div 
        className={styles.overlay} 
        style={{ opacity: overlayOpacity || 0 }}
      />
    </div>
  );
};