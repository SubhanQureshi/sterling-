import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const DesignSystemOverview: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        padding: '0 0 3rem 0',
        color: '#111111',
      }}
    >
      {/* Top Banner Header */}
      <div
        style={{
          backgroundColor: '#F95C4B',
          color: '#FFFFFF',
          padding: '1.25rem 2.5rem',
          fontSize: '1.5rem',
          fontWeight: 700,
          letterSpacing: '0.02em',
        }}
      >
        Typography
      </div>

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '3rem 2rem' }}>
        {/* Section 1: Font */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '16rem 1fr',
            alignItems: 'center',
            padding: '2.5rem 0',
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333333' }}>
            Font
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div
              style={{
                fontSize: '4.5rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                lineHeight: 1,
              }}
            >
              ABC
            </div>
            <div style={{ fontSize: '0.875rem', color: '#666666' }}>
              Typeface for Sterling is Space Grotesk
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #F95C4B', opacity: 0.35, margin: '2rem 0' }} />

        {/* Section 2: Colors */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '16rem 1fr',
            alignItems: 'center',
            padding: '2.5rem 0',
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333333' }}>
            Colors
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Coral */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div
                style={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: '#F95C4B',
                  borderRadius: '0.25rem',
                }}
              />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111111' }}>
                  Coral
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666666' }}>#F95C4B</div>
              </div>
            </div>

            {/* Black */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div
                style={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: '#000000',
                  borderRadius: '0.25rem',
                }}
              />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111111' }}>
                  Black
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666666' }}>#000000</div>
              </div>
            </div>

            {/* Stone */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div
                style={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: '#E4DED2',
                  borderRadius: '0.25rem',
                  border: '1px solid #E0DAD0',
                }}
              />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111111' }}>
                  Stone
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666666' }}>#E4DED2</div>
              </div>
            </div>

            {/* Paper */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div
                style={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: '#F6F4F1',
                  borderRadius: '0.25rem',
                  border: '1px solid #EAE6DF',
                }}
              />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111111' }}>
                  Paper
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666666' }}>#F6F4F1</div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #F95C4B', opacity: 0.35, margin: '2rem 0' }} />

        {/* Section 3: Buttons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '16rem 1fr',
            alignItems: 'center',
            padding: '2.5rem 0',
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333333' }}>
            Buttons
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
            {/* Primary */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#555555' }}>Primary</div>
              <Button variant="primary">Get Your Estimate Now</Button>
            </div>

            {/* Secondary */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#555555' }}>Secondary</div>
              <Button variant="secondary">Get Your Estimate Now</Button>
            </div>

            {/* Hover */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#555555' }}>Hover</div>
              <Button variant="hoverState">Get Your Estimate Now</Button>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #F95C4B', opacity: 0.35, margin: '2rem 0' }} />

        {/* Section 4: Icons and more */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '16rem 1fr',
            alignItems: 'center',
            padding: '2.5rem 0',
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333333' }}>
            Icons and<br />more
          </div>
          <div style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.6, maxWidth: '32rem' }}>
            All icons are from ant design system and all other font sizes, weights, corner radii and text fields are to be taken from the design directly.
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof Button> = {
  title: 'Design System/Overview',
  component: DesignSystemOverview,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const FullDesignSystem: StoryObj = {};
