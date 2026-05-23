'use client';

/* ============================================================
   S NEW ROOF INC. — SERVICE CAPABILITIES GRID
   10 core service panels with inline SVG icons and "Read more" arrows
   ============================================================ */

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    id: 'new-roof-installation',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21H21" /><path d="M5 21V7L12 3L19 7V21" /><path d="M9 21V15H15V21" /><path d="M9 10H15" />
      </svg>
    ),
    title: 'New Roof Installation',
    description: 'Professional installation for more durable and resilient roofs.',
  },
  {
    id: 'roof-repair',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C12 2 6 9 6 14C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14C18 9 12 2 12 2Z" /><path d="M12 20V22" /><path d="M9 14H15" />
      </svg>
    ),
    title: 'Roof Repair',
    description: 'Accurate repairs for roofs with leaks and structural damage.',
  },
  {
    id: 'maintenance',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12S6.48 22 12 22Z" /><path d="M8 12L11 15L16 9" />
      </svg>
    ),
    title: 'Maintenance',
    description: 'Helping you extend the life of your roof.',
  },
  {
    id: 'plywood-decking',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9H21" /><path d="M3 15H21" /><path d="M9 3V21" />
      </svg>
    ),
    title: 'Plywood Decking',
    description: 'Essential reinforcement to prevent roof sagging.',
  },
  {
    id: 'fascia',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 6H21L19 18H5L3 6Z" /><path d="M7 10H17" />
      </svg>
    ),
    title: 'Fascia',
    description: "An excellent barrier to protect your home's structure.",
  },
  {
    id: 'shingles',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 12H6V22H18V12H22L12 2Z" /><path d="M9 22V16H15V22" />
      </svg>
    ),
    title: 'Shingles',
    description: 'Classic-style asphalt shingles for long-lasting roofs.',
  },
  {
    id: 'silicon',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C12 2 6 9 6 14C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14C18 9 12 2 12 2Z" /><path d="M9 14H15" /><path d="M12 14V20" />
      </svg>
    ),
    title: 'Silicon',
    description: 'Extend the life of your roof by protecting it from leaks.',
  },
  {
    id: 'tile',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Tile',
    description: 'Roofs that combine durability and aesthetics.',
  },
  {
    id: 'skylight',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" /><path d="M12 2V4" /><path d="M12 20V22" /><path d="M4.93 4.93L6.34 6.34" /><path d="M17.66 17.66L19.07 19.07" /><path d="M2 12H4" /><path d="M20 12H22" /><path d="M4.93 19.07L6.34 17.66" /><path d="M17.66 6.34L19.07 4.93" />
      </svg>
    ),
    title: 'Skylight',
    description: 'Natural lighting and ventilation for any type of structure.',
  },
  {
    id: 'flat-roof',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12H21" /><path d="M5 12V20" /><path d="M19 12V20" /><path d="M3 20H21" /><path d="M8 16H16" />
      </svg>
    ),
    title: 'Flat Roof',
    description: 'Designs that facilitate drainage and reduce maintenance.',
  },
];

export default function ServiceGrid() {
  return (
    <section className="snr-section" id="services" aria-labelledby="services-heading">
      <div className="snr-container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '48px' }}>
          <span className="snr-overline">Our Services</span>
          <h2 id="services-heading" className="snr-heading-lg" style={{ marginTop: '12px' }}>
            What We Do
          </h2>
          <p className="snr-body-sm" style={{ marginTop: '12px', color: 'var(--snr-text-muted)' }}>
            From new installations to emergency repairs, we provide comprehensive
            roofing solutions for every structure type.
          </p>
        </div>

        <div className="snr-services-grid">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="snr-service-card"
            >
              {service.icon}
              <h3 className="snr-service-card-title">{service.title}</h3>
              <p className="snr-service-card-desc">{service.description}</p>
              <a href="#contact" className="snr-service-card-more">
                Get a Quote
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
