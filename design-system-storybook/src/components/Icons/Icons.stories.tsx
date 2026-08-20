import type { Meta, StoryObj } from '@storybook/react';
import { FigmaIcon, FigmaIconName } from './Icons';

const meta: Meta<typeof FigmaIcon> = {
  title: 'Components/Icons',
  component: FigmaIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Names** | \`lucide/share\`, \`lucide/cloud-download\`, \`Icon/house\`, \`Icon/Comment\`, \`Icon/Like\`, \`Icon/Share\` |
| **Figma Node IDs** | \`2182:846\`, \`2182:852\`, \`2182:841\`, \`2105:3347\`, \`2105:3351\`, \`2105:3353\` |
| **Canvas Pages** | \`Page 4\` & \`Page 3\` |
| **Rendering** | Scalable vector paths styled with \`currentColor\` or explicit design tokens |

---
`,
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'lucide/share',
        'lucide/cloud-download',
        'Icon/house',
        'Icon/Comment',
        'Icon/Like',
        'Icon/Share',
      ],
    },
    size: { control: { type: 'range', min: 16, max: 64, step: 4 } },
    color: { control: 'color' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof FigmaIcon>;

export const ShareIcon: Story = {
  args: {
    name: 'lucide/share',
    size: 28,
  },
};

export const CloudDownloadIcon: Story = {
  args: {
    name: 'lucide/cloud-download',
    size: 28,
  },
};

export const HouseIcon: Story = {
  args: {
    name: 'Icon/house',
    size: 28,
  },
};

const ALL_ICONS: FigmaIconName[] = [
  'lucide/share',
  'lucide/cloud-download',
  'Icon/house',
  'Icon/Comment',
  'Icon/Like',
  'Icon/Share',
];

export const IconGallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
      {ALL_ICONS.map(iconName => (
        <div
          key={iconName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            padding: '20px 12px',
            border: '1px solid var(--uedp-slate-200)',
            borderRadius: 'var(--uedp-rounded-lg)',
            backgroundColor: '#FFFFFF',
          }}
        >
          <FigmaIcon name={iconName} size={32} color="var(--uedp-blue-600)" />
          <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--uedp-slate-700)', textAlign: 'center' }}>
            {iconName}
          </span>
        </div>
      ))}
    </div>
  ),
};
