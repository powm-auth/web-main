import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import styles from './LanguageSelector.module.css';

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Safe check for current language (could be 'en-US', 'fr-FR', etc.)
  const currentLang = i18n.resolvedLanguage?.startsWith('fr') ? 'fr' : 'en';

  return (
    <div className={styles.container}>
      <Globe size={14} className={styles.icon} />
      <div className={styles.options}>
        <button 
          className={`${styles.option} ${currentLang === 'en' ? styles.active : ''}`}
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <span className={styles.divider}>/</span>
        <button 
          className={`${styles.option} ${currentLang === 'fr' ? styles.active : ''}`}
          onClick={() => changeLanguage('fr')}
        >
          FR
        </button>
      </div>
    </div>
  );
};
