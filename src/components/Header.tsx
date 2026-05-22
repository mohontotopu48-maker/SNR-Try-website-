'use client';

import { useState, useCallback } from 'react';

/* ============================================================
   S NEW ROOF INC. — HEADER WITH MEGA MENU
   Fixed sticky header with inline SVG logo, centered nav, ES toggle
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
    previewDesc: 'Proactive care programs to extend roof lifecycle and reduce costs.',
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

/* Inline SVG Logo — tightly cropped viewBox (190 340 230 110) for prominent, legible badge */
function BrandLogo() {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="190 340 230 110"
      style={{ height: 42, width: 'auto', display: 'inline-block', verticalAlign: 'middle' }}
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .snr-st0, .snr-st1 { fill: #fff; }
          .snr-st1 { stroke: #fff; stroke-miterlimit: 10; stroke-width: 12px; }
          .snr-st2 { fill: #f68c1f; }
        `}</style>
      </defs>
      <path className="snr-st1" d="M219.03,417.15l82.1,16.74c3.17.67,6.6.59,9.79-.05l82.44-16.54c6.1-1.23,10.21-4.63,10.21-8.46v-25.64c0-3.82-4.08-7.21-10.15-8.45l-82.45-15.92c-3.19-.65-6.66-.64-9.84.02l-82.07,16.38c-6.01,1.26-10.03,4.63-10.03,8.42v25.08c0,3.78,4.01,7.15,10,8.41Z" />
      <g>
        <path d="M305.79,436.36c-1.76,0-3.46-.17-5.07-.51l-82.09-16.73c-7.05-1.48-11.6-5.56-11.6-10.38v-25.08c0-4.83,4.56-8.9,11.62-10.38l82.09-16.38c1.72-.36,3.53-.54,5.37-.54s3.56.18,5.26.52l82.43,15.92c7.05,1.44,11.77,5.62,11.77,10.41v25.64c0,4.81-4.75,9-11.81,10.42l-82.44,16.54c-1.83.37-3.69.55-5.52.55h0Z" />
        <path className="snr-st2" d="M306.11,358.36c1.64,0,3.28.16,4.86.48l82.45,15.92c6.07,1.24,10.15,4.63,10.15,8.45v25.64c0,3.83-4.11,7.23-10.21,8.46l-82.44,16.54c-1.67.33-3.4.51-5.13.51-1.58,0-3.15-.15-4.66-.47l-82.1-16.74c-5.99-1.26-10-4.63-10-8.41v-25.08c0-3.79,4.02-7.16,10.03-8.42l82.07-16.38c1.61-.34,3.3-.51,4.98-.51M306.11,354.36c-1.98,0-3.93.2-5.8.59l-82.04,16.37c-8.06,1.69-13.25,6.53-13.25,12.34v25.08c0,5.8,5.17,10.64,13.18,12.33l82.13,16.74c1.72.36,3.56.55,5.46.55s3.96-.2,5.92-.59l82.44-16.54c8.15-1.64,13.42-6.5,13.42-12.38v-25.64c0-5.86-5.24-10.71-13.35-12.36l-82.49-15.93c-1.79-.36-3.69-.55-5.62-.55h0Z" />
      </g>
      <g>
        <path className="snr-st0" d="M231.58,409.83h-11.56c-.75,0-1.4-.27-1.93-.8-.54-.53-.81-1.17-.81-1.92v-10.17l5.46,3.23v4.22h6.12v-3.34l-10.13-6.12c-.96-.56-1.44-1.36-1.44-2.4v-6.91c0-.75.27-1.39.81-1.92.54-.53,1.18-.8,1.93-.8h11.6c.75,0,1.39.27,1.92.8.53.53.8,1.17.8,1.92v9.46l-5.44-3.28v-3.45h-6.16v2.65l10.25,6.19c.86.58,1.3,1.35,1.31,2.33v7.6c0,.75-.27,1.39-.8,1.92s-1.17.8-1.92.8Z" />
        <path className="snr-st0" d="M265.2,409.81h-4.39l-6.7-13v13h-5.44v-26.89h4.39l6.68,12.95v-13h5.46v26.95Z" />
        <path className="snr-st0" d="M282.2,409.81h-15.65v-26.95h15.65v5.46h-10.21v5.29h8.65v5.46h-8.65v5.27h10.21v5.46Z" />
        <path className="snr-st0" d="M304.94,409.79h-5.31l-2.23-9.5-2.21,9.5h-5.31l-6.32-26.87,5.59-.02,3.38,14.39,2.08-8.88-1.28-5.5,2.57-.02v-.02l.02.02h3l3.38,14.39,3.38-14.41,5.57.04-6.31,26.87Z" />
        <path className="snr-st0" d="M342.44,409.85l-5.44-.09.04-1.46c.03-.46.04-1.27.04-2.42,0-1.84-.21-3.31-.62-4.41-.58-1.58-1.67-2.38-3.28-2.42h-2.16v10.77h-5.44v-26.95h11.5c1.36,0,2.54.49,3.54,1.47.99.98,1.49,2.17,1.49,3.57v6.08c0,1.31-.44,2.44-1.31,3.38.5.84.87,1.73,1.12,2.67.24.94.4,1.89.48,2.83.07.94.11,1.83.11,2.66l-.06,4.32ZM336.66,393.58v-5.25h-5.65v5.25h5.65Z" />
        <path className="snr-st0" d="M355.28,409.81h-6.31c-1.41,0-2.62-.5-3.62-1.51s-1.5-2.21-1.5-3.61v-16.7c0-1.4.5-2.61,1.51-3.61,1.01-1.01,2.21-1.51,3.61-1.51h6.31c1.4,0,2.6.5,3.61,1.51,1.01,1.01,1.51,2.21,1.51,3.61v16.7c0,1.4-.5,2.61-1.5,3.61s-2.21,1.51-3.62,1.51ZM354.94,404.35v-16.03h-5.63v16.03h5.63Z" />
        <path className="snr-st0" d="M373.18,409.81h-6.31c-1.41,0-2.62-.5-3.62-1.51s-1.5-2.21-1.5-3.61v-16.7c0-1.4.5-2.61,1.51-3.61,1.01-1.01,2.21-1.51,3.61-1.51h6.31c1.4,0,2.6.5,3.61,1.51,1.01,1.01,1.51,2.21,1.51,3.61v16.7c0,1.4-.5,2.61-1.5,3.61s-2.21,1.51-3.62,1.51ZM372.84,404.35v-16.03h-5.63v16.03h5.63Z" />
        <path className="snr-st0" d="M385.11,409.81h-5.46v-26.95h15.67v5.46h-10.21v5.29h8.65v5.46h-8.65v10.73Z" />
      </g>
    </svg>
  );
}

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
          {/* Brand with inline SVG Logo — cropped viewBox for prominent badge */}
          <a href="#" className="snr-brand" aria-label="S New Roof Inc. — Home">
            <div className="brand-block">
              <div className="brand-logo-wrapper">
                <BrandLogo />
              </div>
              <div className="brand-text-container">
                <span className="snr-brand-name">S New Roof Inc.</span>
                <span className="snr-brand-license">C-39 Lic. #1122623</span>
              </div>
            </div>
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
            <span style={{ width: '1px', height: '16px', backgroundColor: 'var(--snr-border-card)', margin: '0 -4px' }} />
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
          <a href="tel:7147704756" className="snr-btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
            Call Us
          </a>
        </div>
      </div>
    </>
  );
}
