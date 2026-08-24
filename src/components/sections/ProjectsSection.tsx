'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ProjectsSection.module.scss';

export const ProjectsSection: React.FC = () => {
  const stats = [
    { value: '229 Units', label: 'UNITS' },
    { value: '19 Floors', label: 'FLOORS' },
    { value: '204,651 Sq Ft', label: 'SQ FT' },
    { value: 'Mixed', label: 'SENIOR LIVING + COMMERCIAL' },
  ];

  return (
    <section id="projects" className={styles.projectsWrapper}>
      <div className={styles.container}>
        {/* Header Area */}
        <div className={styles.headerArea}>
          <h2 className={styles.title}>Sol on Park</h2>
          <p className={styles.location}>CLAREMONT, BRONX, NEW YORK</p>
          <p className={`${styles.description} ${styles.desktopDescription}`}>
            Sol on Park is a 19-story senior housing design project in the
            Claremont section of the Bronx, New York, combining ground-floor
            commercial space with 229 units of senior housing above the third
            floor. Sterling delivered electrical estimating and takeoff and IT
            project cost estimation, labor and material, for the full building,
            supporting a project built for healthy, sustainable, affordable
            living without compromise.
          </p>
        </div>

        {/* Featured Project Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/projects.png"
            alt="Sol on Park - Claremont, Bronx, New York"
            width={1152}
            height={608}
            priority
          />
        </div>

        {/* Project Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.value} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Mobile Description Paragraph (Positioned below stats grid on mobile) */}
        <p className={styles.mobileDescription}>
          Sol on Park is a 19-story senior housing design project in the
          Claremont section of the Bronx, New York, combining ground-floor
          commercial space with 229 units of senior housing above the third
          floor. Sterling delivered electrical estimating and takeoff and IT
          project cost estimation, labor and material, for the full building,
          supporting a project built for healthy, sustainable, affordable
          living without compromise.
        </p>

        {/* Read More Link Button to Figma Prototype */}
        <a
          href="https://www.figma.com/proto/WRdSa6LmVkO1F0Zmuv3mNU/Sterling?node-id=259-2&t=B6kn82nuBJ3BgBjc-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.readMoreBtn}
        >
          READ MORE
        </a>
      </div>
    </section>
  );
};
