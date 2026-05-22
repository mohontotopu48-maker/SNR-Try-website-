'use client';

/* ============================================================
   S NEW ROOF INC. — FOOTER
   CTA headline, brand, regions, contact, newsletter, base bar
   ============================================================ */

export default function Footer() {
  return (
    <footer role="contentinfo" id="contact">
      {/* Main Footer */}
      <div className="snr-footer">
        <div className="snr-container">
          {/* CTA Headline */}
          <div className="snr-footer-cta">
            <h2 className="snr-heading-lg">Let&apos;s Make Your Project a Reality</h2>
            <p className="snr-body-sm" style={{ marginTop: '12px', color: 'var(--snr-text-muted)', maxWidth: '480px', margin: '12px auto 0' }}>
              Contact us today for a free estimate and let our experts bring your roofing project to life.
            </p>
          </div>

          <div className="snr-footer-grid">
            {/* Column 1: Brand & Address */}
            <div>
              <div style={{ marginBottom: '12px' }}>
                <span style={{
                  fontFamily: 'var(--snr-font-heading)',
                  fontSize: '0.875rem',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--snr-text-heading)',
                }}>
                  S New Roof Inc.
                </span>
              </div>

              <div className="snr-footer-license" style={{ marginTop: '0', color: 'var(--snr-text-body)' }}>
                License Number: 1122623
              </div>

              <div className="snr-footer-address" style={{ marginTop: '12px' }}>
                1415 E 17th Street Suite 220 A<br />
                Santa Ana, CA 92705
              </div>
            </div>

            {/* Column 2: Counties Covered */}
            <div>
              <div className="snr-footer-column-title">Counties Covered</div>
              <div className="snr-footer-link" style={{ cursor: 'default' }}>Los Angeles County</div>
              <div className="snr-footer-link" style={{ cursor: 'default' }}>Riverside County</div>
              <div className="snr-footer-link" style={{ cursor: 'default' }}>Orange County</div>
            </div>

            {/* Column 3: Direct Channels */}
            <div>
              <div className="snr-footer-column-title">Contact</div>
              <div className="snr-footer-contact-item">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 2H6L7.5 6.5L5.5 8C6.57 10.15 8.35 11.93 10.5 13L12 11L16 12.5V15C16 15.55 15.55 16 15 16C7.82 16 2 10.18 2 3C2 2.45 2.45 2 3 2Z" />
                </svg>
                714-770-4756
              </div>
              <div className="snr-footer-contact-item">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 4L8 9L14 4" /><rect x="1" y="3" width="14" height="10" rx="1" />
                </svg>
                info@snewroof.com
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="snr-newsletter">
              <div className="snr-newsletter-label">Newsletter</div>
              <p className="snr-newsletter-desc">
                Receive information — Quarterly roof health insights,
                regulatory updates, and maintenance schedules.
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
            Copyright &copy; 2026 Snewroof. All rights reserved.
          </div>
          <div className="snr-base-bar-right">
            Development and CRM Agency Credits.
          </div>
        </div>
      </div>
    </footer>
  );
}
