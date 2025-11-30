import React from 'react';
import styles from '../styles/LandingPage.module.css';

const HeroSection: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>Create. Draw. Save.<br />Welcome to <span style={{color: '#2563EB'}}>Froodle.io</span></h1>
      <p className={styles.heroSubtitle}>
        The easiest way to create and manage your drawings online. Draw boxes, circles, triangles, and stars with a modern, intuitive interface.
      </p>
      <a href="#register" className={styles.primaryButton}>Get Started</a>
    </div>
    <div className={styles.heroImage} aria-hidden="true">
      {/* Example SVG illustration or image placeholder */}
      <svg width="320" height="200" viewBox="0 0 320 200" fill="none"><rect x="20" y="40" width="80" height="80" rx="8" stroke="#2563EB" strokeWidth="4" fill="none"/><circle cx="180" cy="80" r="40" stroke="#2563EB" strokeWidth="4" fill="none"/><polygon points="260,60 300,140 220,140" stroke="#2563EB" strokeWidth="4" fill="none"/></svg>
    </div>
  </section>
);

export default HeroSection;
