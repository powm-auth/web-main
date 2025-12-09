import React from 'react';
import styles from './GrainyBackground.module.css';

export const GrainyBackground: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Moving Gradients */}
      <div className={styles.blobContainer}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>

      {/* Static Grain Overlay */}
      <div className={styles.grainOverlay} />
    </div>
  );
};
