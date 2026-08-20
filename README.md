# Figma-to-React Design System & Storybook

An interactive, high-fidelity React Storybook showcase site built from Figma Design System tokens and preserved component layer definitions.

## 🌟 Highlights

- **Direct Token Extraction**: 340+ CSS custom properties extracted from `base-palette-tokens.json` and `foundational-tokens.json` using exact `--uedp-*` naming.
- **Strict Variable Aliasing**: Only verified Figma bound variables map to tokens; unbound properties preserve exact raw Figma values without invented variables.
- **Preserved Figma Layer Naming**: React components mirror Figma layers (`Button`, `Search bar`, `Todo List`, `Card`, `Auto layout button`, `Button 01-05`, `Keyboard shortcuts`, `lucide/share`, `Icon/house`, `iPhone 16 - 1`, `Html → Body`, `AI RIDE ASSISTANCE`, etc.).
- **Interactive Storybook Specs**: Complete documentation stories with native controls (`argTypes`) and Markdown Specs Tables.
- **GA4 Analytics & Vercel Ready**: Client-side single page navigation tracking and preconfigured static SPA routing.

## 🚀 Quick Start

### Installation
```bash
cd design-system-storybook
npm install --legacy-peer-deps
```

### Run Storybook Locally
```bash
npm run storybook
```
Storybook will start on `http://localhost:6006`.

### Build Static Storybook
```bash
npm run build-storybook
```

### Pre-Deployment Verification
```bash
npm run deploy-check
```

## 📁 Project Architecture

```
design-system-storybook/
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── preview-head.html            # GA4 gtag.js + route listeners
├── scripts/
│   ├── extract-tokens.js            # Automated token extraction script
│   └── deploy-vercel.js             # Deployment validation script
├── src/
│   ├── index.ts                     # Single barrel export
│   ├── styles/
│   │   ├── figma-tokens.css         # Complete CSS custom properties (--uedp-*)
│   │   └── global.css               # Storybook presentation & typography styles
│   ├── components/
│   │   ├── Button/                  # Component Set (Default & Variant2)
│   │   ├── SearchBar/               # Search bar with clear action
│   │   ├── TodoList/                # Interactive task checklist
│   │   ├── Card/                    # Multi-variant surface cards
│   │   ├── AutoLayoutButton/        # Auto layout button frame
│   │   ├── ActionButtons/           # Button 01 to Button 05
│   │   ├── KeyboardShortcuts/       # Keyboard shortcuts widget
│   │   ├── Icons/                   # lucide/share, Icon/house, etc.
│   │   ├── IPhoneScreens/           # iPhone 16 - 1, 2, 3 screens
│   │   ├── HeroLanding/             # Html → Body / Hero section
│   │   └── AICards/                 # AI Ride Assistance, Safety, Emergency
│   └── stories/
│       └── Tokens/
│           ├── ColorPalette.stories.tsx       # Interactive base palette swatches
│           └── FoundationalTokens.stories.tsx # Radii, gaps, padding, geometry
├── vercel.json                      # SPA static deployment routing
├── package.json
└── tsconfig.json
```
