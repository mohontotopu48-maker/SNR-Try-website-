'use client';

import { useState, useCallback } from 'react';

/* ============================================================
   S NEW ROOF INC. — HEADER (DARK NAVY THEME)
   Utility Top Bar + Dark Navy Nav + White Logo + Phone CTA
   ============================================================ */

/* Inline SVG Logo — White version for dark background header
   White text + orange border visible on deep navy background */
function BrandLogoWhite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="190 340 230 110"
      style={{ height: 38, width: 'auto', display: 'block' }}
      aria-label="S New Roof Inc."
      role="img"
    >
      {/* Shield background plate — invisible on dark bg */}
      <path fill="none" stroke="none" d="M219.03,417.15l82.1,16.74c3.17.67,6.6.59,9.79-.05l82.44-16.54c6.1-1.23,10.21-4.63,10.21-8.46v-25.64c0-3.82-4.08-7.21-10.15-8.45l-82.45-15.92c-3.19-.65-6.66-.64-9.84.02l-82.07,16.38c-6.01,1.26-10.03,4.63-10.03,8.42v25.08c0,3.78,4.01,7.15,10,8.41Z" />
      {/* Shield body silhouette — white for dark bg */}
      <g>
        <path fill="#FFFFFF" d="M305.79,436.36c-1.76,0-3.46-.17-5.07-.51l-82.09-16.73c-7.05-1.48-11.6-5.56-11.6-10.38v-25.08c0-4.83,4.56-8.9,11.62-10.38l82.09-16.38c1.72-.36,3.53-.54,5.37-.54s3.56.18,5.26.52l82.43,15.92c7.05,1.44,11.77,5.62,11.77,10.41v25.64c0,4.81-4.75,9-11.81,10.42l-82.44,16.54c-1.83.37-3.69.55-5.52.55h0Z" />
        {/* Orange border outline — brand orange */}
        <path fill="#f68c1f" d="M306.11,358.36c1.64,0,3.28.16,4.86.48l82.45,15.92c6.07,1.24,10.15,4.63,10.15,8.45v25.64c0,3.83-4.11,7.23-10.21,8.46l-82.44,16.54c-1.67.33-3.4.51-5.13.51-1.58,0-3.15-.15-4.66-.47l-82.1-16.74c-5.99-1.26-10-4.63-10-8.41v-25.08c0-3.79,4.02-7.16,10.03-8.42l82.07-16.38c1.61-.34,3.3-.51,4.98-.51M306.11,354.36c-1.98,0-3.93.2-5.8.59l-82.04,16.37c-8.06,1.69-13.25,6.53-13.25,12.34v25.08c0,5.8,5.17,10.64,13.18,12.33l82.13,16.74c1.72.36,3.56.55,5.46.55s3.96-.2,5.92-.59l82.44-16.54c8.15-1.64,13.42-6.5,13.42-12.38v-25.64c0-5.86-5.24-10.71-13.35-12.36l-82.49-15.93c-1.79-.36-3.69-.55-5.62-.55h0Z" />
      </g>
      {/* Text characters — white for dark background */}
      <g fill="#FFFFFF">
        <path d="M231.58,409.83h-11.56c-.75,0-1.4-.27-1.93-.8-.54-.53-.81-1.17-.81-1.92v-10.17l5.46,3.23v4.22h6.12v-3.34l-10.13-6.12c-.96-.56-1.44-1.36-1.44-2.4v-6.91c0-.75.27-1.39.81-1.92.54-.53,1.18-.8,1.93-.8h11.6c.75,0,1.39.27,1.92.8.53.53.8,1.17.8,1.92v9.46l-5.44-3.28v-3.45h-6.16v2.65l10.25,6.19c.86.58,1.3,1.35,1.31,2.33v7.6c0,.75-.27,1.39-.8,1.92s-1.17.8-1.92.8Z" />
        <path d="M265.2,409.81h-4.39l-6.7-13v13h-5.44v-26.89h4.39l6.68,12.95v-13h5.46v26.95Z" />
        <path d="M282.2,409.81h-15.65v-26.95h15.65v5.46h-10.21v5.29h8.65v5.46h-8.65v5.27h10.21v5.46Z" />
        <path d="M304.94,409.79h-5.31l-2.23-9.5-2.21,9.5h-5.31l-6.32-26.87,5.59-.02,3.38,14.39,2.08-8.88-1.28-5.5,2.57-.02v-.02l.02.02h3l3.38,14.39,3.38-14.41,5.57.04-6.31,26.87Z" />
        <path d="M342.44,409.85l-5.44-.09.04-1.46c.03-.46.04-1.27.04-2.42,0-1.84-.21-3.31-.62-4.41-.58-1.58-1.67-2.38-3.28-2.42h-2.16v10.77h-5.44v-26.95h11.5c1.36,0,2.54.49,3.54,1.47.99.98,1.49,2.17,1.49,3.57v6.08c0,1.31-.44,2.44-1.31,3.38.5.84.87,1.73,1.12,2.67.24.94.4,1.89.48,2.83.07.94.11,1.83.11,2.66l-.06,4.32ZM336.66,393.58v-5.25h-5.65v5.25h5.65Z" />
        <path d="M355.28,409.81h-6.31c-1.41,0-2.62-.5-3.62-1.51s-1.5-2.21-1.5-3.61v-16.7c0-1.4.5-2.61,1.51-3.61,1.01-1.01,2.21-1.51,3.61-1.51h6.31c1.4,0,2.6.5,3.61,1.51,1.01,1.01,1.51,2.21,1.51,3.61v16.7c0,1.4-.5,2.61-1.5,3.61s-2.21,1.51-3.62,1.51ZM354.94,404.35v-16.03h-5.63v16.03h5.63Z" />
        <path d="M373.18,409.81h-6.31c-1.41,0-2.62-.5-3.62-1.51s-1.5-2.21-1.5-3.61v-16.7c0-1.4.5-2.61,1.51-3.61,1.01-1.01,2.21-1.51,3.61-1.51h6.31c1.4,0,2.6.5,3.61,1.51,1.01,1.01,1.51,2.21,1.51,3.61v16.7c0,1.4-.5,2.61-1.5,3.61s-2.21,1.51-3.62,1.51ZM372.84,404.35v-16.03h-5.63v16.03h5.63Z" />
        <path d="M385.11,409.81h-5.46v-26.95h15.67v5.46h-10.21v5.29h8.65v5.46h-8.65v10.73Z" />
      </g>
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

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
              <BrandLogoWhite />
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
