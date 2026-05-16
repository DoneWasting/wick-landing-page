import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wick — Candle Timer for Traders',
  description:
    'Never miss a candle close. UTC-aligned notifications for Forex and Crypto candles, offline and free.',
  openGraph: {
    title: 'Wick — Candle Timer for Traders',
    description:
      'Never miss a candle close. UTC-aligned notifications for Forex and Crypto candles, offline and free.',
    // TODO: replace with a proper 1200x630 social preview
    images: ['/wick-logo-large.png'],
  },
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0E0E0E] text-white">{children}</body>
    </html>
  );
}
