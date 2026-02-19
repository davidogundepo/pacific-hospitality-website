'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${styles.animSection} ${className}`}>
      {children}
    </div>
  );
}

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Maintenance Requests',
    desc: 'Submit, track, and receive real-time updates on maintenance requests. Our intelligent routing system ensures the right team responds within minutes, not days.',
    details: ['Smart request categorization', 'Photo & video attachments', 'Priority escalation engine', 'Satisfaction rating system'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Security Management',
    desc: 'Round-the-clock security monitoring with instant alerts, visitor management, and access control — all from your fingertips.',
    details: ['Real-time alert notifications', 'Visitor pre-authorization', 'Access log history', 'Emergency SOS feature'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: 'Utility Monitoring',
    desc: 'Track electricity, water, and gas usage in real-time. Set budgets, receive consumption alerts, and optimize your utility spend.',
    details: ['Real-time consumption data', 'Monthly usage analytics', 'Budget threshold alerts', 'Comparative benchmarking'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Real-Time Tracking',
    desc: 'Every service request, payment, and communication is timestamped and tracked. Full transparency at every step of the management process.',
    details: ['Live status dashboards', 'Service timeline history', 'Payment tracking', 'Communication logs'],
  },
];

export default function PPMConnectPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className="badge badge-light">Proprietary Technology</span>
          <h1>
            PPM Connect<span className={styles.tm}>™</span>
          </h1>
          <p className={styles.heroText}>
            The future of property management is transparent, efficient, and data-driven.
            Our proprietary facility management platform puts real-time control in the hands of every stakeholder.
          </p>
          <div className={styles.heroActions}>
            <a href="#features" className="btn btn-primary btn-lg">
              Explore Features
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </a>
            <a href="#waitlist" className="btn btn-secondary btn-lg">
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section">
        <div className="container">
          <AnimatedSection className={styles.visionGrid}>
            <div className={styles.visionContent}>
              <div className="accent-line" />
              <h2>Built for the Future of Prop-Tech in Nigeria</h2>
              <p className={styles.visionLead}>
                PPM Connect is not just an app — it&apos;s a complete digital ecosystem that connects property owners, facility managers, and residents in one seamless platform.
              </p>
              <p>
                Currently in active development, PPM Connect will transform how Grade-A properties are managed, maintained, and experienced. We&apos;re building the infrastructure that positions Nigeria at the forefront of global property technology.
              </p>
            </div>
            <div className={styles.visionStats}>
              <div className={styles.visionStat}>
                <span className={styles.visionStatNum}>4</span>
                <span className={styles.visionStatLabel}>Core Modules</span>
              </div>
              <div className={styles.visionStat}>
                <span className={styles.visionStatNum}>Real-Time</span>
                <span className={styles.visionStatLabel}>Data Sync</span>
              </div>
              <div className={styles.visionStat}>
                <span className={styles.visionStatNum}>24/7</span>
                <span className={styles.visionStatLabel}>Availability</span>
              </div>
              <div className={styles.visionStat}>
                <span className={styles.visionStatNum}>API</span>
                <span className={styles.visionStatLabel}>Ready</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section section-dark">
        <div className="container">
          <AnimatedSection className={styles.sectionHeader}>
            <div className="accent-line-center" />
            <span className="badge badge-light">Core Features</span>
            <h2>Powerful Modules, Seamless Experience</h2>
            <p>Four integrated modules that cover every aspect of facility management.</p>
          </AnimatedSection>

          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <AnimatedSection key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul className={styles.featureList}>
                  {f.details.map((d, j) => (
                    <li key={j}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <AnimatedSection className={styles.sectionHeader}>
            <div className="accent-line-center" />
            <span className="badge">How It Works</span>
            <h2>Simplicity Meets Power</h2>
          </AnimatedSection>

          <div className={styles.stepsGrid}>
            {[
              { num: '01', title: 'Submit a Request', desc: 'Residents log requests with photos, descriptions, and priority levels — all in under 30 seconds.' },
              { num: '02', title: 'Smart Routing', desc: 'Our system automatically assigns the request to the right team based on category, urgency, and availability.' },
              { num: '03', title: 'Real-Time Tracking', desc: 'Track progress at every stage. Receive push notifications for status changes and completion updates.' },
              { num: '04', title: 'Rate & Review', desc: 'After completion, rate the service quality. Your feedback helps us continuously improve our standards.' },
            ].map((step, i) => (
              <AnimatedSection key={i} className={styles.step}>
                <span className={styles.stepNum}>{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="section section-cream">
        <div className="container">
          <AnimatedSection className={styles.waitlistBox}>
            <span className="badge">Coming Soon</span>
            <h2>Be the First to Experience PPM Connect</h2>
            <p>Join our exclusive waitlist and get early access when we launch. Be part of the prop-tech revolution.</p>
            <form className={styles.waitlistForm} onSubmit={handleWaitlistSubmit}>
              <input
                type="email"
                className="input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'loading'}>
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
                {status === 'idle' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
              </button>
            </form>
            {status === 'error' && <p style={{color: 'var(--burnt-orange)', marginTop: '1rem', fontSize: '0.9rem'}}>An error occurred. Please try again later.</p>}
            <p className={styles.waitlistNote}>We respect your privacy. No spam, ever.</p>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ height: '80px' }}></div>
    </>
  );
}
