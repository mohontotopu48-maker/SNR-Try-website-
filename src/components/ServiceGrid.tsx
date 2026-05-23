'use client';

import { useState, useCallback } from 'react';

/* ============================================================
   S NEW ROOF INC. — SERVICE CAPABILITIES GRID
   10 core service panels with expandable detail views.
   Each service card expands into a full detail "page" with
   features, process steps, and CTA — all within the single-page layout.
   ============================================================ */

interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  process: string[];
  idealFor: string;
}

const services: ServiceDetail[] = [
  {
    id: 'new-roof-installation',
    icon: (
      <svg className="snr-service-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21H21" /><path d="M5 21V7L12 3L19 7V21" /><path d="M9 21V15H15V21" /><path d="M9 10H15" />
      </svg>
    ),
    title: 'New Roof Installation',
    description: 'Professional installation for more durable and resilient roofs.',
    fullDescription: 'Whether you are building a new home or need a complete roof replacement, our team delivers expert installation using premium materials from trusted manufacturers. We ensure every project meets California Title 24 standards and local building codes, providing you with a roof built to last for decades.',
    features: [
      'Complete tear-off and replacement',
      'Title 24 compliant cool roof options',
      'Premium Owens Corning, GAF & CertainTeed materials',
      '10-year workmanship warranty included',
      'Permit acquisition and inspection coordination',
      'Debris removal and site cleanup',
    ],
    process: ['Free on-site inspection & measurement', 'Material selection & color consultation', 'Professional installation with code compliance', 'Final inspection & warranty registration'],
    idealFor: 'Homeowners building new construction, or needing a full roof replacement due to age, severe damage, or major remodeling.',
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
    fullDescription: 'From minor leaks to significant storm damage, our repair specialists diagnose the root cause and deliver lasting solutions. We use thermal imaging and moisture mapping to detect hidden damage, ensuring we fix the problem — not just the symptoms.',
    features: [
      'Leak detection with thermal imaging',
      'Storm and wind damage repair',
      'Flashing and vent pipe repair',
      'Shingle and tile replacement',
      'Plywood and decking repair',
      'Same-day emergency tarping available',
    ],
    process: ['Thorough inspection & damage assessment', 'Detailed repair plan with transparent pricing', 'Expert repair using matching materials', 'Quality check & leak test verification'],
    idealFor: 'Homeowners experiencing leaks, missing shingles, storm damage, or visible wear on an otherwise sound roof.',
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
    fullDescription: 'Regular maintenance is the most cost-effective way to protect your roofing investment. Our comprehensive maintenance programs identify potential problems before they become expensive emergencies, extending your roof\'s lifespan by years and keeping your warranty valid.',
    features: [
      'Annual roof health inspections',
      'Gutter cleaning and debris removal',
      'Sealant and flashing touch-ups',
      'Moss and algae treatment',
      'Ventilation check and optimization',
      'Photo-documented condition reports',
    ],
    process: ['Schedule your maintenance visit', 'Comprehensive 21-point roof inspection', 'Preventive treatments and minor repairs', 'Detailed report with recommendations'],
    idealFor: 'Proactive homeowners who want to maximize their roof\'s lifespan and avoid costly surprise repairs.',
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
    fullDescription: 'The decking beneath your shingles is the backbone of your roof. Rotted, warped, or insufficient decking leads to sagging, leaks, and structural failure. We replace damaged sections with premium CDX plywood and OSB sheathing, ensuring a solid foundation for your new roof.',
    features: [
      'Full decking inspection during tear-off',
      'CDX plywood and OSB replacement',
      'Rot and termite damage remediation',
      'Proper spacing for thermal expansion',
      'Code-compliant fastening patterns',
      'Structural reinforcement where needed',
    ],
    process: ['Tear-off existing roofing material', 'Inspect decking for rot, warping, and damage', 'Replace compromised sections with new sheathing', 'Verify structural integrity before re-roofing'],
    idealFor: 'Homes undergoing re-roofing where decking damage is suspected, or older homes with original skip sheathing.',
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
    fullDescription: 'Fascia boards are the vertical edge that runs along the roofline, protecting your roof\'s rafters from weather damage and supporting your gutter system. Damaged or rotting fascia compromises both your roof and gutter performance, leading to water infiltration and structural decay.',
    features: [
      'Wood fascia repair and replacement',
      'Aluminum fascia wrap for low maintenance',
      'Seamless gutter integration',
      'Rot and water damage restoration',
      'Custom color matching',
      'Proper ventilation strip installation',
    ],
    process: ['Inspect fascia for rot, cracks, and detachment', 'Remove damaged sections carefully', 'Install new fascia with proper sealing', 'Integrate with gutter system and finish'],
    idealFor: 'Homes with visible fascia rot, peeling paint at roofline, sagging gutters, or water staining on exterior walls.',
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
    fullDescription: 'Asphalt shingles remain the most popular roofing material in America, offering an excellent balance of durability, aesthetics, and value. We install architectural and designer shingles from Owens Corning, GAF, CertainTeed, and Malarkey — backed by manufacturer warranties up to 50 years.',
    features: [
      'Architectural (dimensional) shingles',
      'Designer and luxury shingle lines',
      'Cool roof compliant options (Title 24)',
      'Impact-resistant Class 4 shingles',
      'Algae-resistant formulations',
      'Wide selection of colors and styles',
    ],
    process: ['Choose shingle style and color', 'Prepare decking and install ice & water shield', 'Professional shingle installation with proper nailing', 'Ridge cap, flashing, and final quality check'],
    idealFor: 'Most residential homes seeking a proven, cost-effective, and attractive roofing solution.',
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
    fullDescription: 'Silicone roof coatings provide a seamless, waterproof membrane that protects flat and low-slope roofs from UV damage, ponding water, and thermal cycling. This cost-effective solution can extend your existing roof\'s life by 10-15 years without the expense of a full replacement.',
    features: [
      '100% silicone elastomeric coating',
      'Seamless waterproof membrane',
      'UV and ponding water resistant',
      'Energy-saving reflective white finish',
      'No tear-off required — applied over existing roof',
      '20-year manufacturer warranty available',
    ],
    process: ['Thorough roof cleaning and preparation', 'Primer application for adhesion', 'Silicone coating applied in uniform layers', 'Cure time and final inspection'],
    idealFor: 'Commercial buildings and flat-roof homes with aging membranes looking for a cost-effective alternative to full replacement.',
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
    fullDescription: 'Clay and concrete tile roofs offer unmatched longevity — often lasting 75+ years with proper maintenance. Their natural thermal mass keeps homes cooler in summer and warmer in winter, while their distinctive beauty adds significant curb appeal and property value.',
    features: [
      'Clay and concrete tile installation',
      'Spanish, Mediterranean, and modern profiles',
      'Underlayment replacement specialists',
      'Broken tile matching and replacement',
      'Seismic retrofit for earthquake safety',
      'Lifetime material warranty from manufacturers',
    ],
    process: ['Structural assessment for tile weight capacity', 'Premium underlayment installation', 'Tile installation with proper spacing and flashing', 'Ridge and hip tile finishing with mortar'],
    idealFor: 'Homeowners seeking premium aesthetics, maximum longevity, and energy efficiency — especially in Mediterranean, Spanish, or Southwestern style homes.',
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
    fullDescription: 'Professionally installed skylights transform dark spaces with natural light while improving ventilation and energy efficiency. We install and repair VELUX and other premium skylight brands, ensuring leak-free performance with proper flashing and curb mounting techniques.',
    features: [
      'Fixed and vented skylight installation',
      'Solar-powered and electric options',
      'Leak-proof flashing systems',
      'Skylight replacement and repair',
      'Tubular daylighting devices (Sun Tunnels)',
      'Blinds and remote control integration',
    ],
    process: ['Assess optimal placement for light and structure', 'Professional curb mounting and flashing', 'Interior finish and drywall integration', 'Leak test and operation verification'],
    idealFor: 'Homeowners wanting to brighten dark rooms, improve ventilation, or replace aging skylights that leak.',
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
    fullDescription: 'Flat and low-slope roofing requires specialized materials and techniques distinct from pitched residential roofing. We install TPO, modified bitumen, built-up roofing (BUR), and silicone coating systems — all designed for superior water shedding and long-term performance on commercial and residential flat structures.',
    features: [
      'TPO single-ply membrane systems',
      'Modified bitumen (torch-applied & self-adhered)',
      'Built-up roofing (BUR) with gravel surfacing',
      'Silicone and acrylic coating systems',
      'Proper slope and drainage engineering',
      'Ponding water solutions',
    ],
    process: ['Drainage analysis and slope design', 'Substrate preparation and repair', 'Membrane or coating system installation', 'Flashing, penetration sealing, and final inspection'],
    idealFor: 'Commercial buildings, apartment complexes, and residential additions with flat or low-slope roof sections.',
  },
];

