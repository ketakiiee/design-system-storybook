import React from 'react';
import './ActionButtons.css';

export interface ActionButtonProps {
  /** Preserved button identifier: '01' | '02' | '03' | '04' | '05' */
  variant?: '01' | '02' | '03' | '04' | '05';
  /** Button label */
  label?: string;
  /** Active / selected state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Click event */
  onClick?: () => void;
}

/**
 * **Action Buttons (Button 01 - Button 05)**
 * 
 * Preserved Layer Names: `Button 01`, `Button 02`, `Button 03`, `Button 04`, `Button 05`
 * Figma Node IDs: `2105:3181` to `2105:3189` (FRAMES)
 * Page: `Page 3`
 */
export const ActionButton: React.FC<ActionButtonProps> = ({
  variant = '01',
  label,
  active = false,
  disabled = false,
  onClick,
}) => {
  const defaultLabels: Record<string, string> = {
    '01': 'Button 01 (Primary)',
    '02': 'Button 02 (Subtle)',
    '03': 'Button 03 (Ghost)',
    '04': 'Button 04 (Danger)',
    '05': 'Button 05 (Success)',
  };

  const displayText = label || defaultLabels[variant];

  return (
    <button
      type="button"
      className={`figma-action-btn figma-action-btn--${variant} ${active ? 'figma-action-btn--active' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="figma-action-btn__badge">{variant}</span>
      <span className="figma-action-btn__label">{displayText}</span>
    </button>
  );
};
