import React from 'react';
import './AICards.css';

export type AICardType = 'AI RIDE ASSISTANCE' | 'AI SAFETY GUARDIAN' | 'AI EMERGENCY COMPANION';

export interface AICardProps {
  /** Preserved layer name */
  type?: AICardType;
  /** Custom title */
  title?: string;
  /** Feature points */
  features?: string[];
  /** Badge text */
  badge?: string;
  /** Active state */
  active?: boolean;
}

const DEFAULT_CARDS: Record<AICardType, { title: string; badge: string; icon: string; features: string[] }> = {
  'AI RIDE ASSISTANCE': {
    title: 'AI RIDE ASSISTANCE',
    badge: 'Personalization',
    icon: '✨',
    features: [
      'Learns your behavior & preferences',
      'Voice & context interaction',
      'Suggests ideal ride & settings',
      'Saves preferences & routines',
      'Predicts best time & route',
    ],
  },
  'AI SAFETY GUARDIAN': {
    title: 'AI SAFETY GUARDIAN',
    badge: 'Safety',
    icon: '🛡️',
    features: [
      'Continuous ride monitoring',
      'Driver behavior analysis',
      'Route deviation detection',
      'Speed & anomaly alerts',
      'Proactive safety check-ins',
    ],
  },
  'AI EMERGENCY COMPANION': {
    title: 'AI EMERGENCY COMPANION',
    badge: 'Protection',
    icon: '🚨',
    features: [
      'Silent emergency mode',
      'Instant assistance & alerts',
      'Shares live location',
      'Notifies trusted contacts',
      'AI powered emergency support',
    ],
  },
};

/**
 * **AI Cards (AI RIDE ASSISTANCE, AI SAFETY GUARDIAN, AI EMERGENCY COMPANION)**
 * 
 * Preserved Layer Names: `AI RIDE ASSISTANCE`, `AI SAFETY GUARDIAN`, `AI EMERGENCY COMPANION`
 * Figma Node IDs: `2061:382`, `2061:388`, `2061:389`
 * Page: `AI Integration`
 */
export const AICard: React.FC<AICardProps> = ({
  type = 'AI RIDE ASSISTANCE',
  title,
  features,
  badge,
  active = false,
}) => {
  const cardData = DEFAULT_CARDS[type];
  const displayTitle = title || cardData.title;
  const displayBadge = badge || cardData.badge;
  const displayFeatures = features || cardData.features;

  return (
    <div className={`figma-ai-card figma-ai-card--${type.toLowerCase().replace(/\s+/g, '-')} ${active ? 'figma-ai-card--active' : ''}`}>
      <div className="figma-ai-card__header">
        <span className="figma-ai-card__icon">{cardData.icon}</span>
        <span className="figma-ai-card__badge">{displayBadge}</span>
      </div>

      <h3 className="figma-ai-card__title">{displayTitle}</h3>

      <ul className="figma-ai-card__features">
        {displayFeatures.map((feat, idx) => (
          <li key={idx} className="figma-ai-card__feature-item">
            <span className="figma-ai-card__check">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span>{feat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
