import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/providers/theme-provider'
import { Toaster } from "@/components/ui/sonner"

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
          defaultTheme="light" 
          enableSystem
        >
          <Navbar />
            {children}
            <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
