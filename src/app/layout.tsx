import type { Metadata } from 'next'
import { Layout } from '@/components/Layout'
import { Children } from '@/types/global'
import './globals.css'
import '@/styles/main.scss'

export const metadata: Metadata = {
  title: 'Next.js blog theme Avocado',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: Children) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="/fonts/font.css" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css" />
      </head>

      <body>
        <Layout.Container>
          <Layout.Header />
          
          <Layout.Main>
            {children}
          </Layout.Main>

          <Layout.Footer />
        </Layout.Container>
      </body>
    </html>
  )
}
