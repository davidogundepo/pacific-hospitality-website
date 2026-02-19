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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${styles.animSection} ${className}`}>{children}</div>;
}

const models = [
  {
    title: 'Joint Development (JD) Management',
    desc: 'Collaborative development frameworks where Pacific manages the entire lifecycle — from construction oversight to tenant placement and ongoing facility management.',
    highlights: ['Full lifecycle management', 'Construction oversight', 'Asset optimization'],
  },
  {
    title: 'Yield Optimization Strategies',
    desc: 'Data-driven approaches to maximize asset returns through strategic positioning, premium tenant acquisition, and technology-enabled operational efficiency.',
    highlights: ['Revenue maximization', 'Market positioning', 'Performance analytics'],
  },
  {
    title: 'Operational Cash-Flow Synergies',
    desc: 'Integrated financial management that aligns property operations with cash-flow objectives, ensuring predictable returns and transparent reporting.',
    highlights: ['Predictable returns', 'Transparent reporting', 'Financial alignment'],
  },
];

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our partnership team will be in touch within 48 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge badge-light">Strategic Partnerships</span>
          <h1>Developer Portal</h1>
          <p className={styles.heroText}>
            Explore strategic collaboration opportunities with Pacific Hospitality.
            We bring technology, expertise, and premium management to every partnership.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section">
        <div className="container">
          <AnimatedSection className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <div className="accent-line" />
              <span className="badge">Why Partner with Pacific</span>
              <h2>Where Vision Meets Execution</h2>
              <p className={styles.whyLead}>
                In Lagos&apos;s competitive real estate landscape, the difference between a good investment and a great one lies in management. Pacific Hospitality brings a hospitality-grade approach to asset stewardship, powered by proprietary technology.
              </p>
              <p>
                Our partners benefit from our deep market insights, technology infrastructure (including PPM Connect), and a management philosophy that prioritizes long-term asset value over short-term gains.
              </p>
            </div>
            <div className={styles.whyImage}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Business partnership meeting"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="section section-dark">
        <div className="container">
          <AnimatedSection className={styles.sectionHeader}>
            <div className="accent-line-center" />
            <span className="badge badge-light">Our Models</span>
            <h2>Partnership Synergies</h2>
            <p>Tailored collaboration frameworks designed for developers, investors, and institutions.</p>
          </AnimatedSection>

          <div className={styles.modelsGrid}>
            {models.map((m, i) => (
              <AnimatedSection key={i} className={styles.modelCard}>
                <span className={styles.modelNum}>0{i + 1}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <div className={styles.modelHighlights}>
                  {m.highlights.map((h, j) => (
                    <span key={j}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {h}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Form */}
      <section id="prospectus" className="section">
        <div className="container">
          <AnimatedSection className={styles.formSection}>
            <div className={styles.formInfo}>
              <div className="accent-line" />
              <span className="badge">Exclusive Access</span>
              <h2>Request Our Partnership Prospectus</h2>
              <p>
                Get detailed insights into our partnership models, historical performance data, and projected yields. Our prospectus is available exclusively to qualified partners.
              </p>
              <div className={styles.formFeatures}>
                <div className={styles.formFeature}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>Confidential & Secure</span>
                </div>
                <div className={styles.formFeature}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span>Response within 48 hours</span>
                </div>
                <div className={styles.formFeature}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  <span>Dedicated partnership advisor</span>
                </div>
              </div>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input
                  type="email"
                  className="input"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Company / Organization</label>
                <input
                  type="text"
                  className="input"
                  placeholder="ABC Developments Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Tell Us About Your Interest</label>
                <textarea
                  className="textarea"
                  placeholder="Briefly describe your development plans or investment objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Request Prospectus
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ height: '80px' }}></div>
    </>
  );
}