export default function ServiceGrid() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = useCallback((id: string) => {
    setExpandedService((prev) => (prev === id ? null : id));
  }, []);

  const closeService = useCallback(() => {
    setExpandedService(null);
  }, []);

  const activeService = services.find((s) => s.id === expandedService);

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

        {/* ── Service Cards Grid ── */}
        <div className="snr-services-grid">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className={`snr-service-card${expandedService === service.id ? ' snr-service-card--active' : ''}`}
            >
              {service.icon}
              <h3 className="snr-service-card-title">{service.title}</h3>
              <p className="snr-service-card-desc">{service.description}</p>
              <button
                type="button"
                className="snr-service-card-more"
                onClick={() => toggleService(service.id)}
                aria-expanded={expandedService === service.id}
                aria-controls={`service-detail-${service.id}`}
              >
                {expandedService === service.id ? 'Close Details' : 'Learn More'}
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  style={{
                    transform: expandedService === service.id ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </article>
          ))}
        </div>

        {/* ── Expanded Service Detail Page ── */}
        {activeService && (
          <div
            id={`service-detail-${activeService.id}`}
            className="snr-service-detail-page"
            role="region"
            aria-label={`${activeService.title} details`}
          >
            {/* Close Button */}
            <button
              type="button"
              className="snr-service-detail-close"
              onClick={closeService}
              aria-label="Close service details"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="snr-service-detail-inner">
              {/* Header */}
              <div className="snr-service-detail-header">
                <div className="snr-service-detail-icon-wrap">
                  {activeService.icon}
                </div>
                <div>
                  <span className="snr-overline-orange">Service Detail</span>
                  <h3 className="snr-service-detail-title">{activeService.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="snr-service-detail-desc">{activeService.fullDescription}</p>

              {/* Two-column: Features + Process */}
              <div className="snr-service-detail-columns">
                {/* Features */}
                <div className="snr-service-detail-block">
                  <h4 className="snr-service-detail-block-title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    What&apos;s Included
                  </h4>
                  <ul className="snr-service-detail-list">
                    {activeService.features.map((feature) => (
                      <li key={feature}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8.5L6.5 12L13 4.5" stroke="var(--brand-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="snr-service-detail-block">
                  <h4 className="snr-service-detail-block-title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12S6.48 22 12 22Z" /><path d="M12 6V12L16 14" />
                    </svg>
                    Our Process
                  </h4>
                  <ol className="snr-service-detail-steps">
                    {activeService.process.map((step, idx) => (
                      <li key={step}>
                        <span className="snr-service-detail-step-num">{idx + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Ideal For */}
              <div className="snr-service-detail-ideal">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                </svg>
                <span><strong>Ideal For:</strong> {activeService.idealFor}</span>
              </div>

              {/* CTA */}
              <div className="snr-service-detail-cta">
                <a href="#contact" className="snr-btn-primary" onClick={closeService}>
                  Get a Free Estimate
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="tel:7147704756" className="snr-btn-outline">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 2H9L11 7L8.5 8.5C9.57 11.15 11.85 13.43 14.5 14.5L16 12L21 14V18C21 19.1 20.1 20 19 20C10.16 20 3 12.84 3 4C3 2.9 3.9 2 5 2Z" transform="scale(0.7) translate(4,4)" />
                  </svg>
                  Call (714) 770-4756
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
