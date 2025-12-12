import React from 'react';
import styles from './Footer.module.css';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNav = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/wip');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <span className={styles.logoText}>Powm</span>
            <p className={styles.description}>
              {t('footer.description')}
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Twitter" onClick={handleNav}>
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="GitHub" onClick={handleNav}>
                <Github size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn" onClick={handleNav}>
                <Linkedin size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram" onClick={handleNav}>
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>{t('footer.product')}</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.features')}</a></li>
              {/* <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.integrations')}</a></li> */}
              <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.pricing')}</a></li>
              <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.changelog')}</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>{t('footer.resources')}</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.documentation')}</a></li>
              {/* <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.apiReference')}</a></li>
              <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.community')}</a></li>
              <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.helpCenter')}</a></li> */}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>{t('footer.company')}</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.about')}</a></li>
              {/* <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.blog')}</a></li>
              <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.careers')}</a></li>
              <li><a href="#" className={styles.link} onClick={handleNav}>{t('footer.links.contact')}</a></li> */}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
          <div className={styles.socials} style={{ fontSize: '0.85rem' }}>
             <a href="#" className={styles.link} onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}>{t('footer.links.privacy')}</a>
             <a href="#" className={styles.link} onClick={(e) => { e.preventDefault(); navigate('/terms'); }}>{t('footer.links.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};