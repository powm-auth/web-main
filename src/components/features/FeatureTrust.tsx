import React from 'react';
import styles from './Features.module.css';
import { Github, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FeatureTrust: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.featureCard}>
      {/* Visual Top */}
      <div className={styles.visualContainer}>
        <div className={styles.statusCard}>
          <div className={styles.statusRow}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
              <div className={styles.pulseDot} />
              {t('features.trust.operational')}
            </span>
            <span style={{ color: '#00D155' }}>{t('features.trust.online')}</span>
          </div>
          
          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '1rem 0' }} />

          <div className={styles.statusRow}>
             <span style={{ color: '#aaa' }}>{t('features.trust.audit')}</span>
             <span style={{ color: '#fff' }}>{t('features.trust.auditStatus')}</span>
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
               <Github size={14} /> {t('features.trust.source')}
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
               <Lock size={14} /> {t('features.trust.security')}
             </button>
          </div>
        </div>
      </div>

      {/* Content Bottom */}
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{t('features.trust.title')}</h3>
        <p className={styles.caption}>{t('features.trust.caption')}</p>
      </div>
    </div>
  );
};