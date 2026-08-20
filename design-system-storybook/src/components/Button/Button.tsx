import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variant state matching Figma component property `state` */
  state?: 'Default' | 'Variant2';
  /** Button label matching Figma text layer */
  label?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Optional click handler */
  onClick?: () => void;
  /** Children content (overrides label if provided) */
  children?: React.ReactNode;
}

/**
 * **Button**
 * 
 * Preserved Layer Name: `Button`
 * Figma Node ID: `2170:850` (COMPONENT_SET)
 * Page: `Page 4`
 */
export const Button: React.FC<ButtonProps> = ({
  state = 'Default',
  label = 'Button',
  disabled = false,
  onClick,
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      type="button"
      className={`figma-button figma-button--${state.toLowerCase()} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children || label}
    </button>
  );
};
