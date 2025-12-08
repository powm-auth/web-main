import React from 'react';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo}>POWM</div>
      
      <div className={styles.links}>
        <a href="#" className={styles.link}>Features</a>
        <a href="#" className={styles.link}>Security</a>
        <a href="#" className={styles.link}>Roadmap</a>
      </div>

      <button className={styles.ctaButton}>
        Get the App
      </button>
    </motion.nav>
  );
};
