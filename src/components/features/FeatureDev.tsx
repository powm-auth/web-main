import React, { useEffect, useState } from 'react';
import styles from './Features.module.css';
import { motion, useAnimate } from 'framer-motion';
import { Check, Code2 } from 'lucide-react';

export const FeatureDev: React.FC = () => {
  const [scope, animate] = useAnimate();
  const [text, setText] = useState("");
  const codeString = "await powm.verify(token);";

  useEffect(() => {
    const sequence = async () => {
      while(true) {
        // Reset
        setText("");
        await animate("#phoneScreen", { opacity: 0 }, { duration: 0 });
        
        // Typewriter
        for (let i = 0; i <= codeString.length; i++) {
          setText(codeString.slice(0, i));
          await new Promise(r => setTimeout(r, 50)); // Typing speed
        }
        
        await new Promise(r => setTimeout(r, 200));

        // Flash Success
        await animate("#phoneScreen", { opacity: 1 }, { duration: 0.1 });
        await new Promise(r => setTimeout(r, 2000)); // Hold success
      }
    };
    sequence();
  }, [animate]);

  return (
    <div className={styles.featureCard} ref={scope}>
      {/* Visual Top */}
      <div className={styles.visualContainer} style={{ padding: '0 1rem' }}>
        <div className={styles.codeWindow}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
             <Code2 size={24} color="#555" />
             <div className={styles.codeContent}>
                <span style={{ color: '#cc7832' }}>const</span> result = <br/>
                <span style={{ color: '#a9b7c6' }}>{text}</span><span className="cursor">|</span>
             </div>
          </div>
          
          <div className={styles.phoneMini}>
            <motion.div id="phoneScreen" className={styles.successFlash}>
              <Check color="white" size={32} strokeWidth={4} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Bottom */}
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Easy to Implement</h3>
        <p className={styles.caption}>One Webhook. One QR Code. Zero Headaches.</p>
      </div>
    </div>
  );
};