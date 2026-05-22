'use client';

/* ============================================================
   S NEW ROOF INC. — STATS BAR
   Key performance metrics strip
   ============================================================ */

export default function Stats() {
  const stats = [
    { value: '2,400', label: 'Projects Completed', accent: '+' },
    { value: '18', label: 'Years in Operation', accent: '' },
    { value: '99.7', label: 'Client Retention Rate', accent: '%' },
    { value: '24', label: 'Hour Emergency Response', accent: '/7' },
  ];

  return (
    <section className="snr-stats" aria-label="Company statistics">
      <div className="snr-container">
        <div className="snr-stats-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="snr-stat-value">
                {stat.value}<span>{stat.accent}</span>
              </div>
              <div className="snr-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
