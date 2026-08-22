'use client';

import React from 'react';
import {
  AimOutlined,
  SyncOutlined,
  DeploymentUnitOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';
import styles from './VisionSection.module.scss';

export const VisionSection: React.FC = () => {
  const visionData = [
    {
      title: 'Accuracy',
      description:
        'Every estimate is exact, so budgets hold and projects move forward without surprises.',
      icon: <AimOutlined />,
    },
    {
      title: 'Consistency',
      description:
        'The same standard of care and precision on every project, high-rise or low-rise.',
      icon: <SyncOutlined />,
    },
    {
      title: 'Sustainability',
      description:
        'Estimation and design work that supports healthy, environmentally responsible buildings from the ground up.',
      icon: <DeploymentUnitOutlined />,
    },
    {
      title: 'Affordability',
      description:
        'Reliable technical work delivered at a fair cost, so quality is never out of reach.',
      icon: <DollarCircleOutlined />,
    },
  ];

  return (
    <section id="vision" className={styles.visionWrapper}>
      <div className={styles.container}>
        {/* Title */}
        <h2 className={styles.title}>Our Vision</h2>

        {/* 4 Pillars Grid */}
        <div className={styles.gridWrapper}>
          {visionData.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
