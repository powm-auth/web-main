import React, { type ReactNode } from 'react';
import styles from './GlassCard.module.css';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', ...props }) => {
  return (
    <motion.div 
      className={`${styles.card} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
