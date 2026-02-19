import './globals.css';

export const metadata = {
  title: 'Pacific Hospitality Company | Premium Property & Asset Management',
  description: 'Pacific Hospitality Company is a technology-enabled property management firm redefining Grade-A asset stewardship in Lagos, Nigeria. Experience the future of prop-tech.',
  keywords: 'property management, Lagos, Nigeria, PPM Connect, facility management, real estate, prop-tech, asset management',
  openGraph: {
    title: 'Pacific Hospitality Company',
    description: 'The future of prop-tech management in Nigeria.',
    type: 'website',
  },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
