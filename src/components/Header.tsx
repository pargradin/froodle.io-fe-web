import React from 'react';
import styles from '../styles/LandingPage.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <span style={{ color: '#2563EB', fontWeight: 700, fontSize: 24 }}>Froodle.io</span>
    </div>
    <nav className={styles.nav} aria-label="Main navigation">
      <a href="#features" className={styles.navLink}>Features</a>
      <a href="#register" className={styles.navLink}>Register</a>
      <a href="#signin" className={styles.navLink}>Sign In</a>
    </nav>
  </header>
);

export default Header;
