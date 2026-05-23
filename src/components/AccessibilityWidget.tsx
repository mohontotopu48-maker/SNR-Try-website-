'use client';

import { useState, useEffect, useCallback } from 'react';

/* ============================================================
   S NEW ROOF INC. — GLOBAL ACCESSIBILITY WIDGET
   Fixed button with orange accent hover, toggle panel for a11y options
   Actually applies CSS classes to <html> element when toggled
   ============================================================ */

interface A11yOption {
  id: string;
  label: string;
  cssClass: string;
  active: boolean;
}

// Check prefers-reduced-motion synchronously at init time
const prefersReducedMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const defaultOptions: A11yOption[] = [
  { id: 'high-contrast', label: 'High Contrast', cssClass: 'snr-a11y-high-contrast', active: false },
  { id: 'large-text', label: 'Larger Text', cssClass: 'snr-a11y-large-text', active: false },
  { id: 'reduce-motion', label: 'Reduce Motion', cssClass: 'snr-a11y-reduce-motion', active: prefersReducedMotion },
  { id: 'focus-highlight', label: 'Focus Highlights', cssClass: 'snr-a11y-focus-highlight', active: false },
];

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<A11yOption[]>(defaultOptions);

  // Apply/remove CSS classes on the <html> element when options change
  useEffect(() => {
    const html = document.documentElement;
    options.forEach((opt) => {
      if (opt.active) {
        html.classList.add(opt.cssClass);
      } else {
        html.classList.remove(opt.cssClass);
      }
    });
  }, [options]);

  const toggleOption = useCallback((id: string) => {
    setOptions((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, active: !opt.active } : opt
      )
    );
  }, []);

  return (
    <>
      {/* Fixed Accessibility Button */}
      <button
        className="snr-a11y-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Accessibility Menu"
        aria-expanded={isOpen}
        aria-controls="snr-a11y-panel"
      >
        {/* Universal Accessibility Icon */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="4.5" r="2" />
          <path d="M12 8.5V13" />
          <path d="M7 11C9.5 11 12 13 12 16L12 21" />
          <path d="M17 11C14.5 11 12 13 12 16L12 21" />
          <path d="M5 9L7 11" />
          <path d="M19 9L17 11" />
        </svg>
      </button>

      {/* Accessibility Options Panel */}
      <div
        id="snr-a11y-panel"
        className={`snr-a11y-panel ${isOpen ? 'snr-a11y-panel--open' : ''}`}
        role="dialog"
        aria-label="Accessibility options"
        aria-hidden={!isOpen}
      >
        <div className="snr-a11y-panel-title">Accessibility</div>

        {options.map((option) => (
          <button
            key={option.id}
            className="snr-a11y-option"
            onClick={() => toggleOption(option.id)}
            aria-pressed={option.active}
          >
            <span className="snr-a11y-option-label">{option.label}</span>
            <span
              className={`snr-a11y-option-toggle ${option.active ? 'snr-a11y-option-toggle--active' : ''}`}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </>
  );
}
