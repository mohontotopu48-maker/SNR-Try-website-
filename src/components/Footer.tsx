'use client';

/* ============================================================
   S NEW ROOF INC. — FOOTER
   Multi-column footer with contact, nav, newsletter, and base bar
   ============================================================ */

export default function Footer() {
  return (
    <footer role="contentinfo">
      {/* Main Footer */}
      <div className="snr-footer">
        <div className="snr-container">
          <div className="snr-footer-grid">
            {/* Column 1: Brand & Contact */}
            <div>
              <a href="#" className="snr-brand" style={{ display: 'inline-flex', marginBottom: '0' }} aria-label="S New Roof Inc. — Home">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M16 2L2 12V14H6V26H14V18H18V26H26V14H30V12L16 2Z" fill="white" />
                  <path d="M16 2L2 12H30L16 2Z" fill="#00A870" />
                </svg>
                <span className="snr-brand-text" style={{ fontSize: '0.75rem' }}>S New Roof Inc.</span>
              </a>

              <p className="snr-footer-brand-desc">
                Full-spectrum commercial and residential roofing asset management.
                Licensed, bonded, and insured across California.
              </p>

              <div className="snr-footer-contact">
                <div className="snr-footer-contact-item">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 4L8 9L14 4" /><rect x="1" y="3" width="14" height="10" rx="1" />
                  </svg>
                  info@snewroof.com
                </div>
                <div className="snr-footer-contact-item">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 2H6L7.5 6.5L5.5 8C6.57 10.15 8.35 11.93 10.5 13L12 11L16 12.5V15C16 15.55 15.55 16 15 16C7.82 16 2 10.18 2 3C2 2.45 2.45 2 3 2Z" />
                  </svg>
                  (800) 555-1234
                </div>
                <div className="snr-footer-contact-item">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 1C4.69 1 2 3.69 2 7C2 11.5 8 15 8 15C8 15 14 11.5 14 7C14 3.69 11.31 1 8 1Z" /><circle cx="8" cy="7" r="2" />
                  </svg>
                  Sacramento, CA
                </div>
                <div className="snr-footer-contact-item">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="3" width="12" height="10" rx="1" /><path d="M2 7L8 10L14 7" />
                  </svg>
                  Lic. #B-987654
                </div>
              </div>
            </div>

            {/* Column 2: Maintenance */}
            <div>
              <div className="snr-footer-column-title">Maintenance</div>
              <a href="#maintenance-inspections" className="snr-footer-link">Roof Inspections</a>
              <a href="#maintenance-leak-detection" className="snr-footer-link">Leak Detection</a>
              <a href="#maintenance-gutter-cleaning" className="snr-footer-link">Gutter Cleaning</a>
              <a href="#maintenance-preventative-care" className="snr-footer-link">Preventative Care</a>
            </div>

            {/* Column 3: Logistics */}
            <div>
              <div className="snr-footer-column-title">Logistics</div>
              <a href="#logistics-emergency" className="snr-footer-link">Emergency Tarping</a>
              <a href="#logistics-asset-monitoring" className="snr-footer-link">Asset Monitoring</a>
              <a href="#logistics-debris-removal" className="snr-footer-link">Debris Removal</a>
              <a href="#logistics-drone-inspections" className="snr-footer-link">Drone Inspections</a>
            </div>

            {/* Column 4: Construction */}
            <div>
              <div className="snr-footer-column-title">Construction</div>
              <a href="#construction-new-roof" className="snr-footer-link">New Roof Installation</a>
              <a href="#construction-re-roofing" className="snr-footer-link">Commercial Re-Roofing</a>
              <a href="#construction-solar" className="snr-footer-link">Solar Integration</a>
              <a href="#construction-skylights" className="snr-footer-link">Skylight Builds</a>
            </div>

            {/* Column 5: Compliance */}
            <div>
              <div className="snr-footer-column-title">Compliance</div>
              <a href="#compliance-title24" className="snr-footer-link">Title 24 Cool Roof Audits</a>
              <a href="#compliance-certifications" className="snr-footer-link">Structural Certifications</a>
              <a href="#compliance-warranty" className="snr-footer-link">Warranty Management</a>
              <a href="#compliance-hazard" className="snr-footer-link">Hazard Mitigation</a>
            </div>

            {/* Column 6: Newsletter */}
            <div className="snr-newsletter">
              <div className="snr-newsletter-label">Seasonal Intel</div>
              <p className="snr-newsletter-desc">
                Quarterly roof health insights, regulatory updates, and
                maintenance schedules delivered to your inbox.
              </p>
              <form
                className="snr-newsletter-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.currentTarget.querySelector('input');
                  if (input?.value) {
                    alert('Thank you for subscribing! We\'ll be in touch.');
                    input.value = '';
                  }
                }}
              >
                <input
                  type="email"
                  className="snr-newsletter-input"
                  placeholder="you@company.com"
                  aria-label="Email address for newsletter"
                  required
                />
                <button
                  type="submit"
                  className="snr-newsletter-submit"
                  aria-label="Subscribe to newsletter"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Base Bar */}
      <div className="snr-base-bar">
        <div className="snr-base-bar-inner">
          <div className="snr-base-bar-left">
            &copy; {new Date().getFullYear()} S New Roof Inc. All rights reserved. &nbsp;|&nbsp; CA Lic. #B-987654 &nbsp;|&nbsp; C-39 Roofing Contractor
          </div>
          <div className="snr-base-bar-right">
            Built by Agency &nbsp;|&nbsp; CRM by Platform
          </div>
        </div>
      </div>
    </footer>
  );
}
