import React from 'react';
import { Button } from '../Button/Button';
import { FigmaIcon } from '../Icons/Icons';
import './IPhoneScreens.css';

export interface IPhoneScreenProps {
  /** Screen variant corresponding to preserved Figma frame layer */
  screen?: 'iPhone 16 - 1' | 'iPhone 16 - 2' | 'iPhone 16 - 3';
  /** Main screen headline */
  title?: string;
  /** Subtitle message */
  description?: string;
  /** Primary button action text */
  primaryButtonLabel?: string;
  /** Secondary button action text */
  secondaryButtonLabel?: string;
}

/**
 * **iPhone 16 Screens (iPhone 16 - 1, iPhone 16 - 2, iPhone 16 - 3)**
 * 
 * Preserved Layer Names: `iPhone 16 - 1`, `iPhone 16 - 2`, `iPhone 16 - 3`
 * Figma Node IDs: `2169:818`, `2169:819`, `2169:820`
 * Page: `Page 4`
 */
export const IPhoneScreen: React.FC<IPhoneScreenProps> = ({
  screen = 'iPhone 16 - 1',
  title,
  description,
  primaryButtonLabel = 'Get Started',
  secondaryButtonLabel = 'Learn More',
}) => {
  const getScreenContent = () => {
    switch (screen) {
      case 'iPhone 16 - 1':
        return {
          title: title || 'Smart Mobility Experience',
          desc: description || 'Adaptive AI assistance with personalized routing, live driver matching, and seamless safety check-ins.',
          badge: 'Screen 01',
          showHomeIcon: true,
        };
      case 'iPhone 16 - 2':
        return {
          title: title || 'Real-Time Safety Guardian',
          desc: description || 'Continuous route deviation monitoring with instant SOS alert capabilities.',
          badge: 'Screen 02',
          showHomeIcon: false,
        };
      case 'iPhone 16 - 3':
        return {
          title: title || 'AI Emergency Companion',
          desc: description || 'Automated anomaly detection notifying trusted contacts instantly during unexpected stops.',
          badge: 'Screen 03',
          showHomeIcon: false,
        };
    }
  };

  const content = getScreenContent();

  return (
    <div className="figma-iphone-device">
      <div className="figma-iphone-device__notch">
        <div className="figma-iphone-device__camera"></div>
      </div>

      <div className="figma-iphone-device__screen">
        <div className="figma-iphone-device__status-bar">
          <span className="figma-iphone-device__time">9:41</span>
          <div className="figma-iphone-device__signals">
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        <div className="figma-iphone-device__body">
          <div className="figma-iphone-device__header-row">
            <span className="figma-iphone-device__badge">{content.badge}</span>
            {content.showHomeIcon && (
              <FigmaIcon name="Icon/house" size={20} color="var(--uedp-blue-600)" />
            )}
          </div>

          <div className="figma-iphone-device__hero-illustration">
            <div className="figma-iphone-device__circle-bg">
              <span style={{ fontSize: '32px' }}>🚗</span>
            </div>
          </div>

          <h2 className="figma-iphone-device__title">{content.title}</h2>
          <p className="figma-iphone-device__desc">{content.desc}</p>

          <div className="figma-iphone-device__actions">
            <Button state="Default" label={primaryButtonLabel} style={{ width: '100%' }} />
            {screen === 'iPhone 16 - 1' && (
              <Button state="Variant2" label={secondaryButtonLabel} style={{ width: '100%' }} />
            )}
          </div>
        </div>

        <div className="figma-iphone-device__home-indicator"></div>
      </div>
    </div>
  );
};
