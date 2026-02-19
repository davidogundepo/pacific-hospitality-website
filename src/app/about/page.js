'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
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

const team = [
  {
    name: 'David Oludepo',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Visionary leader with 15+ years of experience in African real estate and prop-tech innovation.',
  },
  {
    name: 'Ayomide Oloko-Nwazue',
    role: 'Chief Operations Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Operations strategist obsessed with executing the hospitality lens across all managed assets.',
  },
  {
    name: 'Dolapo',
    role: 'Head of Technology',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bio: 'The architect behind PPM Connect, bridging the gap between physical assets and digital efficiency.',
  },
  {
    name: 'Olu',
    role: 'Head of Partnerships',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Expert in structing Joint Development Models and orchestrating operational cash-flow synergies.',
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge badge-light">Our Story</span>
          <h1>About Pacific Hospitality</h1>
          <p className={styles.heroText}>
            We are moving from being just a property firm to a technology-enabled property management powerhouse.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <AnimatedSection className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <div className="accent-line" />
              <h2>The Future of Prop-Tech Management</h2>
              <p className={styles.storyLead}>
                Pacific Hospitality was born out of a stark realization: the real estate sector in Nigeria needed more than just property managers—it needed asset stewards.
              </p>
              <p>
                We saw Grade-A properties deteriorating due to reactive maintenance and opaque communication. We decided to change the narrative. By applying a <strong>&quot;Hospitality Lens&quot;</strong> to everything we do, we emulate the anticipatory service of 5-star hotels in residential and commercial property management.
              </p>
              <p>
                Today, as we transition to a deeply tech-driven ecosystem anchored by our proprietary <strong>PPM Connect</strong> platform, we are positioning ourselves at the absolute forefront of property technology in Africa.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                alt="Modern corporate office"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="section section-cream">
        <div className="container">
          <AnimatedSection className={styles.sectionHeader}>
            <div className="accent-line-center" />
            <span className="badge">Leadership</span>
            <h2>Our Reputable Team</h2>
            <p>The visionaries, operators, and technologists driving Pacific Hospitality forward.</p>
          </AnimatedSection>

          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <AnimatedSection key={i} className={`card ${styles.teamCard}`}>
                <div className={styles.teamImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.teamInfo}>
                  <h3>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark">
        <div className="container">
          <AnimatedSection className={styles.sectionHeader}>
            <div className="accent-line-center" />
            <span className="badge badge-light">Core Values</span>
            <h2>What Drives Us</h2>
          </AnimatedSection>

          <div className={`grid-3 ${styles.valuesGrid}`}>
            <AnimatedSection className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Radical Transparency</h4>
              <p>Through PPM Connect, we ensure every stakeholder has real-time visibility into their assets and requests without obfuscation.</p>
            </AnimatedSection>
            <AnimatedSection className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h4>Hospitality Excellence</h4>
              <p>We believe property management is essentially a service industry. We deliver it with the grace and attention of a luxury concierge.</p>
            </AnimatedSection>
            <AnimatedSection className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h4>Technological Prowess</h4>
              <p>We rely on data, intelligent routing, and automation to eliminate inefficiencies and preempt physical asset degradation.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div style={{ height: '80px' }}></div>
    </>
  );
}
