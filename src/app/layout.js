import './globals.css'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'STURM Bathroom Furniture',
  description: 'Italian Traditions Modern Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`${montserrat.className} bg-[#3a3a3e] text-[#d1d1d1]`}>{children}</body>
    </html>
  )
}
