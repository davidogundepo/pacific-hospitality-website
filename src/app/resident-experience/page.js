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

const pillars = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: 'Concierge-Level Service',
    desc: 'From move-in to daily living, our team provides personalized support that feels like staying at a five-star hotel.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: '24/7 Security & Safety',
    desc: 'Multi-layered security systems, trained personnel, and real-time monitoring ensure peace of mind around the clock.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    title: 'Proactive Maintenance',
    desc: 'We don\'t wait for problems — our predictive maintenance system identifies and resolves issues before they impact your experience.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'Digital-First Communication',
    desc: 'PPM Connect puts everything at your fingertips — requests, updates, billing, and community announcements in one platform.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
    title: 'Utility Transparency',
    desc: 'Real-time utility monitoring means no more surprise bills. Track your consumption and manage your budget effortlessly.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/></svg>,
    title: 'Community Living',
    desc: 'Curated community events, shared amenities, and a resident-first culture that transforms neighbors into a community.',
  },
];

export default function ResidentExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge badge-light">Resident Experience</span>
          <h1>Living, Elevated</h1>
          <p className={styles.heroText}>
            At Pacific Hospitality, every detail of your living experience is designed with care.
            From security to sustainability, we apply a hospitality lens to everything we do.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <AnimatedSection className={styles.introGrid}>
            <div className={styles.introContent}>
              <div className="accent-line" />
              <h2>The Hospitality Lens in Action</h2>
              <p className={styles.introLead}>
                What does it mean to live in a Pacific-managed property? It means every touchpoint — from the lobby to your doorstep — is engineered for comfort, safety, and delight.
              </p>
              <p>
                Our residents enjoy concierge-level service, real-time facility management through PPM Connect, and a proactive approach to maintenance that eliminates disruptions before they happen.
              </p>
            </div>
            <div className={styles.introImage}>
              <img
                src="/images/Resident_experience_day_202602192312.jpeg"
                alt="Luxury living room interior"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="section section-cream">
        <div className="container">
          <AnimatedSection className={styles.sectionHeader}>
            <div className="accent-line-center" />
            <span className="badge">Our Pillars</span>
            <h2>Six Pillars of the Pacific Experience</h2>
            <p>Every service we offer is built on these foundational principles.</p>
          </AnimatedSection>

          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <AnimatedSection key={i} className={`card ${styles.pillarCard}`}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Day in Life */}
      <section className="section section-dark">
        <div className="container">
          <AnimatedSection className={styles.sectionHeader}>
            <div className="accent-line-center" />
            <span className="badge badge-light">A Day in the Life</span>
            <h2>What to Expect</h2>
          </AnimatedSection>

          <div className={styles.timeline}>
            {[
              { time: '6:00 AM', title: 'Good Morning', desc: 'Wake up knowing your utilities are optimized, your water is running, and your power is stable — all monitored overnight by our systems.' },
              { time: '8:00 AM', title: 'Seamless Exit', desc: 'Security gates operate smoothly with your digital access. Visitor management pre-authorizes expected guests for the day.' },
              { time: '12:00 PM', title: 'Request Submitted', desc: 'Notice a minor plumbing issue? Open PPM Connect, snap a photo, and submit a request in 30 seconds. Our team is already on it.' },
              { time: '3:00 PM', title: 'Real-Time Update', desc: 'Receive a push notification: "Your maintenance request has been resolved." Rate the service and move on with your day.' },
              { time: '7:00 PM', title: 'Evening Comfort', desc: 'Return to a well-maintained property with manicured grounds, working amenities, and the peace of mind that certified security provides.' },
            ].map((item, i) => (
              <AnimatedSection key={i} className={styles.timelineItem}>
                <span className={styles.timelineTime}>{item.time}</span>
                <div className={styles.timelineContent}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container">
          <AnimatedSection className={styles.testimonialBlock}>
            <div className={styles.testimonialQuote}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
              <blockquote>
                &quot;Moving into a Pacific-managed property was the best decision we made. The level of service, the technology, the attention to detail — it genuinely feels like living in a 5-star hotel. I never worry about maintenance or security anymore.&quot;
              </blockquote>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>CI</div>
                <div>
                  <strong>Chioma Ibe</strong>
                  <span>Resident, 2+ Years</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cream">
        <div className="container">
          <AnimatedSection className={styles.ctaBox}>
            <h2>Ready to Elevate Your Living Experience?</h2>
            <p>Explore our portfolio of managed properties and discover what Grade-A living feels like.</p>
            <div className={styles.ctaActions}>
              <Link href="/portfolio" className="btn btn-primary btn-lg">View Our Properties</Link>
              <Link href="/contact" className="btn btn-outline btn-lg">Get in Touch</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ height: '80px' }}></div>
    </>
  );
}
