import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layouts/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteFooter } from '@/components/layouts/site-footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Baldur's Gate 3 Equipment Checklist",
  description: "Checklist for Baldur's Gate 3 equipment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <SiteHeader />
          <main className='container pt-10'>{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
