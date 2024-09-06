import '@/styles/globals.css'

import { type Metadata } from 'next'
import { TRPCReactProvider } from '@/trpc/react'
import { GeistSans } from 'geist/font/sans'

import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Dans TRPC Demo',
  description: 'A TRPC demo by Dan',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        <TRPCReactProvider>
          {children}
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  )
}
