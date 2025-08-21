import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header' // Import Header
import Footer from './components/Footer' // Import Footer

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Whatbytes Store',
  description: 'Frontend assignment for Whatbytes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}