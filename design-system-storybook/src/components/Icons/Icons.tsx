import React from 'react';
import './Icons.css';

export type FigmaIconName =
  | 'lucide/share'
  | 'lucide/cloud-download'
  | 'Icon/house'
  | 'Icon/Comment'
  | 'Icon/Like'
  | 'Icon/Share';

export interface FigmaIconProps {
  /** Preserved layer name of icon */
  name: FigmaIconName;
  /** Size in pixels */
  size?: number;
  /** Custom CSS color */
  color?: string;
  /** Optional click event */
  onClick?: () => void;
}

/**
 * **Figma Icons**
 * 
 * Preserved Layer Names: `lucide/share`, `lucide/cloud-download`, `Icon/house`, `Icon/Comment`, `Icon/Like`, `Icon/Share`
 * Figma Node IDs: `2182:846`, `2182:852`, `2182:841`, `2105:3347`, `2105:3351`, `2105:3353`
 */
export const FigmaIcon: React.FC<FigmaIconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  onClick,
}) => {
  const renderSvg = () => {
    switch (name) {
      case 'lucide/share':
      case 'Icon/Share':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
        );
      case 'lucide/cloud-download':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M12 12v9"></path>
            <path d="m8 17 4 4 4-4"></path>
          </svg>
        );
      case 'Icon/house':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        );
      case 'Icon/Comment':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        );
      case 'Icon/Like':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <span
      className={`figma-icon ${onClick ? 'figma-icon--clickable' : ''}`}
      onClick={onClick}
      style={{ width: size, height: size }}
      title={name}
    >
      {renderSvg()}
    </span>
  );
};
