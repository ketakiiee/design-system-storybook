import type { Meta, StoryObj } from '@storybook/react';
import { AutoLayoutButton } from './AutoLayoutButton';

const meta: Meta<typeof AutoLayoutButton> = {
  title: 'Components/Auto layout button',
  component: AutoLayoutButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Name** | \`Auto layout button\` |
| **Figma Node ID** | \`2105:3179\` (FRAME) |
| **Canvas Page** | \`Page 3\` (\`2105:2\`) |
| **Layout Properties** | Flex auto layout, Gap: \`--uedp-gap-2\` (\`8px\`) |
| **Border Radius** | \`--uedp-rounded-lg\` (\`8px\`) |

---
`,
      },
    },
  },
  argTypes: {
    text: { control: 'text' },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    icon: {
      control: 'select',
      options: ['arrow', 'plus', 'check', 'none'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof AutoLayoutButton>;

export const Default: Story = {
  args: {
    text: 'Continue with Auto Layout',
    icon: 'arrow',
    size: 'md',
  },
};

export const AddAction: Story = {
  args: {
    text: 'Create New Layer',
    icon: 'plus',
    size: 'md',
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <AutoLayoutButton text="Small" size="sm" icon="arrow" />
      <AutoLayoutButton text="Medium" size="md" icon="arrow" />
      <AutoLayoutButton text="Large" size="lg" icon="arrow" />
    </div>
  ),
};
