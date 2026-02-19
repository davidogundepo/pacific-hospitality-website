import styles from '../legal.module.css';

export const metadata = {
  title: 'Privacy Policy | Pacific Hospitality Company',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <div className={styles.legalHeader}>
          <h1>Privacy Policy</h1>
          <p className={styles.date}>Last Updated: February 2026</p>
        </div>
        
        <div className={styles.legalContent}>
          <p>
            At Pacific Hospitality Company, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website, PPM Connect platform, or engage our property management services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Details:</strong> Name, email address, phone number, and physical address when you submit forms or register on PPM Connect.</li>
            <li><strong>Device and Usage Data:</strong> IP addresses, browser types, and usage patterns to optimize our platform using cookies and similar technologies.</li>
            <li><strong>Property Data:</strong> Information related to your real estate assets, maintenance requests, and utility consumption necessary for our management services.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>Your information is used to:</p>
          <ul>
            <li>Provide and improve our property management services.</li>
            <li>Respond to your inquiries, partnership requests, and support tickets.</li>
            <li>Send critical updates, invoices, and service announcements.</li>
            <li>Analyze platform performance and security.</li>
          </ul>

          <h2>3. Data Security and Sharing</h2>
          <p>
            We implement industry-standard encryption and security protocols to safeguard your data. We do not sell your personal information to third parties. We may share data with trusted third-party service providers (such as payment processors) strictly for the purpose of fulfilling our services to you.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You have the right to access, correct, or request the deletion of your personal data held by us. To exercise these rights or make inquiries, please contact us.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please email us at <a href="mailto:info@pacifichospitality.ng">info@pacifichospitality.ng</a> or visit our office in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
}
