import React from 'react';
import './KeyboardShortcuts.css';

export interface ShortcutItem {
  keys: string[];
  description: string;
}

export interface KeyboardShortcutsProps {
  /** Widget title */
  title?: string;
  /** Shortcut items */
  shortcuts?: ShortcutItem[];
}

const DEFAULT_SHORTCUTS: ShortcutItem[] = [
  { keys: ['Shift', 'A'], description: 'Add Auto Layout' },
  { keys: ['Option', '8'], description: 'Align Left' },
  { keys: ['Option', 'H'], description: 'Distribute Horizontal Spacing' },
  { keys: ['⌘', '/'], description: 'Quick Search Commands' },
  { keys: ['Alt', 'Drag'], description: 'Duplicate with smart guide' },
];

/**
 * **Keyboard shortcuts**
 * 
 * Preserved Layer Name: `Keyboard shortcuts` / `Shortcuts`
 * Figma Node ID: `2105:3494` (FRAME)
 * Page: `Page 3`
 */
export const KeyboardShortcuts: React.FC<KeyboardShortcutsProps> = ({
  title = 'Keyboard Shortcuts',
  shortcuts = DEFAULT_SHORTCUTS,
}) => {
  return (
    <div className="figma-shortcuts">
      <div className="figma-shortcuts__header">
        <span className="figma-shortcuts__icon" aria-hidden="true">⌨️</span>
        <h4 className="figma-shortcuts__title">{title}</h4>
      </div>
      <div className="figma-shortcuts__list">
        {shortcuts.map((item, idx) => (
          <div key={idx} className="figma-shortcuts__row">
            <span className="figma-shortcuts__desc">{item.description}</span>
            <div className="figma-shortcuts__keys">
              {item.keys.map((k, kIdx) => (
                <kbd key={kIdx} className="figma-shortcuts__key">{k}</kbd>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
