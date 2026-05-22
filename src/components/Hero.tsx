'use client';

/* ============================================================
   S NEW ROOF INC. — HERO SECTION
   Full-viewport hero with background image, headline, and CTAs
   ============================================================ */

export default function Hero() {
  return (
    <section className="snr-hero" aria-labelledby="hero-heading">
      {/* Background Image */}
      <div className="snr-hero-bg" aria-hidden="true">
        <img
          src="/images/hero-roofing.png"
          alt=""
          loading="eager"
        />
      </div>

      {/* Hero Content */}
      <div className="snr-hero-content">
        <span className="snr-hero-label snr-animate-in snr-animate-delay-1">
          Commercial &amp; Residential Roofing
        </span>

        <h1 id="hero-heading" className="snr-hero-title snr-animate-in snr-animate-delay-2">
          Precision Roofing
          <br />
          for the Built
          <br />
          Environment
        </h1>

        <p className="snr-hero-subtitle snr-animate-in snr-animate-delay-3">
          From emergency tarping to Title 24 compliance — S New Roof Inc. delivers
          end-to-end roofing asset management with zero compromise.
        </p>

        <div className="snr-hero-actions snr-animate-in snr-animate-delay-4">
          <a href="#contact" className="snr-btn-primary">
            Request Assessment
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#maintenance" className="snr-btn-secondary">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
