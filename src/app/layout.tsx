import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import "@uploadthing/react/styles.css";

import '@/styles/globals.css';
import { Toaster } from '@/components/ui/sonner';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Slacks',
  description: 'Slack clone with Michael',
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}