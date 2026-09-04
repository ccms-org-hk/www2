import type { Metadata } from 'next';
import ThemeRegistry from './ThemeRegistry';

export const metadata: Metadata = {
  title: '基督教芥菜種子堂',
  description: '基督教芥菜種子堂 – 聽神的道、領受神的道、傳講神的道',
  icons: {
    icon: [
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-HK">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
