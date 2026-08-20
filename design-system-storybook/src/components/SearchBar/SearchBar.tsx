import React, { useState } from 'react';
import './SearchBar.css';

export interface SearchBarProps {
  /** Input placeholder text */
  placeholder?: string;
  /** Initial or controlled value */
  value?: string;
  /** Change handler callback */
  onChange?: (val: string) => void;
  /** Optional submit handler */
  onSearch?: (query: string) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Show clear button when text is present */
  clearable?: boolean;
}

/**
 * **Search bar**
 * 
 * Preserved Layer Name: `Search bar`
 * Figma Node ID: `2105:2695` (FRAME)
 * Page: `Page 3`
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search items, pages, components...',
  value: controlledValue,
  onChange,
  onSearch,
  disabled = false,
  clearable = true,
}) => {
  const [internalValue, setInternalValue] = useState(controlledValue || '');
  const val = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVal = e.target.value;
    if (controlledValue === undefined) setInternalValue(nextVal);
    onChange?.(nextVal);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(val);
    }
  };

  const handleClear = () => {
    if (controlledValue === undefined) setInternalValue('');
    onChange?.('');
  };

  return (
    <div className={`figma-search-bar ${disabled ? 'figma-search-bar--disabled' : ''}`}>
      <span className="figma-search-bar__icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
      <input
        type="text"
        className="figma-search-bar__input"
        placeholder={placeholder}
        value={val}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
      {clearable && val && !disabled && (
        <button
          type="button"
          className="figma-search-bar__clear"
          onClick={handleClear}
          aria-label="Clear search query"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
};
