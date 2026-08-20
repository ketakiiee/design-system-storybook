import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications

| Specification | Details |
| :--- | :--- |
| **Preserved Layer Name** | \`Button\` |
| **Figma Node ID** | \`2170:850\` (COMPONENT_SET) |
| **Canvas Page** | \`Page 4\` (\`2135:2\`) |
| **Variants** | \`state=Default\`, \`state=Variant2\` |
| **Component Properties** | \`label#2181:3\` (TEXT, default: "Button"), \`state\` (VARIANT) |
| **Bound Variables** | Fills: \`--uedp-blue-600\` (Default), \`--uedp-slate-100\` (Variant2) |
| **Border Radius** | \`--uedp-rounded-lg\` (\`8px\`) |
| **Typography** | \`Inter\`, 14px / 500 weight |

---
`,
      },
    },
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['Default', 'Variant2'],
      description: 'Figma variant state property',
    },
    label: {
      control: 'text',
      description: 'Figma text property label',
    },
    disabled: {
      control: 'boolean',
      description: 'Interactive disabled state',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    state: 'Default',
    label: 'Button',
    disabled: false,
  },
};

export const Variant2: Story = {
  args: {
    state: 'Variant2',
    label: 'Secondary Action',
    disabled: false,
  },
};

export const DisabledState: Story = {
  args: {
    state: 'Default',
    label: 'Disabled Button',
    disabled: true,
  },
};

export const VariantMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button state="Default" label="Primary Default" />
      <Button state="Variant2" label="Secondary Variant" />
      <Button state="Default" label="Disabled Primary" disabled />
      <Button state="Variant2" label="Disabled Secondary" disabled />
    </div>
  ),
};
