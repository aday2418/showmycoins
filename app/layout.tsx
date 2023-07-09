import './globals.css'
import Header from './Header'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Show Your Coins',
  description: 'The best site to track your coins across all chains.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='relative w-screen min-h-screen flex flex-col pb-[200px]'>
          <Header/>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
