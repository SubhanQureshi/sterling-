'use client';

import React from 'react';
import styles from './TestimonialsSection.module.scss';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        '"Sterling\'s electrical estimates came in exact, no surprises mid-build, no change orders we hadn\'t already planned for. That kind of accuracy is rare, and it\'s why we keep coming back to them."',
      author: 'David Renfrew',
      role: 'Development Director, Ashford Bridge',
    },
    {
      quote:
        '"We\'ve worked with a lot of estimation firms, but Sterling treats a 20-unit job with the same care as a 200-unit high-rise. That consistency is exactly what we needed on a project with this many moving parts."',
      author: 'Sana Raza',
      role: 'Principal Architect, Raza Architects',
    },
    {
      quote:
        '"Sterling understood what our senior housing project needed from day one — precise numbers, yes, but also a real sense of who the building was for. It showed in every part of the estimate."',
      author: 'Marcus Ibe',
      role: 'Project Manager, Brightline Residential',
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonialsWrapper}>
      <div className={styles.container}>
        {/* Title */}
        <h2 className={styles.title}>What Our Clients Say</h2>

        {/* 3 Testimonials Grid */}
        <div className={styles.gridWrapper}>
          {testimonials.map((item) => (
            <div key={item.author} className={styles.card}>
              <p className={styles.quoteText}>{item.quote}</p>
              <div className={styles.authorMeta}>
                <h3 className={styles.authorName}>{item.author}</h3>
                <p className={styles.authorRole}>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
