import styles from '../legal.module.css';

export const metadata = {
  title: 'Terms of Service | Pacific Hospitality Company',
};

export default function TermsOfServicePage() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <div className={styles.legalHeader}>
          <h1>Terms of Service</h1>
          <p className={styles.date}>Last Updated: February 2026</p>
        </div>
        
        <div className={styles.legalContent}>
          <p>
            Welcome to Pacific Hospitality Company. By accessing our website or utilizing our services (including the PPM Connect platform), you agree to comply with and be bound by the following Terms of Service.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing our digital properties or signing a service agreement with Pacific Hospitality Company, you agree to these Terms. If you do not agree, you must refrain from using our services.
          </p>

          <h2>2. Service Description</h2>
          <p>
            Pacific Hospitality Company provides technology-enabled property and facility management services. Specific scopes of work, including Joint Development (JD) structures and property stewardship, are governed by individual contracts executed between us and our clients.
          </p>

          <h2>3. Use of PPM Connect</h2>
          <p>
            Access to our proprietary platform, PPM Connect, is granted exclusively to authorized residents, owners, and partners. You agree to maintain the confidentiality of your login credentials and to use the platform solely for its intended property management purposes.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, branding, logos, software (including PPM Connect), and proprietary methodologies found on this website are the intellectual property of Pacific Hospitality Company and are protected by applicable copyright and trademark laws.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            While we strive for operational excellence, Pacific Hospitality Company shall not be held liable for indirect, incidental, or consequential damages resulting from the use or inability to use our website or digital platforms, barring cases of gross negligence.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For legal inquiries or questions regarding these Terms, contact us at <a href="mailto:info@pacifichospitality.ng">info@pacifichospitality.ng</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
