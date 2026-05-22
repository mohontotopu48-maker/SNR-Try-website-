'use client';

import { useState, useCallback } from 'react';

/* ============================================================
   S NEW ROOF INC. — HEADER WITH MEGA MENU
   Fixed sticky header with 2-column split-panel mega dropdown
   ============================================================ */

interface ServiceItem {
  label: string;
  href: string;
}

interface ServiceColumn {
  key: string;
  title: string;
  items: ServiceItem[];
  previewImage: string;
}

const serviceColumns: ServiceColumn[] = [
  {
    key: 'maintenance',
    title: 'Maintenance',
    previewImage: '/images/service-maintenance.png',
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
    previewImage: '/images/service-logistics.png',
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
    previewImage: '/images/service-construction.png',
    items: [
      { label: 'New Roof Installation', href: '#construction-new-roof' },
      { label: 'Commercial Re-Roofing', href: '#construction-re-roofing' },
      { label: 'Solar Integration', href: '#construction-solar' },
      { label: 'Skylight Builds', href: '#construction-skylights' },
    ],
  },
  {
    key: 'compliance',
    title: 'Compliance',
    previewImage: '/images/service-compliance.png',
    items: [
      { label: 'Title 24 Cool Roof Audits', href: '#compliance-title24' },
      { label: 'Structural Certifications', href: '#compliance-certifications' },
      { label: 'Warranty Management', href: '#compliance-warranty' },
      { label: 'Hazard Mitigation', href: '#compliance-hazard' },
    ],
  },
];

const columnTitles: Record<string, string> = {
  maintenance: 'Roof Maintenance & Preservation',
  logistics: 'Roofing Logistics & Emergency Response',
  construction: 'New Construction & Installation',
  compliance: 'Regulatory Compliance & Certification',
};

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
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M16 2L2 12V14H6V26H14V18H18V26H26V14H30V12L16 2Z"
                fill="white"
              />
              <path
                d="M16 2L2 12H30L16 2Z"
                fill="#00A870"
              />
            </svg>
            <span className="snr-brand-text">S New Roof Inc.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="snr-nav" role="navigation" aria-label="Main navigation">
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
                  style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle', transition: 'transform 0.2s ease', transform: megaOpen ? 'rotate(180deg)' : 'rotate(0)' }}
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
                            key={item.href}
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
                    <img
                      src={activePreview.previewImage}
                      alt={`${activePreview.title} services`}
                      key={activePreview.key}
                    />
                    <div className="snr-mega-preview-label">
                      {columnTitles[activePreview.key]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#maintenance" className="snr-nav-link">Maintenance</a>
            <a href="#logistics" className="snr-nav-link">Logistics</a>
            <a href="#construction" className="snr-nav-link">Construction</a>
            <a href="#compliance" className="snr-nav-link">Compliance</a>
            <a href="#contact" className="snr-btn-primary" style={{ padding: '10px 24px' }}>
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="snr-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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
                key={item.href}
                href={item.href}
                className="snr-mobile-nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}
        <div style={{ marginTop: '24px' }}>
          <a href="#contact" className="snr-btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
}
