'use client';

import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import BrandLogoWhite from '@/components/BrandLogo';

/* ============================================================
   S NEW ROOF INC. — PREMIUM DARK FOOTER
   Deep navy background, 3-column grid, social icons with glow
   hover, accent phone callout, sub-footer bar, privacy compliance
   ============================================================ */

export default function Footer() {
  const [complianceOpen, setComplianceOpen] = useState(false);
  const { toast } = useToast();

  const closeCompliance = useCallback(() => {
    setComplianceOpen(false);
  }, []);

  // Close compliance modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && complianceOpen) {
        closeCompliance();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [complianceOpen, closeCompliance]);

  // Lock body scroll when compliance modal is open
  useEffect(() => {
    document.body.style.overflow = complianceOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [complianceOpen]);

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
              {/* Logo Badge — shared component */}
              <div className="snr-footer-logo-wrap">
                <BrandLogoWhite height={44} />
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
                (714) 770-4756
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
                <span>© {new Date().getFullYear()} S New Roof Inc. All rights reserved.</span>
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
        onClick={(e) => { if (e.target === e.currentTarget) closeCompliance(); }}
      >
        <div className="snr-compliance-modal">
          <div className="snr-compliance-header">
            <h2 className="snr-compliance-title">Your Privacy Choices</h2>
            <button
              type="button"
              className="snr-compliance-close"
              onClick={closeCompliance}
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
              toast({ title: 'Request Submitted', description: 'Your privacy request has been submitted. We will process it within 30 days as required by law.' });
              closeCompliance();
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
