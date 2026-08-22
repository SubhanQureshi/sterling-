'use client';

import React from 'react';
import {
  ThunderboltOutlined,
  HddOutlined,
  DribbbleOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import styles from './FeaturesSection.module.scss';

export const FeaturesSection: React.FC = () => {
  const servicesData = [
    {
      number: '01',
      title: 'Electrical Estimating & Takeoff',
      description:
        'Precise labor and material takeoffs for electrical systems on residential and commercial builds, sized right the first time so budgets hold up from bid to build.',
      icon: <ThunderboltOutlined />,
    },
    {
      number: '02',
      title: 'IT Project Cost Estimation',
      description:
        'Full labor and material cost breakdowns for IT infrastructure, giving developers and contractors a clear, dependable number to plan around.',
      icon: <HddOutlined />,
    },
    {
      number: '03',
      title: 'Design & Marketing Solutions',
      description:
        'Creative design paired with digital and online strategies, branding, campaigns, and content, built to put every project in front of the right buyers and investors.',
      icon: <DribbbleOutlined />,
    },
    {
      number: '04',
      title: 'Web Development & Support',
      description:
        'Custom websites and digital tools designed to represent every project as precisely and professionally as we estimate it, built to turn visitors into leads.',
      icon: <DesktopOutlined />,
    },
  ];

  return (
    <section id="services" className={styles.servicesWrapper}>
      <div className={styles.container}>
        {/* Header Area */}
        <div className={styles.headerArea}>
          <h2 className={styles.title}>What We Do</h2>
          <p className={styles.subtitle}>
            Four disciplines, one standard: get it exactly right, every time.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className={styles.gridWrapper}>
          {servicesData.map((service) => (
            <div key={service.number} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{service.icon}</div>
                <span className={styles.number}>{service.number}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
