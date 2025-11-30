import React from 'react';
import styles from '../styles/LandingPage.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <span>&copy; {new Date().getFullYear()} Froodle.io. All rights reserved.</span>
      <nav className={styles.footerNav} aria-label="Footer navigation">
        <a href="#features" className={styles.footerLink}>Features</a>
        <a href="#register" className={styles.footerLink}>Register</a>
        <a href="#signin" className={styles.footerLink}>Sign In</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
