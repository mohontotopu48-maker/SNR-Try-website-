'use client';

/* ============================================================
   S NEW ROOF INC. — HERO SECTION
   Split-screen hero using image_343083.jpg with text overlays
   ============================================================ */

export default function Hero() {
  return (
    <section className="snr-hero" aria-labelledby="hero-heading">
      <div className="snr-container">
        <div className="snr-hero-inner">
          {/* Left: Content */}
          <div className="snr-hero-content">
            <span className="snr-hero-overline snr-animate-in snr-animate-delay-1">
              Welcome
            </span>

            <h1 id="hero-heading" className="snr-hero-title snr-animate-in snr-animate-delay-2">
              Quality and Trusted Roofing Experts
            </h1>

            <p className="snr-hero-subtitle snr-animate-in snr-animate-delay-3">
              We are the go-to provider for roof repair, inspection, and new roof
              installation in California.
            </p>

            <div className="snr-hero-actions snr-animate-in snr-animate-delay-4">
              <a href="tel:7147704756" className="snr-btn-primary">
                {/* Phone icon */}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 2H6L7.5 6.5L5.5 8C6.57 10.15 8.35 11.93 10.5 13L12 11L16 12.5V15C16 15.55 15.55 16 15 16C7.82 16 2 10.18 2 3C2 2.45 2.45 2 3 2Z" fill="currentColor" />
                </svg>
                Call Us
              </a>
              <a href="#services" className="snr-btn-outline">
                Our Services
              </a>
            </div>

            <div className="snr-hero-proof snr-animate-in snr-animate-delay-4">
              <div className="snr-hero-proof-item">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1L10.5 5.5L15.5 6.3L11.75 9.8L12.6 14.8L8 12.3L3.4 14.8L4.25 9.8L0.5 6.3L5.5 5.5L8 1Z" fill="currentColor" />
                </svg>
                20+ Years of Experience
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="snr-hero-image snr-animate-in snr-animate-delay-3">
            <img
              src="/images/image_343083.jpg"
              alt="Professional roofing installation by S New Roof Inc."
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
