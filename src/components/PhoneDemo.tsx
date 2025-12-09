import React, { useRef } from 'react';
import styles from './PhoneDemo.module.css';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check, MousePointer2 } from 'lucide-react';

export const PhoneDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this component's container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- Animations Mapped to Timeline ---

  // 1. Scan Line (0.2 -> 0.4)
  const scanLineTop = useTransform(smoothProgress, [0.2, 0.4], ["0%", "100%"]);
  const scanLineOpacity = useTransform(smoothProgress, [0.15, 0.2, 0.4, 0.45], [0, 1, 1, 0]);

  // 2. QR Code (0.0 -> 0.4)
  const qrOpacity = useTransform(smoothProgress, [0.35, 0.4], [1, 0]);
  const qrScale = useTransform(smoothProgress, [0.35, 0.4], [1, 0.8]);

  // 3. Modal (0.4 -> 0.5 Enter, 0.6 -> 0.65 Exit)
  const modalY = useTransform(smoothProgress, [0.4, 0.5, 0.6, 0.65], ["100%", "0%", "0%", "100%"]);
  
  // 4. Cursor (0.5 -> 0.6)
  // Starts off-screen or hidden, moves to button, clicks
  const cursorOpacity = useTransform(smoothProgress, [0.48, 0.5, 0.6, 0.62], [0, 1, 1, 0]);
  const cursorX = useTransform(smoothProgress, [0.5, 0.55], ["120%", "50%"]); // Relative to modal
  const cursorY = useTransform(smoothProgress, [0.5, 0.55], ["150%", "85%"]); // Aiming for the button
  const cursorScale = useTransform(smoothProgress, [0.55, 0.58, 0.6], [1, 0.8, 1]);

  // 5. Success Checkmark (0.65 -> 0.8)
  const successScale = useTransform(smoothProgress, [0.65, 0.7, 0.75], [0, 1.2, 1]);
  const successOpacity = useTransform(smoothProgress, [0.65, 0.7], [0, 1]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.stickyWrapper}>
        <div className={styles.phone}>
          <div className={styles.screen}>
            
            {/* Scan Line */}
            <motion.div 
              className={styles.scanLine} 
              style={{ top: scanLineTop, opacity: scanLineOpacity }}
            />

            {/* QR Code */}
            <motion.div 
              className={styles.qrCode}
              style={{ opacity: qrOpacity, scale: qrScale }}
            >
              {/* Pseudo QR Pattern */}
              {Array.from({ length: 25 }).map((_, i) => (
                <div 
                  key={i} 
                  className={styles.qrDot} 
                  style={{ 
                    opacity: Math.random() > 0.5 ? 1 : 0.2,
                    background: i === 12 ? 'var(--electric-purple)' : 'black'
                  }} 
                />
              ))}
            </motion.div>

            {/* Modal */}
            <motion.div 
              className={styles.modal}
              style={{ y: modalY }}
            >
              <div style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
              <div>
                <h3 className={styles.modalTitle}>Validate Identity?</h3>
                <p className={styles.modalText}>website.com wants to verify you are over 18.</p>
              </div>
              <button className={styles.yesButton}>
                Approve Request
              </button>

              {/* Cursor moving relative to the modal for easier positioning */}
              <motion.div 
                className={styles.cursor}
                style={{ 
                  opacity: cursorOpacity,
                  left: cursorX,
                  top: cursorY,
                  scale: cursorScale
                }}
              >
                <MousePointer2 fill="white" color="black" size={32} />
              </motion.div>
            </motion.div>

            {/* Success State */}
            <motion.div 
              className={styles.successWrapper}
              style={{ scale: successScale, opacity: successOpacity }}
            >
              <div className={styles.checkCircle}>
                <Check size={64} color="white" strokeWidth={3} />
              </div>
              <h2 style={{ marginTop: '1rem', fontWeight: 800 }}>VERIFIED</h2>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};