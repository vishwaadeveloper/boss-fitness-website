import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boss Fitness',
  description: 'Created with next.js',
  dev: 'vishwaa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
