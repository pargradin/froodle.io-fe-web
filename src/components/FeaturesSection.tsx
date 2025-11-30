import React from 'react';
import styles from '../styles/LandingPage.module.css';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="4" stroke="#2563EB" strokeWidth="2" fill="none"/></svg>
    ),
    title: 'Draw Shapes',
    desc: 'Boxes, circles, triangles, and stars – all at your fingertips.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#2563EB" strokeWidth="2" fill="none"/></svg>
    ),
    title: 'Easy Editing',
    desc: 'Select, resize, and adjust properties with a simple UI.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><polygon points="16,6 28,26 4,26" stroke="#2563EB" strokeWidth="2" fill="none"/></svg>
    ),
    title: 'Save & Manage',
    desc: 'All your drawings are saved to your account for future editing.'
  }
];

const FeaturesSection: React.FC = () => (
  <section className={styles.features} id="features">
    <h2 className={styles.featuresTitle}>Why Froodle.io?</h2>
    <div className={styles.featuresGrid}>
      {features.map((feature, idx) => (
        <div className={styles.featureCard} key={idx}>
          <div className={styles.featureIcon}>{feature.icon}</div>
          <h3 className={styles.featureHeading}>{feature.title}</h3>
          <p className={styles.featureDesc}>{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
