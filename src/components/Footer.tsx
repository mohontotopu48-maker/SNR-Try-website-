'use client';

/* ============================================================
   S NEW ROOF INC. — FOOTER
   Compliance utility footer with brand, regions, contact, newsletter
   ============================================================ */

export default function Footer() {
  return (
    <footer role="contentinfo">
      {/* Main Footer */}
      <div className="snr-footer">
        <div className="snr-container">
          <div className="snr-footer-grid">
            {/* Column 1: Brand & Address */}
            <div>
              <a href="#" className="snr-brand" style={{ display: 'inline-flex' }} aria-label="S New Roof Inc. — Home">
                <span className="snr-brand-name">S New Roof Inc.</span>
                <span className="snr-brand-license">C-39 Lic. #1122623</span>
              </a>

              <p className="snr-footer-brand-desc">
                Full-spectrum commercial and residential roofing asset management.
                Licensed, bonded, and insured across California.
              </p>

              <div className="snr-footer-address">
                1415 E 17th Street Suite 220 A<br />
                Santa Ana, CA 92705
              </div>

              <div className="snr-footer-license">
                C-39 License Number: 1122623
              </div>
            </div>

            {/* Column 2: Regional Coverage */}
            <div>
              <div className="snr-footer-column-title">Regional Coverage</div>
              <div className="snr-footer-link" style={{ cursor: 'default' }}>Los Angeles County</div>
              <div className="snr-footer-link" style={{ cursor: 'default' }}>Riverside County</div>
              <div className="snr-footer-link" style={{ cursor: 'default' }}>Orange County</div>
            </div>

            {/* Column 3: Contact Channels */}
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
              <div className="snr-newsletter-label">Seasonal Intel</div>
              <p className="snr-newsletter-desc">
                Receive Information — Quarterly roof health insights,
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
            CRM by Platform &nbsp;|&nbsp; Site by Agency
          </div>
        </div>
      </div>
    </footer>
  );
}
