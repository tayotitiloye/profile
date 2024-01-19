import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tayo Titiloye"s Profile',
  description: 'fullstack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
       <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
      
      </body>
    </html>
  )
}
