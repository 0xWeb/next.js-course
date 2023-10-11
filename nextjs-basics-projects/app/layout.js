import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Users With Next JS',
  description: 'Generated Users With Next JS',
  icons: {
    icon: '/favicon.ico',
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
