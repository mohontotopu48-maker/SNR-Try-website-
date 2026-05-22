'use client';

/* ============================================================
   S NEW ROOF INC. — DIFFERENTIATORS & VERSATILITY MATRIX
   5 core pillars + Material Integrity Block + Building Verticals
   ============================================================ */

const pillars = [
  {
    icon: (
      <svg className="snr-diff-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 6V12L16 14" />
      </svg>
    ),
    title: 'Over 20 Years of Experience',
    desc: 'Most innovative techniques.',
  },
  {
    icon: (
      <svg className="snr-diff-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" /><path d="M9 12L11 14L15 10" />
      </svg>
    ),
    title: 'Unmatched Warranty',
    desc: 'Comprehensive service coverage.',
  },
  {
    icon: (
      <svg className="snr-diff-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 6V4H18V6" /><path d="M7 12H17" />
      </svg>
    ),
    title: 'Quality Materials',
    desc: 'Trusted brand partnerships.',
  },
  {
    icon: (
      <svg className="snr-diff-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" /><path d="M14 2V8H20" /><path d="M9 15L11 17L15 13" />
      </svg>
    ),
    title: 'Licensed and Insured',
    desc: 'State of California required licenses and insurance to protect your home.',
  },
  {
    icon: (
      <svg className="snr-diff-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 9V13" /><path d="M12 17H12.01" /><path d="M10.29 5.51L2.81 18.49C2.46 19.08 2.46 19.81 2.81 20.4C3.15 20.97 3.77 21.32 4.43 21.32H19.57C20.23 21.32 20.85 20.97 21.19 20.4C21.54 19.81 21.54 19.08 21.19 18.49L13.71 5.51C13.37 4.94 12.76 4.59 12.09 4.59H11.91C11.24 4.59 10.63 4.94 10.29 5.51Z" />
      </svg>
    ),
    title: 'Emergency Service',
    desc: 'Available 24/7 for urgent needs.',
  },
];

export default function Differentiators() {
  return (
    <section className="snr-section" id="differentiators" aria-labelledby="diff-heading">
      <div className="snr-container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '48px' }}>
          <span className="snr-overline">Why Choose Us</span>
          <h2 id="diff-heading" className="snr-heading-lg" style={{ marginTop: '12px' }}>
            Built on Trust, Backed by Results
          </h2>
        </div>

        <div className="snr-diff-grid">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="snr-diff-card">
              {pillar.icon}
              <div className="snr-diff-card-title">{pillar.title}</div>
              <div className="snr-diff-card-desc">{pillar.desc}</div>
            </div>
          ))}
        </div>

        {/* Material Integrity Block with image_34378c.jpg */}
        <div className="snr-materials-block">
          <div className="snr-materials-content">
            <h3 className="snr-materials-title">
              We use only the best materials for your project.
            </h3>
            <p className="snr-materials-desc">
              Our good relationships with reputable brands allow us to offer you peace
              of mind through our extensive warranties.
            </p>
          </div>
          <div className="snr-materials-image">
            <img
              src="/images/image_34378c.jpg"
              alt="Our trusted material supplier brands — Owens Corning, Polyglass, GAF, CertainTeed"
            />
          </div>
        </div>

        {/* Building Versatility Badges */}
        <div className="snr-verticals">
          <span className="snr-vertical-tag">Residential</span>
          <span className="snr-vertical-divider">|</span>
          <span className="snr-vertical-tag">Commercial Buildings</span>
          <span className="snr-vertical-divider">|</span>
          <span className="snr-vertical-tag">Apartment Complexes</span>
        </div>
      </div>
    </section>
  );
}
