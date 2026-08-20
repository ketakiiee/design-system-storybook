import type { Meta, StoryObj } from '@storybook/react';
import { TodoList } from './TodoList';

const meta: Meta<typeof TodoList> = {
  title: 'Components/Todo List',
  component: TodoList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Name** | \`Todo List\` |
| **Figma Node ID** | \`2105:2654\` (FRAME) |
| **Canvas Page** | \`Page 3\` (\`2105:2\`) |
| **Bound Variables** | Fills: \`var(--uedp-white)\`, Strokes: \`var(--uedp-slate-200)\` |
| **Border Radius** | \`--uedp-rounded-xl\` (\`12px\`) |
| **Padding** | \`--uedp-padding-5\` (\`20px\`) |

---
`,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Header title text',
    },
    onToggleItem: {
      action: 'toggled',
    },
    onDeleteItem: {
      action: 'deleted',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const Default: Story = {
  args: {
    title: 'Design System Tasks',
  },
};

export const CustomItems: Story = {
  args: {
    title: 'Sprint Backlog',
    items: [
      { id: '1', title: 'Implement Storybook interaction tests', completed: false, tag: 'Testing' },
      { id: '2', title: 'Verify responsive breakpoint tokens', completed: true, tag: 'Tokens' },
      { id: '3', title: 'Setup GitHub Actions CI deployment', completed: false, tag: 'DevOps' },
    ],
  },
};
