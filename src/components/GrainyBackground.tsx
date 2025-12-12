import React from 'react';
import styles from './GrainyBackground.module.css';
import { motion, MotionValue } from 'framer-motion';

interface GrainyBackgroundProps {
  overlayOpacity?: MotionValue<number>;
  backgroundImage?: string;
}

export const GrainyBackground: React.FC<GrainyBackgroundProps> = ({ overlayOpacity, backgroundImage }) => {
  return (
    <div 
      className={styles.container}
      style={backgroundImage ? { '--dynamic-background-image': `url(${backgroundImage})` } as React.CSSProperties : undefined}
    >
      {/* Black overlay controlled by scroll */}
      <motion.div 
        className={styles.overlay} 
        style={{ opacity: overlayOpacity || 0 }}
      />
    </div>
  );
};