import React from 'react';
import styles from './PhoneDemo.module.css';
import { User } from 'lucide-react';

export const PhoneDemo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <div className={styles.screen}>
          <div className={styles.scannerLine} />
          
          <div className={styles.content}>
            <div className={styles.userIcon}>
              <User size={40} />
            </div>
          </div>
          
          <div style={{ 
            marginTop: '2rem', 
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.8rem',
            fontFamily: 'monospace' 
          }}>
            Verifying Identity...
          </div>
        </div>
      </div>
    </div>
  );
};
