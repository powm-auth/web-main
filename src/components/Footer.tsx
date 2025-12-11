import React from 'react';
import styles from './Footer.module.css';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <span className={styles.logoText}>POWM</span>
            <p className={styles.description}>
              Restoring privacy to the internet, one verification at a time. 
              Secure, fast, and user-centric identity solutions.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Product</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Features</a></li>
              <li><a href="#" className={styles.link}>Integrations</a></li>
              <li><a href="#" className={styles.link}>Pricing</a></li>
              <li><a href="#" className={styles.link}>Changelog</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Resources</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Documentation</a></li>
              <li><a href="#" className={styles.link}>API Reference</a></li>
              <li><a href="#" className={styles.link}>Community</a></li>
              <li><a href="#" className={styles.link}>Help Center</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>About</a></li>
              <li><a href="#" className={styles.link}>Blog</a></li>
              <li><a href="#" className={styles.link}>Careers</a></li>
              <li><a href="#" className={styles.link}>Contact</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} POWM Inc. All rights reserved.
          </p>
          <div className={styles.socials} style={{ fontSize: '0.85rem' }}>
             {/* Reusing socials style for bottom links if needed, or just regular links */}
             <a href="#" className={styles.link}>Privacy Policy</a>
             <a href="#" className={styles.link}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
