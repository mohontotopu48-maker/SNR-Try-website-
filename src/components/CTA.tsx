'use client';

/* ============================================================
   S NEW ROOF INC. — CTA SECTION
   Call to action before footer
   ============================================================ */

export default function CTA() {
  return (
    <section className="snr-cta" id="contact" aria-labelledby="cta-heading">
      <div className="snr-container">
        <div className="snr-cta-inner">
          <span className="snr-label">Get Started</span>
          <h2 id="cta-heading" className="snr-heading-xl snr-cta-title" style={{ marginTop: '12px' }}>
            Protect Your Roofing Assets
          </h2>
          <p className="snr-body snr-cta-desc" style={{ marginTop: '16px' }}>
            Schedule a complimentary roof condition assessment. Our team will deliver a
            comprehensive report with prioritized recommendations — no obligation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="tel:+18005551234" className="snr-btn-primary">
              Call (800) 555-1234
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="mailto:info@snewroof.com" className="snr-btn-secondary">
              Email Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
