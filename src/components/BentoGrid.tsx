import React from 'react';
import styles from './BentoGrid.module.css';
import { motion } from 'framer-motion';
import { FeatureDev } from './features/FeatureDev';
import { FeatureLocal } from './features/FeatureLocal';
import { FeatureRelay } from './features/FeatureRelay';
import { FeatureTrust } from './features/FeatureTrust';

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
      <motion.div variants={item}>
        <FeatureDev />
      </motion.div>

      <motion.div variants={item}>
        <FeatureLocal />
      </motion.div>

      <motion.div variants={item}>
        <FeatureRelay />
      </motion.div>

      <motion.div variants={item}>
        <FeatureTrust />
      </motion.div>
    </motion.div>
  );
};
