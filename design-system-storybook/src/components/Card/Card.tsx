import React from 'react';
import './Card.css';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Subtitle or category */
  subtitle?: string;
  /** Main description or body content */
  description?: string;
  /** Status badge label */
  status?: 'Active' | 'Draft' | 'Archived' | 'Beta';
  /** Optional icon or media banner */
  icon?: React.ReactNode;
  /** Clickable card action */
  onClick?: () => void;
  /** Additional card body children */
  children?: React.ReactNode;
  /** Card surface variant */
  variant?: 'elevated' | 'outlined' | 'flat';
}

/**
 * **Card**
 * 
 * Preserved Layer Name: `Card`
 * Figma Node ID: `2105:3053` (FRAME)
 * Page: `Page 3`
 */
export const Card: React.FC<CardProps> = ({
  title = 'Design Token Integration',
  subtitle = 'System Architecture',
  description = 'Tokens are extracted directly from Figma JSON variables ensuring synchronous updates between design and code.',
  status = 'Active',
  icon,
  onClick,
  children,
  variant = 'elevated',
}) => {
  return (
    <div
      className={`figma-card figma-card--${variant} ${onClick ? 'figma-card--interactive' : ''}`}
      onClick={onClick}
    >
      <div className="figma-card__header">
        <div className="figma-card__title-meta">
          {subtitle && <span className="figma-card__subtitle">{subtitle}</span>}
          {title && <h3 className="figma-card__title">{title}</h3>}
        </div>
        {status && (
          <span className={`figma-card__status figma-card__status--${status.toLowerCase()}`}>
            {status}
          </span>
        )}
      </div>

      {description && <p className="figma-card__description">{description}</p>}

      {children && <div className="figma-card__content">{children}</div>}

      <div className="figma-card__footer">
        <span className="figma-card__timestamp">Updated recently</span>
        <span className="figma-card__link">View specs &rarr;</span>
      </div>
    </div>
  );
};
