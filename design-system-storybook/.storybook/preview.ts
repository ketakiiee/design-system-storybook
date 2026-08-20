import type { Preview } from '@storybook/react';
import '../src/styles/figma-tokens.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'surface', value: '#F8FAFC' },
        { name: 'dark', value: '#0F172A' },
      ],
    },
    docs: {
      toc: true,
    },
  },
  tags: ['autodocs'],
};

export default preview;
