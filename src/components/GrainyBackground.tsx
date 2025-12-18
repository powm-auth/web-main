import React from 'react';
import styles from './GrainyBackground.module.css';
import { motion, MotionValue } from 'framer-motion';

interface GrainyBackgroundProps {
  overlayOpacity?: MotionValue<number>;
  backgroundImage?: string;
  secondaryBackgroundImage?: string;
  secondaryOpacity?: MotionValue<number>;
}

export const GrainyBackground: React.FC<GrainyBackgroundProps> = ({ 
  overlayOpacity, 
  backgroundImage, 
  secondaryBackgroundImage,
  secondaryOpacity
}) => {
  return (
    <div 
      className={styles.container}
      style={backgroundImage ? { '--dynamic-background-image': `url(${backgroundImage})` } as React.CSSProperties : undefined}
    >
      {secondaryBackgroundImage && (
        <motion.div 
          className={styles.secondaryBackground}
          style={{ 
            backgroundImage: `url(${secondaryBackgroundImage})`,
            opacity: secondaryOpacity || 0
          }}
        />
      )}

      {/* Black overlay controlled by scroll */}
      <motion.div 
        className={styles.overlay} 
        style={{ opacity: overlayOpacity || 0 }}
      />
    </div>
  );
};
