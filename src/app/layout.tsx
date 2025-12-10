import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope, Sofia_Sans_Extra_Condensed } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  variable: '--fond-sofia-sans-extra-condensed',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zenithreach.com'),
  title: {
    default: 'Zenith Reach | Premium Indian Food & Spice Exports',
    template: '%s | Zenith Reach',
  },
  description:
    "Bringing India's authentic taste to the world. Premium frozen foods, ready-to-eat meals, spices, and dry products exported globally from Kerala, India.",
  keywords: [
    'Indian food exports',
    'Kerala spices',
    'frozen Indian food',
    'ready-to-eat Indian meals',
    'wholesale Indian spices',
    'Indian food wholesale',
    'authentic Indian cuisine',
    'food exports from India',
  ],
  authors: [{ name: 'Zenith Reach' }],
  creator: 'Zenith Reach',
  publisher: 'Zenith Reach',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zenithreach.com',
    siteName: 'Zenith Reach',
    title: 'Zenith Reach | Premium Indian Food & Spice Exports',
    description:
      "Bringing India's authentic taste to the world. Premium frozen foods, ready-to-eat meals, spices, and dry products.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zenith Reach - Premium Indian Food Exports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenith Reach | Premium Indian Food & Spice Exports',
    description:
      "Bringing India's authentic taste to the world. Premium frozen foods, spices, and dry products.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${sofiaSansExtraCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
