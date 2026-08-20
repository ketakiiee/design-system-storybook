import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Color Palette',
  parameters: {
    docs: {
      description: {
        component: `
# Color Palette Tokens

Extracted directly from \`base-palette-tokens.json\` matching \`com.figma.variableId\` to CSS variables with \`--uedp-*\` naming.

### Token Specs Table
| Color Family | Shade Range | CSS Variable Pattern | Example |
| :--- | :--- | :--- | :--- |
| **Base** | \`black\`, \`white\` | \`--uedp-[shade]\` | \`var(--uedp-black)\` |
| **Slate / Gray / Zinc / Neutral / Stone** | \`50\` - \`950\` | \`--uedp-[family]-[shade]\` | \`var(--uedp-slate-900)\` |
| **Red / Orange / Amber / Yellow** | \`50\` - \`950\` | \`--uedp-[family]-[shade]\` | \`var(--uedp-red-600)\` |
| **Lime / Green / Emerald / Teal** | \`50\` - \`950\` | \`--uedp-[family]-[shade]\` | \`var(--uedp-emerald-500)\` |
| **Cyan / Sky / Blue / Indigo** | \`50\` - \`950\` | \`--uedp-[family]-[shade]\` | \`var(--uedp-blue-600)\` |
| **Violet / Purple / Fuchsia / Pink / Rose** | \`50\` - \`950\` | \`--uedp-[family]-[shade]\` | \`var(--uedp-purple-600)\` |
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const PALETTES: Record<string, { shade: string; hex: string; cssVar: string }[]> = {
  base: [
    { shade: 'black', hex: '#000000', cssVar: '--uedp-black' },
    { shade: 'white', hex: '#FFFFFF', cssVar: '--uedp-white' },
  ],
  slate: [
    { shade: '50', hex: '#F8FAFC', cssVar: '--uedp-slate-50' },
    { shade: '100', hex: '#F1F5F9', cssVar: '--uedp-slate-100' },
    { shade: '200', hex: '#E2E8F0', cssVar: '--uedp-slate-200' },
    { shade: '300', hex: '#CBD5E1', cssVar: '--uedp-slate-300' },
    { shade: '400', hex: '#94A3B8', cssVar: '--uedp-slate-400' },
    { shade: '500', hex: '#64748B', cssVar: '--uedp-slate-500' },
    { shade: '600', hex: '#475569', cssVar: '--uedp-slate-600' },
    { shade: '700', hex: '#334155', cssVar: '--uedp-slate-700' },
    { shade: '800', hex: '#1E293B', cssVar: '--uedp-slate-800' },
    { shade: '900', hex: '#0F172A', cssVar: '--uedp-slate-900' },
    { shade: '950', hex: '#020617', cssVar: '--uedp-slate-950' },
  ],
  blue: [
    { shade: '50', hex: '#EFF6FF', cssVar: '--uedp-blue-50' },
    { shade: '100', hex: '#DBEAFE', cssVar: '--uedp-blue-100' },
    { shade: '200', hex: '#BFDBFE', cssVar: '--uedp-blue-200' },
    { shade: '300', hex: '#93C5FD', cssVar: '--uedp-blue-300' },
    { shade: '400', hex: '#60A5FA', cssVar: '--uedp-blue-400' },
    { shade: '500', hex: '#3B82F6', cssVar: '--uedp-blue-500' },
    { shade: '600', hex: '#2563EB', cssVar: '--uedp-blue-600' },
    { shade: '700', hex: '#1D4ED8', cssVar: '--uedp-blue-700' },
    { shade: '800', hex: '#1E40AF', cssVar: '--uedp-blue-800' },
    { shade: '900', hex: '#1E3A8A', cssVar: '--uedp-blue-900' },
    { shade: '950', hex: '#172554', cssVar: '--uedp-blue-950' },
  ],
  emerald: [
    { shade: '50', hex: '#ECFDF5', cssVar: '--uedp-emerald-50' },
    { shade: '100', hex: '#D1FAE5', cssVar: '--uedp-emerald-100' },
    { shade: '200', hex: '#A7F3D0', cssVar: '--uedp-emerald-200' },
    { shade: '300', hex: '#6EE7B7', cssVar: '--uedp-emerald-300' },
    { shade: '400', hex: '#34D399', cssVar: '--uedp-emerald-400' },
    { shade: '500', hex: '#10B981', cssVar: '--uedp-emerald-500' },
    { shade: '600', hex: '#059669', cssVar: '--uedp-emerald-600' },
    { shade: '700', hex: '#047857', cssVar: '--uedp-emerald-700' },
    { shade: '800', hex: '#065F46', cssVar: '--uedp-emerald-800' },
    { shade: '900', hex: '#064E3B', cssVar: '--uedp-emerald-900' },
    { shade: '950', hex: '#022C22', cssVar: '--uedp-emerald-950' },
  ],
  amber: [
    { shade: '50', hex: '#FFFBEB', cssVar: '--uedp-amber-50' },
    { shade: '100', hex: '#FEF3C7', cssVar: '--uedp-amber-100' },
    { shade: '200', hex: '#FDE68A', cssVar: '--uedp-amber-200' },
    { shade: '300', hex: '#FCD34D', cssVar: '--uedp-amber-300' },
    { shade: '400', hex: '#FBBF24', cssVar: '--uedp-amber-400' },
    { shade: '500', hex: '#F59E0B', cssVar: '--uedp-amber-500' },
    { shade: '600', hex: '#D97706', cssVar: '--uedp-amber-600' },
    { shade: '700', hex: '#B45309', cssVar: '--uedp-amber-700' },
    { shade: '800', hex: '#92400E', cssVar: '--uedp-amber-800' },
    { shade: '900', hex: '#78350F', cssVar: '--uedp-amber-900' },
    { shade: '950', hex: '#451A03', cssVar: '--uedp-amber-950' },
  ],
  red: [
    { shade: '50', hex: '#FEF2F2', cssVar: '--uedp-red-50' },
    { shade: '100', hex: '#FEE2E2', cssVar: '--uedp-red-100' },
    { shade: '200', hex: '#FECACA', cssVar: '--uedp-red-200' },
    { shade: '300', hex: '#FCA5A5', cssVar: '--uedp-red-300' },
    { shade: '400', hex: '#F87171', cssVar: '--uedp-red-400' },
    { shade: '500', hex: '#EF4444', cssVar: '--uedp-red-500' },
    { shade: '600', hex: '#DC2626', cssVar: '--uedp-red-600' },
    { shade: '700', hex: '#B91C1C', cssVar: '--uedp-red-700' },
    { shade: '800', hex: '#991B1B', cssVar: '--uedp-red-800' },
    { shade: '900', hex: '#7F1D1D', cssVar: '--uedp-red-900' },
    { shade: '950', hex: '#450A0A', cssVar: '--uedp-red-950' },
  ],
  violet: [
    { shade: '50', hex: '#F5F3FF', cssVar: '--uedp-violet-50' },
    { shade: '100', hex: '#EDE9FE', cssVar: '--uedp-violet-100' },
    { shade: '200', hex: '#DDD6FE', cssVar: '--uedp-violet-200' },
    { shade: '300', hex: '#C4B5FD', cssVar: '--uedp-violet-300' },
    { shade: '400', hex: '#A78BFA', cssVar: '--uedp-violet-400' },
    { shade: '500', hex: '#8B5CF6', cssVar: '--uedp-violet-500' },
    { shade: '600', hex: '#7C3AED', cssVar: '--uedp-violet-600' },
    { shade: '700', hex: '#6D28D9', cssVar: '--uedp-violet-700' },
    { shade: '800', hex: '#5B21B6', cssVar: '--uedp-violet-800' },
    { shade: '900', hex: '#4C1D95', cssVar: '--uedp-violet-900' },
    { shade: '950', hex: '#2E1065', cssVar: '--uedp-violet-950' },
  ],
};

export const BasePaletteGallery: Story = {
  render: () => {
    const [copiedVar, setCopiedVar] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(`var(${text})`);
      setCopiedVar(text);
      setTimeout(() => setCopiedVar(null), 1800);
    };

    return (
      <div style={{ padding: '24px', fontFamily: 'Inter, sans-serif', maxWidth: '1100px' }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--uedp-slate-900)', marginBottom: '8px' }}>
            Base Palette Swatch Gallery
          </h2>
          <p style={{ color: 'var(--uedp-slate-600)', fontSize: '14px' }}>
            Click any swatch to copy its CSS custom property (e.g. <code>var(--uedp-slate-900)</code>).
          </p>
          {copiedVar && (
            <div style={{
              display: 'inline-block',
              marginTop: '8px',
              padding: '4px 12px',
              backgroundColor: 'var(--uedp-emerald-100)',
              color: 'var(--uedp-emerald-800)',
              borderRadius: 'var(--uedp-rounded)',
              fontSize: '13px',
              fontWeight: 500,
            }}>
              Copied <code>var({copiedVar})</code>!
            </div>
          )}
        </div>

        {Object.entries(PALETTES).map(([family, shades]) => (
          <div key={family} style={{ marginBottom: '32px' }}>
            <h3 style={{ textTransform: 'capitalize', fontSize: '16px', fontWeight: 600, color: 'var(--uedp-slate-800)', marginBottom: '12px' }}>
              {family}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '12px' }}>
              {shades.map(({ shade, hex, cssVar }) => {
                const isDark = parseInt(shade, 10) >= 500 || shade === 'black';
                return (
                  <div
                    key={shade}
                    onClick={() => copyToClipboard(cssVar)}
                    style={{
                      cursor: 'pointer',
                      borderRadius: 'var(--uedp-rounded-lg)',
                      overflow: 'hidden',
                      border: '1px solid var(--uedp-slate-200)',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                    }}
                  >
                    <div
                      style={{
                        height: '64px',
                        backgroundColor: `var(${cssVar})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isDark ? '#FFFFFF' : '#0F172A',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      {shade}
                    </div>
                    <div style={{ padding: '8px 10px', backgroundColor: '#FFFFFF', fontSize: '11px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--uedp-slate-800)' }}>{hex}</div>
                      <div style={{ color: 'var(--uedp-slate-500)', fontSize: '10px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {cssVar}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
