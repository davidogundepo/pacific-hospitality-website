'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add(styles.visible); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${styles.animSection} ${className}`}>{children}</div>;
}

const properties = [
  {
    id: 1,
    name: 'The Meridian Residences',
    location: 'Ikoyi, Lagos',
    type: 'Residential',
    units: 48,
    image: '/images/A_stunning_exterior_202602192313.jpeg',
    features: ['24/7 Security', 'Gym & Pool', 'Smart Home Ready', 'Backup Power'],
  },
  {
    id: 2,
    name: 'Pacific Towers',
    location: 'Victoria Island, Lagos',
    type: 'Mixed-Use',
    units: 120,
    image: '/images/A_commanding_view_202602192313.jpeg',
    features: ['Commercial Spaces', 'Rooftop Lounge', 'Concierge', 'Parking'],
  },
  {
    id: 3,
    name: 'Greenview Estate',
    location: 'Lekki Phase 1, Lagos',
    type: 'Luxury Villa',
    units: 24,
    image: '/images/A_stunning_exterior_202602192313.jpeg',
    features: ['Private Gardens', 'Smart Security', 'Premium Finishes', 'Staff Quarters'],
  },
  {
    id: 4,
    name: 'Harbour Point',
    location: 'Banana Island, Lagos',
    type: 'Ultra Premium',
    units: 16,
    image: '/images/A_stunning_exterior_202602192313.jpeg',
    features: ['Waterfront Views', 'Private Jetty', 'Cinema Room', 'Wine Cellar'],
  },
  {
    id: 5,
    name: 'Onyx Apartments',
    location: 'Ikoyi, Lagos',
    type: 'Residential',
    units: 36,
    image: '/images/A_stunning_exterior_202602192313.jpeg',
    features: ['Gym & Spa', 'Children Play Area', 'EV Charging', 'Fiber Optic'],
  },
  {
    id: 6,
    name: 'The Crest',
    location: 'Victoria Island, Lagos',
    type: 'Commercial',
    units: 64,
    image: '/images/A_commanding_view_202602192313.jpeg',
    features: ['Grade-A Office', 'Conference Rooms', 'Cafeteria', 'Generator Backup'],
  },
];

const categories = ['All', 'Residential', 'Mixed-Use', 'Luxury Villa', 'Ultra Premium', 'Commercial'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filtered = filter === 'All' ? properties : properties.filter(p => p.type === filter);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge badge-light">Our Portfolio</span>
          <h1>Grade-A Managed Properties</h1>
          <p className={styles.heroText}>
            An interactive showcase of premium residential, commercial, and mixed-use properties
            under Pacific Hospitality&apos;s expert stewardship across Lagos.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-cream" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Units Under Management</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>15+</span>
              <span className={styles.statLabel}>Premium Properties</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>₦50B+</span>
              <span className={styles.statLabel}>Assets Under Management</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>6</span>
              <span className={styles.statLabel}>Lagos Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filtered.map((property) => (
              <AnimatedSection key={property.id} className={styles.propertyCard}>
                <div className={styles.propertyImage} onClick={() => setSelectedProperty(property)}>
                  <img src={property.image} alt={property.name} />
                  <div className={styles.propertyOverlay}>
                    <span className={styles.propertyType}>{property.type}</span>
                    <span className={styles.propertyView}>View Details</span>
                  </div>
                </div>
                <div className={styles.propertyInfo}>
                  <h3>{property.name}</h3>
                  <p className={styles.propertyLocation}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {property.location}
                  </p>
                  <div className={styles.propertyMeta}>
                    <span>{property.units} Units</span>
                    <span>Managed</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProperty && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProperty(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedProperty(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className={styles.modalImage}>
              <img src={selectedProperty.image} alt={selectedProperty.name} />
            </div>
            <div className={styles.modalContent}>
              <span className="badge">{selectedProperty.type}</span>
              <h2>{selectedProperty.name}</h2>
              <p className={styles.modalLocation}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {selectedProperty.location}
              </p>
              <p className={styles.modalDesc}>
                This Grade-A property is managed under Pacific Hospitality&apos;s premium stewardship model,
                featuring {selectedProperty.units} expertly maintained units with technology-enabled
                facility management through PPM Connect.
              </p>
              <h4>Property Features</h4>
              <div className={styles.modalFeatures}>
                {selectedProperty.features.map((f, i) => (
                  <span key={i}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ height: '80px' }}></div>
    </>
  );
}
