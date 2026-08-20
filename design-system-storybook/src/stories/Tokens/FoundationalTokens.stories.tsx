import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Foundational Tokens',
  parameters: {
    docs: {
      description: {
        component: `
# Foundational Design Tokens

Extracted from \`foundational-tokens.json\` matching \`com.figma.variableId\` to CSS variables with \`--uedp-*\` naming.

### Token Categories
- **Border Radius**: \`--uedp-rounded-none\` to \`--uedp-rounded-full\`
- **Gap / Spacing**: \`--uedp-gap-0\` to \`--uedp-gap-64\`
- **Padding**: \`--uedp-padding-0\` to \`--uedp-padding-12\` (\`--uedp-p-0\` to \`--uedp-p-12\`)
- **Opacity**: \`--uedp-opacity-0\` to \`--uedp-opacity-100\`
- **Max Width**: \`--uedp-max-w-xs\` to \`--uedp-max-w-7xl\`
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const RADII = [
  { name: 'rounded-none', value: '0px', varName: '--uedp-rounded-none' },
  { name: 'rounded-sm', value: '2px', varName: '--uedp-rounded-sm' },
  { name: 'rounded', value: '4px', varName: '--uedp-rounded' },
  { name: 'rounded-md', value: '6px', varName: '--uedp-rounded-md' },
  { name: 'rounded-lg', value: '8px', varName: '--uedp-rounded-lg' },
  { name: 'rounded-xl', value: '12px', varName: '--uedp-rounded-xl' },
  { name: 'rounded-2xl', value: '16px', varName: '--uedp-rounded-2xl' },
  { name: 'rounded-3xl', value: '24px', varName: '--uedp-rounded-3xl' },
  { name: 'rounded-full', value: '9999px', varName: '--uedp-rounded-full' },
];

const GAPS = [
  { name: 'gap-1', value: '4px', varName: '--uedp-gap-1' },
  { name: 'gap-2', value: '8px', varName: '--uedp-gap-2' },
  { name: 'gap-3', value: '12px', varName: '--uedp-gap-3' },
  { name: 'gap-4', value: '16px', varName: '--uedp-gap-4' },
  { name: 'gap-6', value: '24px', varName: '--uedp-gap-6' },
  { name: 'gap-8', value: '32px', varName: '--uedp-gap-8' },
  { name: 'gap-12', value: '48px', varName: '--uedp-gap-12' },
  { name: 'gap-16', value: '64px', varName: '--uedp-gap-16' },
];

const PADDINGS = [
  { name: 'p-1', value: '4px', varName: '--uedp-padding-1' },
  { name: 'p-2', value: '8px', varName: '--uedp-padding-2' },
  { name: 'p-4', value: '16px', varName: '--uedp-padding-4' },
  { name: 'p-6', value: '24px', varName: '--uedp-padding-6' },
  { name: 'p-8', value: '32px', varName: '--uedp-padding-8' },
  { name: 'p-12', value: '48px', varName: '--uedp-padding-12' },
];

export const BorderRadiusGallery: Story = {
  render: () => (
    <div style={{ padding: '24px', fontFamily: 'Inter, sans-serif', maxWidth: '900px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--uedp-slate-900)', marginBottom: '8px' }}>
        Border Radius Scale
      </h2>
      <p style={{ color: 'var(--uedp-slate-600)', fontSize: '14px', marginBottom: '20px' }}>
        Visual preview of foundational corner radius variables.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
        {RADII.map(r => (
          <div
            key={r.name}
            style={{
              padding: '16px',
              border: '1px solid var(--uedp-slate-200)',
              borderRadius: 'var(--uedp-rounded-lg)',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--uedp-blue-600)',
                borderRadius: `var(${r.varName})`,
                boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--uedp-slate-800)' }}>{r.name}</div>
              <div style={{ fontSize: '12px', color: 'var(--uedp-slate-500)' }}>{r.value}</div>
              <code style={{ fontSize: '11px', color: 'var(--uedp-blue-600)' }}>{r.varName}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const SpacingAndGapsGallery: Story = {
  render: () => (
    <div style={{ padding: '24px', fontFamily: 'Inter, sans-serif', maxWidth: '900px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--uedp-slate-900)', marginBottom: '8px' }}>
        Gap & Spacing Scale
      </h2>
      <p style={{ color: 'var(--uedp-slate-600)', fontSize: '14px', marginBottom: '20px' }}>
        Visual preview of flex/grid gap tokens.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {GAPS.map(g => (
          <div
            key={g.name}
            style={{
              padding: '12px 16px',
              border: '1px solid var(--uedp-slate-200)',
              borderRadius: 'var(--uedp-rounded-md)',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ minWidth: '160px' }}>
              <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--uedp-slate-800)' }}>{g.name}</span>
              <span style={{ marginLeft: '8px', fontSize: '13px', color: 'var(--uedp-slate-500)' }}>({g.value})</span>
              <div style={{ fontSize: '11px', color: 'var(--uedp-blue-600)' }}><code>{g.varName}</code></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: `var(${g.varName})`, backgroundColor: 'var(--uedp-slate-100)', padding: '8px', borderRadius: 'var(--uedp-rounded)' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--uedp-blue-600)', borderRadius: 'var(--uedp-rounded)' }} />
              <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--uedp-blue-600)', borderRadius: 'var(--uedp-rounded)' }} />
              <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--uedp-blue-600)', borderRadius: 'var(--uedp-rounded)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const PaddingGallery: Story = {
  render: () => (
    <div style={{ padding: '24px', fontFamily: 'Inter, sans-serif', maxWidth: '900px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--uedp-slate-900)', marginBottom: '8px' }}>
        Padding Scale
      </h2>
      <p style={{ color: 'var(--uedp-slate-600)', fontSize: '14px', marginBottom: '20px' }}>
        Visual preview of padding tokens with nested content bounding boxes.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
        {PADDINGS.map(p => (
          <div
            key={p.name}
            style={{
              border: '1px solid var(--uedp-slate-200)',
              borderRadius: 'var(--uedp-rounded-lg)',
              backgroundColor: '#FFFFFF',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: `var(${p.varName})`, backgroundColor: 'var(--uedp-amber-100)' }}>
              <div
                style={{
                  backgroundColor: 'var(--uedp-amber-500)',
                  color: '#FFFFFF',
                  padding: '12px',
                  borderRadius: 'var(--uedp-rounded)',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: '13px',
                }}
              >
                Content
              </div>
            </div>
            <div style={{ padding: '10px 14px', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--uedp-slate-100)' }}>
              <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--uedp-slate-800)' }}>{p.name} ({p.value})</div>
              <code style={{ fontSize: '11px', color: 'var(--uedp-blue-600)' }}>{p.varName}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
