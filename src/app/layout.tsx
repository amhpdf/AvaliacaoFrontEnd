import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'AMHP | Associação dos Médicos de Hospitais Privados',
  description:
    'Fundada em 1983, a AMHP é uma Associação de médicos, psicólogos, fisioterapeutas, fonoaudiólogos e nutricionistas, que trabalham em clínicas e hospitais no Distrito Federal. É uma Sociedade Civil sem fins lucrativos, que tem por objetivo congregar, orientar, representar e defender no setor científico, ético, social e econômico os seus associados.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang="pt-BR">
        <body
          className={`${inter.className} ${poppins.variable} text-amhp-gray-500`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
