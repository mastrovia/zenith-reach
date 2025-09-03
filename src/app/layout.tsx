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
  title: 'Zenith Reach - Reach New Heights',
  description: "Bringing India's Tradition to the World",
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
