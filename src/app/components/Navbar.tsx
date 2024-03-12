'use client'

import logo from '../../../public/amhplogo.png'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
import { Menu as MenuIco } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <nav>
      <div className="mx-auto flex h-[90px] max-w-6xl items-center justify-between border-b border-amhp-gray-500/20 px-4 md:h-[120px] md:border-none">
        <div className="w-[120px] flex-shrink-0 font-bold tracking-wider md:w-[160px]">
          <Link href={'/'}>
            <Image
              className="h-full w-full"
              src={logo}
              alt="AMHP - Associação de médicos, psicólogos, fisioterapeutas, fonoaudiólogos e nutricionistas"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md bg-amhp-cian-400 p-2 text-white transition duration-150 ease-in-out md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <MenuIco size={24} />
        </button>
      </div>
      <div className="px-8 md:hidden">{mobileMenu && <Menu />}</div>
    </nav>
  )
}
