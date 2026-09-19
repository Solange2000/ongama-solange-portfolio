import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL('https://ongama-solange-portfolio.vercel.app'),
  title: 'Ongama Solange | Software Developer',
  description: 'Software developer portfolio showcasing application development, web development, Flutter, JavaScript, Java, SQL and software projects.',
  openGraph: {
    title: 'Ongama Solange | Software Developer',
    description: 'Building user-focused, scalable, and high-performance software solutions.',
    type: 'website',
    url: 'https://ongama-solange-portfolio.vercel.app',
    images: [{ url: '/opengraph-image' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ongama Solange | Software Developer',
    description: 'Building user-focused, scalable, and high-performance software solutions.',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
