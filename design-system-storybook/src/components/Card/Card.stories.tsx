import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Name** | \`Card\` |
| **Figma Node ID** | \`2105:3053\` (FRAME) |
| **Canvas Page** | \`Page 3\` (\`2105:2\`) |
| **Bound Variables** | Fills: \`var(--uedp-white)\`, Strokes: \`var(--uedp-slate-200)\` |
| **Border Radius** | \`--uedp-rounded-xl\` (\`12px\`) |
| **Padding** | \`--uedp-padding-6\` (\`24px\`) |

---
`,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    status: {
      control: 'select',
      options: ['Active', 'Draft', 'Archived', 'Beta'],
    },
    variant: {
      control: 'radio',
      options: ['elevated', 'outlined', 'flat'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    title: 'Design Token Integration',
    subtitle: 'System Architecture',
    description: 'Tokens are extracted directly from Figma JSON variables ensuring synchronous updates between design and code.',
    status: 'Active',
    variant: 'elevated',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Semantic Variable Aliasing',
    subtitle: 'Design System Rules',
    description: 'Zero invented CSS variables. Every property is bound to verified token IDs or preserved hardcoded raw values.',
    status: 'Beta',
    variant: 'outlined',
  },
};

export const Flat: Story = {
  args: {
    title: 'Automated CI/CD Deployment',
    subtitle: 'Vercel & Storybook',
    description: 'Preconfigured static routing for high-performance single page app hosting with Google Analytics 4 route listeners.',
    status: 'Draft',
    variant: 'flat',
  },
};
