import Image from 'next/image'
import logo from '../../../public/amhp_branca.png'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-amhp-gray-500 p-8 text-sm text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between">
          <div className="flex w-full flex-col gap-8 md:w-1/2 lg:w-1/3">
            <Image src={logo} alt="" />
            <p>
              A AMHP é uma Associação de médicos, psicólogos, fisioterapeutas,
              fonoaudiólogos e nutricionistas, que trabalham em clínicas e
              hospitais no Distrito Federal.
            </p>
            <div className="mx-auto flex gap-2 pb-8 md:mx-px md:pb-0">
              <Link href="https://www.instagram.com/amhpdf/" target="_blank">
                <InstagramIcon size={28} />
              </Link>
              <Link href="https://www.facebook.com/AMHPDF" target="_blank">
                <FacebookIcon size={28} />
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col justify-center gap-2 md:w-1/2 lg:w-1/3">
            <div className="flex items-center gap-2">
              <div>
                <Phone size={20} />
              </div>
              <p>Telefone: +55 (61) 3445-6500</p>
            </div>

            <div className="flex gap-2">
              <div>
                <MapPin size={20} />
              </div>
              <p>
                Localização: SHLS 716 Bloco E - Ed. Centro Médico de Brasília,
                Salas 701 a 709, Brasília/DF - CEP: 70390-904 - CNPJ:
                00.735.860/0001-73
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 border-t border-amhp-zinc-300/20 pt-4 text-center text-sm">
            Copyright © {new Date().getFullYear()}{' '}
            <span className="font-bold">
              Associação dos Médicos de Hospitais Privados do DF
            </span>
            . Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
