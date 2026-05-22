'use client';

/* ============================================================
   S NEW ROOF INC. — SERVICE PILLAR SECTIONS
   Four service verticals with anchor IDs matching mega menu routes
   ============================================================ */

interface PillarCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  id: string;
}

interface PillarSection {
  id: string;
  label: string;
  heading: string;
  description: string;
  cards: PillarCard[];
}

/* — Inline SVG Icons — */
const InspectionIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" /><path d="M21 21L16.65 16.65" /><path d="M11 8V11L13 13" />
  </svg>
);

const LeakIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C12 2 6 9 6 14C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14C18 9 12 2 12 2Z" /><path d="M12 20V22" />
  </svg>
);

const GutterIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 6H21L19 18H5L3 6Z" /><path d="M7 10H17" /><path d="M7 14H15" />
  </svg>
);

const PreventIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12S6.48 22 12 22Z" /><path d="M8 12L11 15L16 9" />
  </svg>
);

const EmergencyIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 9V13" /><path d="M12 17H12.01" /><path d="M10.29 5.51L2.81 18.49C2.46 19.08 2.46 19.81 2.81 20.4C3.15 20.97 3.77 21.32 4.43 21.32H19.57C20.23 21.32 20.85 20.97 21.19 20.4C21.54 19.81 21.54 19.08 21.19 18.49L13.71 5.51C13.37 4.94 12.76 4.59 12.09 4.59H11.91C11.24 4.59 10.63 4.94 10.29 5.51Z" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21H16" /><path d="M12 17V21" />
  </svg>
);

const DebrisIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 6H21" /><path d="M8 6V4H16V6" /><path d="M5 6L6 20H18L19 6" /><path d="M10 11V16" /><path d="M14 11V16" />
  </svg>
);

const DroneIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 12L7 7M12 12L17 7M12 12V18" /><circle cx="7" cy="7" r="2" /><circle cx="17" cy="7" r="2" /><circle cx="12" cy="18" r="2" /><path d="M5 3H9M15 3H19M5 3V7M19 3V7" />
  </svg>
);

const NewRoofIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21H21" /><path d="M5 21V7L12 3L19 7V21" /><path d="M9 21V15H15V21" /><path d="M9 10H15" />
  </svg>
);

const ReRoofIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L2 12H5V21H19V12H22L12 2Z" /><path d="M9 21V14H15V21" /><path d="M3 12L12 3L21 12" />
  </svg>
);

const SolarIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" /><path d="M12 2V4" /><path d="M12 20V22" /><path d="M4.93 4.93L6.34 6.34" /><path d="M17.66 17.66L19.07 19.07" /><path d="M2 12H4" /><path d="M20 12H22" /><path d="M4.93 19.07L6.34 17.66" /><path d="M17.66 6.34L19.07 4.93" />
  </svg>
);

const SkylightIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9H21" /><path d="M9 3V9" /><path d="M15 3V9" /><path d="M3 9L9 3" /><path d="M15 3L21 9" />
  </svg>
);

const Title24Icon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" /><path d="M14 2V8H20" /><path d="M9 13H15" /><path d="M9 17H13" />
  </svg>
);

const CertIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6" /><path d="M15.48 12.65L17 22L12 19L7 22L8.52 12.65" />
  </svg>
);

const WarrantyIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" /><path d="M9 12L11 14L15 10" />
  </svg>
);

const HazardIcon = () => (
  <svg className="snr-pillar-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L2 22H22L12 2Z" /><path d="M12 10V14" /><path d="M12 18H12.01" />
  </svg>
);

