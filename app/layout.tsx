import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QHUWAM - Web Developer Portfolio',
  description: 'Portfolio website showcasing the skills and projects of QHUWAM, a web developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex justify-center space-x-6">
              <li><Link href="#home" className="hover:text-gray-300">HOME</Link></li>
              <li><Link href="#skills" className="hover:text-gray-300">SKILLS</Link></li>
              <li><Link href="#projects" className="hover:text-gray-300">PROJECTS</Link></li>
              <li><Link href="#contact" className="hover:text-gray-300">CONTACT ME</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}


