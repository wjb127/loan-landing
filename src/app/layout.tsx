import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '근로자 대상 안심대출 | 주식회사 에이스대부중개법인',
  description: '최저금리 안심대출 - 한도 최대 1억원, 상환기간 최장 10년',
  keywords: '대출, 근로자대출, 안심대출, 에이스대부중개법인',
  openGraph: {
    title: '근로자 대상 안심대출',
    description: '최저금리 3.9%, 한도 최대 1억원, 상환기간 최장 10년',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}