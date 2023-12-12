import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EXCEL RASAYAN EXPORT',
  description: 'EXCEL RASAYAN EXPORT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
          <Navbar />
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
