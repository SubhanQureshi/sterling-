'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.container}>
        {/* Left: White Logo (Non-clickable static image) */}
        <div className={styles.logoContainer}>
          <Image
            src="/Sterling-26.png"
            alt="Sterling Technical Group"
            width={340}
            height={104}
          />
        </div>

        {/* Center: Copyright Notice */}
        <p className={styles.copyrightText}>
          © 2026 STERLING TECHNICAL GROUP. ALL RIGHTS RESERVED. PRECISION ENGINEERING.
        </p>

        {/* Right: Legal Links */}
        <div className={styles.legalLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
