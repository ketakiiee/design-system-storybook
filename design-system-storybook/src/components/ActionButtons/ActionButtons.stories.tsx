import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './ActionButtons';

const meta: Meta<typeof ActionButton> = {
  title: 'Components/Action Buttons (Button 01-05)',
  component: ActionButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Names** | \`Button 01\`, \`Button 02\`, \`Button 03\`, \`Button 04\`, \`Button 05\` |
| **Figma Node IDs** | \`2105:3181\`, \`2105:3183\`, \`2105:3185\`, \`2105:3187\`, \`2105:3189\` |
| **Canvas Page** | \`Page 3\` (\`2105:2\`) |
| **Border Radius** | \`--uedp-rounded-md\` (\`6px\`) |
| **Spacing Gap** | \`--uedp-gap-2\` (\`8px\`) |

---
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['01', '02', '03', '04', '05'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Button01: Story = {
  args: { variant: '01' },
};

export const Button02: Story = {
  args: { variant: '02' },
};

export const Button03: Story = {
  args: { variant: '03' },
};

export const Button04: Story = {
  args: { variant: '04' },
};

export const Button05: Story = {
  args: { variant: '05' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <ActionButton variant="01" />
      <ActionButton variant="02" />
      <ActionButton variant="03" />
      <ActionButton variant="04" />
      <ActionButton variant="05" />
    </div>
  ),
};
