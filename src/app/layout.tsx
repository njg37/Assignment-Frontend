import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Layout from '@/components/Layout'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: 'Whatbytes',
  description: 'Frontend Assignment',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
