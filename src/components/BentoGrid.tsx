import React from 'react';
import styles from './BentoGrid.module.css';
import { motion } from 'framer-motion';
import { FeatureDev } from './features/FeatureDev';
import { FeatureLocal } from './features/FeatureLocal';
import { FeatureRelay } from './features/FeatureRelay';
import { FeatureSpeed } from './features/FeatureSpeed';
import { FeatureWorld } from './features/FeatureWorld'; // Import the new card

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
      {/* Left Column */}
      <motion.div className={styles.leftColItem1} variants={item}>
        <FeatureDev />
      </motion.div>
      <motion.div className={styles.leftColItem2} variants={item}>
        <FeatureLocal />
      </motion.div>

      {/* Middle Column (Tall World Card) */}
      <motion.div className={styles.middleColItem} variants={item}>
         <FeatureWorld />
      </motion.div>

      {/* Right Column */}
      <motion.div className={styles.rightColItem1} variants={item}>
        <FeatureRelay />
      </motion.div>
      <motion.div className={styles.rightColItem2} variants={item}>
        <FeatureSpeed />
      </motion.div>

    </motion.div>
  );
};