import type { Meta, StoryObj } from '@storybook/react';
import { HeroLanding } from './HeroLanding';

const meta: Meta<typeof HeroLanding> = {
  title: 'Components/Hero Landing (Html → Body)',
  component: HeroLanding,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Name** | \`Html → Body\` (enclosing \`Nav\`, \`Container\`, \`Section\`) |
| **Figma Node ID** | \`2117:965\` (FRAME) |
| **Canvas Page** | \`AI Integration\` (\`2040:2\`) |
| **Nested Frames** | \`Background\` (\`2117:966\`), \`Section\` (\`2117:981\`), \`Nav\` (\`2117:1010\`) |
| **Typography** | Inter 40px/800 headline, 17px subheadline |

---
`,
      },
    },
  },
  argTypes: {
    brandTitle: { control: 'text' },
    headline: { control: 'text' },
    subheadline: { control: 'text' },
    primaryCta: { control: 'text' },
    secondaryCta: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroLanding>;

export const Default: Story = {
  args: {
    brandTitle: 'Uber AI+',
    headline: 'Next-Generation Autonomous Ride Intelligence',
    subheadline: 'Experience continuous protection, predictive route matching, and real-time safety companion powered by contextual AI.',
    primaryCta: 'Experience AI Ride',
    secondaryCta: 'Explore Features',
  },
};
