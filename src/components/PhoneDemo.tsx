import React, { useRef } from 'react';
import styles from './PhoneDemo.module.css';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check, MousePointer2 } from 'lucide-react'; // Remove QrCode import
import qrcodeImage from '../assets/qrcode.png'; // Import the image

export const PhoneDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this component's container
  // Changed "start start" to "start end" to start animation SOONER (when top of component hits bottom of viewport)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end end"] // Starts when top is at 80% of viewport height
  });

  // Smooth out the scroll values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- Animations Mapped to Timeline (Adjusted for earlier start) ---

  // 1. Scan Line (0.1 -> 0.3) - Earlier
  const scanLineTop = useTransform(smoothProgress, [0.1, 0.3], ["0%", "100%"]);
  const scanLineOpacity = useTransform(smoothProgress, [0.05, 0.1, 0.3, 0.35], [0, 1, 1, 0]);

  // 2. QR Code (0.0 -> 0.3)
  const qrOpacity = useTransform(smoothProgress, [0.25, 0.3], [1, 0]);
  const qrScale = useTransform(smoothProgress, [0.25, 0.3], [1, 0.8]);

  // Title Opacity (Fade In -> Stay -> Fade Out)
  const titleOpacity = useTransform(smoothProgress, [0, 0.1, 0.8, 0.9], [0, 1, 1, 0]);

  // 3. Modal (0.3 -> 0.4 Enter, 0.5 -> 0.55 Exit)
  const modalY = useTransform(smoothProgress, [0.3, 0.4, 0.5, 0.55], ["100%", "0%", "0%", "100%"]);
  
  // 4. Cursor (0.4 -> 0.5)
  // Starts off-screen or hidden, moves to button, clicks
  const cursorOpacity = useTransform(smoothProgress, [0.38, 0.4, 0.5, 0.52], [0, 1, 1, 0]);
  const cursorX = useTransform(smoothProgress, [0.4, 0.45], ["120%", "50%"]); // Relative to modal
  const cursorY = useTransform(smoothProgress, [0.4, 0.45], ["150%", "85%"]); // Aiming for the button
  const cursorScale = useTransform(smoothProgress, [0.45, 0.48, 0.5], [1, 0.8, 1]);

  // 5. Success Checkmark (0.55 -> 0.7)
  const successScale = useTransform(smoothProgress, [0.55, 0.6, 0.65], [0, 1.2, 1]);
  const successOpacity = useTransform(smoothProgress, [0.55, 0.6], [0, 1]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.stickyWrapper}>
        <motion.h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '3rem', // Increased margin to push phone down
            opacity: titleOpacity,
            width: '100%',
            zIndex: 10
          }}>
            How it works
        </motion.h2>

        <div className={styles.phone}>
          <div className={styles.screen}>
            
            {/* Scan Line */}
            <motion.div 
              className={styles.scanLine} 
              style={{ top: scanLineTop, opacity: scanLineOpacity }}
            />

            {/* QR Code (Replaced random dots with Icon) */}
            <motion.div 
              className={styles.qrCode}
              style={{ opacity: qrOpacity, scale: qrScale }}
            >
              <img src={qrcodeImage} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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

            {/* Success State (Centered via CSS) */}
            <motion.div 
              className={styles.successWrapper}
              style={{ scale: successScale, opacity: successOpacity }}
            >
              <div className={styles.checkCircle}>
                <Check size={64} color="white" strokeWidth={3} />
              </div>
              <h2 style={{ marginTop: '1rem', fontWeight: 800 }}>Verified</h2>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};
