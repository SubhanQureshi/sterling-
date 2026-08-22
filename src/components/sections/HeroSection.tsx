'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.heroWrapper}>
      <div className={styles.container}>
        {/* Left Column: Text & CTAs */}
        <div className={styles.contentColumn}>
          {/* Eyebrow */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>STERLING TECHNICAL GROUP</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            Precision You Can<br />
            <span className={styles.coralText}>Build</span> On.
          </h1>

          {/* Subheadline / Description */}
          <p className={styles.description}>
            Sterling delivers accurate electrical takeoff and IT estimation,
            from a single low-rise to a 200+ unit high-rise. No project is too
            big or too small for our full attention.
          </p>

          {/* Button Group */}
          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryBtn}
              type="button"
              onClick={scrollToContact}
            >
              Get Your Estimate Now
            </button>
            <button
              className={styles.secondaryBtn}
              type="button"
              onClick={scrollToProjects}
            >
              See Our Work
            </button>
          </div>
        </div>

        {/* Right Column: Hero Ribbon Image */}
        <div className={styles.graphicColumn} aria-hidden="true">
          <Image
            src="/Sterling logo 1 svg 1.png"
            alt="Sterling Ribbon Graphic"
            width={368}
            height={590}
            priority
          />
        </div>
      </div>
    </section>
  );
};
