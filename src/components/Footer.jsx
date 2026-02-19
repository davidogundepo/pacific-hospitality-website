import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top CTA */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <h3>Ready to Experience the Future of Property Management?</h3>
            <p>Partner with Pacific Hospitality and discover how technology-enabled stewardship delivers superior outcomes.</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn btn-primary btn-lg">Get Started</Link>
            <Link href="/about" className="btn btn-outline btn-lg">Meet The Team</Link>
          </div>
        </div>

        {/* Footer Grid */}
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src="/Pacific_Logo-removebg.png" alt="Pacific Hospitality Company" className={styles.logoImg} />
            </div>
            <p className={styles.brandDesc}>
              Technology-enabled property management redefining Grade-A asset stewardship in Lagos, Nigeria.
            </p>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us & Team</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/resident-experience">Resident Experience</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className={styles.linkGroup}>
            <h4>Solutions</h4>
            <Link href="/ppm-connect">PPM Connect</Link>
            <Link href="/partnerships">Partnerships</Link>
            <Link href="/resident-experience">Facility Management</Link>
            <Link href="/ppm-connect">Technology</Link>
          </div>

          <div className={styles.linkGroup}>
            <h4>Contact</h4>
            <p>Lagos, Nigeria</p>
            <a href="mailto:info@pacifichospitality.ng">info@pacifichospitality.ng</a>
            <a href="tel:+2341234567890">+234 123 456 7890</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Pacific Hospitality Company. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
