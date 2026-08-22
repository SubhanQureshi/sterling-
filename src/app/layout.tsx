import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.scss';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sterling Technical Group | Construction Estimating & Takeoff Services',
  description:
    'Precision construction estimating, electrical takeoff, IT cost modeling, and project planning for commercial and residential developments.',
  keywords: [
    'Construction Estimating',
    'Electrical Takeoff',
    'IT Cost Estimation',
    'Building Takeoff',
    'Sterling Technical Group',
    'Commercial Estimating',
    'Residential Takeoff',
  ],
  authors: [{ name: 'Sterling Technical Group' }],
  openGraph: {
    title: 'Sterling Technical Group | Accurate Takeoff & Cost Estimation',
    description:
      'Four disciplines, one standard: get it exactly right, every time. Precision estimating for commercial & residential projects.',
    url: 'https://sterlingtechnicalgroup.com',
    siteName: 'Sterling Technical Group',
    images: [
      {
        url: '/projects.png',
        width: 1200,
        height: 630,
        alt: 'Sterling Technical Group - Sol on Park Featured Project',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sterling Technical Group | Construction Estimating',
    description:
      'Precision construction estimating, electrical takeoff, and cost modeling.',
    images: ['/projects.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
