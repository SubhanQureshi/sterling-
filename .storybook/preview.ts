import type { Preview } from '@storybook/react';
import '../src/app/globals.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Paper (Sterling)',
      values: [
        { name: 'Paper (Sterling)', value: '#F6F4F1' },
        { name: 'Stone (Sterling)', value: '#E4DED2' },
        { name: 'White', value: '#FFFFFF' },
        { name: 'Black', value: '#000000' },
      ],
    },
  },
};

export default preview;
