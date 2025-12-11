import React from 'react';
import styles from './Features.module.css';
import { Github, Lock } from 'lucide-react';

export const FeatureTrust: React.FC = () => {
  return (
    <div className={styles.featureCard}>
      {/* Visual Top */}
      <div className={styles.visualContainer}>
        <div className={styles.statusCard}>
          <div className={styles.statusRow}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
              <div className={styles.pulseDot} />
              Systems Operational
            </span>
            <span style={{ color: '#00D155' }}>ONLINE</span>
          </div>
          
          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '1rem 0' }} />

          <div className={styles.statusRow}>
             <span style={{ color: '#aaa' }}>Latest Audit:</span>
             <span style={{ color: '#fff' }}>Passed (Dec 2025)</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
             <button style={{ 
               flex: 1, 
               background: 'rgba(255,255,255,0.1)', 
               border: 'none', 
               padding: '0.5rem', 
               borderRadius: '6px', 
               color: '#fff',
               fontSize: '0.8rem',
               display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem'
             }}>
               <Github size={14} /> Source
             </button>
             <button style={{ 
               flex: 1, 
               background: 'rgba(255,255,255,0.1)', 
               border: 'none', 
               padding: '0.5rem', 
               borderRadius: '6px', 
               color: '#fff',
               fontSize: '0.8rem',
               display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem'
             }}>
               <Lock size={14} /> Security
             </button>
          </div>
        </div>
      </div>

      {/* Content Bottom */}
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Ultra Transparent</h3>
        <p className={styles.caption}>Don't trust us. Verify us.</p>
      </div>
    </div>
  );
};