import './globals.css';

export const metadata = {
  title: 'Pacific Hospitality Company | Premium Property & Asset Management',
  description: 'Pacific Hospitality Company is a technology-enabled property management firm redefining Grade-A asset stewardship in Lagos, Nigeria. Experience the future of prop-tech.',
  keywords: 'property management, Lagos, Nigeria, PPM Connect, facility management, real estate, prop-tech, asset management',
  openGraph: {
    title: 'Pacific Hospitality Company',
    description: 'The future of prop-tech management in Nigeria.',
    url: 'https://pacifichospitality.vercel.app',
    siteName: 'Pacific Hospitality Company',
    images: [
      {
        url: '/images/Homepage_hero_section_202602192312.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pacific Hospitality Website Banner',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacific Hospitality Company',
    description: 'Technology-enabled property management redefining Grade-A asset stewardship in Lagos, Nigeria.',
    images: ['/images/Homepage_hero_section_202602192312.jpeg'],
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