const pillarSections: PillarSection[] = [
  {
    id: 'maintenance',
    label: 'Maintenance',
    heading: 'Proactive Roof Preservation',
    description:
      'Extend the lifecycle of your roofing assets through systematic inspections, early leak detection, and scheduled preventative maintenance programs.',
    cards: [
      {
        icon: <InspectionIcon />,
        title: 'Roof Inspections',
        description: 'Comprehensive structural and membrane assessments with detailed condition reporting.',
        id: 'inspections',
      },
      {
        icon: <LeakIcon />,
        title: 'Leak Detection',
        description: 'Advanced moisture mapping and thermal imaging to identify intrusion points before they spread.',
        id: 'leak-detection',
      },
      {
        icon: <GutterIcon />,
        title: 'Gutter Cleaning',
        description: 'Full drainage system clearing, realignment, and flow optimization for commercial facilities.',
        id: 'gutter-cleaning',
      },
      {
        icon: <PreventIcon />,
        title: 'Preventative Care',
        description: 'Scheduled maintenance programs designed to maximize roof lifespan and minimize lifecycle costs.',
        id: 'preventative-care',
      },
    ],
  },
  {
    id: 'logistics',
    label: 'Logistics',
    heading: 'Rapid Response & Asset Intelligence',
    description:
      'Deploy emergency tarping within hours, monitor asset conditions remotely, and leverage drone technology for comprehensive site intelligence.',
    cards: [
      {
        icon: <EmergencyIcon />,
        title: 'Emergency Tarping',
        description: '24/7 rapid deployment of emergency protective coverings to prevent secondary water damage.',
        id: 'emergency',
      },
      {
        icon: <MonitorIcon />,
        title: 'Asset Monitoring',
        description: 'Real-time condition monitoring with IoT sensor integration and automated alert systems.',
        id: 'asset-monitoring',
      },
      {
        icon: <DebrisIcon />,
        title: 'Debris Removal',
        description: 'Storm debris clearing, hazard abatement, and site restoration for safe re-entry.',
        id: 'debris-removal',
      },
      {
        icon: <DroneIcon />,
        title: 'Drone Inspections',
        description: 'High-resolution aerial surveying with thermal and moisture detection capabilities.',
        id: 'drone-inspections',
      },
    ],
  },
  {
    id: 'construction',
    label: 'Construction',
    heading: 'New Build & Installation Excellence',
    description:
      'From ground-up roof installations to complex solar integrations, every project is engineered for longevity and code compliance.',
    cards: [
      {
        icon: <NewRoofIcon />,
        title: 'New Roof Installation',
        description: 'Complete roofing systems for new construction with manufacturer warranties up to 30 years.',
        id: 'new-roof',
      },
      {
        icon: <ReRoofIcon />,
        title: 'Commercial Re-Roofing',
        description: 'Full tear-off and replacement or recover systems engineered for minimal operational disruption.',
        id: 're-roofing',
      },
      {
        icon: <SolarIcon />,
        title: 'Solar Integration',
        description: 'Roof-mounted photovoltaic system design, installation, and structural load verification.',
        id: 'solar',
      },
      {
        icon: <SkylightIcon />,
        title: 'Skylight Builds',
        description: 'Daylighting system design and installation with energy modeling and condensation control.',
        id: 'skylights',
      },
    ],
  },
  {
    id: 'compliance',
    label: 'Compliance',
    heading: 'Regulatory Certainty & Risk Mitigation',
    description:
      'Navigate California Title 24 requirements, maintain certifications, and manage warranty obligations with precision documentation.',
    cards: [
      {
        icon: <Title24Icon />,
        title: 'Title 24 Cool Roof Audits',
        description: 'Energy compliance verification, solar reflectance testing, and Title 24 documentation packages.',
        id: 'title24',
      },
      {
        icon: <CertIcon />,
        title: 'Structural Certifications',
        description: 'Load analysis, wind uplift testing, and structural integrity certifications for permit compliance.',
        id: 'certifications',
      },
      {
        icon: <WarrantyIcon />,
        title: 'Warranty Management',
        description: 'Centralized warranty tracking, claim filing, and manufacturer coordination services.',
        id: 'warranty',
      },
      {
        icon: <HazardIcon />,
        title: 'Hazard Mitigation',
        description: 'Risk assessment, fire-rated assembly verification, and OSHA compliance documentation.',
        id: 'hazard',
      },
    ],
  },
];

export default function ServicePillars() {
  return (
    <main>
      {pillarSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="snr-pillar"
          aria-labelledby={`${section.id}-heading`}
        >
          <div className="snr-container">
            <div className="snr-pillar-header">
              <span className="snr-label">{section.label}</span>
              <h2 id={`${section.id}-heading`} className="snr-heading-lg" style={{ marginTop: '12px' }}>
                {section.heading}
              </h2>
              <p className="snr-body" style={{ marginTop: '16px' }}>
                {section.description}
              </p>
            </div>

            <div className="snr-pillar-grid">
              {section.cards.map((card) => (
                <article
                  key={card.id}
                  id={`${section.id}-${card.id}`}
                  className="snr-pillar-card"
                >
                  {card.icon}
                  <h3 className="snr-pillar-card-title">{card.title}</h3>
                  <p className="snr-pillar-card-desc">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
