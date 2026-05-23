'use client';

import { useState, useCallback, useEffect } from 'react';
import BrandLogoWhite from '@/components/BrandLogo';

/* ============================================================
   S NEW ROOF INC. — HEADER (DARK NAVY THEME)
   Utility Top Bar + Dark Navy Nav + White Logo + Phone CTA
   ============================================================ */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Close mobile nav on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        closeMobile();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen, closeMobile]);

  return (
    <>
      {/* ── UTILITY TOP BAR ── */}
      <div className="snr-utility-bar">
        <div className="snr-utility-bar-inner">
          <span className="snr-utility-bar-license">
            <svg className="snr-utility-bar-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1L2 5V11L8 15L14 11V5L8 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              <path d="M8 5.5V10.5M5.5 8H10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Roofing License: <b>C-39</b> Lic. <b>#1122623</b>
          </span>
          <a href="tel:7147704756" className="snr-utility-bar-phone" aria-label="Call us at (714) 770-4756">
            <svg className="snr-utility-bar-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.62 7.12a11.05 11.05 0 005.26 5.26l1.75-.44a1 1 0 011.01.26l1.56 1.56a1 1 0 01-.26 1.6A7.97 7.97 0 018 16 8 8 0 010 8a7.97 7.97 0 011.84-4.94 1 1 0 011.6-.26l1.56 1.56a1 1 0 01.26 1.01l-.44 1.75z" fill="currentColor" transform="scale(0.68) translate(3,2)"/>
            </svg>
            <b>(714)</b> 770-4756
          </a>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <header className="snr-header" role="banner">
        <div className="snr-header-inner">
          {/* Logo — white shield badge for dark navy header */}
          <a href="#" className="snr-brand" aria-label="S New Roof Inc. — Home">
            <div className="snr-brand-logo-only">
              <BrandLogoWhite height={38} />
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="snr-nav" role="navigation" aria-label="Main navigation">
            <a href="#" className="snr-nav-link">Home</a>
            <a href="#services" className="snr-nav-link">Services</a>
            <a href="#about" className="snr-nav-link">About</a>
            <a href="#process" className="snr-nav-link">Process</a>
            <a href="#contact" className="snr-nav-link">Contact</a>
          </nav>

          {/* Phone CTA Button — white border outline on dark navy */}
          <a href="tel:7147704756" className="snr-header-phone-btn" aria-label="Call us at (714) 770-4756">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 14, height: 14, flexShrink: 0 }}>
              <path d="M5 2H9L11 7L8.5 8.5C9.57 11.15 11.85 13.43 14.5 14.5L16 12L21 14V18C21 19.1 20.1 20 19 20C10.16 20 3 12.84 3 4C3 2.9 3.9 2 5 2Z" transform="scale(0.83) translate(2,2)" />
            </svg>
            (714) 770-4756
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="snr-mobile-toggle"
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── MOBILE NAV DRAWER ── */}
      <div
        className={`snr-mobile-nav ${mobileOpen ? 'snr-mobile-nav--open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <button
          className="snr-mobile-nav-close"
          onClick={closeMobile}
          aria-label="Close navigation menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <a href="#" className="snr-mobile-nav-link" onClick={closeMobile}>Home</a>
        <a href="#services" className="snr-mobile-nav-link" onClick={closeMobile}>Services</a>
        <a href="#about" className="snr-mobile-nav-link" onClick={closeMobile}>About</a>
        <a href="#process" className="snr-mobile-nav-link" onClick={closeMobile}>Process</a>
        <a href="#contact" className="snr-mobile-nav-link" onClick={closeMobile}>Contact</a>
        <div style={{ marginTop: '20px' }}>
          <a href="tel:7147704756" className="snr-btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={closeMobile}>
            (714) 770-4756
          </a>
        </div>
      </div>
    </>
  );
}
