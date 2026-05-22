'use client';

/* ============================================================
   S NEW ROOF INC. — ABOUT SECTION
   Corporate brief, trust data, and stat highlights
   ============================================================ */

export default function About() {
  return (
    <section className="snr-section-alt snr-about" id="about" aria-labelledby="about-heading">
      <div className="snr-container">
        <div className="snr-about-inner">
          {/* Left: Copy */}
          <div>
            <span className="snr-overline">About Us</span>
            <h2 id="about-heading" className="snr-heading-lg" style={{ marginTop: '12px' }}>
              Who are we?
            </h2>
            <p className="snr-body" style={{ marginTop: '20px' }}>
              We are committed to safeguarding your investment and upholding our reputation.
              With over two decades in the market, S New Roof is an expert in roof installation,
              repair, and inspection, holding all required licenses from the state of California.
              We ensure every project meets the highest standards of quality and safety.
            </p>

            <div className="snr-about-highlight">
              <p>
                Trust in our work is backed by our extensive warranty. Our estimates are completely
                free and without any obligation. However, it is a requirement that they be scheduled
                in advance, allowing our team to coordinate a visit to assess the condition of your
                roof for a more accurate estimate.
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="snr-about-stats">
            <div className="snr-about-stat">
              <div className="snr-about-stat-value">20+</div>
              <div className="snr-about-stat-label">Years of Experience</div>
            </div>
            <div className="snr-about-stat">
              <div className="snr-about-stat-value">2,400+</div>
              <div className="snr-about-stat-label">Projects Completed</div>
            </div>
            <div className="snr-about-stat">
              <div className="snr-about-stat-value">C-39</div>
              <div className="snr-about-stat-label">Licensed Contractor</div>
            </div>
            <div className="snr-about-stat">
              <div className="snr-about-stat-value">24/7</div>
              <div className="snr-about-stat-label">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
