import type { Meta, StoryObj } from '@storybook/react';
import { KeyboardShortcuts } from './KeyboardShortcuts';

const meta: Meta<typeof KeyboardShortcuts> = {
  title: 'Components/Keyboard shortcuts',
  component: KeyboardShortcuts,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Name** | \`Keyboard shortcuts\` / \`Shortcuts\` |
| **Figma Node ID** | \`2105:3494\` (FRAME) |
| **Canvas Page** | \`Page 3\` (\`2105:2\`) |
| **Border Radius** | \`--uedp-rounded-xl\` (\`12px\`) |
| **Key Styling** | KBD elements styled with \`--uedp-slate-100\` and 2px bottom border |

---
`,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof KeyboardShortcuts>;

export const Default: Story = {
  args: {
    title: 'Figma Auto Layout Shortcuts',
  },
};
