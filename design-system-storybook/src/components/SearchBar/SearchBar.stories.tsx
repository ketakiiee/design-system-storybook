import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/Search bar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Name** | \`Search bar\` |
| **Figma Node ID** | \`2105:2695\` (FRAME) |
| **Canvas Page** | \`Page 3\` (\`2105:2\`) |
| **Bound Variables** | Fills: \`var(--uedp-white)\`, Gap: \`--uedp-gap-2\` (\`8px\`) |
| **Border Radius** | \`--uedp-rounded-lg\` (\`8px\`) |
| **Focus State** | Primary outline: \`var(--uedp-blue-600)\` with subtle shadow glow |

---
`,
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Input placeholder message',
    },
    value: {
      control: 'text',
      description: 'Controlled input string',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled interactivity state',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show the quick-clear button',
    },
    onSearch: {
      action: 'searched',
    },
    onChange: {
      action: 'changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Search items, components, pages...',
    disabled: false,
    clearable: true,
  },
};

export const PreFilled: Story = {
  args: {
    placeholder: 'Search items...',
    value: 'Design system tokens',
    disabled: false,
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Search unavailable...',
    disabled: true,
  },
};
