import React, { useEffect, useState } from 'react';
import styles from './Features.module.css';
import { useAnimate } from 'framer-motion';
import { Code2, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FeatureDev: React.FC = () => {
  const { t } = useTranslation();
  const [scope] = useAnimate();
  const [text, setText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const codeString = "await powm.challenge(token)";

  useEffect(() => {
    const sequence = async () => {
      while(true) {
        setText("");
        setShowSuccess(false);
        await new Promise(r => setTimeout(r, 500));
        
        for (let i = 0; i <= codeString.length; i++) {
          setText(codeString.slice(0, i));
          await new Promise(r => setTimeout(r, 50));
        }
        
        await new Promise(r => setTimeout(r, 400));
        setShowSuccess(true);
        
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    sequence();
  }, []);

  return (
    <div className={styles.featureCard} ref={scope}>
      <div className={styles.visualContainer} style={{ padding: '0 1rem' }}>
        <div className={styles.codeWindow} style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '0.75rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
             <Code2 size={20} color="#555" />
             <div style={{ fontFamily: 'monospace', fontSize: '0.95rem', color: '#a9b7c6' }}>
               {text}
             </div>
          </div>

           <div style={{ paddingLeft: '2.5rem', height: '24px', display: 'flex', alignItems: 'center' }}>
              {showSuccess && (
                <div className={styles.successBadge}>
                  <CheckCircle2 size={14} />
                  <span>{t('features.dev.completed')}</span>
                </div>
              )}
           </div>

        </div>
      </div>

      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{t('features.dev.title')}</h3>
        <p className={styles.caption}>{t('features.dev.caption')}</p>
      </div>
    </div>
  );
};