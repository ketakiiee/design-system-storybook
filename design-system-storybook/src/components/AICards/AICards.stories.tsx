import type { Meta, StoryObj } from '@storybook/react';
import { AICard } from './AICards';

const meta: Meta<typeof AICard> = {
  title: 'Components/AI Capability Cards',
  component: AICard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Names** | \`AI RIDE ASSISTANCE\`, \`AI SAFETY GUARDIAN\`, \`AI EMERGENCY COMPANION\` |
| **Figma Node IDs** | \`2061:382\`, \`2061:388\`, \`2061:389\` |
| **Canvas Page** | \`AI Integration\` (\`2040:2\`) |
| **Border Radius** | \`--uedp-rounded-xl\` (\`12px\`) |
| **Padding** | \`--uedp-padding-6\` (\`24px\`) |

---
`,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['AI RIDE ASSISTANCE', 'AI SAFETY GUARDIAN', 'AI EMERGENCY COMPANION'],
    },
    title: { control: 'text' },
    badge: { control: 'text' },
    active: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof AICard>;

export const RideAssistance: Story = {
  args: {
    type: 'AI RIDE ASSISTANCE',
  },
};

export const SafetyGuardian: Story = {
  args: {
    type: 'AI SAFETY GUARDIAN',
  },
};

export const EmergencyCompanion: Story = {
  args: {
    type: 'AI EMERGENCY COMPANION',
  },
};

export const AllAICardsGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      <AICard type="AI RIDE ASSISTANCE" />
      <AICard type="AI SAFETY GUARDIAN" />
      <AICard type="AI EMERGENCY COMPANION" />
    </div>
  ),
};
