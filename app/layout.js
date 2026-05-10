import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import AnimationProvider from "@/components/AnimationProvider"

const inter = Inter({ subsets: ['latin'] })

// ✅ ADD THIS
export const metadata = {
  title: "Pearls IT Hub",
  description: "Web, App & Digital Solutions Company",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AnimationProvider>
          <Navbar />

          <PageTransition>
            <main>{children}</main>
          </PageTransition>

          <Footer />
        </AnimationProvider>

      </body>
    </html>
  )
}