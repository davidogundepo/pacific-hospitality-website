'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

function useInView(ref, threshold = 0.15) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);
}

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  useInView(ref);
  return (
    <div ref={ref} className={`${styles.animSection} ${className}`}>
      {children}
    </div>
  );
}

function StatCounter({ value, label, suffix = '' }) {
  const ref = useRef(null);
  useInView(ref);
  return (
    <div ref={ref} className={`${styles.stat} ${styles.animSection}`}>
      <span className={styles.statValue}>{value}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Technology-Enabled Property Management
          </div>
          <h1 className={styles.heroTitle}>
            <span>Redefining</span>
            <span className="text-gradient">Grade-A Asset</span>
            <span>Stewardship</span>
          </h1>
          <p className={styles.heroText}>
            Pacific Hospitality Company delivers premium property management through our proprietary technology platform — where hospitality meets innovation in Lagos, Nigeria.
          </p>
          <div className={styles.heroActions}>
            <Link href="/ppm-connect" className="btn btn-primary btn-lg">
              Discover PPM Connect
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/portfolio" className="btn btn-secondary btn-lg">
              View Portfolio
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>500+</span>
              <span className={styles.heroStatLabel}>Units Managed</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>98%</span>
              <span className={styles.heroStatLabel}>Tenant Satisfaction</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>15+</span>
              <span className={styles.heroStatLabel}>Premium Properties</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
        </div>
      </section>

      {/* ============ ABOUT / HOSPITALITY LENS ============ */}
      <section className={`section ${styles.about}`}>
        <AnimatedSection className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                alt="Premium apartment building"
              />
              <div className={styles.aboutImageAccent} />
            </div>
            <div className={styles.aboutContent}>
              <div className="accent-line" />
              <span className="badge">Our Philosophy</span>
              <h2>The Hospitality Lens</h2>
              <p className={styles.aboutLead}>
                We don't just manage properties — we curate living experiences. Pacific Hospitality applies a hospitality-grade approach to every facet of property management.
              </p>
              <p>
                From the moment a resident walks through our doors, they experience a level of care and attention reserved for the world&apos;s finest hotels. Our team combines deep real estate expertise with cutting-edge technology to deliver transparent, efficient, and premium asset stewardship.
              </p>
              <div className={styles.aboutFeatures}>
                <div className={styles.aboutFeature}>
                  <div className={styles.aboutFeatureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <strong>Trust & Transparency</strong>
                    <span>Real-time reporting and communication</span>
                  </div>
                </div>
                <div className={styles.aboutFeature}>
                  <div className={styles.aboutFeatureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <div>
                    <strong>24/7 Responsiveness</strong>
                    <span>Round-the-clock support and monitoring</span>
                  </div>
                </div>
              </div>
              <Link href="/resident-experience" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                Discover Our Approach
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section section-cream">
        <div className="container">
          <AnimatedSection className={styles.sectionHeader}>
            <div className="accent-line-center" />
            <span className="badge">What We Do</span>
            <h2>Premium Property Solutions</h2>
            <p>Comprehensive management services designed for Grade-A properties and discerning stakeholders.</p>
          </AnimatedSection>

          <div className={`grid-3 ${styles.servicesGrid}`}>
            <AnimatedSection className={`card ${styles.serviceCard}`}>
              <div className={styles.serviceIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3>Property Management</h3>
              <p>End-to-end management of premium residential and commercial assets, ensuring optimal performance and tenant satisfaction.</p>
              <div className={styles.serviceFeatures}>
                <span>Tenant Relations</span>
                <span>Lease Administration</span>
                <span>Revenue Optimization</span>
              </div>
            </AnimatedSection>

            <AnimatedSection className={`card ${styles.serviceCard}`}>
              <div className={styles.serviceIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3>Facility Management</h3>
              <p>Technology-driven facility operations powered by our PPM Connect platform, delivering real-time visibility and proactive maintenance.</p>
              <div className={styles.serviceFeatures}>
                <span>Predictive Maintenance</span>
                <span>Security Systems</span>
                <span>Utility Management</span>
              </div>
            </AnimatedSection>

            <AnimatedSection className={`card ${styles.serviceCard}`}>
              <div className={styles.serviceIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <h3>Partnership Synergies</h3>
              <p>Strategic joint development programmes offering yield optimization and operational cash-flow synergies for investors and developers.</p>
              <div className={styles.serviceFeatures}>
                <span>JD Models</span>
                <span>Yield Optimization</span>
                <span>Cash-Flow Synergies</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ PPM CONNECT TEASER ============ */}
      <section className="section section-dark">
        <div className="container">
          <div className={styles.ppmGrid}>
            <AnimatedSection className={styles.ppmContent}>
              <span className="badge badge-light">Coming Soon</span>
              <h2 style={{ color: 'var(--white)' }}>
                PPM Connect<span className={styles.ppmTm}>™</span>
              </h2>
              <p className={styles.ppmLead}>
                Our proprietary facility management platform — bringing transparency, efficiency, and real-time data to every stakeholder.
              </p>
              <div className={styles.ppmFeatures}>
                <div className={styles.ppmFeature}>
                  <div className={styles.ppmFeatureIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  </div>
                  <span>Maintenance Requests & Tracking</span>
                </div>
                <div className={styles.ppmFeature}>
                  <div className={styles.ppmFeatureIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span>24/7 Security Management</span>
                </div>
                <div className={styles.ppmFeature}>
                  <div className={styles.ppmFeatureIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                  </div>
                  <span>Real-Time Utility Monitoring</span>
                </div>
                <div className={styles.ppmFeature}>
                  <div className={styles.ppmFeatureIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                  </div>
                  <span>Instant Notifications & Updates</span>
                </div>
              </div>
              <Link href="/ppm-connect" className="btn btn-accent btn-lg" style={{ marginTop: '1rem' }}>
                Learn More About PPM Connect
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection className={styles.ppmVisual}>
              <div className={styles.ppmPhone}>
                <div className={styles.ppmPhoneScreen}>
                  <div className={styles.ppmPhoneHeader}>
                    <div className={styles.ppmPhoneNotch} />
                    <span>PPM Connect</span>
                  </div>
                  <div className={styles.ppmPhoneContent}>
                    <div className={styles.ppmPhoneCard}>
                      <span className={styles.ppmCardLabel}>Maintenance Request</span>
                      <span className={styles.ppmCardStatus}>In Progress</span>
                      <div className={styles.ppmProgressBar}>
                        <div className={styles.ppmProgressFill} style={{ width: '65%' }} />
                      </div>
                    </div>
                    <div className={styles.ppmPhoneCard}>
                      <span className={styles.ppmCardLabel}>Security Alert</span>
                      <span className={styles.ppmCardStatusGreen}>All Clear</span>
                    </div>
                    <div className={styles.ppmPhoneCard}>
                      <span className={styles.ppmCardLabel}>Electricity Usage</span>
                      <span className={styles.ppmCardValue}>243 kWh</span>
                      <div className={styles.ppmMiniChart}>
                        <div style={{ height: '40%' }} />
                        <div style={{ height: '65%' }} />
                        <div style={{ height: '45%' }} />
                        <div style={{ height: '80%' }} />
                        <div style={{ height: '55%' }} />
                        <div style={{ height: '70%' }} />
                        <div style={{ height: '60%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.ppmGlow} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO PREVIEW ============ */}
      <section className="section">
        <div className="container">
          <AnimatedSection className={styles.sectionHeader}>
            <div className="accent-line-center" />
            <span className="badge">Our Portfolio</span>
            <h2>Grade-A Managed Properties</h2>
            <p>A curated selection of premium properties under our stewardship across Lagos.</p>
          </AnimatedSection>

          <div className={styles.portfolioGrid}>
            <AnimatedSection className={styles.portfolioItem}>
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80"
                alt="Luxury residence Lagos"
              />
              <div className={styles.portfolioOverlay}>
                <span className={styles.portfolioTag}>Residential</span>
                <h4>The Meridian Residences</h4>
                <p>Ikoyi, Lagos</p>
              </div>
            </AnimatedSection>
            <AnimatedSection className={styles.portfolioItem}>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                alt="Modern apartment complex"
              />
              <div className={styles.portfolioOverlay}>
                <span className={styles.portfolioTag}>Mixed-Use</span>
                <h4>Pacific Towers</h4>
                <p>Victoria Island, Lagos</p>
              </div>
            </AnimatedSection>
            <AnimatedSection className={styles.portfolioItem}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                alt="Premium villa"
              />
              <div className={styles.portfolioOverlay}>
                <span className={styles.portfolioTag}>Luxury Villa</span>
                <h4>Greenview Estate</h4>
                <p>Lekki, Lagos</p>
              </div>
            </AnimatedSection>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
            <Link href="/portfolio" className="btn btn-outline">
              View All Properties
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section section-cream">
        <div className="container">
          <AnimatedSection className={styles.sectionHeader}>
            <div className="accent-line-center" />
            <span className="badge">Testimonials</span>
            <h2>What Our Residents Say</h2>
          </AnimatedSection>

          <div className={`grid-3 ${styles.testimonials}`}>
            <AnimatedSection className={`card ${styles.testimonialCard}`}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p>&quot;Pacific Hospitality transformed our living experience. The level of care, responsiveness, and professionalism is unmatched in Lagos.&quot;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>AO</div>
                <div>
                  <strong>Adebayo Ogundimu</strong>
                  <span>Resident, The Meridian</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className={`card ${styles.testimonialCard}`}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p>&quot;The transparency in how they manage our property is outstanding. Every report, every update — it&apos;s like having a 5-star hotel concierge for your home.&quot;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>FN</div>
                <div>
                  <strong>Funke Nwachukwu</strong>
                  <span>Property Owner</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className={`card ${styles.testimonialCard}`}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p>&quot;Their tech-driven approach to facility management sets them apart. Real-time updates and proactive maintenance — this is the future.&quot;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>EK</div>
                <div>
                  <strong>Emeka Kalu</strong>
                  <span>Developer Partner</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Spacer for footer CTA */}
      <div style={{ height: '80px' }}></div>
    </>
  );
}
