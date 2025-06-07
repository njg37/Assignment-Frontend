import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: 'E-com',
  description: 'A cool modern store app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
