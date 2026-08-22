import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const TypographyOverview: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        backgroundColor: '#FFFFFF',
        padding: '2.5rem',
        maxWidth: '56rem',
      }}
    >
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F95C4B', marginBottom: '0.5rem' }}>
          Typeface
        </h2>
        <div style={{ fontSize: '4.5rem', fontWeight: 700, letterSpacing: '0.05em', lineHeight: 1 }}>
          ABC
        </div>
        <p style={{ fontSize: '0.875rem', color: '#666666', marginTop: '0.5rem' }}>
          Space Grotesk — Proportional sans-serif typeface family
        </p>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #E5E5E5', margin: '2rem 0' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <Typography variant="h1" weight="bold">
            Heading 1 — 52px Bold
          </Typography>
        </div>
        <div>
          <Typography variant="h2" weight="bold" color="coral">
            Heading 2 — 44px Bold Coral (#F95C4B)
          </Typography>
        </div>
        <div>
          <Typography variant="h3" weight="bold">
            Heading 3 — 20px Bold
          </Typography>
        </div>
        <div>
          <Typography variant="body" weight="regular">
            Body Text — 16px Regular. All copy and paragraph text across the website uses Space Grotesk.
          </Typography>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography Spec',
  component: TypographyOverview,
};

export default meta;

export const TypographySpec: StoryObj = {};
