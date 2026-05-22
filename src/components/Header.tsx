'use client';

import { useState, useCallback } from 'react';

/* ============================================================
   S NEW ROOF INC. — HEADER WITH MEGA MENU
   Fixed sticky header with centered nav, ES toggle, and license
   ============================================================ */

interface ServiceItem {
  label: string;
  href: string;
}

interface ServiceColumn {
  key: string;
  title: string;
  items: ServiceItem[];
  previewTitle: string;
  previewDesc: string;
}

const serviceColumns: ServiceColumn[] = [
  {
    key: 'maintenance',
    title: 'Maintenance',
    previewTitle: 'Roof Maintenance',
    previewDesc: 'Proactive care programs to extend roof lifecycle and reduce lifecycle costs.',
    items: [
      { label: 'Roof Inspections', href: '#maintenance-inspections' },
      { label: 'Leak Detection', href: '#maintenance-leak-detection' },
      { label: 'Gutter Cleaning', href: '#maintenance-gutter-cleaning' },
      { label: 'Preventative Care', href: '#maintenance-preventative-care' },
    ],
  },
  {
    key: 'logistics',
    title: 'Logistics',
    previewTitle: 'Roofing Logistics',
    previewDesc: 'Rapid response and aerial intelligence for emergency situations.',
    items: [
      { label: 'Emergency Tarping', href: '#logistics-emergency' },
      { label: 'Asset Monitoring', href: '#logistics-asset-monitoring' },
      { label: 'Debris Removal', href: '#logistics-debris-removal' },
      { label: 'Drone Inspections', href: '#logistics-drone-inspections' },
    ],
  },
  {
    key: 'construction',
    title: 'Construction',
    previewTitle: 'New Construction',
    previewDesc: 'Complete roofing systems engineered for longevity and compliance.',
    items: [
      { label: 'New Roof Installation', href: '#services' },
      { label: 'Commercial Re-Roofing', href: '#services' },
      { label: 'Solar Integration', href: '#services' },
      { label: 'Skylight Builds', href: '#services' },
    ],
  },
  {
    key: 'compliance',
    title: 'Compliance',
    previewTitle: 'Regulatory Compliance',
    previewDesc: 'Title 24 audits, certifications, and warranty management services.',
    items: [
      { label: 'Title 24 Cool Roof Audits', href: '#compliance-title24' },
      { label: 'Structural Certifications', href: '#compliance-certifications' },
      { label: 'Warranty Management', href: '#compliance-warranty' },
      { label: 'Hazard Mitigation', href: '#compliance-hazard' },
    ],
  },
];

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [previewColumn, setPreviewColumn] = useState<string>('maintenance');

  const handleColumnHover = useCallback((key: string) => {
    setPreviewColumn(key);
  }, []);

  const activePreview = serviceColumns.find((c) => c.key === previewColumn) || serviceColumns[0];

  return (
    <>
      <header className="snr-header" role="banner">
        <div className="snr-header-inner">
          {/* Brand */}
          <a href="#" className="snr-brand" aria-label="S New Roof Inc. — Home">
            <span className="snr-brand-name">S New Roof Inc.</span>
            <span className="snr-brand-license">C-39 Lic. #1122623</span>
          </a>

          {/* Center Navigation */}
          <nav className="snr-nav" role="navigation" aria-label="Main navigation">
            <a href="#" className="snr-nav-link">Home</a>

            {/* Services with mega menu trigger */}
            <div
              className="snr-mega-trigger"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className="snr-nav-link"
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                Services
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  style={{ marginLeft: '4px', display: 'inline-block', verticalAlign: 'middle', transition: 'transform 0.2s ease', transform: megaOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              <div
                className="snr-mega-menu"
                role="menu"
                aria-label="Services navigation"
              >
                <div className="snr-mega-inner">
                  {/* LEFT: 4-Column Navigation Grid */}
                  <div className="snr-mega-grid">
                    {serviceColumns.map((column) => (
                      <div
                        key={column.key}
                        className="snr-mega-column"
                        onMouseEnter={() => handleColumnHover(column.key)}
                      >
                        <div className="snr-mega-column-title">{column.title}</div>
                        {column.items.map((item) => (
                          <a
                            key={item.href + item.label}
                            href={item.href}
                            className="snr-mega-link"
                            role="menuitem"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT: Dynamic Preview Card */}
                  <div className="snr-mega-preview" aria-live="polite">
                    <div className="snr-mega-preview-content">
                      <div className="snr-mega-preview-title">
                        {activePreview.previewTitle}
                      </div>
                      <div className="snr-mega-preview-desc">
                        {activePreview.previewDesc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#gallery" className="snr-nav-link">Gallery</a>
            <a href="#faq" className="snr-nav-link">FAQ</a>
            <a href="#blog" className="snr-nav-link">Blog</a>
            <a href="#contact" className="snr-nav-link">Contact</a>
            <a href="#" className="snr-nav-link snr-nav-link-lang">ES</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="snr-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
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

      {/* Mobile Navigation Drawer */}
      <div
        className={`snr-mobile-nav ${mobileOpen ? 'snr-mobile-nav--open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {serviceColumns.map((column) => (
          <div key={column.key} className="snr-mobile-nav-section">
            <div className="snr-mobile-nav-title">{column.title}</div>
            {column.items.map((item) => (
              <a
                key={item.href + item.label}
                href={item.href}
                className="snr-mobile-nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}
        <div style={{ marginTop: '20px' }}>
          <a href="#contact" className="snr-btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
            Call Us
          </a>
        </div>
      </div>
    </>
  );
}
