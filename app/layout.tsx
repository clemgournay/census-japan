import type { Metadata } from 'next';

// Components
import Header from '@components/parts/header/header';

// Styles
import './globals.scss';

// Fonts
import { NOTO_SANS_JP } from './fonts';

export const metadata: Metadata = {
  title: 'Census Japan',
  description: '全都道府県の人口をグラフで確認できるアプリです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={`${NOTO_SANS_JP.className}`} style={{overscrollBehavior: 'contain'}}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
