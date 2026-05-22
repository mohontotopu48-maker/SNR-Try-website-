'use client';

import { useState } from 'react';

/* ============================================================
   S NEW ROOF INC. — PREMIUM DARK FOOTER
   Deep navy background, 3-column grid, social icons with glow
   hover, accent phone callout, sub-footer bar, privacy compliance
   ============================================================ */

export default function Footer() {
  const [complianceOpen, setComplianceOpen] = useState(false);

  return (
    <footer role="contentinfo" id="contact">
      {/* CTA Headline — light background strip above dark footer */}
      <div className="snr-footer-cta-strip">
        <div className="snr-container" style={{ textAlign: 'center', padding: '56px 24px' }}>
          <h2 className="snr-heading-lg" style={{ color: 'var(--snr-text-heading)' }}>
            Let&apos;s Make Your Project a Reality
          </h2>
          <p className="snr-body-sm" style={{ marginTop: '12px', color: 'var(--snr-text-muted)', maxWidth: '480px', margin: '12px auto 0' }}>
            Contact us today for a free estimate and let our experts bring your roofing project to life.
          </p>
        </div>
      </div>

      {/* Dark Premium Footer */}
      <div className="snr-footer-dark">
        <div className="snr-container">
          <div className="snr-footer-dark-grid">
            {/* ── Left Column: Brand ── */}
            <div className="snr-footer-brand-col">
              {/* Logo Badge */}
              <div className="snr-footer-logo-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="190 340 230 110"
                  style={{ height: 44, width: 'auto', display: 'block' }}
                  aria-hidden="true"
                >
                  <defs>
                    <style>{`
                      .fst0, .fst1 { fill: #fff; }
                      .fst1 { stroke: #fff; stroke-miterlimit: 10; stroke-width: 12px; }
                      .fst2 { fill: #f68c1f; }
                    `}</style>
                  </defs>
                  <path className="fst1" d="M219.03,417.15l82.1,16.74c3.17.67,6.6.59,9.79-.05l82.44-16.54c6.1-1.23,10.21-4.63,10.21-8.46v-25.64c0-3.82-4.08-7.21-10.15-8.45l-82.45-15.92c-3.19-.65-6.66-.64-9.84.02l-82.07,16.38c-6.01,1.26-10.03,4.63-10.03,8.42v25.08c0,3.78,4.01,7.15,10,8.41Z" />
                  <g>
                    <path d="M305.79,436.36c-1.76,0-3.46-.17-5.07-.51l-82.09-16.73c-7.05-1.48-11.6-5.56-11.6-10.38v-25.08c0-4.83,4.56-8.9,11.62-10.38l82.09-16.38c1.72-.36,3.53-.54,5.37-.54s3.56.18,5.26.52l82.43,15.92c7.05,1.44,11.77,5.62,11.77,10.41v25.64c0,4.81-4.75,9-11.81,10.42l-82.44,16.54c-1.83.37-3.69.55-5.52.55h0Z" />
                    <path className="fst2" d="M306.11,358.36c1.64,0,3.28.16,4.86.48l82.45,15.92c6.07,1.24,10.15,4.63,10.15,8.45v25.64c0,3.83-4.11,7.23-10.21,8.46l-82.44,16.54c-1.67.33-3.4.51-5.13.51-1.58,0-3.15-.15-4.66-.47l-82.1-16.74c-5.99-1.26-10-4.63-10-8.41v-25.08c0-3.79,4.02-7.16,10.03-8.42l82.07-16.38c1.61-.34,3.3-.51,4.98-.51M306.11,354.36c-1.98,0-3.93.2-5.8.59l-82.04,16.37c-8.06,1.69-13.25,6.53-13.25,12.34v25.08c0,5.8,5.17,10.64,13.18,12.33l82.13,16.74c1.72.36,3.56.55,5.46.55s3.96-.2,5.92-.59l82.44-16.54c8.15-1.64,13.42-6.5,13.42-12.38v-25.64c0-5.86-5.24-10.71-13.35-12.36l-82.49-15.93c-1.79-.36-3.69-.55-5.62-.55h0Z" />
                  </g>
                  <g>
                    <path className="fst0" d="M231.58,409.83h-11.56c-.75,0-1.4-.27-1.93-.8-.54-.53-.81-1.17-.81-1.92v-10.17l5.46,3.23v4.22h6.12v-3.34l-10.13-6.12c-.96-.56-1.44-1.36-1.44-2.4v-6.91c0-.75.27-1.39.81-1.92.54-.53,1.18-.8,1.93-.8h11.6c.75,0,1.39.27,1.92.8.53.53.8,1.17.8,1.92v9.46l-5.44-3.28v-3.45h-6.16v2.65l10.25,6.19c.86.58,1.3,1.35,1.31,2.33v7.6c0,.75-.27,1.39-.8,1.92s-1.17.8-1.92.8Z" />
                    <path className="fst0" d="M265.2,409.81h-4.39l-6.7-13v13h-5.44v-26.89h4.39l6.68,12.95v-13h5.46v26.95Z" />
                    <path className="fst0" d="M282.2,409.81h-15.65v-26.95h15.65v5.46h-10.21v5.29h8.65v5.46h-8.65v5.27h10.21v5.46Z" />
                    <path className="fst0" d="M304.94,409.79h-5.31l-2.23-9.5-2.21,9.5h-5.31l-6.32-26.87,5.59-.02,3.38,14.39,2.08-8.88-1.28-5.5,2.57-.02v-.02l.02.02h3l3.38,14.39,3.38-14.41,5.57.04-6.31,26.87Z" />
                    <path className="fst0" d="M342.44,409.85l-5.44-.09.04-1.46c.03-.46.04-1.27.04-2.42,0-1.84-.21-3.31-.62-4.41-.58-1.58-1.67-2.38-3.28-2.42h-2.16v10.77h-5.44v-26.95h11.5c1.36,0,2.54.49,3.54,1.47.99.98,1.49,2.17,1.49,3.57v6.08c0,1.31-.44,2.44-1.31,3.38.5.84.87,1.73,1.12,2.67.24.94.4,1.89.48,2.83.07.94.11,1.83.11,2.66l-.06,4.32ZM336.66,393.58v-5.25h-5.65v5.25h5.65Z" />
                    <path className="fst0" d="M355.28,409.81h-6.31c-1.41,0-2.62-.5-3.62-1.51s-1.5-2.21-1.5-3.61v-16.7c0-1.4.5-2.61,1.51-3.61,1.01-1.01,2.21-1.51,3.61-1.51h6.31c1.4,0,2.6.5,3.61,1.51,1.01,1.01,1.51,2.21,1.51,3.61v16.7c0,1.4-.5,2.61-1.5,3.61s-2.21,1.51-3.62,1.51ZM354.94,404.35v-16.03h-5.63v16.03h5.63Z" />
                    <path className="fst0" d="M373.18,409.81h-6.31c-1.41,0-2.62-.5-3.62-1.51s-1.5-2.21-1.5-3.61v-16.7c0-1.4.5-2.61,1.51-3.61,1.01-1.01,2.21-1.51,3.61-1.51h6.31c1.4,0,2.6.5,3.61,1.51,1.01,1.01,1.51,2.21,1.51,3.61v16.7c0,1.4-.5,2.61-1.5,3.61s-2.21,1.51-3.62,1.51ZM372.84,404.35v-16.03h-5.63v16.03h5.63Z" />
                    <path className="fst0" d="M385.11,409.81h-5.46v-26.95h15.67v5.46h-10.21v5.29h8.65v5.46h-8.65v10.73Z" />
                  </g>
                </svg>
              </div>

              {/* Tagline */}
              <p className="snr-footer-tagline">
                Quality Roofing, Trusted Since 2003.<br />
                Licensed C-39 #1122623
              </p>

              {/* Phone Callout — neon accent */}
              <a href="tel:7147704756" className="snr-footer-phone-accent">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 18, height: 18, flexShrink: 0 }}>
                  <path d="M5 2H9L11 7L8.5 8.5C9.57 11.15 11.85 13.43 14.5 14.5L16 12L21 14V18C21 19.1 20.1 20 19 20C10.16 20 3 12.84 3 4C3 2.9 3.9 2 5 2Z" transform="scale(0.83) translate(2,2)" />
                </svg>
                714-770-4756
              </a>

              {/* Address */}
              <div className="snr-footer-address-dark">
                1415 E 17th Street, Suite 220 A<br />
                Santa Ana, CA 92705
              </div>
            </div>

            {/* ── Middle Column: Our Services ── */}
            <div className="snr-footer-services-col">
              <div className="snr-footer-dark-title">Our Services</div>
              <nav aria-label="Footer services navigation">
                <a href="#services" className="snr-footer-dark-link">Roof Repair</a>
                <a href="#services" className="snr-footer-dark-link">Roof Inspection</a>
                <a href="#services" className="snr-footer-dark-link">New Roof Installation</a>
                <a href="#services" className="snr-footer-dark-link">Commercial Roofing</a>
                <a href="#services" className="snr-footer-dark-link">Emergency Tarping</a>
                <a href="#services" className="snr-footer-dark-link">Solar Integration</a>
              </nav>
            </div>

            {/* ── Right Column: Connect With Us ── */}
            <div className="snr-footer-social-col">
              <div className="snr-footer-dark-title">Connect With Us</div>
              <div className="snr-footer-social-row">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snr-footer-social-btn"
                  aria-label="Follow us on Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: 18, height: 18 }}>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snr-footer-social-btn"
                  aria-label="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: 18, height: 18 }}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snr-footer-social-btn"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: 18, height: 18 }}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              {/* Email link */}
              <a href="mailto:info@snewroof.com" className="snr-footer-dark-link snr-footer-email-link">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 14, height: 14, flexShrink: 0 }}>
                  <path d="M3 5L10 10L17 5" /><rect x="2" y="4" width="16" height="12" rx="1.5" />
                </svg>
                info@snewroof.com
              </a>

              {/* Counties */}
              <div className="snr-footer-counties">
                Serving: Los Angeles · Riverside · Orange County
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider Line ── */}
        <div className="snr-footer-divider">
          <div className="snr-container" style={{ padding: 0 }}>
            <div className="snr-footer-divider-line" />
          </div>
        </div>

        {/* ── Sub-Footer / Baseboard ── */}
        <div className="snr-sub-footer">
          <div className="snr-container">
            <div className="snr-sub-footer-inner">
              <div className="snr-sub-footer-left">
                <span>© 2026 S New Roof Inc. All rights reserved.</span>
                <button
                  type="button"
                  className="snr-privacy-link"
                  onClick={() => setComplianceOpen(true)}
                  aria-label="Open privacy choices form"
                >
                  Your Privacy Choices
                </button>
              </div>
              <div className="snr-sub-footer-right">
                Powered by NXLBYLDR CRM | managed by VSUALdigitalmedia.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Compliance / Privacy Choices Modal ── */}
      <div
        className={`snr-compliance-overlay ${complianceOpen ? 'snr-compliance-overlay--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Privacy Choices — Do Not Sell or Share My Personal Information"
        onClick={(e) => { if (e.target === e.currentTarget) setComplianceOpen(false); }}
      >
        <div className="snr-compliance-modal">
          <div className="snr-compliance-header">
            <h2 className="snr-compliance-title">Your Privacy Choices</h2>
            <button
              type="button"
              className="snr-compliance-close"
              onClick={() => setComplianceOpen(false)}
              aria-label="Close privacy choices"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <p className="snr-compliance-intro">
            Under the California Consumer Privacy Act (CCPA), you have the right to
            opt out of the sale or sharing of your personal information. Use this form
            to submit your request.
          </p>

          <form
            className="snr-compliance-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Your privacy request has been submitted. We will process it within 30 days as required by law.');
              setComplianceOpen(false);
            }}
          >
            <div className="snr-compliance-field">
              <label htmlFor="privacy-name" className="snr-compliance-label">Full Name</label>
              <input
                id="privacy-name"
                type="text"
                className="snr-compliance-input"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="snr-compliance-field">
              <label htmlFor="privacy-email" className="snr-compliance-label">Email Address</label>
              <input
                id="privacy-email"
                type="email"
                className="snr-compliance-input"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="snr-compliance-field">
              <label htmlFor="privacy-phone" className="snr-compliance-label">Phone Number (optional)</label>
              <input
                id="privacy-phone"
                type="tel"
                className="snr-compliance-input"
                placeholder="714-000-0000"
              />
            </div>

            <div className="snr-compliance-field">
              <label className="snr-compliance-label">Request Type</label>
              <div className="snr-compliance-radio-group">
                <label className="snr-compliance-radio-label">
                  <input type="radio" name="request-type" value="do-not-sell" defaultChecked className="snr-compliance-radio" />
                  <span>Do Not Sell or Share My Personal Information</span>
                </label>
                <label className="snr-compliance-radio-label">
                  <input type="radio" name="request-type" value="delete" className="snr-compliance-radio" />
                  <span>Delete My Personal Information</span>
                </label>
                <label className="snr-compliance-radio-label">
                  <input type="radio" name="request-type" value="access" className="snr-compliance-radio" />
                  <span>Access My Personal Information</span>
                </label>
              </div>
            </div>

            <div className="snr-compliance-field">
              <label htmlFor="privacy-details" className="snr-compliance-label">Additional Details (optional)</label>
              <textarea
                id="privacy-details"
                className="snr-compliance-textarea"
                placeholder="Any additional information about your request..."
                rows={3}
              />
            </div>

            <p className="snr-compliance-disclaimer">
              By submitting this form, you confirm that the information provided is accurate
              and that you are the consumer whose personal information is the subject of this request,
              or you are authorized to act on their behalf.
            </p>

            <button type="submit" className="snr-compliance-submit">
              Submit Privacy Request
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
