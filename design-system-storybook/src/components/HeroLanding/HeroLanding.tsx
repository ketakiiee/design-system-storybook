import React from 'react';
import { Button } from '../Button/Button';
import './HeroLanding.css';

export interface HeroLandingProps {
  /** Main navigation brand title */
  brandTitle?: string;
  /** Hero main heading */
  headline?: string;
  /** Sub-headline or value proposition */
  subheadline?: string;
  /** Primary CTA button text */
  primaryCta?: string;
  /** Secondary CTA button text */
  secondaryCta?: string;
}

/**
 * **Html → Body (Hero Landing Showcase)**
 * 
 * Preserved Layer Name: `Html → Body` (containing `Nav`, `Container`, `Section`)
 * Figma Node ID: `2117:965` (FRAME)
 * Page: `AI Integration`
 */
export const HeroLanding: React.FC<HeroLandingProps> = ({
  brandTitle = 'Uber AI+',
  headline = 'Next-Generation Autonomous Ride Intelligence',
  subheadline = 'Experience continuous protection, predictive route matching, and real-time safety companion powered by contextual AI.',
  primaryCta = 'Experience AI Ride',
  secondaryCta = 'Explore Features',
}) => {
  return (
    <div className="figma-html-body">
      {/* Nav Frame (2117:1010) */}
      <header className="figma-nav">
        <div className="figma-nav__container">
          <div className="figma-nav__brand">
            <span className="figma-nav__logo-dot"></span>
            <span className="figma-nav__logo-text">{brandTitle}</span>
          </div>
          <nav className="figma-nav__links">
            <a href="#features" className="figma-nav__link">Features</a>
            <a href="#safety" className="figma-nav__link">Safety</a>
            <a href="#tokens" className="figma-nav__link">Tokens</a>
            <a href="#docs" className="figma-nav__link">Docs</a>
          </nav>
          <div className="figma-nav__cta">
            <Button state="Default" label="Launch App" />
          </div>
        </div>
      </header>

      {/* Section Frame (2117:981) */}
      <main className="figma-section">
        <div className="figma-container">
          <div className="figma-hero__content">
            <div className="figma-hero__badge">
              <span>✨ Built with Figma Tokens</span>
            </div>
            <h1 className="figma-hero__heading">{headline}</h1>
            <p className="figma-hero__subheadline">{subheadline}</p>
            <div className="figma-hero__actions">
              <Button state="Default" label={primaryCta} />
              <Button state="Variant2" label={secondaryCta} />
            </div>

            <div className="figma-hero__stats">
              <div className="figma-hero__stat-item">
                <span className="figma-hero__stat-num">340+</span>
                <span className="figma-hero__stat-label">Design Tokens</span>
              </div>
              <div className="figma-hero__stat-item">
                <span className="figma-hero__stat-num">100%</span>
                <span className="figma-hero__stat-label">Variable Fidelity</span>
              </div>
              <div className="figma-hero__stat-item">
                <span className="figma-hero__stat-num">0</span>
                <span className="figma-hero__stat-label">Made-Up Aliases</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
