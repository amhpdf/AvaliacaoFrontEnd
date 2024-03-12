import Link from 'next/link'
import { ReactNode } from 'react'

interface NavLinkProps {
  link: string
  children: ReactNode
}

export default function NavLink({ link, children }: NavLinkProps) {
  return (
    <Link
      href={link}
      className="block w-min border-y-[6px] border-transparent uppercase text-amhp-gray-500 transition-all focus:border-y-[6px] focus:border-b-amhp-cian-400 focus:text-amhp-gray-400 md:inline-block md:hover:border-b-amhp-cian-400"
    >
      {children}
    </Link>
  )
}
