import './globals.css';

export const metadata = {
  title: 'Pacific Hospitality Company | Premium Property & Asset Management',
  description: 'Pacific Hospitality Company is a technology-enabled property management firm redefining Grade-A asset stewardship in Lagos, Nigeria. Experience the future of prop-tech.',
  keywords: 'property management, Lagos, Nigeria, PPM Connect, facility management, real estate, prop-tech, asset management',
  openGraph: {
    title: 'Pacific Hospitality Company',
    description: 'The future of prop-tech management in Nigeria.',
    url: 'https://pacifyme.vercel.app',
    siteName: 'Pacific Hospitality Company',
    images: [
      {
        url: 'https://pacifyme.vercel.app/images/og-compressed.jpg',
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
    images: ['https://pacifyme.vercel.app/images/og-compressed.jpg'],
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
