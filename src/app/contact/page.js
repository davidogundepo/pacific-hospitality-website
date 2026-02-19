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

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="badge badge-light">Contact Us</span>
          <h1>Let&apos;s Start a Conversation</h1>
          <p className={styles.heroText}>
            Whether you&apos;re a property owner, developer, or prospective resident —
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection className={styles.contactGrid}>
            {/* Info */}
            <div className={styles.info}>
              <div className="accent-line" />
              <h2>Get in Touch</h2>
              <p className={styles.infoText}>
                Our team is available to discuss property management solutions, partnership opportunities, or answer any questions you may have.
              </p>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Visit Our Office</h4>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p><a href="mailto:info@pacifichospitality.ng">info@pacifichospitality.ng</a></p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p><a href="tel:+2341234567890">+234 123 456 7890</a></p>
                  </div>
                </div>
              </div>

              <div className={styles.hours}>
                <h4>Business Hours</h4>
                <div className={styles.hourRow}>
                  <span>Monday – Friday</span>
                  <span>8:00 AM – 6:00 PM</span>
                </div>
                <div className={styles.hourRow}>
                  <span>Saturday</span>
                  <span>9:00 AM – 2:00 PM</span>
                </div>
                <div className={styles.hourRow}>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input type="text" className="input" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address *</label>
                  <input type="email" className="input" placeholder="john@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input type="tel" className="input" placeholder="+234 XXX XXX XXXX" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className={styles.formGroup}>
                  <label>Subject *</label>
                  <select className="input" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required>
                    <option value="">Select a subject</option>
                    <option value="property-management">Property Management</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="resident">Resident Services</option>
                    <option value="ppm-connect">PPM Connect</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Message *</label>
                <textarea className="textarea" placeholder="Tell us how we can help you..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                {status === 'idle' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4z"/></svg>}
              </button>
              {status === 'error' && <p style={{color: 'var(--burnt-orange)', marginTop: '1rem', fontSize: '0.9rem'}}>An error occurred. Please try again later.</p>}
            </form>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ height: '80px' }}></div>
    </>
  );
}
