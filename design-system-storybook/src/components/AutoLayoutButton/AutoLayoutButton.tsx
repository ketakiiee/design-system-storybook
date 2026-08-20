import React from 'react';
import './AutoLayoutButton.css';

export interface AutoLayoutButtonProps {
  /** Button text */
  text?: string;
  /** Optional icon */
  icon?: 'arrow' | 'plus' | 'check' | 'none';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Click event handler */
  onClick?: () => void;
}

/**
 * **Auto layout button**
 * 
 * Preserved Layer Name: `Auto layout button`
 * Figma Node ID: `2105:3179` (FRAME)
 * Page: `Page 3`
 */
export const AutoLayoutButton: React.FC<AutoLayoutButtonProps> = ({
  text = 'Auto layout button',
  icon = 'arrow',
  size = 'md',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`figma-auto-layout-btn figma-auto-layout-btn--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon === 'plus' && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      )}
      {icon === 'check' && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )}
      <span className="figma-auto-layout-btn__text">{text}</span>
      {icon === 'arrow' && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      )}
    </button>
  );
};
