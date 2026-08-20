import type { Meta, StoryObj } from '@storybook/react';
import { IPhoneScreen } from './IPhoneScreens';

const meta: Meta<typeof IPhoneScreen> = {
  title: 'Components/iPhone 16 Screens',
  component: IPhoneScreen,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Names** | \`iPhone 16 - 1\`, \`iPhone 16 - 2\`, \`iPhone 16 - 3\` |
| **Figma Node IDs** | \`2169:818\`, \`2169:819\`, \`2169:820\` |
| **Canvas Page** | \`Page 4\` (\`2135:2\`) |
| **Sub-Components** | Nested \`Button\` (\`2169:831\`) with bound variables and \`Icon/house\` (\`2182:841\`) |
| **Dimensions** | 320px x 640px mobile viewport representation |

---
`,
      },
    },
  },
  argTypes: {
    screen: {
      control: 'radio',
      options: ['iPhone 16 - 1', 'iPhone 16 - 2', 'iPhone 16 - 3'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    primaryButtonLabel: { control: 'text' },
    secondaryButtonLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof IPhoneScreen>;

export const Screen1: Story = {
  args: {
    screen: 'iPhone 16 - 1',
    primaryButtonLabel: 'Start AI Ride',
    secondaryButtonLabel: 'View Preferences',
  },
};

export const Screen2: Story = {
  args: {
    screen: 'iPhone 16 - 2',
    primaryButtonLabel: 'Enable Safety Guardian',
  },
};

export const Screen3: Story = {
  args: {
    screen: 'iPhone 16 - 3',
    primaryButtonLabel: 'Setup Emergency Contacts',
  },
};

export const AllScreensGallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <IPhoneScreen screen="iPhone 16 - 1" />
      <IPhoneScreen screen="iPhone 16 - 2" />
      <IPhoneScreen screen="iPhone 16 - 3" />
    </div>
  ),
};
